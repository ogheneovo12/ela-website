import React  from 'react'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import sectiondata from "../../store/store";

export default function FooterError() {
    return (
        <footer className="error-footer-wrapper d-flex">
            <div className="left">
            <p>&copy; Copyright ELA 2022.</p>
            </div>
            {sectiondata.errorpagedata.footermenu ?
                <div className="right">
                    <ul className="pages d-flex">
                        {sectiondata.errorpagedata.footermenu.map((item, i) => {
                            return (
                                <li key={i}><Link to={item.path}>{item.title}</Link></li>
                            )
                        })}
                    </ul>
                </div>
            : ''}
        </footer>
    )
}
