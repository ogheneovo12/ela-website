import React from 'react'
import CartListItem from './CartListItem';

export default function CartLists({ value }) {
    const { cart } = value;
    return (
        <React.Fragment>
            {cart.map(item => {
                return <CartListItem key={item.id} item={item} value={value} />;
            })}
        </React.Fragment>
    );
};


