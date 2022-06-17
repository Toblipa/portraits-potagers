import React, {forwardRef} from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import ImgRoadmap from '../img/roadmap.png'; // Gives image path

const Roadmap = forwardRef(({}, ref) => {
    return (
        <section id="roadmap" className="roadmap" ref={ref}>
            <Container>
                <Row className="justify-content-md-end">
                    <Col className="text-right" md="8">
                        <Row>
                            <div style={{marginLeft: 'auto'}} className='img-title justify-content-end'><img src={ImgRoadmap} alt="Roadmap" /></div>
                        </Row>
                        <Row>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
});

export default Roadmap;