import React  from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import SectionsTitle from "../components/common/SectionsTitle";
import ServiceSlider from "../components/sliders/ServiceSlider";

export default function ServiceSliderSection({serviceSlideritem, sectitle, secsubtitle, content, buttontext, buttonurl}) {
    return (
        <section className="service-slider-wrapper">
            <div className="container">
                <div className="service-slider-grid d-grid">
                    <div className="service-slider-left">
                        <ServiceSlider slideItems={serviceSlideritem} />
                    </div>
                    <div className="service-slider-right">
                        <SectionsTitle title={sectitle} subtitle={secsubtitle} />
                        {content?
                            <p className="desc">{content}</p>
                        : ''}
                        {buttontext?
                            <Link to={buttonurl} className="simple-button">{buttontext} <FiChevronRight className="icon" /></Link>
                        : ''}
                    </div>
                </div>
            </div>
        </section>
    )
}
