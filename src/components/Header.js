import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Titre from './Titre';
import Discover from './Discover';

function Header ({onClickDiscover}) {
    return (
        <header className="App-header">
            <Container className="text-center">
            <Row className="justify-content-md-center">
                <Col md="5">
                <h2>Welcome to</h2>
                <div className='title'>
                    <Titre />
                </div>
                <p>An artistic <b>NFT project</b> whose aim is to transform a plot of land into an <b>ecologically sustainable garden</b> through <b>permacultural thinking</b>.</p>

                <Discover onClick={onClickDiscover} />
                </Col>
            </Row>
            </Container>
        </header>
    );
}

export default Header;