import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuCartListItem({ item, value }) {
    const { id, name, images, price, delprice, count } = item;
    const { removeItem } = value;
    return (
        <div className="items">
            <img src={images?.src} alt="Product" />
            <div className="item__info">
                <Link to="/product-details" onClick={() =>
                    value.handleDetails(id)
                }>{name}</Link>
                {count} x {delprice ? (<del className="del item__info-price">${delprice}</del>) : ""} <span className="item__info-price">${price}</span>
            </div>
            <Link to="#" className="item__remove" onClick={() => removeItem(id)}>
                x
            </Link>
        </div>
    )
}
