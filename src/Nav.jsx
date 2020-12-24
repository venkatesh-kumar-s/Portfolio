import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import {FcMenu} from 'react-icons/fc';
import {useSelector, useDispatch} from 'react-redux';
import themeToggler from './actions'

function Nav() {
 
    const toggle = useSelector(state => state.dark);
    const dispatch = useDispatch();
    
    return (
        <div>
            <nav className="navbar navbar-expand-md shadow-sm fixed-top">
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
                            <button className="btn btn-outline-dark btn-sm py-0 m-2 theme-toggle" 
                            onClick={()=>dispatch(themeToggler())}>
                                {toggle?'Light Mode':'Dark Mode'}
                                </button>
                        </div>    
                    </div>     
              </div>
        </nav>
        </div>
    )
}
export default Nav;
