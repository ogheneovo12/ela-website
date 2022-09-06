import React  from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function ForgotPassForm() {
    return (
        <section className="signup-form-wrapper forgot-password">
            <div className="container">
                <div className="signup-form-box">
                    <div className="signup-form-top">
                        <h1 className="signup-form-title">Reset Password</h1>
                        <p>Enter the email of your account to reset password. Then you will receive a link to email to reset the password.If you have any issue about reset password <Link href="/contact">contact us</Link></p>
                    </div>
                    <form className="signup-form">
                        <input className="form-control" type="email" placeholder="Enter email address" />
                        <button type="submit" value="Register Account" className="theme-button">Reset Password <FiChevronRight className="icon" /></button>
                    </form>
                    <p className="already-account d-flex">
                        <Link to="/login">Login</Link>
                        <span>Not a member? <Link to="/sign-up">Register</Link></span>
                    </p>
                </div>
            </div>
        </section>
    )
}
