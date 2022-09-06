import React from 'react'

export default function ProductDetailsQTY1({ value }) {
    function getItemById(id, products) {
        return products.find(item => item.id === id); // return product by id
    }
    const { cart } = value;
    const { id } = value.detailProduct;

    // get the current id from the cart
    let currentProductInCart = getItemById(id, cart);
    let currentItemCountInCart = currentProductInCart && currentProductInCart.count ? currentProductInCart.count : 1;

    return (
        <React.Fragment>
            <div className="product-details-quantity disable">
                <label htmlFor="quantity">Qty: </label>
                <span className="qty-btn dec button mx-1" id="qty-btn">-</span>
                <input type="text" id={"quantity_" + id} productid={id} value={currentItemCountInCart} className="btn btn-black mx-1" />
                <span className="qty-btn inc button mx-1" id="qty-btn">+</span>
            </div>
        </React.Fragment>
    )

}
