import React  from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import BlogFullWidth from '../components/blog/BlogFullWidth'
import CtaForm from "../components/other/CtaForm";
import Footer from "../components/other/Footer";

export default function BlogFullPage() {
    return (
        <>
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Breadcrumb */}
            <Breadcrumb title="Blog Full Width." />

            {/* Blog Full Width */}
            <div className="blog-full-width-wrap">
                <BlogFullWidth />
            </div>

            {/* CTA Form */}
            <div className="form-white-bg">
                <CtaForm />
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}
