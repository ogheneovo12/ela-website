import React  from 'react'
import TeamDetailsContent from '../components/team/TeamDetailsContent'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import Footer from '../components/other/Footer'


export default function TeamDetails() {
    return (
        < >
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Breadcrumb */}
            <Breadcrumb title="Team Details." />

            {/* Team */}
            <TeamDetailsContent />

            {/* Footer */}
            <Footer />

        </>
    )
}
