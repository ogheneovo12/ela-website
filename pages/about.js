import React  from 'react'
import Navbar from "../components/common/Navbar";
import Breadcrumb from '../components/common/Breadcrumb';
import About from '../components/about/About';
import ServiceSection2 from "../sections/services/ServiceSection2";
import SimpleTab from '../components/tabs/SimpleTab';
import CounterUp from "../sections/CounterUp";
import Team from '../components/team/Team';
import Clients from "../sections/Clients";
import CtaForm from '../components/other/CtaForm';
import Footer from '../components/other/Footer';
import sectiondata from "../store/store";

export default function About_Page() {
    return (
        <main className="about-page">
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Breadcrumb */}
            <Breadcrumb title="About Us." />

            {/* About 2 */}
            <About />

            {/* Services */}
            <ServiceSection2 servicelist={sectiondata.Services.Service3} />

            {/* Why Choose Us */}
            <SimpleTab secTitle={sectiondata.Tabdata.tab1.secTitle} secSubtitle={sectiondata.Tabdata.tab1.secSubtitle} tabslist={sectiondata.Tabdata.tab1.items} tabsnav={sectiondata.Tabdata.tab1.tabsnav} />

            {/* Counter Up */}
            {/* <CounterUp
                secTitle={sectiondata.CounterUp.secTitle}
                secSubtitle={sectiondata.CounterUp.secSubtitle}
                counteritems={sectiondata.CounterUp.items}
                counterbottomtitle={sectiondata.CounterUp.counterbottomtitle}
                counterbottombtn={sectiondata.CounterUp.counterbottombtn}
                counterbottombtnurl={sectiondata.CounterUp.counterbottombtnurl} /> */}

            {/* Team */}
            <Team
                secTitle={sectiondata.Teammemberdata.secTitle}
                secSubtitle={sectiondata.Teammemberdata.secSubtitle}
                teammembers={sectiondata.Teammemberdata.teammembers} />

            {/* Clients Logo */}
            <Clients sliders={sectiondata.Sliders.clientlogos} />
            <div className="form-white-bg">
                <CtaForm />
            </div>

            {/* Footer */}
            <Footer />
        </main>
    )
}
