import {Link} from "react-router-dom";
import {FiChevronRight} from "react-icons/fi";
import React from "react";


export default function Teammembers({teammembers}) {
    return (
        <>
            {teammembers.map((item, index) => {
                return (
                    <div className="team" key={index}>
                        <div className="team-img">
                            {item.img?
                                <img src={item.img?.src} alt="Team" />
                                : ''
                            }
                            {item.socials?
                                <ul className="socials" >
                                    {item.socials.map((social, i) => {
                                        return (
                                            <a key={i} href={social.url}>{social.icon}</a>
                                        )
                                    })}
                                </ul> : ''
                            }
                        </div>
                        <div className="team-content">
                            {item.name?
                                <h2 className="name">{item.name}</h2>
                                : ''
                            }
                            {item.designation?
                                <p className="designation">{item.designation}</p>
                                : ''
                            }
                            {item.buttontext?
                                <Link to={item.buttonurl} className="theme-button">{item.buttontext} <FiChevronRight className="icon" /></Link>
                                : ''
                            }
                        </div>
                    </div>
                )
            })}
        </>
    )
}