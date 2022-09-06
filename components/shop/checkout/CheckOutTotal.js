import React from 'react'

export default function CheckOutTotal({ value }) {
    const { cartSubTotal, cartTax, cartTotal } = value;
    return (
        <>
            <tbody className="subtotals">
                <tr>
                    <th>Subtotal</th>
                    <td>${cartSubTotal}</td>
                </tr>
                <tr>
                    <th>Tax</th>
                    <td>${cartTax}</td>
                </tr>
                <tr>
                    <th>Shipping</th>
                    <td>Free Shipping</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>Total</th>
                    <td>${cartTotal}</td>
                </tr>
            </tfoot>
        </>
    )
}
