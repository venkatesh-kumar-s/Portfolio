import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectsResource from './ProjectsResource.jsx'
import './ProjectsMore.css'


function ProjectsMore() {

    const params = useParams();
    const data = ProjectsResource[params.id];

    return (
        <div className="container projects-more">
            <h1>{data.title}</h1>
            
            <div className="row text-center m-5 justify-content-center">
                {data.skills.map((sub)=>(
                    <span className=" label badge-pill bg-info px-2 py-1 m-1 shadow-sm">{sub.info}</span>
                ))}
            </div>

            <div>
                <button className="btn btn-dark m-2" onClick={()=>window.open(data.git_url)}>View on GitHub</button>
                <button className="btn btn-primary m-2" onClick={()=>window.open(data.live_url)}>View Website</button>
            </div>

           <hr/>
           <p className="text-left" style={{fontSize:25,fontWeight:500}}>Project Gallery</p>
           <div className="container">
               {data.images.map((res)=>(
                    <img className="col-xs-12 col-sm-12 col-md-4 p-2" src={res} alt={res} style={{borderRadius:'20px'}}/>
               ))}
           </div>
           <hr/>
            
           <p className="text-left" style={{fontSize:25,fontWeight:500}}>Project Description</p>
           <p className="text-justify" style={{fontWeight:400}}>{data.desc}</p>
        </div>
    )
}

export default ProjectsMore;
