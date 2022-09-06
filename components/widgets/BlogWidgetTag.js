import React  from 'react'
import { Link } from 'react-router-dom'

export default function BlogWidgetTag() {
    return (
        <>
            <div className="blog-sidebar-widget widget_tags">
                <h3>Popular Tags.</h3>
                <ul>
                    <li><Link to="/blog-details">Business</Link></li>
                    <li><Link to="/blog-details">Finance</Link></li>
                    <li><Link to="/blog-details">Trading</Link></li>
                    <li><Link to="/blog-details">Strategy</Link></li>
                    <li><Link to="/blog-details">Global</Link></li>
                    <li><Link to="/blog-details">Marketing</Link></li>
                    <li><Link to="/blog-details">Technology</Link></li>
                    <li><Link to="/blog-details">Financial</Link></li>
                    <li><Link to="/blog-details">Consulting</Link></li>
                </ul>
            </div>
        </>
    )
}
