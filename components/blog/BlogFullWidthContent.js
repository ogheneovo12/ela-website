import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FiPlus, FiChevronRight } from 'react-icons/fi'
import { FaRegComment } from 'react-icons/fa'

export default function BlogFullWidthContent({ blog }) {
    const { title, button, authorurl, commentnum, date, author, images, fulldesc } = blog;

    return (
        <div className="blog">
            <div className="blog-img-box">
                <img src={images[1]?.src} alt="Blog" />
                <div className="blog-overlay">
                    <Link to="/blog-details" ><FiPlus className="icon" /></Link>
                </div>
            </div>
            <div className="blog-content-box">
                <span className="blog-meta">{date} By <a href={authorurl}>{author}</a></span>
                <Link to="/blog-details">
                    <h2 className="blog-title">
                        {title}
                    </h2>
                </Link>
                <p className="blog-desc">
                    {fulldesc}
                </p>
                <div className="blog-footer">
                    <Link className="theme-button" to="/blog-details">{button} <FiChevronRight className="icon" /></Link>
                    <div className="blog-comment">
                        <Link to="/blog-details">{commentnum} <FaRegComment className="comment" /></Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

BlogFullWidthContent.propTypes = {
    blog: PropTypes.shape({
        title: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        fulldesc: PropTypes.string.isRequired,
        commentnum: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    })
};