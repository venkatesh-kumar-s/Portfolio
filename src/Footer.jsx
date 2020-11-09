import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="p-2 bg-transparent footer">
            <hr/>
            <span className="text-muted"> 
                <b>Venkatesh Kumar</b>
                &nbsp;
                &copy; 2020.
                &nbsp;
                Portfolio inspired by <a href="https://www.linkedin.com/in/stacykutyepov/" target="_blank">@codemyjourney</a> | <b>Stacy Kutyepov</b>
            </span>
        </div>
    )
}

export default Footer
