import React, {forwardRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import TitleTitre from '../img/titles/titre.png';
import BtnDiscover from '../img/btn-discover.png';

const Header = forwardRef(({onClickDiscover}, ref) => {
    return (
        <header className="App-header bg-header-left bg-left" ref={ref}>
            <Container className="text-center">
                <Row className="justify-content-md-center">
                    <Col md="5">
                        <h2>Welcome to</h2>
                        <div className='title'>
                            <img src={TitleTitre} alt="portraits potagers" style={{ width: '100%' }} />
                        </div>
                        <p>
                            An&nbsp;artistic&nbsp;<b>NFT&nbsp;project</b><br />
                            whose&nbsp;aim&nbsp;is&nbsp;to&nbsp;transform&nbsp;a&nbsp;plot&nbsp;of&nbsp;land<br />
                            into&nbsp;an&nbsp;<b>ecologically&nbsp;sustainable&nbsp;garden</b><br />
                            through&nbsp;<b>permacultural&nbsp;thinking</b>.
                        </p>
                        <div className='discover' onClick={onClickDiscover}>
                            <img src={BtnDiscover} alt="portraits potagers" style={{ width: '100%' }} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
});

export default Header;