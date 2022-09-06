import React  from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import Portfolio from '../components/portfolio/Portfolio'
import Divider from '../components/other/Divider'
import CtaForm from '../components/other/CtaForm'
import Footer from '../components/other/Footer'

export default function PortfolioPage() {
    return (
        <>
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Breadcrumb */}
            <Breadcrumb title="Events and Projects." />

            {/* Portfolio */}
            <Portfolio />
            <Divider />

            {/* CTA Form */}
            <div className="form-white-bg">
                <CtaForm />
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}
