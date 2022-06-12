import React from 'react';
import ImgDiscover from '../img/btn-discover.png';

function Discover ({onClick}) {
    return (
        <div className='discover' onClick={onClick}><img src={ImgDiscover} alt="portraits potagers" style={{ width: '100%' }} /></div>
    );
}

export default Discover;