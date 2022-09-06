import React  from 'react'
import { FiChevronRight, FiChevronDown, FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import { ProductConsumer } from 'components/context/productcontext'
import $ from 'jquery'
import ProductDetailsQTY from './ProductDetailsQTY';
import ProductDetailShare from './ProductDetailShare';
import ProductDetailTab from './ProductDetailTab';



export default function ProductDetailsItem() {
    $(function () {
        $(".qty-btn").on("click", function () {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if ($button.text() === "+") {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 0;
                }
            }
            $button.parent().find("input").val(newVal);

        });
    });

    return (
        <ProductConsumer>
            {(value) => {
                const { id, inCart, name, delprice, price, buttontext, images, description, stars, availability, sku, categories, tags } = value.detailProduct;
                return (
                    <>
                        <section className="product-details-item-wrapper">
                            <div className="container">
                                <div className="product-details-item">
                                    <div className="row">
                                        <div className="col-5 product-details-item-left">
                                            <img src={images?.src} alt="Product Details" />
                                        </div>
                                        <div className="col-7 product-details-item-right">
                                            <div className="product-details-item-content">
                                                <h1>{name}</h1>
                                                <div className="product-details-review-rating d-flex">
                                                    {stars ? " " : (
                                                        <ul className="d-flex">
                                                            {stars.map((star, index) => {
                                                                return <li key={index}>{star}</li>
                                                            })}
                                                        </ul>
                                                    )}
                                                    <Link to="#">({stars ? "0" : "3"}) Reviews</Link> /
                                                <Link to="#">Write A Review</Link>
                                                </div>
                                                <div className="amount">
                                                    {delprice ? (<del>${delprice}</del>) : ""}
                                                    <ins>${price}</ins>
                                                </div>
                                                <p>{description}</p>
                                                <span className="stock">
                                                    <strong>Availability: </strong> {availability}
                                                </span>
                                                <div className="product-details-color">
                                                    <p>Color: <span className="black"></span> <span className="orange"></span><span className="blue"></span> <span className="darkgray"></span></p>
                                                </div>
                                                <div className="product-details-size d-flex">
                                                    <span>Size</span>
                                                    <div className="size-select">
                                                        <FiChevronDown className="icon" />
                                                        <select name="select" id="select">
                                                            <option value="0">S</option>
                                                            <option value="1">L</option>
                                                            <option value="2">XS</option>
                                                            <option value="3">XL</option>
                                                            <option value="4">M</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="product-details-quantity-flex d-flex">

                                                    <div className="product-details-quantity">
                                                        <ProductDetailsQTY key={value.id} value={value} />
                                                    </div>

                                                    <div className="product-details-button">
                                                        <button
                                                            type="submit"
                                                            className="theme-button"
                                                            // disabled={inCart ? true : false}
                                                            onClick={() => {
                                                                console.log('product_id', id);
                                                                value.addToCart(id);
                                                            }}>
                                                            {inCart ? (
                                                                <>Added to Cart <FiCheck className="icon" /></>
                                                            ) : (
                                                                    <>{buttontext} <FiChevronRight className="icon" /></>
                                                                )}
                                                        </button>
                                                    </div>
                                                </div>

                                                <p className="sku"><strong>SKU:</strong> {sku}</p>
                                                <div className="product-details-tags">
                                                    <p>Categories:
                                                {categories.map((item, index) => {
                                                        return <Link to="/shop" key={index}>{item}, </Link>
                                                    })}
                                                    </p>
                                                </div>
                                                <div className="product-details-tags">
                                                    <p>Tags:
                                                {tags.map((item, index) => {
                                                        return <Link to="/shop" key={index}>{item}, </Link>
                                                    })}
                                                    </p>
                                                </div>

                                                <ProductDetailShare />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="product-details-tabs-wrapper">
                            <div className="container">
                                <div className="product-tabs-width">
                                    <ProductDetailTab />
                                </div>
                            </div>
                        </div>
                    </>
                )
            }}

        </ProductConsumer >
    )
}
