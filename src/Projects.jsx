import React,{useState} from 'react';
import './Projects.css';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom'



function Projects() {
    const projectList = [
        {
            title:"Gallivanter - Booking App",
            avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdi0v_De1bPFAZhaCe8MwOZIBHs-0x2JCSYg&usqp=CAU",
            alt:"gallivanter",
            desc:"This App allows you to place your food order in a restaurant by yourself without waiting for waiter to take your order.",
            skills:[{info:'React'}, {info:'React Router'},{info:'ES6'},{info:'Express'},{info:'Mongo DB'},{info:'SASS'},{info:'Bootstrap'},{info:'Firebase'}],
        },
        {
            title:"Weather App",
            avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvUc4t9anjkVxS4uZ7jb5iH8wlbebEBSYdkA&usqp=CAU",
            alt:"weather",
            desc:"This App allows you to place your food order in a restaurant by yourself without waiting for waiter to take your order.",
            skills:[{info:'HTML5'}, {info:'CSS3'},{info:'Bootstrap4'},{info:'Javascript'}],
        },
        {
            title:"Netflix Clone",
            avatar:"https://upload.wikimedia.org/wikipedia/en/f/f4/Netflix_-_English.jpg",
            alt:"netflix clone",
            desc:"This App allows you to place your food order in a restaurant by yourself without waiting for waiter to take your order.",
            skills:[{info:'React'}, {info:'React Router'},{info:'ES6'},{info:'Express'},{info:'Mongo DB'},{info:'SASS'},{info:'Bootstrap'},{info:'Firebase'}],
        },
    {
            title:"Periodic Table of Elements",
            avatar:"https://magoosh.com/ged/files/2017/02/Screen-Shot-2017-02-07-at-10.27.24-PM-1024x600.png",
            alt:"periodic table of elements",
            desc:"The periodic table, also known as the periodic table of elements, arranges the chemical elements such as hydrogen, silicon, iron, and uranium according to their recurring properties. The number of each element corresponds to the number of protons in its nucleus.",
            skills:[{info:'React'}, {info:'React Router'},{info:'ES6'},{info:'Express'},{info:'Mongo DB'},{info:'SASS'},{info:'Bootstrap'},{info:'Firebase'}],
        },
        {
            title:"Table Tab Food Ordering System",
            avatar:"https://nibblematrix.com/wp-content/uploads/Food-System.png",
            alt:"table tab food ordering system",
            desc:"This App allows you to place your food order in a restaurant by yourself without waiting for waiter to take your order.",
            skills:[{info:'HTML5'}, {info:'CSS3'},{info:'Bootstrap4'},{info:'Javascript'}],
        },
    
    ];

    const [state, setState]=useState(projectList);
    const [search,setSearch]=useState('');

    const filteredResult=state.filter(project=>(
        project.title.toLowerCase().indexOf(search)!==-1
    ))

    return (
        <div className="container mt-5 text-left">
            <Helmet>
                <title>Projects | Venkatesh Kumar</title>
            </Helmet>
           <h1 className="m-4 p-4 text-center">Projects</h1>
           <input type="search" className="bg-transparent shadow-sm form-control" placeholder="Search Projects here..." onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>

            {filteredResult.map((projectslist)=>(
                <div className="glass-effect row mx-auto my-4 shadow">
                <div className="col-md-4 col-sm-12 col-xs-12">
                <img src={projectslist.avatar} alt={projectslist.alt}/>    
                </div>               
                <p className="col-md-8 col-sm-12 col-xs-12 p-2 my-2 h3">{projectslist.title}<br/>
                <hr/>
                <span className="m-auto">{projectslist.desc} <a href="#">read more</a></span>
                <br/>
                
                <Link to={`/projects/${projectslist.alt}`} className="btn btn-sm btn-link">View More</Link>
              
                <br/>
                <div className="row text-center m-1">
                {projectslist.skills.map((sub)=>(
                    <span className="col-auto label badge-pill bg-info px-2 py-1 m-1 shadow-sm">{sub.info}</span>
                ))}
                </div>
                </p>
            </div>
            ))}
        </div>
    )
}

export default Projects;
