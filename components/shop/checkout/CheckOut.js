import React, { Component } from 'react'
import { FiChevronRight, FiPhone } from 'react-icons/fi'
import { ProductConsumer } from 'components/context/productcontext'
import CheckOutList from './CheckOutList';
import CheckOutTotal from './CheckOutTotal';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import { FaRegEnvelope } from 'react-icons/fa';
import CustomerItems from './order/CustomerItemList';
import OrderTotal from './order/OrderTotal';

export default class CheckOut extends Component {

    state = {
        fname: '',
        lname: '',
        email: '',
        pnumber: '',
        company: '',
        address: '',
        address2: '',
        country: '',
        town: '',
        state: '',
        postcode: '',
        bank: '',
        paypal: '',
        bkash: '',
        cash: '',
    }
    handleChangeFname = (e) => {
        this.setState({
            fname: e.target.value
        })
    }
    handleChangeLname = (e) => {
        this.setState({
            lname: e.target.value
        })
    }
    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handleChangePnumber = (e) => {
        this.setState({
            pnumber: e.target.value
        })
    }
    handleChangeCompany = (e) => {
        this.setState({
            company: e.target.value
        })
    }
    handleChangeAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    handleChangeAddress2 = (e) => {
        this.setState({
            address2: e.target.value
        })
    }
    handleChangeCountry = (e) => {
        this.setState({
            country: e.target.value
        })
    }
    handleChangeTown = (e) => {
        this.setState({
            town: e.target.value
        })
    }
    handleChangeState = (e) => {
        this.setState({
            state: e.target.value
        })
    }
    handleChangePostcode = (e) => {
        this.setState({
            postcode: e.target.value
        })
    }
    handleBank = (e) => {
        this.setState({
            bank: 'Direct Bank Transfer'
        })
    }
    handlePaypal = (e) => {
        this.setState({
            bank: 'PayPal'
        })
    }
    handleBkash = (e) => {
        this.setState({
            bkash: 'Bkash'
        })
    }
    handleCash = (e) => {
        this.setState({
            cash: 'Cash on Delivery'
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        // Note: open your browser console then you will be able to see all datas in the console
        console.log("First Name :- " + this.state.fname);
        console.log("Last Name :- " + this.state.lname);
        console.log("Email :- " + this.state.email);
        console.log("Phone Number :- " + this.state.pnumber);
        console.log("Company :- " + this.state.company);
        console.log("Address 1 :- " + this.state.address);
        console.log("Address 2 :- " + this.state.address2);
        console.log("Country :- " + this.state.country);
        console.log("Town :- " + this.state.town);
        console.log("State :- " + this.state.state);
        console.log("Postcode :- " + this.state.postcode);
        if (this.state.bank) {
            console.log("Payment :- " + this.state.bank);
        }
        if (this.state.paypal) {
            console.log("Payment :- " + this.state.paypal);
        }
        if (this.state.bkash) {
            console.log("Payment :- " + this.state.bkash);
        }
        if (this.state.cash) {
            console.log("Payment :- " + this.state.cash);
        }
        $(".product-ordered").removeClass('d-none').addClass('active');
        $(".checkout-area form").addClass('d-none');
    }

    render() {

        return (
            <ProductConsumer>
                {(value) => {
                    const { cart, cartTotal } = value;
                    var tempDate = new Date();
                    var date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate()
                    const currDate = date;
                    if (cart.length > 0) {
                        return (
                            <>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-7">
                                                <div className="billing-content checkout-box">
                                                    <h1>Billing Address.</h1>
                                                    <div className="d-grid">
                                                        <div className="form-field">
                                                            <label htmlFor="fname">First Name <sup>*</sup></label>
                                                            <input type="text" name="fname" id="fname" placeholder="First Name" required onChange={this.handleChangeFname} />
                                                        </div>
                                                        <div className="form-field">
                                                            <label htmlFor="lname">Last Name <sup>*</sup></label>
                                                            <input type="text" name="lname" id="lname" placeholder="Last Name" required onChange={this.handleChangeLname} />
                                                        </div>
                                                    </div>
                                                    <div className="d-grid">
                                                        <div className="form-field">
                                                            <label htmlFor="email">Email <sup>*</sup></label>
                                                            <input type="email" name="email" id="email" placeholder="Type your email" required onChange={this.handleChangeEmail} />
                                                        </div>
                                                        <div className="form-field">
                                                            <label htmlFor="pnumber">Phone Number <sup>*</sup></label>
                                                            <input type="tel" name="pnumber" id="pnumber" placeholder="Phone Number" required onChange={this.handleChangePnumber} />
                                                        </div>
                                                    </div>

                                                    <div className="form-field">
                                                        <label htmlFor="companyname">Company Name <sup>*</sup></label>
                                                        <input type="text" name="companyname" id="companyname" placeholder="Company Name" required onChange={this.handleChangeCompany} />
                                                    </div>

                                                    <div className="form-field">
                                                        <label htmlFor="addressl1">Address <sup>*</sup></label>
                                                        <input type="text" name="addressl1" id="addressl1" placeholder="Address line 1" required onChange={this.handleChangeAddress} />
                                                        <input type="text" name="addressl2" id="addressl2" placeholder="Address line 2" onChange={this.handleChangeAddress2} />
                                                    </div>

                                                    <div className="form-field">
                                                        <label htmlFor="country">Country <sup>*</sup></label>
                                                        <select name="country" id="country" onChange={this.handleChangeCountry}>
                                                            <option value="0">Select Country</option>
                                                            <option value="Bangladesh">Bangladesh</option>
                                                            <option value="London">London</option>
                                                            <option value="England">England</option>
                                                            <option value="France">France</option>
                                                            <option value="Brazil">Brazil</option>
                                                        </select>
                                                    </div>

                                                    <div className="d-grid">
                                                        <div className="form-field">
                                                            <label htmlFor="town">Town/City <sup>*</sup></label>
                                                            <input type="text" name="town" id="town" placeholder="Town/City name" required onChange={this.handleChangeTown} />
                                                        </div>
                                                        <div className="form-field">
                                                            <label htmlFor="state">State <sup>*</sup></label>
                                                            <input type="text" name="state" id="state" placeholder="State" required onChange={this.handleChangeState} />
                                                        </div>
                                                    </div>

                                                    <div className="form-field">
                                                        <label htmlFor="postcode">Postcode / ZIP <sup>*</sup></label>
                                                        <input type="text" name="postcode" id="postcode" placeholder="Your postal code" required onChange={this.handleChangePostcode} />
                                                    </div>

                                                    <div className="form-field">
                                                        <div className="checkboxes">
                                                            <label className="create-account">
                                                                Create an account? <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label className="shipping-add">
                                                                Ship to a different address? <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="order-summary checkout-box">
                                                    <h1>Order Summary.</h1>
                                                    <div className="products-total-summary">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Product</th>
                                                                    <th>Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="items">
                                                                <CheckOutList value={value} />
                                                            </tbody>
                                                            <CheckOutTotal value={value} />
                                                        </table>
                                                    </div>
                                                    <div className="order-summary-payment-method">
                                                        <h1>Select Payment Method.</h1>
                                                        <div className="radio-fields">
                                                            <label htmlFor="bank">
                                                                <input type="radio" id="bank" name="payment" required onChange={this.handleBank} />
                                                                Direct bank transfer
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="paypal">
                                                                <input type="radio" id="paypal" name="payment" required onChange={this.handlePaypal} />
                                                                PayPal
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="bkash">
                                                                <input type="radio" id="bkash" name="payment" required onChange={this.handleBkash} />
                                                                Bkash
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="Cash-delivery">
                                                                <input type="radio" id="Cash-delivery" name="payment" required onChange={this.handleCash} />
                                                                Cash on Delivery
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>

                                                        <button
                                                            onClick={this.handleClick}
                                                            type="submit"
                                                            className="theme-button">Place Order Now <FiChevronRight className="icon" /></button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {this.handleSubmit ? (
                                    <div className="product-ordered d-none">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="product-ordered-thankyou text-center">
                                                        <h1>Thank you. Your order has been received.</h1>
                                                    </div>
                                                    <ul className="product-ordered-order-details d-grid">
                                                        <li>
                                                            <h2>Order Number</h2>
                                                            <span>{Math.random()}</span>
                                                        </li>
                                                        <li>
                                                            <h2>Date: </h2>
                                                            <span>{currDate}</span>
                                                        </li>
                                                        <li>
                                                            <h2>Email: </h2>
                                                            <span>{this.state.email}</span>
                                                        </li>
                                                        <li>
                                                            <h2>Total: </h2>
                                                            <span>${cartTotal}</span>
                                                        </li>
                                                        <li>
                                                            <h2>Payment Method: </h2>
                                                            <span>{this.state.bank || this.state.paypal || this.state.bkash || this.state.cash}</span>
                                                        </li>
                                                    </ul>

                                                    <p className="delivery">Pay with cash upon delivery.</p>
                                                    <div className="product-order-details">
                                                        <h1>Order Details</h1>
                                                        <table className="order-details-table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Product</th>
                                                                    <th>Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <CustomerItems value={value} />
                                                            </tbody>
                                                            <OrderTotal value={value} />
                                                        </table>
                                                    </div>

                                                    <div className="order-customer-details d-grid">
                                                        <div className="customer-details-box left">
                                                            <h1>Billing Address</h1>
                                                            <address>
                                                                {this.state.fname} {this.state.lname}<br />
                                                                {this.state.company}<br />
                                                                {this.state.address}<br />
                                                                {this.state.address2 ? (<br />) : ""}
                                                                {this.state.town} <br />
                                                                {this.state.state} <br />
                                                                {this.state.postcode} <br />
                                                                {this.state.country}<br />
                                                                <p className="address-phone">
                                                                    <FiPhone className="icon" /> {this.state.pnumber}
                                                                </p>
                                                                <p className="address-email">
                                                                    <FaRegEnvelope className="icon" /> {this.state.email}
                                                                </p>
                                                            </address>
                                                        </div>
                                                        <div className="customer-details-box right">
                                                            <h1>Shipping Address</h1>
                                                            <address>
                                                                {this.state.fname} {this.state.lname}<br />
                                                                {this.state.company}<br />
                                                                {this.state.address}<br />
                                                                {this.state.address2 ? (<br />) : ""}
                                                                {this.state.town} <br />
                                                                {this.state.state} <br />
                                                                {this.state.postcode} <br />
                                                                {this.state.country}
                                                            </address>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : ""}
                            </>
                        )
                    } else {
                        return (
                            <>
                                <div className="empty-cart-items text-center">
                                    <h1>Your cart is empty!</h1>
                                    <Link to="/shop" className="theme-button">
                                        Return to Shop <FiChevronRight className="icon" />
                                    </Link>
                                </div>
                            </>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}
