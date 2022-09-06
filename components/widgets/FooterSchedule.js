import React from "react";

export default function FooterSchedule({title, offday, schedulelists}) {
    return (
        <div className="footer-widget footer-working-hours">
            <h2>{title}</h2>
            <ul className="working-hours">
                {schedulelists.map((item, i) => {
                    return (
                        <li key={i}><strong>{item.day}</strong> {item.time}</li>
                    )
                })}
                {offday?
                    <li className="off-day">{offday} <strong>Off</strong></li>
                : ''}
            </ul>
        </div>
    )
}
