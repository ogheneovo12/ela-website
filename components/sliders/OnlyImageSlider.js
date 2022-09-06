import React from "react";
import OwlCarousel from 'components/OwlCarousel';

export default function OnlyImageSlider({items}) {
    return (
        <>
            {items ?
                <OwlCarousel className="owl-theme service-content-details-slider" loop={true} autoplay={true} margin={10} dots={true} nav={false} items={1} >
                    {items.map((item, i) => {
                        return (
                            <div className="item" key={i}>
                                <img src={item?.src} alt="Service Details Slider" />
                            </div>
                        )
                    })}
                </OwlCarousel>
            : ''}
        </>
    )
}