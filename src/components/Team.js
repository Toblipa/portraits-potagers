import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImgTeam from '../img/team.png'; // Gives image path
import Portrait9 from '../img/9.png'; // Gives image path

function Team () {
    return (
        <section id="team" className="team">
            <Container>
                <Row className="justify-content-md-end">
                    <Col className="text-right" md="8">
                        <Row>
                            <div style={{marginLeft: 'auto'}} className='img-title justify-content-end'><img src={ImgTeam} alt="Team" /></div>
                        </Row>
                        <h2>Creators and Farmers</h2>
                        <Row className="mb-5">
                            <Col>
                                <div className='portrait'><img src={Portrait9} alt="portrait" /></div>
                                <div><b>Wladimir Peltzer</b> <br />Drawer</div>
                                <a href='#'>Learn more</a>
                            </Col>
                            <Col>
                                <div className='portrait'><img src={Portrait9} alt="portrait" /></div>
                                <div><b>Diane Rottner</b> <br />Colorist</div>
                                <a href='#'>Learn more</a>
                            </Col>
                        </Row>
                        <h2>Developer</h2>
                        <Row>
                            <Col>
                                <div className='portrait'><img src={Portrait9} alt="portrait" /></div>
                                <div><b>Pablo Hernández Muñoz</b></div>
                                <a href='#'>Learn more</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Team;