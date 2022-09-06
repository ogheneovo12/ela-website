import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerItem({ item, value }) {
    const { name, price, count, id } = item;
    return (
        <>
            <tr>
                <td className="product-name">
                    <Link onClick={() =>
                        value.handleDetails(id)
                    }
                        to="/product-details">{name}</Link> {count ? (<strong>x {count}</strong>) : ""}
                </td>
                <td className="product-price">${price}</td>
            </tr>
        </>
    )
}
