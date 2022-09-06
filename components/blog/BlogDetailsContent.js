import React from "react";
import singleimg from "../../assets/images/img16.jpg";
import img from "../../assets/images/img4.jpg";
import avata1 from "../../assets/images/testi-img1.jpg";
import { Link } from "react-router-dom";
import {
  FiMessageCircle,
  FiCheckCircle,
  FiChevronsLeft,
  FiChevronsRight,
  FiThumbsUp,
  FiMeh,
  FiChevronRight,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaReply,
  FaQuoteLeft,
} from "react-icons/fa";
import BlogSidebar from "./BlogSidebar";

const lists = [
  {
    list: "Sed do eiusmod tempor incididunt ut",
  },
  {
    list: "Exercitation ullamco laboris nis.",
  },
  {
    list: "Quis nostrud exer citation.",
  },
  {
    list: "Andomised words which don't look",
  },
  {
    list: "Commodo consequat duis autex.",
  },
  {
    list: "Andomised words which don't look",
  },
  {
    list: "Pharetra dui, nec tincidunt ante",
  },
];
export default function BlogDetailsContent() {
  return (
    <section className="blog-details-wrapper">
      <div className="container">
        <div className="blog-details-grid d-grid">
          <div className="blog-details-left">
            <div className="blog-details-img-box">
              <img src={singleimg.src} alt="Blog Details" />
            </div>
            <div className="blog-details-contents">
              <span className="blog-details-meta d-flex">
                10 Mar, 2020 by <a href="https://techydevs.com">TechyDevs</a> in{" "}
                <Link to="/blog-details">Business</Link>{" "}
                <FiMessageCircle className="icon" />{" "}
                <Link to="/blog-details">6 Comments</Link>
              </span>

              <h2>We Give You Power to Grow Your Business Successfully.</h2>
              <p>
                Investing Ationes demons trave runt lectores legere liusry quod
                ii legunt saepius claritas Investing ations. Pharetra dui, nec
                tincidunt ante mauris eu diam. Phasellus viverra nisl vitae
                cursus aei uismod suspendisse seapius claritas investing. Lorem
                ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magnag aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laborinu aliquip
                ex ea commado consequat. Du aute irure dolor in reprehenderit
                inlore voluptate velit esse cillum dolore.
              </p>

              <p>
                Mauris nunc leo, sollicitudin a ligula ut, iaculis bibendum
                lorem Duis gravida suscipit purus, at consequat de diam sagittis
                sit amet. Maris sed nisl vel urna egestas elementum eget quis
                ipsum. Nulla a enim et justoed facilisis ornare. Sed ante sem,
                dignissim a vehicula et, rutrum volutpat turpis.
              </p>

              <blockquote>
                <p>
                  There are no secrets to success. It is the result of
                  preparation, hard work, and learning from failure. Lorem ipsum
                  dolor sit amet.
                </p>
                <h3>
                  -Amand Seyfried, <span>Sales & Marketing, Alien Ltd.</span>
                </h3>
                <span className="quote-icon">
                  <FaQuoteLeft />
                </span>
              </blockquote>

              <p>
                Cras eget sollicitudin lorem. Etiam commodo ultricies luctus.
                Integer porttitor ligula eget quam blandit finibus. Suspendisses
                potenti. Nulla blandit augue orci, eget tristique massa
                fermentum sed. Duis ac maximus nulla, et pharetra turpis. It&apos;s
                quite obvious the hypocrites who carried out this dreadful
                attack don&apos;t
              </p>

              <div className="blog-cnt-mdl-grid d-grid">
                <div className="blog-cnt-mdl-left">
                  <img src={img?.src} alt="Blog Details" />
                </div>
                <div className="blog-cnt-mdl-right">
                  <ul className="lists">
                    {lists.map((item, index) => {
                      return (
                        <li key={index}>
                          <FiCheckCircle className="icon" /> {item.list}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <p>
                Suspendisses potenti. Nulla blandit augue orci, eget tristique
                massa fermentum sed. Duis ac maximus nulla, et pharetra turpis.
                It&apos;s quite obvious the hypocrites who carried out this dreadful
                attack don&apos;t
              </p>

              <div className="blog-details-tags-grid d-grid">
                <div className="blog-details-tags-left">
                  <p>
                    Tags: <Link to="/blog-details">Business</Link>{" "}
                    <Link to="/blog-details">Finance</Link>{" "}
                    <Link to="/blog-details">Marketing</Link>
                  </p>
                </div>
                <div className="blog-details-tags-right d-flex">
                  <span>Share to: </span>
                  <ul className="blog-share-links d-flex">
                    <li>
                      <a href="https://facebook.com">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="https://plus.google.com">
                        <FaGooglePlusG />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="blog-details-pagination d-flex">
                <Link className="prev d-flex" to="/blog-details">
                  <FiChevronsLeft className="icon" /> Previous Post
                </Link>
                <Link className="next d-flex" to="/blog-details">
                  Newer Post <FiChevronsRight className="icon" />
                </Link>
              </div>

              <div className="blog-details-comments-wrap">
                <h1 className="comment-title">3 Comments</h1>
                <ul className="comments">
                  <li className="d-flex">
                    <div className="comment-avata">
                      <img src={avata1?.src} alt="Comment avata" />
                    </div>
                    <div className="comment-content">
                      <h3>
                        Adam Smith{" "}
                        <span className="date">14 Mar, 202 - 4:30pm</span>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation.
                      </p>
                      <div className="comment-reply-helpful d-flex">
                        <Link to="/blog-details">
                          <FaReply className="icon" /> Reply
                        </Link>
                        <div className="helpful d-flex">
                          Helpful...?{" "}
                          <Link to="/blog-details">
                            <FiThumbsUp className="icon" /> Yes
                          </Link>{" "}
                          <Link to="/blog-details">
                            <FiMeh className="icon" /> No
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>

                  <ul className="child">
                    <li className="d-flex">
                      <div className="comment-avata">
                        <img src={avata1?.src} alt="Comment avata" />
                      </div>
                      <div className="comment-content">
                        <h3>
                          Adam Smith{" "}
                          <span className="date">14 Mar, 202 - 4:30pm</span>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.
                        </p>
                        <div className="comment-reply-helpful d-flex">
                          <Link to="/blog-details">
                            <FaReply className="icon" /> Reply
                          </Link>
                          <div className="helpful d-flex">
                            Helpful...?{" "}
                            <Link to="/blog-details">
                              <FiThumbsUp className="icon" /> Yes
                            </Link>{" "}
                            <Link to="/blog-details">
                              <FiMeh className="icon" /> No
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <li className="d-flex">
                    <div className="comment-avata">
                      <img src={avata1?.src} alt="Comment avata" />
                    </div>
                    <div className="comment-content">
                      <h3>
                        Adam Smith{" "}
                        <span className="date">14 Mar, 202 - 4:30pm</span>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation.
                      </p>
                      <div className="comment-reply-helpful d-flex">
                        <Link to="/blog-details">
                          <FaReply className="icon" /> Reply
                        </Link>
                        <div className="helpful d-flex">
                          Helpful...?{" "}
                          <Link to="/blog-details">
                            <FiThumbsUp className="icon" /> Yes
                          </Link>{" "}
                          <Link to="/blog-details">
                            <FiMeh className="icon" /> No
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="blog-details-comment-fields">
                <h1>Leave a Comment</h1>
                <p>
                  Your email address will no be published. Required fields are
                  marked <sup>*</sup>
                </p>
                <form className="blog-comment-fields">
                  <div className="comment-field-2clmn d-grid">
                    <div className="left">
                      <label htmlFor="name">
                        Your Name <sup>*</sup>
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="left">
                      <label htmlFor="email">
                        Your Email <sup>*</sup>
                      </label>
                      <input
                        type="text"
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="field-textarea">
                    <label htmlFor="textarea">
                      Your Message <sup>*</sup>
                    </label>
                    <textarea
                      id="textarea"
                      placeholder="Write Message"
                    ></textarea>
                  </div>
                  <button type="submit" className="theme-button">
                    Submit Comment <FiChevronRight className="icon" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="blog-details-right">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
