import React from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import BlogsContainer from '../components/blog/BlogsContainer'
import { Link } from 'react-router-dom'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import CtaForm from '../components/other/CtaForm'
import Footer from '../components/other/Footer'

export default function BlogGridPage() {
    return (
        <>
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Breadcrumb */}
            <Breadcrumb title="ELA Blog and News Page." />

            {/* Blog Grid */}
            <section className="blog-wrapper blog-grid-page">
                <div className="container">
                    <div className="blog-grid">
                        <BlogsContainer />
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

            {/* CTA Form */}
            <div className="form-white-bg">
                <CtaForm />
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}
