import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { useParams } from 'react-router'

function ViewMore(props) {
    let {topicId} =useParams();
    return (
        <div className="container mt-5" key={topicId}>
            <p className="display-4">{props.title}</p>
            {/**carousel */}
            <OwlCarousel className="owl-theme" loop>
                <div className="item">
                    <img src={props.avatar} alt={props.title}/>
                </div>
                <div className="item">
                    <img src={props.avatar} alt={props.title}/>
                </div>
                <div className="item">
                    <img src={props.avatar} alt={props.title}/>
                </div>
                <div className="item">
                    <img src={props.avatar} alt={props.title}/>
                </div>
            </OwlCarousel>
            {/**Description */}
            <p className="text-left" style={{fontWeight:450}}>
            <strong>Description : </strong>
            This App allows you to place your food order in a restaurant by yourself without waiting for waiter to take your order.
            </p>
            {/**Technology */}
            <p className="text-left" style={{fontWeight:450}}>
            <strong>Technologies Used : </strong>
            <ul>
                <li>{props.skills}</li>
            </ul>
            </p>
            {/**Live URL */}
            <p className="text-left" style={{fontWeight:450}}>
            <a href="https://www.google.com" target="_blank">View Live Project</a>
            </p>
        </div>
    )
}

export default ViewMore;
