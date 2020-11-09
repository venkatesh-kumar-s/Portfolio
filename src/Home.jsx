import React from 'react';
import './Home.css';
import Helmet from 'react-helmet';
import avatar from './venkatesh-avatar.jpg';

function Home(){
    return(
        <div className="jumbotron bg-transparent pb-1 mt-3">
            <Helmet>
                <title>Home | Venkatesh Kumar</title>
            </Helmet>
            <div className="py-0 my-0 container">
                <img className="my-avatar shadow" src={avatar} alt="venkatesh kumar"/>
           
            <h1 className="full-name">
                <span className="first-name">Venkatesh Kumar</span>
                &nbsp;
                <span className="last-name">S.</span>
            </h1>
            </div>
            
        </div>
    );
}
export default Home;