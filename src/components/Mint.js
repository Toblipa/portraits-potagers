import React,{ useState, forwardRef } from 'react';
import { Container, Row, Col, Card, ListGroup, Spinner, Button, Form, FloatingLabel, FormSelect } from 'react-bootstrap';
import { TezosToolkit} from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import config from '../config';

const Mint = forwardRef((_, ref) => {
    const [Tezos, setTezos] = useState(new TezosToolkit(config.rpcUrl));
    const [wallet, setWallet] = useState(null);
    const [userAddress, setUserAddress] = useState("");
    const [loadingProfile, setLoadingProfile] = useState(false);
    const [pinningMetadata, setPinningMetadata] = useState(false);
    const [mintingToken, setMintingToken] = useState(false);
    const [newNft, setNewNft] = useState(null);

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
    
    return (
        <section id="mint" className="mint" ref={ref}>
            <Container fluid>
                <Row className="justify-content-md-end">
                    <Col className="justify-content-md-center" xl="7">
                        <Card bg="dark">
                            {loadingProfile && <Row className="justify-content-md-center"><Spinner animation="border" role="status" /></Row>}
                            {!loadingProfile && !userAddress && (
                                <Card.Header>
                                    <button className="item" onClick={async () => await connect()}>Connect Wallet</button>
                                </Card.Header>
                            )}
                            {!loadingProfile && userAddress && (
                                <div>
                                    <Card.Header>
                                        <button className="item" onClick={disconnect}>Disconnect Wallet</button>
                                    </Card.Header>
                                    <Card.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item variant="dark">User Account: {userAddress}</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row className='flex'>
                                            <Col className='justify-content-md-center'>
                                                <Row className='justify-content-md-center'><Form.Label htmlFor='rarityLevel' controlId="rarityLevel" label="Rarity level">Rarity Level</Form.Label></Row>
                                                <Row className='justify-content-md-center'><Form.Select id="rarityLevel" aria-label="Rarity level">
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Select></Row>
                                            </Col>
                                            <Col className='justify-content-md-center'>
                                                <Row className='justify-content-md-center'><Form.Label htmlFor='quantity' controlId="quantity" label="Quantity">Quantity</Form.Label></Row>
                                                <Row className='justify-content-md-center'><Form.Select id="quantity" aria-label="Quantity">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </Form.Select></Row>
                                            </Col>
                                            <Col className='flex justify-content-md-center align-items-center'>
                                                <Row className='justify-content-md-center align-items-center'>
                                                    <Button variant="light">Mint</Button>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </div>
                            )}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
});

export default Mint;
