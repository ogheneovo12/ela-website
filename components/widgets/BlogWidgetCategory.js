import React  from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

export default function BlogWidgetCategory() {
    return (
        <>
            <div className="blog-sidebar-widget widget_category">
                <h3>Categories</h3>
                <ul>
                    <li><Link to="/blog-details">Business <FiChevronRight className="icon" /></Link></li>
                    <li><Link to="/blog-details">Consulting <FiChevronRight className="icon" /></Link></li>
                    <li><Link to="/blog-details">Banking <FiChevronRight className="icon" /></Link></li>
                    <li><Link to="/blog-details">Marketing <FiChevronRight className="icon" /></Link></li>
                    <li><Link to="/blog-details">Technology <FiChevronRight className="icon" /></Link></li>
                    <li><Link to="/blog-details">Market Updates <FiChevronRight className="icon" /></Link></li>
                </ul>
            </div>
        </>
    )
}
