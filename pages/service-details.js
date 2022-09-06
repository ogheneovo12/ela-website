import React  from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import Divider from '../components/other/Divider'
import CtaForm from '../components/other/CtaForm'
import ServiceSidebar from '../components/services/ServiceSidebar'
import ServiceDtlsContent from '../components/services/ServiceDtlsContent'
import Footer from '../components/other/Footer'

export default function ServiceDetailsPage() {
    return (
        <>
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Breadcrumb */}
            <Breadcrumb title="Service Details." />

            {/* Service Details */}
            <section className="service-details-wrapper">
                <div className="container">
                    <div className="service-details-grid d-grid">
                        <ServiceSidebar />
                        <ServiceDtlsContent />
                    </div>
                </div>
            </section>
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
