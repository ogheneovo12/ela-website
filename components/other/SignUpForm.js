import React  from 'react'
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function SignUpForm() {
    return (
        <section className="signup-form-wrapper">
            <div className="container">
                <div className="signup-form-box">
                    <div className="signup-form-top text-center">
                        <h1 className="signup-form-title">Create an account!</h1>
                        <p>with your social network.</p>
                    </div>
                    <div className="signup-form-signin d-flex">
                        <button className="theme-button google" type="submit">
                            Google <FaGoogle className="icon" />
                        </button>
                        <button className="theme-button facebook" type="submit">
                            Facebook <FaFacebookF className="icon" />
                        </button>
                        <button className="theme-button twitter" type="submit">
                            Twitter <FaTwitter className="icon" />
                        </button>
                    </div>
                    <div className="connector text-center">
                        <span>or</span>
                    </div>
                    <form className="signup-form">
                        <input className="form-control" type="text" placeholder="First Name" />
                        <input className="form-control" type="text" placeholder="Last Name" />
                        <input className="form-control" type="text" placeholder="Enter your username" />
                        <input className="form-control" type="email" placeholder="Email Address" />
                        <input className="form-control" type="password" placeholder="Password" />
                        <input className="form-control" type="password" placeholder="Confirm Password" />
                        <div className="checkboxes">
                            <label className="privacy-policy"> I agree to Minzel's <a href="https://techydevs.com">Privacy Policy</a>
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="privacy-policy"> I agree to Minzel's <a href="https://techydevs.com">Terms of Services</a>
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <button type="submit" value="Register Account" className="theme-button">Register Account <FiChevronRight className="icon" /></button>
                    </form>
                    <p className="already-account">
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
