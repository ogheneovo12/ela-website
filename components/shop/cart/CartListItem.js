import React from 'react'
import { Link } from 'react-router-dom'
// import $ from 'jquery'

export default function CartListItem({ item, value }) {
    const { id, name, images, price, total, count, description } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <tr>
            <td className="product-image">
                <Link to="/product-details" onClick={() =>
                    value.handleDetails(id)
                }>
                    <img src={images?.src} alt="Cart" />
                </Link>
            </td>
            <td className="product-description">
                <Link to="/product-details" onClick={() =>
                    value.handleDetails(id)
                }>
                    {name}
                </Link>
                <p>{description}</p>
            </td>
            <td className="product-price text-center">
                ${price}
            </td>
            <td className="product-quantity text-center">
                <div className="product-details-quantity">
                    <span className="qty-btn dec button mx-1" onClick={() =>
                        decrement(id)
                    }>
                        -
                    </span>
                    <input type="number" className="btn btn-black mx-1" value={count} />
                    <span className="qty-btn inc button mx-1" onClick={() =>
                        increment(id)
                    }>
                        +
                    </span>
                </div>
            </td>
            <td className="product-total">
                {total}
            </td>
            <td className="product-remove text-center">
                <Link to="#" onClick={() => removeItem(id)}>x</Link>
            </td>
        </tr>
    )
}
