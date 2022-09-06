import React  from 'react'
import OwlCarousel from 'components/OwlCarousel';


const responsive = {
    0: {
        items: 1,
    },
    450: {
        items: 2
    },
    600: {
        items: 3
    },
    1000: {
        items: 5
    }
}
export default function Clients({sliders}) {
    return (
        <section className="clients-wrapper">
            <div className="container">
                <OwlCarousel
                    className="owl-theme"
                    loop={true}
                    autoplay={true}
                    margin={10}
                    dots={false}
                    nav={false}
                    responsive={responsive}
                >
                    {sliders.map((item, index) => {
                        return <div className="items text-center" key={index}>
                            <img src={item.img?.src} alt="Clients" />
                        </div>
                    })}
                </OwlCarousel>
            </div>
        </section>
    )
}