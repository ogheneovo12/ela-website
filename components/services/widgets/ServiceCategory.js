import React  from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

export default function ServiceCategory({title, lists}) {
    return (
        <>
            {title || lists ?
                <div className="service-widgets widget_categories">
                    {title ?
                        <h3>{title}</h3>
                        : ''}
                    {lists ?
                        <ul>
                            {lists.map((item, i) => {
                                return (
                                    <li key={i}>
                                        <Link to={item.path}>{item.title} <FiChevronRight className="icon" /></Link>
                                    </li>
                                )
                            })}
                        </ul>
                        : ''}
                </div>
            : ''}
        </>
    )
}
