import React from 'react'

export default function SectionsTitle({ title, subtitle }) {
    return (
        <>
            <div className="sec-heading">
                <p className="sec__meta">{subtitle}</p>
                <h2 className="sec__title">
                    {title}
                </h2>
            </div>
        </>
    )
}
