import React  from 'react'
import { ProductConsumer } from 'components/context/productcontext'
import CartHead from './CartHead';
import CartLists from './CartLists';
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import Divider from '../../other/Divider'
import RelatedProducts from '../../shop/RelatedProducts'
import SectionsTitle from '../../common/SectionsTitle'
import CartTotals from './CartTotals';

export default function CartDetails() {
    return (
        <section className="product-cart-wrapper">
            <div className="container">
                <ProductConsumer>
                    {(value) => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <div className="cart-table">
                                        <table>
                                            <CartHead />
                                            <tbody>
                                                <CartLists value={value} />
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="product-cart-table-foot d-flex">
                                        <div className="table-foot left">
                                            <form className="d-flex">
                                                <input type="text" placeholder="Coupon Code" />
                                                <button type="submit" className="theme-button">
                                                    Apply Coupon <FiChevronRight className="icon" />
                                                </button>
                                            </form>
                                        </div>
                                        <div className="table-foot right">
                                            <Link to="/shop" className="theme-button">
                                                Continue Shopping <FiChevronRight className="icon" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="product-cart-totals">
                                        <CartTotals value={value} />
                                    </div>
                                    <Divider />
                                    <div className="related-products-area">
                                        <SectionsTitle title="You May Be Also Interested." subtitle="Great Collection For You" />
                                        <RelatedProducts />
                                    </div>
                                </React.Fragment>
                            )
                        } else {
                            return (
                                <div className="empty-cart-items text-center">
                                    <h1>Your cart is empty!</h1>
                                    <Link to="/shop" className="theme-button">Return To Shop <FiChevronRight className="icon" /></Link>
                                </div>
                            );
                        }
                    }}
                </ProductConsumer>
            </div>
        </section>
    )
}
