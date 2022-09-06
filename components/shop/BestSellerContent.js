import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsumer } from 'components/context/productcontext'
import { FiChevronRight, FiHeart, FiShoppingBag, FiCheck } from 'react-icons/fi';
import { FaRandom } from 'react-icons/fa';

export default class BestSellerContent extends Component {
    render() {
        const { id, name, delprice, price, sales, buttontext, images, stars, inCart } = this.props.product;
        return (
            <ProductConsumer>
                {(value) => (
                    <div className="product-item text-center">
                        <div className="product-img" onClick={() =>
                            value.handleDetails(id)
                        }>
                            <span className={`onsale ${sales || 'd-none'}`}>{sales}</span>
                            <img src={images?.src} className="product__img" alt="Shop" />
                            <div className="addto-cart-btn">
                                <button
                                    className="theme-button"
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        value.addToCart(id);
                                    }}>
                                    {inCart ? (
                                        <p>Added to Cart <FiCheck className="icon" /></p>
                                    ) : (
                                            <p>{buttontext} <FiChevronRight className="icon" /></p>
                                        )}
                                </button>
                            </div>
                        </div>
                        <div className="product-content">
                            <h3 className="product__title" onClick={() =>
                                value.handleDetails(id)
                            }>
                                <Link to="/product-details">{name}</Link>
                            </h3>
                            {stars ? (
                                <ul className="product-rating d-flex">
                                    {stars.map((star, index) => {
                                        return <li key={index}>{star}</li>
                                    })}
                                </ul>
                            ) : " "}
                            <div className="prices">
                                {delprice ? (<span className={`current__price del ${delprice || 'd-none'}`}>${delprice}</span>) : " "}
                                <span className="current__price ins">${price}</span>
                            </div>
                        </div>
                        <ul className="product-action-list">
                            <li>
                                <Link to="#" data-toggle="tooltip" data-placement="right" title="" data-original-title="Wishlist">
                                    <FiHeart />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title=""
                                    data-original-title="Add To Cart"
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        value.addToCart(id);
                                    }}
                                >
                                    {inCart ? (
                                        <FiCheck />
                                    ) : (
                                            <FiShoppingBag />
                                        )}
                                </Link>
                            </li>
                            <li>
                                <Link to="#" data-toggle="tooltip" data-placement="right" title="" data-original-title="Compare">
                                    <FaRandom />
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </ProductConsumer>
        )
    }
}

BestSellerContent.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        images: PropTypes.string,
        name: PropTypes.string,
        sales: PropTypes.string,
        buttontext: PropTypes.string,
        delprice: PropTypes.number,
        price: PropTypes.number,
    }).isRequired
};
