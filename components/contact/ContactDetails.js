import React  from 'react'
import SectionsTitle from '../common/SectionsTitle'
import { FiChevronRight } from 'react-icons/fi'
import ContactSidebar from './ContactSidebar'
import Maps from '../contact/Maps'
import CtaNewsletter from "../../sections/CtaNewsletter";
import sectiondata from "../../store/store";
import SocialProfile from "../widgets/SocialProfile";

export default function ContactDetails() {
    return (
        <section className="contact-form-wrapper">
            <div className="container">
                <div className="contact-form-grid d-grid">
                    <div className="left">
                        <SectionsTitle title={sectiondata.contactdata.secTitle} subtitle={sectiondata.contactdata.secSubtitle} />
                        <p>{sectiondata.contactdata.content}</p>
                        <div className="sidebar-social-profile">
                            <SocialProfile lists={sectiondata.contactdata.socials} />
                        </div>
                    </div>
                    <div className="right">
                        <form>
                            <div className="form-grid d-grid">
                                <div className="left">
                                    <label htmlFor="name">Your Name <sup>*</sup></label>
                                    <input type="text" id="name" placeholder="Full Name" required />
                                </div>
                                <div className="right">
                                    <label htmlFor="email">Your Email <sup>*</sup></label>
                                    <input type="email" id="email" placeholder="Email Address" required />
                                </div>
                                <div className="left">
                                    <label htmlFor="number">Your Number <sup>*</sup></label>
                                    <input type="text" id="number" placeholder="Your Phone" required />
                                </div>
                                <div className="right">
                                    <label htmlFor="subject">Subject <sup>*</sup></label>
                                    <input type="text" id="subject" placeholder="Subject" required />
                                </div>
                            </div>
                            <div className="form-textarea">
                                <label htmlFor="message">Your Message <sup>*</sup></label>
                                <textarea id="message" placeholder="Write Message"></textarea>
                            </div>
                            <button type="submit" className="theme-button">Send Us Message <FiChevronRight className="icon" /></button>
                        </form>
                    </div>
                </div>

                <div className="contact-form-map-grid d-grid">
                    <div className="left">
                        <Maps />
                    </div>
                    <div className="right">
                        <ContactSidebar />
                    </div>
                </div>

                <CtaNewsletter title={sectiondata.ctadata.cta1.title} content={sectiondata.ctadata.cta1.content} />
            </div>
        </section>
    )
}
