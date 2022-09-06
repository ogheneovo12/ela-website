import React, { Component } from 'react'
import { BlogContext } from "components/context/context";
import BlogFullWidthContent from "./BlogFullWidthContent"
import { FiChevronsLeft } from 'react-icons/fi'
import { FiChevronsRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default class BlogFullWidth extends Component {
    static contextType = BlogContext;
    render() {
        let { featuredBlogs: blogfull } = this.context;
        blogfull = blogfull.map((blog, index) => {
            return <BlogFullWidthContent key={index} blog={blog} />
        });
        return (
            <>
                <section className="blog-wrapper blog-full-width">
                    <div className="container">
                        <div className="blog-grid">
                            {blogfull}
                        </div>
                        <ul className="pagination d-flex">
                            <li><Link className='page-link' to="/blog-full-width"><FiChevronsLeft /></Link></li>
                            <li><Link className='page-link' to="/blog-full-width">1</Link></li>
                            <li><span className="page-link current">2</span></li>
                            <li><Link className='page-link' to="/blog-full-width">3</Link></li>
                            <li><Link className='page-link' to="/blog-full-width"><FiChevronsRight /></Link></li>
                        </ul>
                    </div>
                </section>
            </>
        )
    }
}
