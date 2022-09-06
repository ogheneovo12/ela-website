import React  from 'react'
import { Link } from 'react-router-dom'

export default function WidgetProductColor({title, lists}) {
    return (
        <>
            { title || lists ?
                <div className="shop-widget widget_product_color">
                    { title ?
                        <h3>{title}</h3>
                        : '' }
                    { lists ?
                        <ul className="d-flex">
                            { lists.map((item, i) => {
                                return (
                                    <li key={i} className={item}><Link to="#"></Link></li>
                                )
                            })}
                        </ul>
                        : '' }
                </div>
            : '' }
        </>
    )
}
