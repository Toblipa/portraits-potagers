import React, {forwardRef} from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import ImgFaq from '../img/faq.png';


const FAQ = forwardRef(({}, ref) => {
    return (
        <section id="faq" className="faq" ref={ref}>
            <Container>
                <Row>
                    <Col md="2" />
                    <Col className="text-left" md="6">
                        <div className='img-title'><img src={ImgFaq} alt="FAQ" /></div>
                        <Accordion alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>WHY PORTRAITS MADE UP OF FRUITS AND VEGETABLES?</Accordion.Header>
                                <Accordion.Body>
                                Arcimboldo paved the way with his astonishing four seasons paintings!<br/>
                                His work inspired us and we decided to adopt his artistic approach
                                to serve our permacultural project.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>WHAT IS AN NFT?</Accordion.Header>
                                <Accordion.Body>
                                NFT stands for non-fungible token. It has unique attributes that makes
                                it different from something else in the same asset class. Like a painting,
                                a plot of land or a diamond.<br/>
                                Some of these assets are physical and tangible and others are digital
                                and intangible.<br/>
                                Now ‘Token’ refers to a digital certificate stored on a secure distributed
                                database called a blockchain.<br/>
                                This certificate is a unique digital signature that defines the ownership of
                                your asset and that can be bought and sold.<br/>
                                Because of their uniqueness, NFTs can be seen as digital collectibles, like
                                our Portraits Potagers artworks.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>WHY TEZOS BLOCKCHAIN?</Accordion.Header>
                                <Accordion.Body>
                                Tezos is a public blockchain with a significantly low carbon footprint
                                thanks to its proof of stake protocol…<br/>
                                As we promote an ethical art de vivre, this option seemed tailored
                                to our specific project.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>WHEN WILL THE NFTs BE AVAILABLE FOR SALE?</Accordion.Header>
                                <Accordion.Body>
                                We plan to open the public sale in July. More precisions in June.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>HOW CAN I PURCHASE PORTRAITS POTAGERS NFTs?</Accordion.Header>
                                <Accordion.Body>
                                To purchase a Portrait Potager NFT, you must create your wallet
                                with Kukai, a browser based wallet for the Tezos blockchain.<br/>
                                Once your payment is successfully processed, your purchased NFTs
                                will be available in your wallet.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>HOW CAN I GET ACCESS TO THE NFT HOLDERS CONTENT?</Accordion.Header>
                                <Accordion.Body>
                                To do so, nothing simpler: join our Discord and follow the instructions from
                                the “getting started” category and discover hidden channels reserved for
                                NFT holders.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>DO I GET COMPLET OWNERSHIP OF MY PORTRAIT POTAGER?</Accordion.Header>
                                <Accordion.Body>
                                When you mint or buy a Portrait Potager, you get the full rights to the 
                                purchased art – copying, distribution, and commercial use included.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    );
});

export default FAQ;