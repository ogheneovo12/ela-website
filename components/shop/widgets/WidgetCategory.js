import React  from 'react'
import { Link } from 'react-router-dom'
import { FiChevronsRight } from 'react-icons/fi'

export default function WidgetCategory({title, lists}) {
    return (
        <>
            { title || lists ?
                <div className="shop-widget widget_categories">
                    { title ?
                        <h3>{title}</h3>
                        : '' }
                    { lists ?
                        <ul>
                            {lists.map((item, i) => {
                                return (
                                    <li key={i}>
                                        <Link to={item.path}><FiChevronsRight className="icon" /> {item.title}</Link> {item.number}
                                    </li>
                                )
                            })}
                        </ul>
                        : '' }
                </div>
            : '' }
        </>
    )
}
