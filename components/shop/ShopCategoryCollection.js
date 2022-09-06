import React  from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

export default function ShopCategoryCollection({left, right}) {
    return (
        <div className="container shop-categories-collection-wrapper">
            <div className="shop-category-collection-grid d-grid">
                <div className="shop-category-collection-item left">
                    <Link to={left.cardlink}>
                        <img src={left.img?.src} alt={left.title} />
                    </Link>
                    <div className="details">
                        <h2><Link to={left.cardlink}>{left.title}</Link></h2>
                        <Link to={left.cardlink} className="simple-button">{left.button} <FiChevronRight className="icon" /></Link>
                    </div>
                </div>
                <div className="shop-category-collection-item right">
                    <Link to={right.cardlink}>
                        <img src={right.img?.src} alt={right.title} />
                    </Link>
                    <div className="details">
                        <h2><Link to={right.cardlink}>{right.title}</Link></h2>
                        <Link to={right.cardlink} className="simple-button">{right.button} <FiChevronRight className="icon" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
