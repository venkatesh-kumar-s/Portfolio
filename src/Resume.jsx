import React from 'react';
import Education from './Education';
import PersonalProjects from './PersonalProjects';
import './Resume.css';
import Helmet from 'react-helmet';
import resume from './venkatesh-kumar.pdf';

function Resume() {
    return (
        <div className="container mt-5">
            <Helmet>
                <title>Resume | Venkatesh Kumar</title>
            </Helmet>
             <p className="resume m-4 p-4 text-center">Resume <button className="btn btn-sm btn-outline-success" onClick={()=>window.open(resume)}>Download</button></p>
             <PersonalProjects/>
             <hr/>
             <Education/>
        </div>
    )
}

export default Resume;
