import React from 'react'
import './NotFound.css'
import Helmet from 'react-helmet'

function NotFound() {
    return (
        <div className="col-md-12 col-xs-12 container pt-5 not-found">
            <Helmet>
                <title>Error | 404</title>
            </Helmet>
                <img className="mt-4 img-fluid" src="https://armyandnavyacademy.org/wp-content/uploads/2019/06/404-error-page-not-found.png" alt="notfound"/>
                <h1 className="container p-4 bg-transparent text-center ">Oops! 404 ... page not found!</h1>
        </div>
    )
}

export default NotFound
