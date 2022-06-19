import React, {forwardRef} from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

import TitleFaq from '../img/titles/faq.png';

const FAQ = forwardRef((_, ref) => {
    return (
        <section id="faq" className="faq" ref={ref}>
            <Container fluid>
                <Row>
                    <Col className="text-left" md="7">
                        <div className='img-title mb-5'><img src={TitleFaq} alt="FAQ" /></div>
                        <Accordion alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <span>WHY PORTRAITS MADE UP OF FRUITS AND VEGETABLES?</span>
                                    <i className="bi bi-chevron-right accordion-arrow" />
                                </Accordion.Header>
                                <Accordion.Body className="mt-3">
                                <p>Arcimboldo paved the way with his astonishing four <b>seasons paintings</b>!</p>
                                <p>His work inspired us and we decided to adopt his artistic approach
                                to serve our permacultural project.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <span>WHAT IS AN NFT?</span>
                                    <i className="bi bi-chevron-right accordion-arrow" />
                                </Accordion.Header>
                                <Accordion.Body className="mt-3">
                                <p>NFT stands for <b>non-fungible token</b>. It has unique attributes that makes
                                it different from something else in the same asset class. Like a painting,
                                a plot of land or a diamond.</p>
                                <p>Some of these assets are <b>physical</b> and <b>tangible</b> and others are <b>digital</b>
                                and <b>intangible</b>.</p>
                                <p>Now ‘Token’ refers to a <b>digital certificate</b> stored on a secure distributed
                                database called a <b>blockchain</b>.</p>
                                <p>This certificate is a <b>unique digital signature</b> that defines the <b>ownership of
                                your asset</b> and that can be bought and sold.</p>
                                <p>Because of their uniqueness, NFTs can be seen as <b>digital collectibles</b>, like
                                our Portraits Potagers artworks.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <span>WHY TEZOS BLOCKCHAIN?</span>
                                    <i className="bi bi-chevron-right accordion-arrow" />
                                </Accordion.Header>
                                <Accordion.Body className="mt-3">
                                <p><b><a href='https://tezos.com/' target="_blank" rel="noopener noreferrer">Tezos</a></b> is
                                a public blockchain with a significantly <b>low carbon footprint</b> thanks to its proof of stake protocol…</p>
                                <p>As we promote an ethical art de vivre, this option seemed tailored
                                to our specific project.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <span>WHEN WILL THE NFTs BE AVAILABLE FOR SALE?</span>
                                    <i className="bi bi-chevron-right accordion-arrow" />
                                </Accordion.Header>
                                <Accordion.Body className="mt-3">
                                    <p>We plan to open the public sale in <b>July</b>. More precisions in June.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                    <span>HOW CAN I PURCHASE PORTRAITS POTAGERS NFTs?</span>
                                    <i className="bi bi-chevron-right accordion-arrow" />
                                </Accordion.Header>
                                <Accordion.Body className="mt-3">
                                <p>To purchase a Portrait Potager NFT, you must create your wallet
                                with <b><a href='https://wallet.kukai.app/' target="_blank" rel="noopener noreferrer">Kukai</a></b>,
                                a browser based wallet for the Tezos blockchain.</p>
                                <p>Once your payment is successfully processed, your purchased NFTs
                                will be available in your wallet.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>
                                    <span>HOW CAN I GET ACCESS TO THE NFT HOLDERS CONTENT?</span>
                                    <i className="bi bi-chevron-right accordion-arrow" />
                                </Accordion.Header>
                                <Accordion.Body className="mt-3">
                                <p>To do so, nothing simpler:
                                    join our <a href="https://discord.com/invite/QsbBMNjYD4" target="_blank" rel="noopener noreferrer">Discord</a> and
                                    follow the instructions from the “getting started” category and discover hidden channels reserved for NFT holders.
                                </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>
                                    <span>DO I GET COMPLET OWNERSHIP OF MY PORTRAIT POTAGER?</span>
                                    <i className="bi bi-chevron-right accordion-arrow" />
                                </Accordion.Header>
                                <Accordion.Body className="mt-3">
                                <p>When you mint or buy a Portrait Potager, you get the <b>full rights</b> to the 
                                purchased art - copying, distribution, and commercial use included.</p>
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