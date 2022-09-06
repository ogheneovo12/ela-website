import React from 'react'

export default function OrderTotal({ value }) {
    const { cartSubTotal, cartTax, cartTotal } = value;
    return (
        <>
            <tfoot>
                <tr className="tax">
                    <th>Tax:</th>
                    <td>${cartTax}</td>
                </tr>
                <tr className="subtotal">
                    <th>Subtotal:</th>
                    <td>${cartSubTotal}</td>
                </tr>
                <tr className="total">
                    <th>Total:</th>
                    <td>${cartTotal}</td>
                </tr>
            </tfoot>
        </>
    )
}
