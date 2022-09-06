import React  from 'react'
import { FiChevronRight } from 'react-icons/fi'

export default function SubscribeForm() {
    return (
        <div className="contact-form-subscribe-content">
            <form>
                <div className="d-flex">
                    <input type="email" name="email" placeholder="Enter your email..." />
                    <button type="submit" className="theme-button">Subscribe <FiChevronRight className="icon" /></button>
                </div>
            </form>
        </div>
    )
}
