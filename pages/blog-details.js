import React  from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import BlogDetailsContent from '../components/blog/BlogDetailsContent'
import Footer from '../components/other/Footer'

export default function BlogDetailsPage() {
    return (
        <>
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Breadcrumb */}
            <Breadcrumb title="Blog Details." />

            {/* Blog Details */}
            <BlogDetailsContent />

            {/* Footer */}
            <Footer />
        </>
    )
}
