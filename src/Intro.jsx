import React from 'react';
import './Intro.css';
import avatar from './venkatesh-avatar.jpg';

function Intro() {
    return (
        <div className="container intro">
            <img className="shadow-sm" src={avatar} alt="venkatesh kumar"/>
            <h5 className="my-4 text-center">MERN Stack Developer | React.js Developer</h5>
            <p className="my-4">Venkatesh Kumar is a Software Engineer focused on Front-End Development. Previously used <a href="https://web.learncodeonline.in/" target="_blank">LearnCodeOnline</a> and <a href="https://www.udemy.com/" target="_blank">Udemy Courses</a>  to get started, then applied his knowledge to build real-world projects.</p>
            <p className="my-4">Professional strengths include creative problem-solving, written and verbal communication, and time management. Ready to take initiative in difficult situations, and always strive to improve the product and bring new ideas.</p>
            <p className="my-5">Passionate about books, travelling and learning new things!</p>
        </div>
    )
}
export default Intro;
