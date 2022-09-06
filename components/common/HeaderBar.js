import React  from 'react'
import { FiPhone, FiMapPin, FiChevronDown } from 'react-icons/fi'
import { FaEnvelope } from 'react-icons/fa'
import flat1 from '../../assets/images/flag.jpg'
import sectiondata from "../../store/store";
import {Link} from "react-router-dom";

export default function HeaderBar() {
    return (
        <div className="header-bar-wrapper">
            <div className="container">
                <div className="header-bar-grid">
                    <div className="header-bar-left">
                        <ul className="d-flex">
                            {
                                sectiondata.HeaderData.HeaderBar.phoneNumber ?
                                    <li className="d-flex"><FiPhone className="icon" /> <a href={'tel:'+sectiondata.HeaderData.HeaderBar.phoneNumber}>{sectiondata.HeaderData.HeaderBar.phoneNumber}</a></li>
                                : ''
                            }
                            {
                                sectiondata.HeaderData.HeaderBar.email ?
                                    <li className="d-flex"><FaEnvelope className="icon" /> <a href={"mailto:"+sectiondata.HeaderData.HeaderBar.email}>{sectiondata.HeaderData.HeaderBar.email}</a></li>
                                : ''
                            }
                            {
                                sectiondata.HeaderData.HeaderBar.location ?
                                    <li className="d-flex"><FiMapPin className="icon" /> {sectiondata.HeaderData.HeaderBar.location}</li>
                                : ''
                            }
                        </ul>
                    </div>
                    <div className="header-bar-right text-right">
                        <div className="header-bar-right-flex d-flex">
                            {
                                sectiondata.HeaderData.HeaderBar.socialLists ?
                                    (
                                        <ul className="header-bar-social d-flex">
                                            {sectiondata.HeaderData.HeaderBar.socialLists.map((social, i) => {
                                                return (
                                                    <li key={i}>
                                                        <a href={social.url}>{social.icon}</a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    )
                                : ''
                            }
                            {/* {
                                sectiondata.HeaderData.HeaderBar.languages ?
                                    (
                                        <ul className="header-bar-language">
                                            <li>
                                                <a href="/" className="d-flex"><img src={flat1.src} alt="flag" /> English <FiChevronDown className="icon" /></a>
                                                <ul>
                                                    {sectiondata.HeaderData.HeaderBar.languages.map((item, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <Link to={item.url} className="d-flex">
                                                                    <img src={item.flag.src} alt="flag" /> {item.name}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                        </ul>
                                    )
                                : ''
                            }
                            {
                                sectiondata.HeaderData.HeaderBar.btntext ?
                                    (
                                        <div className="header-bar-cta-btn">
                                            <Link to={sectiondata.HeaderData.HeaderBar.btnurl} className="theme-button">{sectiondata.HeaderData.HeaderBar.btntext} {sectiondata.HeaderData.HeaderBar.btnicon}</Link>
                                        </div>
                                    ) : ''
                            } */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
