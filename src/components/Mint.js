import React,{ useEffect, useState, forwardRef } from 'react';
import { Container, Row, Col, Spinner, Button, Alert } from 'react-bootstrap';
import { TezosToolkit} from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { bytes2Char } from "@taquito/utils";

import config from '../config';

import TitleMint from '../img/titles/mint.png';
import ChevronRight from '../img/chevron-right.png';
import ChevronLeft from '../img/chevron-left.png';

const Mint = forwardRef((_, ref) => {
	const [Tezos, setTezos] = useState(new TezosToolkit(config.rpcUrl));
	const [wallet, setWallet] = useState(null);
	const [userAddress, setUserAddress] = useState("");
	const [loading, setLoading] = useState(true);
	const [loadingProfile, setLoadingProfile] = useState(false);
	const [nftQuantity, setNftQuantity] = useState(1);
	const [nftLevel, setNftLevel] = useState(3);
	const [totalSupply, setTotalSupply] = useState(60);
	const [mintedNfts, setMintedNfts] = useState(0);
	const [priceList, setPriceList] = useState([1000000, 1500000, 2000000]);
	const [price, setPrice] = useState(2000000);
	const [editionsLeft, setEditionsLeft] = useState([15, 20, 25]);
	const [mintingToken, setMintingToken] = useState(false);
	const [newNft, setNewNft] = useState(null);
	const [userNfts, setUserNfts] = useState([]);
	const [error, setError] = useState();

	const incrementNftQuantity = () => {
		if(nftQuantity < 10 && nftQuantity < editionsLeft[nftLevel-1]){
			setNftQuantity(nftQuantity + 1);
		}
	}

	const reduceNftQuantity = () => {
		if(nftQuantity > 1){
			setNftQuantity(nftQuantity - 1);
		}
	}

	const incrementNftLevel = () => {
		if(nftLevel < 3){
			setNftLevel(nftLevel + 1);
		}
	}

	const reduceNftLevel = () => {
		if(nftLevel > 1){
			setNftLevel(nftLevel - 1);
		}
	}

	const connect = async () => {
		setLoadingProfile(true);
		let wallet_instance = wallet;
		if (!wallet) {
				wallet_instance = new BeaconWallet(config.walletOptions);
				setWallet(wallet_instance);
		}
		try {
			await wallet_instance.requestPermissions({
					network: {
							type: config.networkType,
							rpcUrl: config.rpcUrl,
					},
			});
			Tezos.setWalletProvider(wallet_instance);
			const user_address = await wallet_instance.getPKH();
			await getUserNfts(user_address);

			setUserAddress(user_address);
		} catch (err) {
			console.log(err);
			setError(err);
		} finally {
			setLoadingProfile(false);

		}
	};

	const getIpfsHash = (uri) => {
		return uri.slice(0, 7) === "ipfs://" ? uri.slice(7) : uri;
	}

	const getUserNfts = async(userAdress) => {
		const contract = await Tezos.wallet.at(config.tokenContract);
		const storage = await contract.storage();
		const tokenMetadata = await storage.token_metadata;
		const tokenIds = await contract.contractViews.get_tokens_of(userAdress).executeView({ viewCaller: userAdress });
		if (tokenIds) {
			const userNfts = await Promise.all([
			  ...tokenIds.map(async (id) => {
				const tokenId = id.toNumber();
				const metadata = await tokenMetadata.get(tokenId);
				const tokenInfoBytes = metadata.token_info.get("");
				const tokenInfo = bytes2Char(tokenInfoBytes);
				let jsonInfo = "";
				const response = await fetch("https://gateway.pinata.cloud/ipfs/"+tokenInfo.slice(7));
				if(response.ok){
					jsonInfo = await response.json();
				}

				return {
					tokenId,
					ipfsHash: getIpfsHash(tokenInfo),
					tokenInfo: jsonInfo
				};
			  }),
			]);
			setUserNfts(userNfts); 

		}
	}

	const disconnect = () => {
		wallet.client.destroy();
		setUserAddress("");
		setWallet(null);
		setUserNfts([]);
	};

	const mint = async () => {
		if(isEditionSoldOut()){
			return;
		}

		setMintingToken(true);
		try {
			// Saves NFT on-chain
			const contract = await Tezos.wallet.at(config.crowdsaleContract);
			let op = null;
			switch (nftLevel) {
				case 1:
					op = await contract.methods
						.mint1(nftQuantity)
						.send({ amount: price, mutez: true });
					break
				case 2:
					op = await contract.methods
						.mint2(nftQuantity)
						.send({ amount: price, mutez: true });
					break
				case 3:
					op = await contract.methods
						.mint3(nftQuantity)
						.send({ amount: price, mutez: true });
					break
				default:
					throw new Error('Could not find NFT type');
			}
			await op.confirmation();
			setNewNft(op.opHash);
			await getUserNfts(userAddress);
		} catch (error) {
			setError(error)
		} finally {
			setMintingToken(false);
		}
	};
	
	const isEditionSoldOut = () => {
		return editionsLeft[nftLevel-1] === 0;
	}

    useEffect(() => {
		setLoading(true);
		const func = async () => {
			try {
				const contract = await Tezos.wallet.at(config.tokenContract);
				const storage = await contract.storage();
				const minted_tokens = await storage.total_minted;
				const total = await storage.max_supply;
				setMintedNfts(minted_tokens.toNumber());
				setTotalSupply(total.toNumber());

				const minter = await Tezos.wallet.at(config.crowdsaleContract);
				const prices = await minter.contractViews.get_prices().executeView({ viewCaller: config.crowdsaleContract });
				const editions_left = await minter.contractViews.get_editions_left().executeView({ viewCaller: config.crowdsaleContract });

				setPriceList([prices.price_1.toNumber(), prices.price_2.toNumber(), prices.price_3.toNumber()]);
				setEditionsLeft([editions_left.left_1.toNumber(), editions_left.left_2.toNumber(), editions_left.left_3.toNumber()]);

				setPrice(nftQuantity*priceList[nftLevel-1]);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};
		func();
		
    }, [Tezos]);

	
    useEffect(() => {
		setPrice(nftQuantity*priceList[nftLevel-1]);
		if(nftQuantity > editionsLeft[nftLevel-1]){
			setNftQuantity(editionsLeft[nftLevel-1]);
		}
		if(nftQuantity === 0 && !isEditionSoldOut() ){
			setNftQuantity(1);
		}
    }, [nftLevel]);

	useEffect(() => {
		setPrice(nftQuantity*priceList[nftLevel-1]);
    }, [nftQuantity]);
	
	return (
		<section id="mint" className="mint" ref={ref}>
			<Container fluid>
                <Row>
                    <Col className="text-left mb-5" md="7">
                        <div className='img-title mb-5'><img src={TitleMint} alt="Mint" /></div>
						{!loading && (
							<div>
								<p><b>{mintedNfts} out of {totalSupply} Osamus have been minted</b></p>
								<div className="mb-5 mint-bar">
									<div className="minted" style={{height:24, width: 100.0*mintedNfts/totalSupply+"%"}}></div>
								</div>
							</div>
						)}
						{(loading || loadingProfile) && <Row className="justify-content-md-center"><Spinner animation="border" role="status" /></Row>}
						{!loadingProfile && !userAddress && (
							<Button variant="outline-light" size="lg" onClick={async () => await connect()}>
								Connect Wallet
							</Button>
						)}
						{!loadingProfile && userAddress && (
							<div>
								<p>
									<b>User Address:</b>
									<br />{userAddress}
								</p>
								<div style={{display: 'flex'}} className="justify-content-md-end">
									<Button variant="outline-light" size="lg" onClick={disconnect}>Disconnect Wallet</Button>
								</div>
								<Row className="mt-5 border-bottom">
									<h3>Level</h3>
									<div className='mint-params'>
										<div className='chevron' onClick={reduceNftLevel}>
											<img src={ChevronLeft} alt="reduceLevel" />
										</div>
										<h3>{nftLevel}</h3>
										<div className='chevron' onClick={incrementNftLevel}>
											<img src={ChevronRight} alt="incrementLevel" />
										</div>
									</div>
								</Row>
								<Row className="mt-5 border-bottom">
									<h3>Amount</h3>
									<div className='mint-params'>
										<div className='chevron' onClick={reduceNftQuantity}>
											<img src={ChevronLeft} alt="reduceAmount" />
										</div>
										<h3>{nftQuantity}</h3>
										<div className='chevron' onClick={incrementNftQuantity}>
											<img src={ChevronRight} alt="incrementAmount" />
										</div>
									</div>
								</Row>
								<Row className="mt-5 border-bottom">
									<h3>Price</h3>
									<div className='mint-params'><h3>{price/1000000.0} XTZ</h3></div>
								</Row>
								{mintingToken && <Row className="mt-4 justify-content-md-end"><Spinner animation="border" role="status" /></Row>}
								{!mintingToken && (
									<Row className="mt-4 justify-content-md-end">
										<div>
											<div style={{display: 'flex'}} className='mb-1 justify-content-md-end'>
												<Button
													variant="outline-light"
													size="xxl"
													onClick={async () => await mint()}
													disabled={isEditionSoldOut()}
												>
													Mint
												</Button>
											</div>
											<div className='justify-content-md-end'>
												{isEditionSoldOut() && (
												<Alert key="sold-out" variant="warning">
													Sold out!
												</Alert>)}
											</div>
										</div>
									</Row>
								)}
								{!mintingToken && newNft && (
									<Alert key="tx-hash" variant="info" className="mt-3">
										<Alert.Heading>Thanks for your support!</Alert.Heading>
										<span>Your transaction hash: <Alert.Link href={`https://ghostnet.tzkt.io/${newNft}`} target="_blank" rel="noopener noreferrer">{newNft}</Alert.Link></span>
										<hr />
										<div className="d-flex justify-content-end">
											<span>... which is kind of your NFT invoice</span>
											<Button className="ml-3" onClick={() => setNewNft(null)} variant="secondary" size="sm">
												Close
											</Button>
										</div>
									</Alert>)
								}
								<Alert className="mt-3" key="error" show={error !== undefined} variant="danger">
									<Alert.Heading>An error has occured</Alert.Heading>
									<span>{error ? error.message : ''}</span>
									<hr />
									<div className="d-flex justify-content-end">
										<Button onClick={() => setError(undefined)} variant="secondary" size="sm">
											Close
										</Button>
									</div>
								</Alert>
								
								{userNfts && (
									<div>
										<h2>My Collection</h2>
										<Row>
											{userNfts.map((nft) => {
												return (
													<Col key={`osamu-${nft.tokenId}`} className="mb-3" sm>
														<span><a href={`https://cloudflare-ipfs.com/ipfs/${getIpfsHash(nft.tokenInfo.artifactUri)}`} target="_blank" rel="noopener noreferrer">
															Osamu #{nft.tokenId}
														</a></span>
														<div className='portrait'>
															<img src={`https://cloudflare-ipfs.com/ipfs/${getIpfsHash(nft.tokenInfo.thumbnailUri)}`} alt="NFT" />
														</div>
													</Col>
												);
											})}
										</Row>
									</div>
								)}
							</div>
						)}
						<div className="mt-5">
							<p>Crowdsale contract: <a href={`https://better-call.dev/ghostnet/${config.crowdsaleContract}`} target="_blank" rel="noopener noreferrer">{config.crowdsaleContract}</a></p>
							<p>FA2 contract: <a href={`https://better-call.dev/ghostnet/${config.tokenContract}`} target="_blank" rel="noopener noreferrer">{config.tokenContract}</a></p>
							<p>Provenence hash: {config.provenenceHash}</p>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
});

export default Mint;
