import React, {forwardRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ImgRoadmap from '../img/roadmap.png';
import ImgRoadmapComplet from '../img/roadmap-complet.png';

const Roadmap = forwardRef(({}, ref) => {
    return (
        <section id="roadmap" className="roadmap" ref={ref}>
            <Container>
                <Row className="justify-content-md-end">
                    <Col className="text-right" md="8">
                        <Row>
                            <div style={{marginLeft: 'auto'}} className='img-title  mb-5 justify-content-end'>
                                <img src={ImgRoadmap} alt="Roadmap" />
                            </div>
                        </Row>
                        <Row>
                            {/* <div style={{marginLeft: 'auto', marginRight: '2rem'}} className='number justify-content-end'>
                                <img src={ImgRoadmap} alt="Roadmap" />
                            </div> */}
                            <div style={{marginLeft: 'auto'}} className='justify-content-end'>
                                <img src={ImgRoadmapComplet} alt="Roadmap" />
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
});

export default Roadmap;