import React  from 'react'
import { FiMapPin, FiPhone, FiChevronRight } from 'react-icons/fi'
import { FaEnvelope } from 'react-icons/fa'
import sectiondata from "../../store/store";

export default function ContactSidebar() {
    return (
        <aside className="contact-sidebar">
            { sectiondata.contactdata.sidebar.title ?
                <h1>{sectiondata.contactdata.sidebar.title}</h1>
            : '' }
            { sectiondata.contactdata.sidebar.img ?
                <img src={sectiondata.contactdata.sidebar.img?.src} alt="Contact Sidebar" />
            : '' }
            { sectiondata.contactdata.sidebar.content ?
                <p>{sectiondata.contactdata.sidebar.content}</p>
            : '' }
            <div className="contact-sidebar-infos">

                { sectiondata.contactdata.sidebar.address ?
                    <div className="item d-flex">
                        <div className="icon">
                            <span><FiMapPin /></span>
                        </div>
                        <div className="details">
                            <h3>Address.</h3>
                            <span>{sectiondata.contactdata.sidebar.address}</span>
                        </div>
                    </div>
                : '' }

                { sectiondata.contactdata.sidebar.phonenum || sectiondata.contactdata.sidebar.phonenum2 ?
                    <div className="item d-flex">
                        <div className="icon">
                            <span><FiPhone /></span>
                        </div>
                        <div className="details">
                            <h3>Phone.</h3>
                            { sectiondata.contactdata.sidebar.phonenum ?
                                <span>Local: {sectiondata.contactdata.sidebar.phonenum}</span>
                            : '' }
                            { sectiondata.contactdata.sidebar.phonenum2 ?
                                <span>Local: {sectiondata.contactdata.sidebar.phonenum2}</span>
                            : '' }
                        </div>
                    </div>
                : '' }

                { sectiondata.contactdata.sidebar.email || sectiondata.contactdata.sidebar.email2 ?
                    <div className="item d-flex">
                        <div className="icon">
                            <span><FaEnvelope /></span>
                        </div>
                        <div className="details">
                            <h3>Email.</h3>
                            { sectiondata.contactdata.sidebar.email ?
                                <span>{sectiondata.contactdata.sidebar.email}</span>
                            : '' }
                            { sectiondata.contactdata.sidebar.email2 ?
                                <span>{sectiondata.contactdata.sidebar.email2}</span>
                            : '' }
                        </div>
                    </div>
                : '' }
            </div>

            { sectiondata.contactdata.sidebar.button ?
                <button className="theme-button" type="submit">{sectiondata.contactdata.sidebar.button} <FiChevronRight className="icon" /></button>
            : '' }
        </aside>
    )
}
