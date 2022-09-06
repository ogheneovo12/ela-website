import React  from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import ContactDetails from '../components/contact/ContactDetails'
import Footer from '../components/other/Footer'

export default function ContactPage() {
    return (
        <>
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Breadcrumb */}
            <Breadcrumb title="Contact Us." />

            {/* Contact Details */}
            <ContactDetails />

            {/* Footer */}
            <Footer />
        </>
    )
}
