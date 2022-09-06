import {Link} from "react-router-dom";
import {FiPhone} from "react-icons/fi";
import React from "react";


export default function TeamNeedHelp({title, content, button, buttonurl}) {
    return (
        <div className="sidebar-widget sidebar-contact-form">
            {title?
                <h4>{title}</h4>
            : ''}
            {content?
                <p>{content}</p>
            : ''}
            {button?
                <Link to={buttonurl} className="theme-button">{button} <FiPhone className="icon" /></Link>
            : ''}
        </div>
    )
}
