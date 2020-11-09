import React from 'react';
import Helmet from 'react-helmet';
import Intro from './Intro';
import PreferredCourses from './PreferredCourses';
import Skills from './Skills';

function About() {
    return (
        <div className="container mt-5">
            <Helmet>
                <title>About | Venkatesh Kumar</title>
            </Helmet>
            <h1 className="mt-4 pt-4">About</h1>
                <Intro/>
                <Skills/>
                <PreferredCourses/>
        </div>
    )
}

export default About;;
