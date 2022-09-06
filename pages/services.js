import React  from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import SectionsTitle from '../components/common/SectionsTitle'
import Service from '../components/services/Services'
import ServiceSliderSection from "../sections/ServiceSliderSection";
import ServiceVideo from '../components/services/ServiceVideo';
import Divider from '../components/other/Divider'
import CtaForm from '../components/other/CtaForm'
import Footer from '../components/other/Footer'
import sectiondata from "../store/store";

export default function ServicePage() {
    return (
        <div className="service-main">
            <header className="header-area">
                <Navbar />
            </header>
            <Breadcrumb title="Services." />
            <div className="h-service">
                <div className="container">
                    <div className="row text-center">
                        <SectionsTitle title={sectiondata.Services.Service1.secTitle} subtitle={sectiondata.Services.Service1.secSubtitle} />
                    </div>
                </div>
                <div className="container">
                    <div className="services-items-grid">
                        <Service sLists={sectiondata.Services.Service1.serviceLists} />
                    </div>
                </div>
            </div>

            {/* Services Slider*/}
            <ServiceSliderSection
                serviceSlideritem={sectiondata.Services.Service2.lists}
                sectitle={sectiondata.Services.Service2.sectitle}
                secsubtitle={sectiondata.Services.Service2.secsubtitle}
                content={sectiondata.Services.Service2.content}
                buttontext={sectiondata.Services.Service2.buttontext}
                buttonurl={sectiondata.Services.Service2.buttonurl} />

            {/* Services Video */}
            <ServiceVideo />
            <Divider />

            {/* CTA Form */}
            <div className="form-white-bg">
                <CtaForm />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}
