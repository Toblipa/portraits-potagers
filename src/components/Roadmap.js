import React, {forwardRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import TitleRoadmap from '../img/titles/roadmap.png';
import ImgRoadmap from '../img/roadmap.png';

const Roadmap = forwardRef((_, ref) => {
    return (
        <section id="roadmap" className="roadmap" ref={ref}>
            <Container fluid>
                <Row className="justify-content-md-end">
                    <Col className="text-right">
                        <Row>
                            <div className='img-title mb-5 justify-content-end'>
                                <img src={TitleRoadmap} alt="Roadmap" />
                            </div>
                        </Row>
                        <Row>
                            {/* <div style={{marginLeft: 'auto', marginRight: '2rem'}} className='number justify-content-end'>
                                <img src={ImgRoadmap} alt="Roadmap" />
                            </div> */}
                            <div style={{marginLeft: 'auto'}} className='justify-content-end'>
                                <img src={ImgRoadmap} alt="Roadmap" />
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
});

export default Roadmap;