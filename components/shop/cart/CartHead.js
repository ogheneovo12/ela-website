import React  from 'react'

export default function CartHead() {
    return (
        <thead>
            <tr>
                <td className="product-image">Image</td>
                <td className="product-desc">Product Details</td>
                <td className="product-price text-center">Price</td>
                <td className="product-quantity text-center">Quantity</td>
                <td className="product-total text-center">Total</td>
                <td className="product-remove text-center">Remove</td>
            </tr>
        </thead>
    )
}
