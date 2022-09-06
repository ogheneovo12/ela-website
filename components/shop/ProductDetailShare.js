import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGooglePlusG } from 'react-icons/fa'

export default function ProductDetailShare() {
    return (
        <>
            <div className="product-details-share-links d-flex sidebar-social-profile">
                <span>Share on: </span>
                <ul className="d-flex">
                    <li><a href="https://facebook.com"><FaFacebookF /></a></li>
                    <li><a href="https://instagram.com"><FaInstagram /></a></li>
                    <li><a href="https://twitter.com"><FaTwitter /></a></li>
                    <li><a href="https://linkedin.com"><FaLinkedinIn /></a></li>
                    <li><a href="https://plus.google.com"><FaGooglePlusG /></a></li>
                </ul>
            </div>
        </>
    )
}
