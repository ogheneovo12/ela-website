import React from 'react'
import { Link } from 'react-router-dom';

export default function MenuCartTotals({ value }) {
    const { cartSubTotal } = value;
    return (
        <React.Fragment>
            <div className="cart__info">
                <p>
                    Total: ${cartSubTotal}
                </p>
                <Link to="/cart" className="theme-button">View Cart</Link>
                <Link to="/checkout" className="theme-button check__btn">Checkout</Link>
            </div>
        </React.Fragment>
    )
}
