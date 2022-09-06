import React from 'react'
import CustomerItem from './CustomerItem'

export default function CustomerItems({ value }) {
    const { cart } = value
    return (
        <>
            {cart.map(item => {
                return <CustomerItem key={item.id} item={item} value={value} />
            })}
        </>
    )
}
