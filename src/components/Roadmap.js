import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImgRoadmap from '../img/roadmap.png'; // Gives image path

function Roadmap () {
    return (
        <section id="roadmap" className="roadmap">
            <Container>
                <Row className="justify-content-md-end">
                    <Col className="text-right" md="8">
                        <Row>
                            <div style={{marginLeft: 'auto'}} className='img-title justify-content-end'><img src={ImgRoadmap} alt="Roadmap" /></div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Roadmap;