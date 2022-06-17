import React, {forwardRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ImgConcept from '../img/concept.png';
import Portrait9 from '../img/9.png';
import Portrait12 from '../img/12.png';
import Traits from '../img/traits.png';
import RarityLevel from '../img/rarity-level.png';
import Img1 from '../img/1..png';
import Img2 from '../img/2..png';
import Img3 from '../img/3..png';

const About = forwardRef(({}, ref) => {
    return (
        <section id="about" className="about" ref={ref}>
            <Container>
                <Row>
                    <Col md="2" />
                    <Col className="text-left" md="5">
                        <div className='img-title mb-5'><img src={ImgConcept} alt="Concept" /></div>
                        <p>
                            As scientific illustrators, my partner and I decided to create a collection
                            of 10 000 paintings made up of various hand-drawn fruits
                            and vegetables rearranged in different Portraits.
                        </p>
                        <p>
                            These are the NFT we sell as artworks for the price of an organic
                            vegetable basket between 15 and 25 euros.<br />
                        </p>
                        <p>
                            The sales will directly benefit our permacultural project and help enhancing
                            local biodiversity.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md="2" />
                    <Col className="text-left flex" md="8">
                        <div className='portrait'><img src={Portrait9} alt="portrait" /></div>
                        <div className='portrait'><img src={Portrait12} alt="portrait" /></div>
                    </Col>
                </Row>
                <Row>
                    <Col md="2" />
                    <Col className="text-left flex" md="8">
                        <div className='portrait'><img src={Portrait9} alt="portrait" /></div>
                        <div className='portrait'><img src={Portrait12} alt="portrait" /></div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col md="2" />
                    <Col className="text-left d-inline-flex" md="5">
                        <div className='img-title'><img src={Traits} alt="200" /></div>
                        <h2 className='title-bottom'>Traits</h2>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col md="2" />
                    <Col className="text-left d-inline-flex" md="5">
                        <div className='img-title'><img src={RarityLevel} alt="3" /></div>
                        <h2 className='title-bottom'>Rarity levels</h2>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col md="2" />
                    <Col className="text-left d-inline-flex" md="8">
                        <div className='portrait'><img src={Portrait9} alt="portrait" /></div>
                        <div className='number title-bottom'><img src={Img1} alt="1" /></div>
                        <p className='title-bottom'>
                            <b>Fruits and vegetables</b><br /><br />
                            <span>Organic fruits and vegetables,<br /> aromatic herbs, mushrooms...</span>
                        </p>
                    </Col>
                </Row>
                <Row className='mt-1'>
                    <Col md="2" />
                    <Col className="text-left d-inline-flex" md="8">
                        <div className='portrait'><img src={Portrait9} alt="portrait" /></div>
                        <div className='number title-bottom'><img src={Img2} alt="2" /></div>
                        <p className='title-bottom'>
                            <b>Animals</b><br /><br />
                            <span>Frog, dragonfly, bees, bird, <br />chameleon...</span>
                        </p>
                    </Col>
                </Row>
                <Row className='mt-1'>
                    <Col md="2" />
                    <Col className="text-left d-inline-flex" md="8">
                        <div className='portrait'><img src={Portrait9} alt="portrait" /></div>
                        <div className='number title-bottom'><img src={Img3} alt="3" /></div>
                        <p className='title-bottom'>
                            <b>Garden and kitchen tools</b><br /><br />
                            <span>Steamer, garden hose, pan...</span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
});

export default About;