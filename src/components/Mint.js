import React,{ useEffect, useState, forwardRef } from 'react';
import { Container, Row, Col, Spinner, Button, ProgressBar } from 'react-bootstrap';
import { TezosToolkit} from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { char2Bytes, bytes2Char } from "@taquito/utils";
import config from '../config';

import TitleConcept from '../img/titles/concept.png';

const Mint = forwardRef((_, ref) => {
	const [Tezos, setTezos] = useState(new TezosToolkit(config.rpcUrl));
	const [wallet, setWallet] = useState(null);
	const [userAddress, setUserAddress] = useState("");
	const [loadingProfile, setLoadingProfile] = useState(false);
	const [nftQuantity, setNftQuantity] = useState(1);
	const [nftLevel, setNftLevel] = useState(3);
	const [totalSupply, setTotalSupply] = useState();
	const [mintedNfts, setMintedNfts] = useState();
	const [mintingToken, setMintingToken] = useState(false);
	const [newNft, setNewNft] = useState(null);

	const incrementNftQuantity = () => {
		if(nftQuantity < 10){
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
			setUserAddress(user_address);
		} catch (err) {
			console.error(err);
		} finally {
			setLoadingProfile(false);

		}
	};

	const disconnect = () => {
		wallet.client.destroy();
		setUserAddress("");
		setWallet(null);
	};

	const mint = async () => {
		setMintingToken(true);
		try {
			// saves NFT on-chain
			const contract = await Tezos.wallet.at(config.contractAddress);
			const op = await contract.methods
				.mint(1, userAddress, 1)
				.send();
			console.log("Op hash:", op.opHash);
			await op.confirmation();
			setNewNft({
				opHash: op.opHash,
			});
		} catch (error) {
			console.log(error);
		} finally {
			setMintingToken(false);
		}
	};

    useEffect(() => {
        try {
            const func = async () => {
				const contract = await Tezos.wallet.at(config.contractAddress);
				const storage = await contract.storage();
				console.log(storage);
				setMintedNfts(3.0);
				setTotalSupply(50.0);
            };
			func();
        } catch (err) {
            console.log(err);
        }
    }, []);
	
	return (
		<section id="mint" className="mint" ref={ref}>
			<Container fluid>
                <Row>
                    <Col className="text-left mb-5" md="7">
                        <div className='img-title mb-5'><img src={TitleConcept} alt="Mint" /></div>
						<Row className="mt-5">
							<div>{mintedNfts} out of {totalSupply} Osamus have been minted</div>
							<div><ProgressBar now={(mintedNfts/totalSupply)*100} /></div>
						</Row>
						{loadingProfile && <Row className="justify-content-md-center"><Spinner animation="border" role="status" /></Row>}
						{!loadingProfile && !userAddress && (
							<Button variant="outline-light" onClick={async () => await connect()}>Connect Wallet</Button>
						)}
						{!loadingProfile && userAddress && (
							<div>
								<p>Your Address:</p>
								<p>{userAddress}</p>
								<div className="justify-content-md-end">
									<Button variant="outline-light" onClick={disconnect}>Disconnect Wallet</Button>
								</div>
								<Row className="mt-5">
									<h2>
										Level
										<div>
										<Button variant="outline-light" onClick={reduceNftLevel}>
											<i className="bi bi-chevron-left"/>
										</Button>
											{nftLevel}
										<Button variant="outline-light" onClick={incrementNftLevel}>
											<i className="bi bi-chevron-right" />
										</Button>
										</div>
									</h2>
								</Row>
								<Row className="mt-5">
									<h2>
										Amount
										<div>
										<Button variant="outline-light" onClick={reduceNftQuantity}>
											<i className="bi bi-chevron-left"/>
										</Button>
											{nftQuantity}
										<Button variant="outline-light" onClick={incrementNftQuantity}>
											<i className="bi bi-chevron-right" />
										</Button>
										</div>
									</h2>
								</Row>
								<Row className="mt-5">
									<h2>Cost 60ꜩ</h2>
								</Row>
								{mintingToken && <Row className="justify-content-md-end"><Spinner animation="border" role="status" /></Row>}
								{!mintingToken && (
									<Row className="justify-content-md-end">
										<Button variant="outline-light" onClick={async () => await mint()}>Mint</Button>
										<span>{newNft}</span>
									</Row>
								)}
							</div>
						)}
					</Col>
				</Row>
			</Container>
		</section>
	);
});

export default Mint;
