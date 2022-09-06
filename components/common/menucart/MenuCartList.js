import React from 'react'
import MenuCartListItem from './MenuCartListItem';

export default function MenuCartList({ value }) {
    const { cart } = value;
    return (
        <React.Fragment>
            {cart.map(item => {
                return <MenuCartListItem key={item.id} item={item} value={value} />;
            })}
        </React.Fragment>
    )
}
