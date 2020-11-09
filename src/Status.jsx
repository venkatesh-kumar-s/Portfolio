import React from 'react';
import './Intro.css';
import {Link} from 'react-router-dom';

function Status() {
    return (
        <div className="status shadow-sm">
           
                <p className="m-auto p-4">Currently looking for new life-changing opportunities! If you like what you <Link to="/resume">see</Link>, let's get in <a href="mailto:venkatesh.verto@gmail.com" target="_blank" rel="noopener noreferrer">touch</a>!</p>
            
        </div>
    )
}

export default Status;
