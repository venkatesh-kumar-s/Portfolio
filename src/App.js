import React from 'react';
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
import Temp from './Temp';
import {useSelector} from 'react-redux';
import ProjectsMore from './ProjectsMore'
import { Helmet } from 'react-helmet';


function App() {
  const theme = useSelector(state => state.dark);
  return (
    <div className={`${theme?'dark-mode App':'light-mode App'}`}>
    <Helmet>
      <meta name="theme-color" content={`${theme?'black':'#90e0ef'}`}/>
    </Helmet>

       <Router>
          <Nav/>
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/about" component={About}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/projects" exact component={Projects}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/temp" component={Temp}/>
            <Route path="/projects/:id" children={<ProjectsMore/>}/>
            <Route component={NotFound}/>
          </Switch>
      </Router>
    
      <Footer/>
    </div>
  );
}

export default App;
