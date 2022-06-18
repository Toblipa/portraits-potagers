import React, { forwardRef } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import TitleMenu from '../img/titles/menu.png';
import ImgDiscord from '../img/discord.png';
import ImgTwitter from '../img/twitter.png';

const Menu = forwardRef(({scrollTo}, ref) => {
    return(
        <Navbar collapseOnSelect className='side-nav' expand="lg" sticky="top" variant="dark" ref={ref} >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="btn-toggle" />
            <Navbar.Collapse id="responsive-navbar-nav"  className='side-menu mg-5' >
                <div className='wrapper-bg-gradient mb-5'>
                    <a className='img-brand mb-5' onClick={() => scrollTo('Header')}>
                        <img src={TitleMenu} alt="portraits potagers" />
                    </a>
                    <a onClick={() => scrollTo('About')}>
                        <span>Concept</span>
                    </a>
                    <a onClick={() => scrollTo('Team')}>
                        <span>Team</span>
                    </a>
                    <a onClick={() => scrollTo('Community')}>
                        <span>Community</span>
                    </a>
                    <a onClick={() => scrollTo('Roadmap')}>
                        <span>Roadmap</span>
                    </a>
                    <a onClick={() => scrollTo('FAQ')}>
                        <span>FAQ</span>
                    </a>
                </div>
                <div className='social-media wrapper-bg-gradient mt-5'>
                    <p> Join us on
                        <img src={ImgDiscord} style={{width: '35px', margin:'0px 15px'}} alt="discord" />
                        <img src={ImgTwitter} style={{width: '35px'}} alt="twitter" />
                    </p>
                </div>
            </Navbar.Collapse>
        </Navbar>    
    )
});

export default Menu;