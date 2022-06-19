import React, {forwardRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import TitleCommunity from '../img/titles/community.png';
import ImgCommunity1 from '../img/community/community1.jpg';
import ImgCommunity2 from '../img/community/community2.jpg';
import ImgCommunity3 from '../img/community/community3.jpg';

const Community = forwardRef((_, ref) => {
    return (
        <section id="community" className="community" ref={ref}>
            <Container fluid>
                <Row>
                    <Col className="text-left" md="7">
                        <div className='img-title mb-5'><img src={TitleCommunity} alt="Community" /></div>
                        <p>As a <b>Portraits Potager holder</b>, you get to see the <b>evolution</b> of our permacultural project.</p>
                        <p>Join us on this journey through <b>agroforestry methods</b> and see how it evolves on our <b>Discord</b>!</p>
                        <div className='farm mt-3 mb-2'><img src={ImgCommunity1} alt="community1" /></div>
                        <p>Our plot of land is located in a small village nestled in the Vosges Mountains.</p>
                        <div className='farm mt-3 mb-2'><img src={ImgCommunity2} alt="community2" /></div>
                        <p>Wild meadow we intend to leave as such, at least for one part.</p>
                        <div className='farm mt-3 mb-2'><img src={ImgCommunity3} alt="community3" /></div>
                        <p>A small portion of our land we already cured from Japanese knotweed to enhance local biodiversity.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
});

export default Community;