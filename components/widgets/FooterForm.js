import {FiChevronRight} from "react-icons/fi";
import React from "react";

export default function FooterForm() {
    return (
        <div className="footer-widget footer-get-in-touch">
            <h2>Get In Touch.</h2>
            <form className="get-in-touch">
                <input type="text" name="text" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <textarea placeholder="Write Message"></textarea>
                <button className="theme-button" value="Send Us Message"> Send Us Message <FiChevronRight className="icon" /></button>
            </form>
        </div>
    )
}
