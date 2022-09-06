import React  from 'react'
import { FiChevronRight } from 'react-icons/fi'
import img from '../../assets/images/shop-img18.png'
import { Link } from 'react-router-dom'

export default function FeaturedProduct() {
    return (
        <section className="shop-featured-product-wrapper">
            <div className="container">
                <div className="shop-featured-product-grid d-grid">
                    <div className="left">
                        <h1>Contrary to to Popular Belief is Simply Rand.</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <div className="shop-featured-left-mdl-grid d-grid">
                            <div className="left">
                                <h2>Hardwood Frame</h2>
                                <p>Dramatically synthesize integrated schemas with optimal networks.</p>
                            </div>
                            <div className="right">
                                <h2>Versatile Fabric</h2>
                                <p>Dramatically synthesize integrated schemas with optimal networks.</p>
                            </div>
                        </div>
                        <Link className="theme-button" to="/shop">Discover Sofa Collection <FiChevronRight className="icon" /></Link>
                    </div>
                    <div className="right">
                        <img src={img?.src} alt="Sofa" />
                    </div>
                </div>
            </div>
        </section>
    )
}
