import React from 'react';
import './Resume.css';
import icon from './github-white.png'
import { useSelector } from 'react-redux';
function PersonalProjects() {
    const toggle = useSelector(state => state.dark);
    const projects=[
        {
            title:"Table Tab Food Ordering System - Web App",
            duration:"February, 2018 - may, 2018",
            desc:[
                {info:"Responsive app created using Bootstrap, JavaScript, HTML & CSS."},
                {info:"Use of Android Studio to convert webapp into android application."},
                {info:"Use of FETCH API to retrieve data dynamically from server."}
            ],
            url:"https://netflix-clone-463dd.web.app/",
        },
        {
            title:"Gallivanter - Tourism Website",
            duration:"June, 2019 - December, 2019",
            desc:[
                {info:"Responsive app created using Bootstrap, JavaScript, HTML & CSS."},
                {info:"Realized catalog page and designed the logic to allow the user to filter their searches."},
                {info:"Use of Fetch API to get the data."},
                {info:"Sign-In workflow with Firebase."}
            ],
            url:"http://gallivanter.ml/",
        },
        {
            title:"Weather App",
            duration:"July, 2020",
            desc:[
                {info:"Responsive app created using Bootstrap, JavaScript, HTML & CSS."},
                {info:"Realized catalog page and designed the logic to allow the user to filter their searches."},
                {info:"Implemented the AXIOS call that retrieves data from the OpenWeather API."},
                {info:"Sign-In workflow with Firebase."}
            ],
            url:"https://netflix-clone-463dd.web.app/",
        },
        {
            title:"Netflix - Clone, Online Streaming - Web App",
            duration:"August, 2020",
            desc:[
                {info:"Created with React library and Redux for state management."},
                {info:"Built reusable components with Styled-Components."},
                {info:"Use of AXIOS to retrieve data from TMDB API."},
                {info:"Used Redux thunk for asynchronous actions, like bringing Data from Firestore to the App."}
            ],
            url:"https://netflix-clone-463dd.web.app/",
        },
        {
            title:"Periodic Table - Educational Web App",
            duration:"September, 2020",
            desc:[
                {info:"Responsive app created using Bootstrap, JavaScript, HTML & CSS."},
                {info:"Realized catalog page and designed the logic to allow the user to filter their searches."},
                {info:"Implemented the AXIOS call that retrieves data from the OpenWeather API."},
                {info:"Sign-In workflow with Firebase."}
            ],
            url:"https://netflix-clone-463dd.web.app/",
        },

    ]
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4">
                <img className="logo" src={`${toggle?icon:'https://image.flaticon.com/icons/png/512/25/25231.png'}`} alt="Personal Projects"/>
                <br/>
                    <p className="edu-text m-2 text-center">
                    <span className="text-primary">Personal Projects</span>
                    <br/>
                    <span className="text-secondary">June, 2018 - Aug, 2020</span>
                    </p>
           </div>

           <div className="container col-xs-12 col-sm-12 col-md-8 p-4 text-justify">
               {projects.map((project)=>(
                    <div>
                    <p>{project.title}, <i> {project.duration}</i><br/>
                    <span>
                    <ul className="mt-2">
                        {project.desc.map((sub)=>(
                            <li>{sub.info}</li>
                        ))}
                    </ul>      
                    </span></p>
                    <button className="btn btn-sm btn-primary" onClick={()=>window.open(project.url)}>View Project</button>
                    <hr/>
                </div>
               ))}    
           </div>
        </div>
    )
}

export default PersonalProjects;
