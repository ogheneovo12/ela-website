import React  from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'components/OwlCarousel';
import { FiChevronRight } from 'react-icons/fi'

export default function HeroSlider({slideItems}) {
    return (
        <section className="hero-slider-wrapper">
            <OwlCarousel className="owl-theme" loop={true} autoplay={true} margin={10} dots={false} nav items={1} >
                {slideItems.map((item, index) => {
                    return (
                        <div key={index} className="hero-slider-item" style={{backgroundImage: 'url('+item.bg+')'}}>
                            <div className="container">
                                <div className="row">
                                    <div className={'col-' + item.col}>
                                        <div className="hero-slider-content">
                                            { item.title ? <h1>{item.title}</h1> : ''}
                                            { item.description ? <p>{item.description}</p> : '' }
                                            <div className="hero-slider-btns">
                                                {
                                                    item.button1?
                                                        <Link to={item.button1url} className="theme-button">{item.button1} <FiChevronRight className="icon" /></Link>
                                                    : ''
                                                }
                                                {
                                                    item.button2?
                                                        <Link to={item.button2url} className="theme-button">{item.button2} <FiChevronRight className="icon" /></Link>
                                                    : ''
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </OwlCarousel>
        </section >
    )
}
