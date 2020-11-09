import React from 'react';
import './Social.css';

function Social() {
    return (
        <div className="social-bar">
            <a href="https://github.com/" target="_blank"><img className="m-3" src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github"/></a>
            <a href="https://www.linkedin.com/in/venkatesh-kumar-sandu/" target="_blank"><img className="m-3" src="https://img.pngio.com/linkedin-logo-download-vector-linkedin-logo-icon-png-1748_1760.png" alt="linkedin"/></a>
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><img className="m-3" src="https://www.shareicon.net/data/512x512/2016/11/22/854957_email_512x512.png" alt="email"/></a>
            <a href="https://www.hackerearth.com/@sandu.venkateshkumar" target="_blank"><img className="m-3" src="https://upload.wikimedia.org/wikipedia/commons/e/e8/HackerEarth_logo.png" alt="hacker earth"/></a>
        </div>
    )
}

export default Social;
