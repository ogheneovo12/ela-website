import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

export default function BlogWidgetFeatured({ blog }) {
    const { title, authorurl, date, author, images } = blog;
    return (
        <>
            <li className="d-flex">
                <Link to="/blog-details">
                    <img src={images[0]?.src} alt="Team Details" />
                </Link>
                <div className="body">
                    <Link to="/blog-details">
                        {title}
                    </Link>
                    <span className="date">
                        {date} by <a href={authorurl}>{author}</a>
                    </span>
                </div>
            </li>
        </>
    )
}



BlogWidgetFeatured.propTypes = {
    blog: PropTypes.shape({
        title: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        description: PropTypes.string.isRequired
    })
};
