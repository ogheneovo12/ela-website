import React from 'react'
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

export default function CartTotals({ value }) {
    const { cartSubTotal, cartTax, cartTotal } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="product-cart-totals-box">
                    <h1>Cart Totals</h1>
                    <h2 className="d-flex subtotal">Subtotal: <strong>${cartSubTotal}</strong></h2>
                    <h2 className="d-flex shipping">Shipping: <strong>Free Shipping</strong></h2>
                    <h2 className="d-flex tax">Tax: <strong>${cartTax}</strong></h2>
                    <h2 className="d-flex total">Total: <strong>${cartTotal}</strong></h2>
                    <Link to="/checkout" className="theme-button">Checkout <FiChevronRight className="icon" /></Link>
                </div>
            </div>
        </React.Fragment>
    )
}
