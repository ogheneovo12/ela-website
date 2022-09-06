import React  from 'react'
import { Link } from 'react-router-dom'
import { FiDownload } from 'react-icons/fi'

export default function ServiceBroucher({title, content, button, buttonurl}) {
    return (
        <>
            {title || content || button ?
                <div className="service-widgets widget_brochures">
                    {title ?
                        <h3>{title}</h3>
                        : ''}
                    {content ?
                        <p>{content}</p>
                        : ''}
                    {button ?
                        <Link className="theme-button" to={buttonurl} download>{button} <FiDownload className="icon" /></Link>
                        : ''}
                </div>
            : ''}
        </>
    )
}
