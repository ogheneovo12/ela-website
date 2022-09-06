import React from "react";

export default function FooterCommonLinks({title, lists}) {
    return (
        <div className="footer-widget footer-help-links">
            {title?
                <h2>{title}</h2>
            : ''}
            {lists?
                <ul className="help-links">
                    {lists.map((item, i) => {
                        return (
                            <li key={i}>
                                <a href={item.url}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            : ''}
        </div>
    )
}
