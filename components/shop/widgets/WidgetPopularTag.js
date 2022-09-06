import React  from 'react'
import { Link } from 'react-router-dom'

export default function WidgetPopularTag({title, lists}) {
    return (
        <>
            { title || lists ?
                <div className="shop-widget widget_tags">
                    { title ?
                        <h3>{title}</h3>
                        : '' }
                    { lists ?
                        <ul>
                            { lists.map((item, i) => {
                                return (
                                    <li key={i}><Link to={item.path}>{item.title}</Link></li>
                                )
                            })}
                        </ul>
                        : '' }
                </div>
            : '' }
        </>
    )
}
