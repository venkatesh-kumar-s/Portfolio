import React,{useState} from 'react';
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
import Temp from './Temp';
import ViewMore from './ViewMore';
import {useSelector} from 'react-redux';


function App() {
  const theme = useSelector(state => state.dark);
  return (
    <div className={`${theme?'dark-mode App':'light-mode App'}`}>
      <Helmet>
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
            <Route path="/temp" component={Temp}/>
            <Route component={NotFound}/>
          </Switch>
      </Router>
    
      <Footer/>
    </div>
  );
}

export default App;
