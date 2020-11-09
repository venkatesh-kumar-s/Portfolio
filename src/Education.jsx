import React from 'react';
import './Resume.css';
import navodaya from './navodaya.png';
import lpu from './lpu.png';
import sc from './sc.png';

function Education() {
    const Edu=[
        {
            avatar:`${lpu}`,
            alt:"lovely professional university",
            institute:"Lovely Professional University",
            duration:"June, 2014-May, 2020",
            stream:"B.Tech, Computer Science and Engineering",
            grade:"First Class",
        },
        {
            avatar:`${sc}`,
            alt:"sri chaitanya",
            institute:"Sri Chaitanya Educational Institutions",
            duration:"June, 2014-May, 2020",
            stream:"XII (Mathematics, Physics, Chemistry)",
            grade:"92.4%",
        },
        {
            avatar:`${navodaya}`,
            alt:"Jawahar Navodaya Vidyalaya",
            institute:"Jawahar Navodaya Vidyalaya",
            duration:"June, 2011-April, 2012",
            stream:"X- CBSE",
            grade:"92%",
        },
    ]
    return (
        <div className="row pb-4">
           <div className="col-xs-12 col-sm-12 col-md-4">
                <img className="logo" src="https://freepngimg.com/download/education/10-2-education-download-png.png" alt="education"/>
                <br/>
                    <p className="edu-text m-2 text-center">
                    <span className="text-primary">Education</span>
                    <br/>
                    <span className="text-secondary">June, 2011-May, 2018</span>
                    </p>
           </div>

           <div className="col-xs-12 col-sm-12 col-md-8 px-4">
               {Edu.map((education)=>(
                    <div className="school row">
                    <img className="" src={education.avatar} alt={education.alt}/>
                    <p className="col-9 institute text-left">{education.institute}, <i>{education.duration}</i><br/>
                    <span className="degree">{education.stream} -</span>
                    <span className="degree">{education.grade}</span>
                    </p>
                    <hr/>
                </div>
               ))}
           </div>
        </div>
    )
}

export default Education;
