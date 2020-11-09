import React from 'react';
import './Intro.css';
import Status from './Status';
import {Link} from 'react-router-dom';

function Skills() {
    return (
        <div className="skills container text-left">
            <h3>Skills</h3>
            <p>
                <b className="light">Languages : </b>
                <span>Javascript (ES5, ES6+), HTML5, CSS3</span>
                <br/>
                <b className="light">Frameworks/Libraries : </b>
                <span>React.js, Redux, Webpack, Npm, Babel, Bootstrap</span>
                <br/>
                <b className="light">Version Control : </b>
                <span>Git</span>
            </p>
            <p className="">Check out Venkatesh Kumar's <Link to="/projects">personal projects</Link> to see what he's been up to! Or check out the <Link to="/blog">blog</Link> to see what's recently Venkatesh wrote!</p>
            <Status/>
        </div>
    )
}

export default Skills;
