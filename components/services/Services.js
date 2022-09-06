import React  from 'react'
import { Link } from "react-router-dom";
import {FiChevronRight} from "react-icons/fi";


export default function Service({sLists}) {
        return (
            <>
                {
                    sLists.map((item, index) => {
                        return <div className="service-items" key={index}>
                            <span className="service-items-num">{index}</span>
                            <span className="service-items-iconbox">{item.icon}</span>
                            <Link to={item.title}>
                                <h3 className="service-items-title">{item.title}</h3>
                            </Link>
                            <p className="service-items-description">{item.description}</p>
                            {item.showbtn?
                                <Link to={item.buttonurl} className="simple-button">{item.buttontext} <FiChevronRight className="icon" /></Link>
                            : ''}
                        </div>
                    })
                }
            </>
        )
}

