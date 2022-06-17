import React, { forwardRef } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import ImgMenu from '../img/menu.png';
import ImgDiscord from '../img/discord.png';
import ImgTwitter from '../img/twitter.png';

const Menu = forwardRef(({scrollTo}, ref) => {
    return(
        <Navbar collapseOnSelect className='side-nav' expand="lg" sticky="top" variant="dark" ref={ref} >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="btn-toggle" />
            <Navbar.Collapse id="responsive-navbar-nav"  className='side-menu mg-5' >
                <a className='img-brand mb-5' onClick={() => scrollTo('Header')}>
                    <img src={ImgMenu} alt="portraits potagers" />
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
                <div className='mt-5 social-media'>
                    <span>Join us on</span>
                    <img src={ImgDiscord} style={{width: '40px', margin:'15px'}} alt="discord" />
                    <img src={ImgTwitter} style={{width: '40px'}} alt="twitter" />
                </div>
            </Navbar.Collapse>
        </Navbar>    
    )
});

export default Menu;