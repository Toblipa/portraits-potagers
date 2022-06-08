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
                        <p>
                            An&nbsp;artistic&nbsp;<b>NFT&nbsp;project</b><br />
                            whose&nbsp;aim&nbsp;is&nbsp;to&nbsp;transform&nbsp;a&nbsp;plot&nbsp;of&nbsp;land<br />
                            into&nbsp;an&nbsp;<b>ecologically&nbsp;sustainable&nbsp;garden</b><br />
                            through&nbsp;<b>permacultural&nbsp;thinking</b>.
                        </p>
                        <Discover onClick={onClickDiscover} />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;