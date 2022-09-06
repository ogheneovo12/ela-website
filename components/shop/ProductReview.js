import React from 'react'
import reviewimg1 from '../../assets/images/testi-img1.jpg'
import reviewimg2 from '../../assets/images/testi-img1.jpg'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Divider from '../other/Divider';
import { FiThumbsUp, FiMeh, FiChevronRight } from 'react-icons/fi';

export default function ProductReview() {
    return (
        <>
            <div className="reviews" id="reviews">
                <h1>Customer Reviews</h1>
                <ul className="review-lists">
                    <li className="d-flex">
                        <div className="image">
                            <img src={reviewimg1?.src} alt="Reviews" />
                        </div>
                        <div className="details">
                            <h3 className="d-flex">Adam Smith <span>17 Mar, 2020 - 4:00 pm</span></h3>
                            <ul className="rating d-flex">
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStarHalfAlt /></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            <div className="helpful-btns">
                                <p>Was this review...? <Link to="#"><FiThumbsUp /> Helpful</Link> <Link to="#"><FiMeh /> Funny</Link></p>
                            </div>
                        </div>
                    </li>
                    <li className="d-flex">
                        <div className="image">
                            <img src={reviewimg2?.src} alt="Reviews" />
                        </div>
                        <div className="details">
                            <h3 className="d-flex">Amanda Evil <span>19 Mar, 2020 - 5:00 pm</span></h3>
                            <ul className="rating d-flex">
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStarHalfAlt /></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            <div className="helpful-btns">
                                <p>Was this review...? <Link to="#"><FiThumbsUp /> Helpful</Link> <Link to="#"><FiMeh /> Funny</Link></p>
                            </div>
                        </div>
                    </li>
                </ul>
                <Divider />
                <div className="review-fields">
                    <h2>Write A Review</h2>
                    <form>
                        <div className="review-rating-field-grid d-grid">
                            <div className="ratings-review">
                                <h4>Rate This Item <sup>*</sup></h4>
                                <div className="ratings-star d-flex">
                                    <input type="radio" name="star" id="star1" /><label htmlFor="star1"></label>
                                    <input type="radio" name="star" id="star2" /><label htmlFor="star2"></label>
                                    <input type="radio" name="star" id="star3" /><label htmlFor="star3"></label>
                                    <input type="radio" name="star" id="star4" /><label htmlFor="star4"></label>
                                    <input type="radio" name="star" id="star5" /><label htmlFor="star5"></label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Your Name <sup>*</sup></label>
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Your Email <sup>*</sup></label>
                                <input type="Email" placeholder="Email Address" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message <sup>*</sup></label>
                            <textarea id="message" placeholder="Write Message"></textarea>
                        </div>
                        <button type="submit" className="theme-button">Post Your Review <FiChevronRight className="icon" /></button>
                    </form>
                </div>
            </div>
        </>
    )
}
