import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import { ProductConsumer } from 'components/context/productcontext'


export default class WidgetFeaturedProduct extends Component {
    render() {
        const { id, name, delprice, price, images, stars } = this.props.product;
        return (
            <>
                <ProductConsumer>
                    {(value) => (
                        <li className="d-flex">
                            <div className="img">
                                <Link
                                    to="/product-details"
                                    onClick={() =>
                                        value.handleDetails(id)
                                    }
                                >
                                    <img src={images?.src} alt="Featured Product" />
                                </Link>
                            </div>
                            <div className="details">
                                <h3>
                                    <Link
                                        to="/product-details"
                                        onClick={() =>
                                            value.handleDetails(id)
                                        }>
                                        {name}
                                    </Link>
                                </h3>
                                {stars ? "" : (
                                    (
                                        <ul className="d-flex">
                                            {stars.map((item, index) => {
                                                return <li key={index}>{item}</li>
                                            })}
                                        </ul>
                                    )
                                )}
                                <p className="amount">
                                    {delprice ? (<del>{delprice}</del>) : ""}
                                    <ins>${price}</ins>
                                </p>
                            </div>
                        </li>
                    )}
                </ProductConsumer>
            </>
        )
    }
}

WidgetFeaturedProduct.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        images: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        sales: PropTypes.string,
        buttontext: PropTypes.string,
        delprice: PropTypes.number,
        price: PropTypes.number,
    }).isRequired
};

