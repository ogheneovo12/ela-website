import React from "react";
import {Link} from "react-router-dom";


export default function RelatedProject({title, items}) {
    return (
        <div className="related-projects-wrap">
            {title ?
                <h2>{title}</h2>
            : ''}
            <div className="related-projects-grid d-grid">

                {items.map((item, i) => {
                    return (
                        <div key={i} className="portfolio-item">
                            {item.img ?
                                <img src={item.img?.src} alt="related project" />
                            : ''}
                            <div className="overlay d-flex text-center">
                                <Link to={item.path}>
                                    {item.title ?
                                        <h4>{item.title}</h4>
                                    : ''}
                                    {item.cat ?
                                        <span>{item.cat}</span>
                                    : ''}
                                </Link>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

