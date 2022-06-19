import React, {forwardRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import TitleTeam from '../img/titles/team.png';
import Diane from '../img/team/diane.jpg';
import Pablo from '../img/team/pablo.jpg';
import Wladimir from '../img/team/wladimir.jpg';

const Team = forwardRef((_, ref) => {
    return (
        <section id="team" className="team" ref={ref}>
            <Container fluid>
                <Row className="justify-content-md-end">
                    <Col className="text-right">
                        <Row>
                            <div className='img-title mb-5 justify-content-end'>
                                <img src={TitleTeam} alt="Team" />
                            </div>
                        </Row>
                        <h2>Creators and Farmers</h2>
                        <Row className="mb-5 justify-content-md-end">
                            <Col xl="5" className='mb-5'>
                                <div className='portrait-team'><img src={Wladimir} alt="portrait" /></div>
                                <div><b>Wladimir Peltzer</b> <br />Drawer</div>
                                <a href="https://www.wladimirpeltzer.com/" target="_blank" rel="noopener noreferrer">Learn more</a>
                            </Col>
                            <Col xl="5">
                                <div className='portrait-team'><img src={Diane} alt="portrait" /></div>
                                <div><b>Diane Rottner</b> <br />Colorist</div>
                                <a href="https://www.dianerottner.com/" target="_blank" rel="noopener noreferrer">Learn more</a>
                            </Col>
                        </Row>
                        <Row className="mt-5 justify-content-end">
                            <h2 className="mt-5 mr-3">Developer</h2>
                        </Row>
                        <Row>
                            <Col>
                                <div className='portrait-team'><img src={Pablo} alt="portrait" /></div>
                                <div><b>Pablo Hernández Muñoz</b></div>
                                <a href='https://github.com/Toblipa' target="_blank" rel="noopener noreferrer">Learn more</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
});

export default Team;