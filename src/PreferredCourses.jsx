import React from 'react';
import './PreferredCourses.css';

function PreferredCourses() {
    return (
        <div className="preferred container mt-4 text-left">
            <hr/>
            <h4>Suggested Udemy Courses (<span className="text-danger">Paid</span>)</h4>
            <p className="suggestions">
                <a href="https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/" target="_blank">React, NodeJS, Express & MongoDB - The MERN Fullstack Guide <i className="text-muted">- Created by Maximilian Schwarzmuller, Manuel Lorenz</i></a><br/>
                <a href="https://www.udemy.com/course/mongodb-the-complete-developers-guide/" target="_blank">MongoDB - The Complete Developer's Guide 2020 <i className="text-muted">- Created by Maximilian Schwarzmuller</i></a><br/>
                <a href="https://www.udemy.com/course/react-js-a-complete-guide-for-frontend-web-development/" target="_blank">React JS - A Complete Guide for Frontend Web Development <i className="text-muted">- Created by EdYoda Digital University, Qaifi Khan, Mavludin Abdulkadirov</i></a><br/>
                <a href="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/" target="_blank">The Complete Node.js Developer Course (3rd Edition) <i className="text-muted">- Created by Andrew Mead, Rob Percival</i></a><br/>
                <a href="https://www.udemy.com/course/javascript-es6-tutorial/" target="_blank">ES6 Javascript: The Complete Developer's Guide <i className="text-muted">- Created by Stephen Grider</i></a><br/>
            </p>
            <h4>Suggested Youtube Courses (<span className="text-success">Free</span>)</h4>
            <p className="suggestions">
                <a href="https://www.youtube.com/watch?v=ktjafK4SgWM" target="_blank">Learn the MERN Stack - Full Tutorial for Beginners (MongoDB, Express, React, NodeJS) in 12Hrs (2021)<i className="text-muted">- by Clever Programmer</i></a><br/>
                <a href="https://www.youtube.com/watch?v=JnvKXcSI7yk" target="_blank">Node JS Full Course - Learn Node.js in 7 Hours | Node.js Tutorial for Beginners | Edureka<i className="text-muted">- by Edureka</i></a><br/>
                <a href="https://www.youtube.com/watch?v=nZ1DMMsyVyI&t=135s" target="_blank">JavaScript ES6, ES7, ES8: Learn to Code on the Bleeding Edge (Full Course)<i className="text-muted">- by freeCodeCamp.Org</i></a><br/>
                <a href="https://www.youtube.com/watch?v=_a5j7KoflTs">SASS <i className="text-muted" target="_blank">- by freeCodeCamp.Org</i></a><br/>
                <a href="https://www.youtube.com/watch?v=9JSG7Na2S4M&list=PLRAV69dS1uWTaoxyeBbKpAEF90i4ijUQZ" target="_blank">MongoDB and Mocha <i className="text-muted">- by Hitesh Choudhary</i></a><br/>
            </p>
        </div>
    )
}

export default PreferredCourses;
