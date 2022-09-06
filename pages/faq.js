import React  from 'react'
import Accordion from '../components/other/Accordions'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import Divider from '../components/other/Divider'
import CtaForm from '../components/other/CtaForm'
import TeamSidebar from '../components/team/TeamSidebar'
import Footer from '../components/other/Footer'
import sectiondata from "../store/store";

export default function FAQ() {
    return (
        <>
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Breadcrumb */}
            <Breadcrumb title="FAQ" />


            {/* Faq */}
            <div className="container">
                <div className="faq-grid d-grid">
                    <div className="left">
                        {/* FAQ lists */}
                        <Accordion items={sectiondata.faqdata} />
                    </div>
                    <div className="right">
                        {/* Sidebar */}
                        <TeamSidebar />
                    </div>
                </div>
            </div>
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
