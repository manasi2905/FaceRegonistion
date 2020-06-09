import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Image from './spaceship.png';

const Logo = () => {
    return(
        <div className='ma4'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa3">
                    <img alt='logo' src={Image} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;