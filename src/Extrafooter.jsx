import React from 'react';
import './Extrafooter.css';
import nodeIcon from './node.png';

function Extrafooter() {
    return (
        <div className="bottom-banner">
            <img className="react App-logo" src="https://www.pinclipart.com/picdir/big/135-1358798_react-js-logo-png-clipart.png" alt="react"/>
            <img className="mongodb" src="https://cdn.iconscout.com/icon/free/png-512/mongodb-4-1175139.png" alt="mongodb"/>
            <img className="express" src="https://user-images.githubusercontent.com/11978772/40430986-a0eb7b92-5e63-11e8-80eb-43fe07f664a6.png" alt="express"/>
            <img className="node" src={nodeIcon} alt="node"/>
        </div>
    )
}

export default Extrafooter;
