import React,{useState,useEffect} from 'react';
import './App.css';
import Footer from './Footer.jsx'
import Main from './Main.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './About.jsx';
import Blog from './Blog.jsx';
import Projects from './Projects.jsx';
import Resume from './Resume.jsx';
import Nav from './Nav';
import NotFound from './NotFound';
import {Helmet} from 'react-helmet';
import fav from './fav.png';


function App() {
 
const [darkMode,setDarkMode]=useState(false);

useEffect(()=>{
    const themeColor=localStorage.getItem('theme');
    if(themeColor==='dark-theme')
    {setDarkMode(true);}
    else{setDarkMode(false);}
},[darkMode]);

  return (
    <div className={`App ${darkMode? 'dark-mode': 'light-mode'}`}>
      <Helmet>
        <meta name="theme-color" content={`${darkMode?'#000000':'#90e0ef'}`}/>
        <link rel="icon" href={fav}/>
      </Helmet>
       <Router>
          <Nav/>
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/about" component={About}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/resume" component={Resume}/>
            <Route component={NotFound}/>
          </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
