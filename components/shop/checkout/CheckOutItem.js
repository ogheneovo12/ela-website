import React from 'react'

export default function CheckOutItem({ item }) {
    const { name, price, count } = item;
    return (
        <>
            <tr>
                <td>{name} {count ? (<strong>x {count}</strong>) : ""}</td>
                <td>${price}</td>
            </tr>
        </>
    )
}
