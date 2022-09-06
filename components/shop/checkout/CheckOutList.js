import React from 'react'
import CheckOutItem from './CheckOutItem'

export default function CheckOutList({ value }) {
    const { cart } = value
    return (
        <React.Fragment>
            {cart.map(item => {
                return <CheckOutItem key={item.id} item={item} value={value} />;
            })}
        </React.Fragment>
    )
}
