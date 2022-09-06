import React from "react";

export default function SocialProfile({title, lists}) {
    return (
        <>
            {title?
                <h2>{title}</h2>
            : ''}
            {lists?
                <ul className="footer-social-connect d-flex">
                    {lists.map((item, i) => {
                        return (
                            <li key={i}>
                                <a href={item.url}>{item.icon}</a>
                            </li>
                        )
                    })}
                </ul>
            : ''}
        </>
    )
}
