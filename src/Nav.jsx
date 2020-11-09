import React,{useState} from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import {FcMenu} from 'react-icons/fc';

function Nav() {
    const [dark,setDark]=useState();

    const themeToggle=()=>{
        if(dark){
            localStorage.setItem('theme','light-theme');
            setDark(false);
        }
        else{
            localStorage.setItem('theme','dark-theme');
            setDark(true);
        }
    }
   
    return (
        <div>
            <nav className="navbar navbar-expand-md fixed-top shadow-sm">
              <div className="container">
                        <Link to="/" className="navbar-brand">Home</Link>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navContent" aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FcMenu/>
                    </button>

                    <div id="navContent" className="justify-content-end navbar-collapse collapse">
                        <div className="navbar-nav text-left">
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/blog" className="nav-item nav-link">Blog</Link>
                            <Link to="/projects" className="nav-item nav-link">Projects</Link>
                            <Link to="/resume" className="nav-item nav-link">Resume</Link>
                            <button className="btn btn-outline-dark btn-sm py-0 m-2 theme-toggle" onClick={themeToggle}>{dark?"Light Mode":"Dark Mode"}</button>
                        </div>    
                    </div>     
              </div>
        </nav>
        </div>
    )
}
export default Nav;
