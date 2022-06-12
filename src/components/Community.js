import React, {forwardRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImgCommunity from '../img/community.png'; // Gives image path
import ImgFarm from '../img/farm.jpg'; // Gives image path

const Community = forwardRef(({}, ref) => {
    return (
        <section id="community" className="community" ref={ref}>
            <Container>
                <Row>
                    <Col md="2" />
                    <Col className="text-left" md="6">
                        <div className='img-title'><img src={ImgCommunity} alt="Community" /></div>
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
                        <div className='farm'><img src={ImgFarm} alt="farm" /></div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
});

export default Community;