import React  from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function BlogWidgetArchive() {
    return (
        <>
            <div className="blog-sidebar-widget widget_archive">
                <h3>Archives.</h3>
                <ul>
                    <li><Link to="/blog-details">January 2019 <FiChevronRight className="icon" /></Link></li>
                    <li><Link to="/blog-details">December 2019 <FiChevronRight className="icon" /></Link></li>
                    <li><Link to="/blog-details">February 2020 <FiChevronRight className="icon" /></Link></li>
                    <li><Link to="/blog-details">March 2020 <FiChevronRight className="icon" /></Link></li>
                    <li><Link to="/blog-details">April 2020 <FiChevronRight className="icon" /></Link></li>
                </ul>
            </div>
        </>
    )
}
