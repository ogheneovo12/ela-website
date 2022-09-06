import React  from 'react'
import SectionsTitle from "../components/common/SectionsTitle";
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import { LineChart } from 'react-chartkick'
import 'chart.js'


export default function ChartArea({secTitle, secSubtitle, title1, title2, content1, content2, buttontext, buttonurl}) {
    return (
        <section className="chart-wrapper">
            <div className="container">
                <div className="chart-grid">
                    <div className="chart-left">
                        <SectionsTitle title={secTitle} subtitle={secSubtitle} />
                        {title1?
                            <h2 className="content-title">{title1}</h2>
                        : ''}
                        {content1?
                            <p className="content-desc">{content1}</p>
                        : ''}
                        {title2?
                            <h2 className="content-title">{title2}</h2>
                        : ''}
                        {content2?
                            <p className="content-desc">{content2}</p>
                        : ''}
                        {buttontext?
                            <Link to={buttonurl} className="theme-button">{buttontext} <FiChevronRight className="icon" /></Link>
                        : ''}
                    </div>
                    <div className="chart-right">
                        <LineChart colors={["#f66b5d", "#ddd"]} data={{ "Jan": 10, "Feb": 25, "Mar": 13, "Apr": 22, "May": 32, "Jun": 25 }} />
                    </div>
                </div>
            </div>
        </section>
    )
}
