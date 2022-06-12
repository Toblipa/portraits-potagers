import React, { forwardRef } from 'react';
import ImgMenu from '../img/menu.png';
import ImgDiscord from '../img/discord.png';
import ImgTwitter from '../img/twitter.png';

const Menu = forwardRef(({scrollTo}, ref) => {
    return(
        <nav ref={ref}>
            <div className='side-menu mg-5'>
                <a className='mb-5' onClick={() => scrollTo('Header')}>
                    <img src={ImgMenu} alt="portraits potagers" style={{ width: '100%' }} />
                </a>

                <a onClick={() => scrollTo('About')}>
                    <i className="fa fa-user fa-lg"></i>
                    <span>Concept</span>
                </a>
                
                <a onClick={() => scrollTo('Team')}>
                    <i className="fa fa-envelope-o fa-lg"></i>
                    <span>Team</span>
                </a>

                <a onClick={() => scrollTo('Community')}>
                    <i className="fa fa-html5 fa-lg"></i>
                    <span>Community</span>
                </a>

                <a onClick={() => scrollTo('Roadmap')}>
                    <i className="fa fa-css3 fa-lg"></i>
                    <span>Roadmap</span>
                </a>

                <a onClick={() => scrollTo('FAQ')}>
                    <i className="fa fa-book fa-lg"></i>
                    <span>FAQ</span>
                </a>
            </div>
            <div className='side-menu mt-5'>
                <span>Join us on</span>
                <img src={ImgDiscord} style={{width: '40px', margin:'5px'}} alt="discord" />
                <img src={ImgTwitter} style={{width: '40px'}} alt="twitter" />
            </div>
        </nav>
    )
});

export default Menu;