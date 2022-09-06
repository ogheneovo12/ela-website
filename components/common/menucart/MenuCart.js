import React  from 'react'
import { ProductConsumer } from 'components/context/productcontext'
import MenuCartList from './MenuCartList';
import MenuCartTotals from './MenuCartTotals';

export default function MenuCart() {
    return (
        <ProductConsumer>
            {(value) => {
                const { cart } = value;
                if (cart.length > 0) {
                    if (cart.length > 3) {
                        return (
                            <div className="cart__items moreproducts">
                                <MenuCartList value={value} />
                                <MenuCartTotals value={value} />
                            </div>
                        )
                    }
                    return (
                        <div className="cart__items">
                            <MenuCartList value={value} />
                            <MenuCartTotals value={value} />
                        </div>
                    )
                } else {
                    return (
                        <div className="cart__items">
                            <h4 className=" text-center">Your Cart Is Empty!</h4>
                        </div>
                    );
                }
            }}
        </ProductConsumer>
    )
}
