import React from 'react'
import Extrafooter from './Extrafooter'
import Headline from './Headline'
import Home from './Home'
import Social from './Social'
import './Extrafooter.css'

function Main() {
    return (
        <div className="main">
           <div className="container v-center col-xs-12 col-sm-12">
            <Home/>
            <Headline/>
            <Social/>
           </div>
           <Extrafooter/>
        </div>
    )
}

export default Main
