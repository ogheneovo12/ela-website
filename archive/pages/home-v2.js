import React   from 'react'
import Navbar from "../../components/common/Navbar";
import SectionsTitle from '../../components/common/SectionsTitle'
import Divider from '../../components/other/Divider'
import HeroSlider2 from "../../components/sliders/HeroSlider2";
import About2 from '../../components/about/About2';
import ServiceSliderSection from "../../sections/ServiceSliderSection";
import ServiceVideo from '../../components/services/ServiceVideo';
import AdvanceTab from '../../components/tabs/AdvanceTab';
import CounterUp from "../../sections/CounterUp";
import Team from '../../components/team/Team';
import ChartArea from "../../sections/ChartArea";
import TestimonialSection from "../../sections/TestimonialSections";
import Cta from "../../sections/Cta";
import Clients from "../../sections/Clients";
import Blog from '../../components/blog/Blog';
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

import Footer from '../../components/other/Footer';
import sectiondata from "../../store/store";

export default function HomeV2() {
    return (
        <main className="home-v2">
            {/* Header */}
            <header className="header-area header-style2">
                <Navbar />
            </header>

            {/* Hero Slider*/}
            <HeroSlider2 slideitems={sectiondata.Sliders.heroSlider2} />

            {/* About 2 */}
            <About2
                lfTitle={sectiondata.Aboutdata.about2.left.title}
                lfContent1={sectiondata.Aboutdata.about2.left.content1}
                lfContent2={sectiondata.Aboutdata.about2.left.content2}
                lfLists={sectiondata.Aboutdata.about2.left.lists}
                lfButtontext={sectiondata.Aboutdata.about2.left.buttontext}
                lfButtonurl={sectiondata.Aboutdata.about2.left.buttonurl}
                rtImg1={sectiondata.Aboutdata.about2.right.img1}
                ftImg2={sectiondata.Aboutdata.about2.right.img2}
                rtTitle={sectiondata.Aboutdata.about2.right.title}
                rtContent={sectiondata.Aboutdata.about2.right.content}
                rtButtontext={sectiondata.Aboutdata.about2.right.buttontext}
                rtButtonurl={sectiondata.Aboutdata.about2.right.buttonurl} />

            {/* Services Slider*/}
            <ServiceSliderSection
                serviceSlideritem={sectiondata.Services.Service2.lists}
                sectitle={sectiondata.Services.Service2.sectitle}
                secsubtitle={sectiondata.Services.Service2.secsubtitle}
                content={sectiondata.Services.Service2.content}
                buttontext={sectiondata.Services.Service2.buttontext}
                buttonurl={sectiondata.Services.Service2.buttonurl} />

            {/* Service Video */}
            <ServiceVideo />
            <Divider />

            {/* Advance Tab */}
            <AdvanceTab
                secTitle={sectiondata.Tabdata.tab2.secTitle}
                secSubtitle={sectiondata.Tabdata.tab2.secSubtitle}
                tabnav={sectiondata.Tabdata.tab2.tabnav}
                tablists={sectiondata.Tabdata.tab2.tablists} />

            {/* Counter Up */}
            <CounterUp
                secTitle={sectiondata.CounterUp.secTitle}
                secSubtitle={sectiondata.CounterUp.secSubtitle}
                counteritems={sectiondata.CounterUp.items}
                counterbottomtitle={sectiondata.CounterUp.counterbottomtitle}
                counterbottombtn={sectiondata.CounterUp.counterbottombtn}
                counterbottombtnurl={sectiondata.CounterUp.counterbottombtnurl} />

            {/* Team Member */}
            <Team
                secTitle={sectiondata.Teammemberdata.secTitle}
                secSubtitle={sectiondata.Teammemberdata.secSubtitle}
                teammembers={sectiondata.Teammemberdata.teammembers} />
            <Divider />

            {/* Chart Area */}
            <ChartArea
                secTitle={sectiondata.Chartareadata.secTitle}
                secSubtitle={sectiondata.Chartareadata.secSubtitle}
                title1={sectiondata.Chartareadata.title1}
                title2={sectiondata.Chartareadata.title2}
                content1={sectiondata.Chartareadata.content1}
                content2={sectiondata.Chartareadata.content2}
                buttontext={sectiondata.Chartareadata.buttontext}
                buttonurl={sectiondata.Chartareadata.buttonurl} />
            <Divider />

            {/* Testimonial */}
            <TestimonialSection
                secTitle={sectiondata.Testimonialdata.secTitle}
                secSubtitle={sectiondata.Testimonialdata.secSubtitle}
                sliders={sectiondata.Sliders.testimonial}
                imgshapes={sectiondata.Testimonialdata.imagesshape} />

            {/* CTA */}
            <Cta />

            {/* Client Logo */}
            <Clients sliders={sectiondata.Sliders.clientlogos} />
            <Divider />

            {/* Latest News */}
            <div className="h-blog-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <SectionsTitle title="Our Recent News." subtitle="Latest From The Blog" />
                        </div>
                        <div className="col-4 text-right">
                            <Link to="/blog-grid" className="theme-button">View All Posts <FiChevronRight className="icon" /></Link>
                        </div>
                    </div>
                </div>
                <Blog />
            </div>

            {/* Footer */}
            <Footer />
        </main>
    )
}
