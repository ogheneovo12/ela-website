import React  from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import { FaCaretRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import RelatedProject from "./RelatedProject";
import sectiondata from "../../store/store";

export default function PortfolioDetailsContent() {
    return (
        <section className="portfolio-details-wrapper">
            <div className="container">
                <div className="portfolio-details-image-box">
                    <div className="portfolio-details-image">
                        <img src={sectiondata.portfoliodata.img?.src} alt="Portfolio Details" />
                    </div>
                    <div className="portfolio-details-info-grid d-grid">
                        { sectiondata.portfoliodata.client ?
                            <div className="item">
                                <h4>Client</h4>
                                <span className="d-flex">{sectiondata.portfoliodata.client}</span>
                            </div>
                        : '' }
                        { sectiondata.portfoliodata.date ?
                            <div className="item">
                                <h4>Date</h4>
                                <span className="d-flex">{sectiondata.portfoliodata.date}</span>
                            </div>
                        : '' }
                        { sectiondata.portfoliodata.services ?
                            <div className="item">
                                <h4>Services</h4>
                                <span className="d-flex">
                                {sectiondata.portfoliodata.services.map((item, i) => {
                                    return (
                                        <Link key={i} to={item.path}>{item.title}, </Link>
                                    )
                                })}
                            </span>
                            </div>
                        : '' }
                        { sectiondata.portfoliodata.website ?
                            <div className="item">
                                <h4>Website</h4>
                                <a href={"https://"+sectiondata.portfoliodata.website} className="weblink d-flex">{sectiondata.portfoliodata.website}</a>
                            </div>
                        : '' }
                    </div>
                    <div className="portfolio-details-content">
                        { sectiondata.portfoliodata.title ?
                            <h1>{sectiondata.portfoliodata.title}</h1>
                        : '' }
                        { sectiondata.portfoliodata.content1 ?
                            <p>{sectiondata.portfoliodata.content1}</p>
                        : '' }
                        { sectiondata.portfoliodata.content2 ?
                            <p>{sectiondata.portfoliodata.content2}</p>
                        : '' }
                        { sectiondata.portfoliodata.content3 ?
                            <p>{sectiondata.portfoliodata.content3}</p>
                        : '' }
                    </div>
                    <div className="portfolio-details-project-lists d-grid">
                        { sectiondata.portfoliodata.projectfeature.title || sectiondata.portfoliodata.projectfeature.lists ?
                            <div className="item project-features">
                                { sectiondata.portfoliodata.projectfeature.title ?
                                    <h3>{sectiondata.portfoliodata.projectfeature.title}</h3>
                                    : '' }
                                { sectiondata.portfoliodata.projectfeature.lists ?
                                    <ul>
                                        {sectiondata.portfoliodata.projectfeature.lists.map((item, i) => {
                                            return (
                                                <li key={i} className="d-flex"><FaCaretRight className="icon" />{item}</li>
                                            )
                                        })}
                                    </ul>
                                    : '' }
                            </div>
                        : '' }
                        { sectiondata.portfoliodata.solutions.title || sectiondata.portfoliodata.solutions.content || sectiondata.portfoliodata.solutions.lists ?
                            <div className="item solution">
                                { sectiondata.portfoliodata.solutions.title  ?
                                    <h3>{ sectiondata.portfoliodata.solutions.title }</h3>
                                    : '' }
                                { sectiondata.portfoliodata.solutions.content ?
                                    <p>{ sectiondata.portfoliodata.solutions.content }</p>
                                    : '' }
                                { sectiondata.portfoliodata.solutions.lists ?
                                    <ul>
                                        { sectiondata.portfoliodata.solutions.lists.map((item, i) => {
                                            return (
                                                <li key={i} className="d-flex"><FiCheckCircle className="icon" />{item}</li>
                                            )
                                        })}
                                    </ul>
                                    : '' }
                            </div>
                        : '' }
                        { sectiondata.portfoliodata.bestresult.title || sectiondata.portfoliodata.bestresult.img ?
                            <div className="item results">
                                { sectiondata.portfoliodata.bestresult.title ?
                                    <h3>{ sectiondata.portfoliodata.bestresult.title }</h3>
                                    : '' }
                                { sectiondata.portfoliodata.bestresult.img ?
                                    <img src={ sectiondata.portfoliodata.bestresult.img?.src } alt="chart bar" />
                                    : '' }
                            </div>
                        : '' }
                    </div>

                    {/* Related Project */}
                    <RelatedProject title={sectiondata.portfoliodata.relatedproject.title} items={sectiondata.portfoliodata.relatedproject.lists} />
                </div>
            </div>
        </section>
    )
}
