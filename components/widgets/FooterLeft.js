import {Link} from "react-router-dom";
import {FiPhone} from "react-icons/fi";
import {FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import React from "react";
import SocialProfile from "./SocialProfile";

export default function FooterLeft({ftlogo, content, phonenumber, email, address, scltitle, scllists}) {
    return (
        <div className="footer-widget footer-left">
            <Link to="/">
                <img src={ftlogo?.src} alt="Footer Logo" />
            </Link>
            <p className="desc">
                {content}
            </p>
            <ul className="footer-address">
                <li>
                    <a href={"tel:"+phonenumber}><span className="icon"><FiPhone /></span> {phonenumber}</a>
                </li>
                <li>
                    <a href={"mailto:"+email}><span className="icon"><FaEnvelope /></span> {email}</a>
                </li>
                <li>
                    <a href="https://maps.google.com"><span className="icon"><FaMapMarkerAlt /></span> {address}</a>
                </li>
            </ul>

            {/* Social Profile */}
            <div className="social">
                <SocialProfile title={scltitle} lists={scllists} />
            </div>
        </div>
    )
}
