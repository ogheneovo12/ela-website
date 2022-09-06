import React from "react";
import Navbar from "../components/common/Navbar";
import SectionsTitle from "../components/common/SectionsTitle";
import About1 from "../components/about/About1";
import Divider from "../components/other/Divider";
import About from "../components/about/About";
import CounterUp from "../sections/CounterUp";
import HeroSlider from "../components/sliders/HeroSlider";
import SimpleTab from "../components/tabs/SimpleTab";
import Cta from "../sections/Cta";
import Team from "../components/team/Team";
import ChartArea from "../sections/ChartArea";
import Clients from "../sections/Clients";
import Pricing from "../sections/Pricing";
import CtaForm from "../components/other/CtaForm";
import Blog from "../components/blog/Blog";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import Footer from "../components/other/Footer";
import sectiondata from "../store/store";
import ServiceSection1 from "../sections/services/ServiceSection1";
import TestimonialSection from "../sections/TestimonialSections";
import Anthem from "sections/Anthem";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="header-area">
        <Navbar />
      </header>

      {/* Hero Slider */}
      <HeroSlider slideItems={sectiondata.Sliders.heroSlider1} />

      {/* Services */}
      <ServiceSection1
        secTitle={sectiondata.Services.Service1.secTitle}
        secSubtitle={sectiondata.Services.Service1.secSubtitle}
        secButton={sectiondata.Services.Service1.secButton}
        secButtonUrl={sectiondata.Services.Service1.secButtonUrl}
        serviceItems={sectiondata.Services.Service1.serviceLists}
      />

      <Divider />

      {/* About 1*/}
      <About1 />
      <Divider />

      {/* Why Choose Us */}
      {/* <SimpleTab secTitle={sectiondata.Tabdata.tab1.secTitle} secSubtitle={sectiondata.Tabdata.tab1.secSubtitle} tabslist={sectiondata.Tabdata.tab1.items} tabsnav={sectiondata.Tabdata.tab1.tabsnav} /> */}

      {/* Counter Up */}
      <Anthem />

      {/* Testimonial*/}
      {/* <TestimonialSection
                secTitle={sectiondata.Testimonialdata.secTitle}
                secSubtitle={sectiondata.Testimonialdata.secSubtitle}
                sliders={sectiondata.Sliders.testimonial}
                imgshapes={sectiondata.Testimonialdata.imagesshape} /> */}

      {/* CTA */}
      <Cta />

      {/* Team */}
      <Team
        secTitle={sectiondata.Teammemberdata.secTitle}
        secSubtitle={sectiondata.Teammemberdata.secSubtitle}
        teammembers={sectiondata.Teammemberdata.teammembers}
      />
      <Divider />

      {/* ChartArea */}
      {/* <ChartArea
                secTitle={sectiondata.Chartareadata.secTitle}
                secSubtitle={sectiondata.Chartareadata.secSubtitle}
                title1={sectiondata.Chartareadata.title1}
                title2={sectiondata.Chartareadata.title2}
                content1={sectiondata.Chartareadata.content1}
                content2={sectiondata.Chartareadata.content2}
                buttontext={sectiondata.Chartareadata.buttontext}
                buttonurl={sectiondata.Chartareadata.buttonurl} /> */}

      {/* Clients Logo */}
      <Clients sliders={sectiondata.Sliders.clientlogos} />

      {/* Pricing Table */}
      {/* <Pricing
                secTitle={sectiondata.Pricingdata.secTitle}
                secSubtitle={sectiondata.Pricingdata.secSubtitle}
                navlist={sectiondata.Pricingdata.tablist}
                planlists={sectiondata.Pricingdata.planlists} /> */}

      {/* Cta Form */}
      <CtaForm />
      <Divider />

      {/* Latest News */}
      <div className="h-blog-wrap">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <SectionsTitle
                title="Our Recent News."
                subtitle="Latest From The Blog"
              />
            </div>
            <div className="col-4 text-right">
              <Link to="/blog-grid" className="theme-button">
                View All Posts <FiChevronRight className="icon" />
              </Link>
            </div>
          </div>
        </div>
        <Blog />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
