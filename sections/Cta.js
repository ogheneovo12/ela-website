import React  from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from "react-icons/fi";

export default function Cta() {
    return (
        <section className="cta-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h1>This Year <strong>55 Lawyers</strong> have been impacted by ELA.</h1>
                    </div>
                    <div className="col-4 text-right">
                        <Link to="/#" className="theme-button">Join ELA Today <FiChevronRight className="icon" /></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
