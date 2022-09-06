import React  from 'react'
import Navbar from "../components/common/Navbar";
import Breadcrumb from '../components/common/Breadcrumb';

import Divider from '../components/other/Divider'
import CtaForm from '../components/other/CtaForm';
import Footer from '../components/other/Footer';
import Team from "../components/team/Team";
import sectiondata from "../store/store";

export default function TeamGrid() {
    return (
        <div className="teamgrid-page">
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Breadcrumb */}
            <Breadcrumb title="Team Grid." />

            {/* Team */}
            <Team
                secTitle={sectiondata.Teammemberdata.secTitle}
                secSubtitle={sectiondata.Teammemberdata.secSubtitle}
                teammembers={sectiondata.Teammemberdata.moreTeam} />
            <Divider />

            {/* Cta Form */}
            <div className="form-white-bg">
                <CtaForm />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}
