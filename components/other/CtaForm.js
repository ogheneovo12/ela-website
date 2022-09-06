import React  from 'react'
import SectionsTitle from '../common/SectionsTitle'
import { FiPhoneCall } from 'react-icons/fi'
import { MdMailOutline } from 'react-icons/md'

export default function CtaForm() {
    return (
        <section className="ctaform-wrapper">
            <div className="container">
                <div className="ctaform-grid">
                    <div className="ctaform-left">
                        <SectionsTitle title="Get Advice From Our Professionals." subtitle="Call To Action" />
                        <div className="ctaform-contact-info-grid text-center">
                            <div className="item">
                                <FiPhoneCall className="icon" />
                                <h2 className="item-title">Direct Line Numbers</h2>
                                <p>+11 (0) 123 456 7890 / +11 (0) 593 458 2394</p>
                            </div>
                            <div className="item">
                                <MdMailOutline className="icon" />
                                <h2 className="item-title">Our Email</h2>
                                <p>info@minzel.com/ example@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="ctaform-right">
                        <form>
                            <div className="form-grid">
                                <input type="text" name="name" placeholder="Name" />
                                <input type="EMAIL" name="email" placeholder="Email" />
                            </div>
                            <input type="text" name="text" placeholder="subject" />
                            <textarea id="textarea" placeholder="Message" ></textarea>
                            <button type="button" value="Send Us Message" className="theme-button">Send Us Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
