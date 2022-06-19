import React, {forwardRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import TitleConcept from '../img/titles/concept.png';
import Traits from '../img/traits.png';
import RarityLevel from '../img/rarity-level.png';

import Example1 from '../img/concept/exemple1.jpg';
import Example2 from '../img/concept/exemple2.jpg';
import Example3 from '../img/concept/exemple3.jpg';
import Example4 from '../img/concept/exemple4.jpg';

import RarityLevel1 from '../img/concept/rarity-level1.jpg';
import RarityLevel2 from '../img/concept/rarity-level2.jpg';
import RarityLevel3 from '../img/concept/rarity-level3.jpg';

import Img1 from '../img/1..png';
import Img2 from '../img/2..png';
import Img3 from '../img/3..png';

const About = forwardRef((_, ref) => {
    return (
        <section id="about" className="about" ref={ref}>
            <Container fluid>
                <Row>
                    <Col className="text-left mb-5" md="7">
                        <div className='img-title mb-5'><img src={TitleConcept} alt="Concept" /></div>
                        <p>
                            As <b>scientific illustrators</b>, we decided to create a collection
                            of <b>1&nbsp;111 paintings</b> made up of various <b>hand-drawn fruits
                            and vegetables</b> rearranged in different Portraits.
                        </p>
                        <p>
                            These are the NFT we sell as <b>artworks</b> for the price of an <b>organic
                            vegetable basket</b> between <b>15 and 25</b> euros.<br />
                        </p>
                        <p>
                            The sales will directly benefit our <b>permacultural project</b> and help <b>enhancing
                            local biodiversity</b>.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-left flex">
                        <div className='portrait'><img src={Example1} alt="portrait" /></div>
                        <div className='portrait'><img src={Example2} alt="portrait" /></div>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-left flex">
                        <div className='portrait'><img src={Example3} alt="portrait" /></div>
                        <div className='portrait'><img src={Example4} alt="portrait" /></div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className="text-left d-inline-flex">
                        <div className='number'><img src={Traits} alt="200" /></div>
                        <h2 className='title-bottom'>Traits</h2>
                    </Col>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col className="text-left d-inline-flex">
                        <div className='number'><img src={RarityLevel} alt="rarity-levels" /></div>
                        <h2 className='title-bottom'>Rarity levels</h2>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className="text-left d-inline-flex">
                        <div className='portrait'><img src={RarityLevel1} alt="3" /></div>
                        <div className='number text-bottom'><img src={Img1} alt="1" /></div>
                        <p className='text-bottom'>
                            <b>Fruits and vegetables</b><br /><br />
                            <span>Organic fruits and vegetables,<br /> aromatic herbs, mushrooms...</span>
                        </p>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col className="text-left d-inline-flex">
                        <div className='portrait'><img src={RarityLevel2} alt="RarityLevel2" /></div>
                        <div className='number text-bottom'><img src={Img2} alt="2" /></div>
                        <p className='text-bottom'>
                            <b>Animals</b><br /><br />
                            <span>Frog, dragonfly, bees, bird, <br />chameleon...</span>
                        </p>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col className="text-left d-inline-flex">
                        <div className='portrait'><img src={RarityLevel3} alt="RarityLevel3" /></div>
                        <div className='number text-bottom'><img src={Img3} alt="3" /></div>
                        <p className='text-bottom'>
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