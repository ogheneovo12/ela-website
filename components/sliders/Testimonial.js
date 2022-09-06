import React  from 'react'
import OwlCarousel from 'components/OwlCarousel';
import { TiStarFullOutline, TiStarHalfOutline } from 'react-icons/ti'
import { IoIosQuote } from 'react-icons/io'




const responsive = {
    0: {
        items: 1,
    },
    450: {
        items: 1
    },
    600: {
        items: 1
    },
    1000: {
        items: 2
    }
}
export default function Testimonial({imgshapes, slideitems}) {
    return (
        <>
            {imgshapes.map((item, index) => {
                return <img key={index} className="shape_img" src={item.img?.src} alt="Testimonial" />
            })}
            <div className="container">
                <OwlCarousel
                    className="owl-theme"
                    loop={true}
                    autoplay={true}
                    margin={10}
                    dots={true}
                    nav={false}
                    responsiveClass={true}
                    responsive={responsive}
                >
                    {slideitems.map((item, index) => {

                        return (
                            <div className="testimonial-items" key={index}>
                                <p className="desc">{item.desc} <IoIosQuote className="quote_icon" /></p>
                                <div className="testimonial-bottom-flex">
                                    <img src={item.img?.src} alt="Testimonial" />
                                    <div className="designation">
                                        <h3 className="name">{item.name}</h3>
                                        <p className="city">{item.city}</p>
                                        <ul className="stars">
                                            <TiStarFullOutline />
                                            <TiStarFullOutline />
                                            <TiStarFullOutline />
                                            <TiStarFullOutline />
                                            <TiStarHalfOutline />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </OwlCarousel>
            </div>
        </>
    )
}
