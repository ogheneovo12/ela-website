import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumb({ title }) {
    return (
        <section className="breadcrumb-wrapper text-center">
            <div className="container">
                <div className="breadcrumb-content">
                    <h2>{title}</h2>
                    <ul className="breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li>{title}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

