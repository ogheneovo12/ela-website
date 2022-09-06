import React from "react";
import SectionsTitle from "../components/common/SectionsTitle";
import Testimonial from "../components/sliders/Testimonial";


export default function TestimonialSection({secTitle, secSubtitle, sliders, imgshapes}) {
    return (
        <section className="testimonial-wrapper ">
            <div className="text-center">
                <SectionsTitle title={secTitle} subtitle={secSubtitle} />
            </div>
            <Testimonial slideitems={sliders} imgshapes={imgshapes} />
        </section>
    )

}