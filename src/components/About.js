import React, {forwardRef, useRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = forwardRef(({}, ref) => {
    return (
        <section id="about" className="about" ref={ref}>
            <Container className="text-center">
                <Row className="justify-content-md-center">
                    <Col md="5">
                        <h2>Concept</h2>
                        <p>
                            As scientific illustrators, my partner and I decided to create a collection
                            of 10 000 paintings made up of various hand-drawn fruits
                            and vegetables rearranged in different Portraits.

                            These are the NFT we sell as artworks for the price of an organic
                            vegetable basket between 15 and 25 euros.

                            The sales will directly benefit our permacultural project and help enhancing
                            local biodiversity.
                        </p>
                    </Col>
                </Row>
                {/* <Row className="stats-row">
                    <div className="stats-col text-center col-md-3 col-sm-6">
                    <div className="circle">
                        <span className="stats-no" data-toggle="counter-up">232</span> Satisfied Customers
                    </div>
                    </div>

                    <div className="stats-col text-center col-md-3 col-sm-6">
                    <div className="circle">
                        <span className="stats-no" data-toggle="counter-up">79</span> Released Projects
                    </div>
                    </div>

                    <div className="stats-col text-center col-md-3 col-sm-6">
                    <div className="circle">
                        <span className="stats-no" data-toggle="counter-up">1,463</span> Hours Of Support
                    </div>
                    </div>

                    <div className="stats-col text-center col-md-3 col-sm-6">
                    <div className="circle">
                        <span className="stats-no" data-toggle="counter-up">15</span> Hard Workers
                    </div>
                    </div>
                </Row> */}
            </Container>
        </section>
    )
});

export default About;