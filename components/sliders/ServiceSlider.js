import React from "react";
import {Link} from "react-router-dom";
import {FiChevronRight} from "react-icons/fi";

import OwlCarousel from "components/OwlCarousel";

const responsive = {
    0: {
        items: 1
    },
    450: {
        items: 1
    },
    600: {
        items: 2
    },
    1000: {
        items: 2
    }
}

export default function ServiceSlider({slideItems}) {
    return (
        <OwlCarousel
            className="owl-theme"
            loop={true}
            autoplay={false}
            margin={30}
            dots={true}
            nav={false}
            items={2}
            responsive={responsive}
        >
            {slideItems.map((item, index) => {
                return (
                    <div className="service-slider-item" key={index}>
                        {item.icon?
                            <span className="service-slider-icon">{item.icon}</span>
                        : ''}
                        {item.title?
                            <Link to={item.titleurl}><h3 className="service-slider-title">{item.title}</h3></Link>
                        : ''}
                        {item.desc?
                            <p className="service-slider-desc">{item.desc}</p>
                        : ''}
                        {item.buttontext?
                            <Link to={item.buttonurl} className="simple-button">{item.buttontext} <FiChevronRight className="icon" /></Link>
                        : ''}
                    </div>
                )
            })}
        </OwlCarousel>
    )
}
