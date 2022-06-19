import React, { forwardRef } from 'react';
import { Navbar } from 'react-bootstrap';

import TitleMenu from '../img/titles/menu.png';
import ImgDiscord from '../img/discord.png';
import ImgTwitter from '../img/twitter.png';

const Menu = forwardRef(({scrollTo, currentSection}, ref) => {
    return(
        <Navbar collapseOnSelect className='side-nav' expand="lg" sticky="top" variant="dark" ref={ref} >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="btn-toggle" />
            <Navbar.Collapse id="responsive-navbar-nav"  className='side-menu mg-5' >
                <div className='wrapper-bg-gradient mb-5'>
                    <button className='img-brand mb-5' onClick={() => scrollTo('Header')}>
                        <img src={TitleMenu} alt="portraits potagers" />
                    </button>
                    <button className={currentSection === 'About' ? 'active': ''} onClick={() => scrollTo('About')}>
                        <span>Concept</span>
                    </button>
                    <button className={currentSection === 'Team' ? 'active': ''} onClick={() => scrollTo('Team')}>
                        <span>Team</span>
                    </button>
                    <button className={currentSection === 'Community' ? 'active': ''} onClick={() => scrollTo('Community')}>
                        <span>Community</span>
                    </button>
                    <button className={currentSection === 'Roadmap' ? 'active': ''} onClick={() => scrollTo('Roadmap')}>
                        <span>Roadmap</span>
                    </button>
                    <button className={currentSection === 'FAQ' ? 'active': ''} onClick={() => scrollTo('FAQ')}>
                        <span>FAQ</span>
                    </button>
                </div>
                <div className='social-media wrapper-bg-gradient mt-5'>
                    <p> Join us on
                        <a href="https://discord.com/invite/QsbBMNjYD4" target="_blank" rel="noopener noreferrer">
                            <img src={ImgDiscord} style={{width: '30px', margin:'0px 10px'}} alt="discord" />
                        </a>
                        <a href="https://twitter.com/PPotagers" target="_blank" rel="noopener noreferrer">
                            <img src={ImgTwitter} style={{width: '30px'}} alt="twitter" />
                        </a>
                    </p>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
});

export default Menu;