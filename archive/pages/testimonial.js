import React  from 'react'
import Navbar from '../../components/common/Navbar'
import Breadcrumb from '../../components/common/Breadcrumb'
import Divider from '../../components/other/Divider'
import CtaForm from '../../components/other/CtaForm'
import Footer from '../../components/other/Footer'
import TestimonialSection from "../../sections/TestimonialSections";
import sectiondata from "../../store/store";

export default function TestimonialPage() {
    return (
        <>
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Breadcrumb */}
            <Breadcrumb title="Testimonial" />

            {/* Testimonial*/}
            <TestimonialSection
                secTitle={sectiondata.Testimonialdata.secTitle}
                secSubtitle={sectiondata.Testimonialdata.secSubtitle}
                sliders={sectiondata.Sliders.testimonial}
                imgshapes={sectiondata.Testimonialdata.imagesshape} />
            <Divider />

            {/* Cta Form */}
            <div className="form-white-bg">
                <CtaForm />
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}
