import React  from 'react'
import Navbar from '../../components/common/Navbar'
import Breadcrumb from '../../components/common/Breadcrumb'
import Pricing from "../../sections/Pricing";
import CtaForm from '../../components/other/CtaForm'
import Footer from '../../components/other/Footer'
import sectiondata from "../../store/store";

export default function PricingPage() {
    return (
        <>
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Breadcrumb */}
            <Breadcrumb title="Our Pricing." />

            {/* Pricing Plan */}
            <div className="plain-pricing-table">
                <Pricing
                    secTitle={sectiondata.Pricingdata.secTitle}
                    secSubtitle={sectiondata.Pricingdata.secSubtitle}
                    navlist={sectiondata.Pricingdata.tablist}
                    planlists={sectiondata.Pricingdata.planlists} />
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
