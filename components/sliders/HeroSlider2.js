import React  from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'components/OwlCarousel';

import { FiChevronRight } from 'react-icons/fi'

export default function HeroSlider2({slideitems}) {
    return (
        <section className="hero-slider-wrapper hero-slider-2">
            <OwlCarousel className="owl-theme" loop={true} autoplay={true} margin={10} dots={false} nav items={1} >
                {slideitems.map((item, index) => {
                    return <div key={index} className="hero-slider-item" style={{backgroundImage: 'url('+item.bg+')'}}>
                        <div className="container">
                            <div className="row">
                                <div className={'col-' + item.col}>
                                    <div className="hero-slider-content">
                                        <h1>{item.title}</h1>
                                        <p>{item.description}</p>
                                        <div className="hero-slider-btns">
                                            <Link to={item.button1url} className="theme-button">{item.button1} <FiChevronRight className="icon" /></Link>
                                            <Link to={item.button2url} className="theme-button">{item.button2} <FiChevronRight className="icon" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}

            </OwlCarousel>
        </section >
    )
}
