import React,{useState} from 'react';
import './Blog.css';
import Helmet from 'react-helmet';


function Blog() {
    const data=[
        {
            avatar:"https://mindlercareerlibrarynew.imgix.net/1G-Computer_ScienceCsIT_Software_Engineering.png",
            alt:"Software Engineering",
            title:"The Software Engineering Learning Plan",
            date:"26 April, 2020",
            content:"Software engineering is the systematic application of engineering approaches to the development of software. Software engineering is a computing discipline."
        },
        {
            avatar:"https://i2.wp.com/elysiumacademy.org/wp-content/uploads/2018/12/REACT-JS.jpg?resize=1280%2C720&ssl=1",
            alt:"react js",
            title:"Road Map to React Js",
            date:"8 August, 2020",
            content:"React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications"
        },
        {
            avatar:"https://www.freecodecamp.org/news/content/images/2019/10/react-vs-angular.png",
            alt:"React vs Angular",
            title:"React vs Angular",
            date:"18 October, 2020",
            content:"Angular is a full-fledged framework, while React is a library. React. js uses virtual DOM and one-way data binding while Angular operates on real DOM & two-way data binding. There's also a difference in bundle size (React's smaller) and speed (React works a bit faster)."
        },
        {
            avatar:"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/168257270/original/f78696dbacb2929525009ef4f3380f8ebdee8bab/develop-mern-stack-application.jpg",
            alt:"mern stack",
            title:"Complete Guide to MERN Stack Developer",
            date:"21 August, 2020",
            content:"MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. MongoDB - document database. Express(.js) - Node.js web framework. React(.js) - a client-side JavaScript framework. Node(.js) - the premier JavaScript web server."
        },
        {
            avatar:"https://lh3.googleusercontent.com/iKHbqfOA22cBvWvdnGoi165ZxDy6lqWHDIrmDGORZU0NvNX_CgnexW8OgKmDVd5sQongQwCwsqsnu3SJCCPySlozJFYnJRE=s600",
            alt:"mongo db",
            title:"Why Mongo DB?",
            date:"2 July, 2020",
            content:"MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License."
        },
        
    ];
    const [state,setState]=useState(data);
    const [search,setSearch]=useState('');
   
    const filteredResult=state.filter(blog=>
        blog.title.toLowerCase().indexOf(search)!==-1
   )
     
   
    return (
        <div className="container mt-5 pb-4">
            <Helmet>
                <title>Blog | Venkatesh Kumar</title>
            </Helmet>
            <h1 className="m-4 p-4">Tech Blog</h1>
            <input type="search" className="form-control shadow-sm bg-transparent" placeholder="Search Blogs here..." onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>

            <div className="card-columns mt-5">
                   {filteredResult.map((blogs)=>
                        <div className="card bg-transparent shadow">
                        <img className="card-img-top" src={blogs.avatar} alt={blogs.alt}/>
                        <div className="card-body">
                            <h4 className="card-title">{blogs.title}</h4>
                            <span>{blogs.date}</span>
                            <p className="card-text">{blogs.content}</p>
                        </div>
                    </div>
                   )}
            </div>
        </div>
    )
}

export default Blog;
