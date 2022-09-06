import React  from 'react'
import PortfolioDetailsContent from '../components/portfolio/PortfolioDetailsContent'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import CtaForm from '../components/other/CtaForm'
import Divider from '../components/other/Divider'
import Footer from '../components/other/Footer'

export default function PortfolioDetailsPage() {
    return (
        <>
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Breadcrumb */}
            <Breadcrumb title="Portfolio Details." />

            {/* Portfolio Details */}
            <PortfolioDetailsContent />
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
