import React  from 'react'
import { FiHeart } from 'react-icons/fi'
import ScrollTopBtn from '../layouts/ScrollTopBtn'
import FooterLeft from "../widgets/FooterLeft";
import FooterCommonLinks from "../widgets/FooterCommonLinks";
import FooterSchedule from "../widgets/FooterSchedule";
import FooterForm from "../widgets/FooterForm";
import sectiondata from "../../store/store";

export default function Footer() {
    return (
        <>
            <ScrollTopBtn />
            <footer className="footer-wrapper">
                <div className="container">
                    <div className="footer-widgets-grid">
                        {/* Footer Left */}
                        <FooterLeft
                            ftlogo={sectiondata.Footerdata.ftLeftwidget.footerlogo}
                            email={sectiondata.Footerdata.ftLeftwidget.email}
                            content={sectiondata.Footerdata.ftLeftwidget.content}
                            address={sectiondata.Footerdata.ftLeftwidget.address}
                            phonenumber={sectiondata.Footerdata.ftLeftwidget.phonenumber}
                            scltitle={sectiondata.Footerdata.ftLeftwidget.socials.title}
                            scllists={sectiondata.Footerdata.ftLeftwidget.socials.lists} />

                        {/* Footer Common Links */}
                        <FooterCommonLinks
                            title={sectiondata.Footerdata.ftCommonLinks.title}
                            lists={sectiondata.Footerdata.ftCommonLinks.lists} />

                        {/* Footer Schedule */}
                        {/* <FooterSchedule
                            title={sectiondata.Footerdata.ftSchedule.title}
                            offday={sectiondata.Footerdata.ftSchedule.offday}
                            schedulelists={sectiondata.Footerdata.ftSchedule.litss} /> */}

                        {/* Footer Form */}
                        <FooterForm />
                    </div>
                    <div className="copyright-wrap text-center">
                        <p>&copy; Copyright Minzel 2020. Made with <FiHeart className="heartbeat" /> by <a href="https://techydevs.com">TechyDevs</a>.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
