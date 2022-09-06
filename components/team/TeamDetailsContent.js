import React  from 'react'
import { FiPhone, FiLink } from 'react-icons/fi'
import { FaEnvelope, FaQuoteLeft } from 'react-icons/fa'
import TeamSidebar from './TeamSidebar'
import sectiondata from "../../store/store";

export default function TeamDetailsContent() {
    return (
        <section className="team-details-wrapper">
            <div className="container">
                <div className="team-details-grid-top d-grid">
                    <div className="team-details-img">
                        <img src={sectiondata.Teammemberdata.teamDetails.img?.src} alt="Team Details" />
                    </div>
                    <div className="team-details-content">
                        {sectiondata.Teammemberdata.teamDetails.name?
                            <h1 className="name">{sectiondata.Teammemberdata.teamDetails.name}</h1>
                        : ''}
                        {sectiondata.Teammemberdata.teamDetails.designation?
                            <span className="skills">{sectiondata.Teammemberdata.teamDetails.designation}</span>
                        : ''}
                        {sectiondata.Teammemberdata.teamDetails.address?
                            <p className="desc">{sectiondata.Teammemberdata.teamDetails.address}</p>
                        : ''}
                        {sectiondata.Teammemberdata.teamDetails.phonenumber || sectiondata.Teammemberdata.teamDetails.email || sectiondata.Teammemberdata.teamDetails.website?
                            <ul className="team-details-contact">
                                {sectiondata.Teammemberdata.teamDetails.phonenumber?
                                    <li><a href={"tel:"+sectiondata.Teammemberdata.teamDetails.phonenumber}><span className="icon"><FiPhone /></span> {sectiondata.Teammemberdata.teamDetails.phonenumber}</a></li>
                                    : ''}
                                {sectiondata.Teammemberdata.teamDetails.email?
                                    <li><a href={"mailto:"+sectiondata.Teammemberdata.teamDetails.email}><span className="icon"><FaEnvelope /></span> {sectiondata.Teammemberdata.teamDetails.email}</a></li>
                                    : ''}
                                {sectiondata.Teammemberdata.teamDetails.website?
                                    <li><a href={'https://'+sectiondata.Teammemberdata.teamDetails.website}><span className="icon"><FiLink /></span> {sectiondata.Teammemberdata.teamDetails.website}</a></li>
                                    : ''}
                            </ul>
                        : ''}
                        <div className="team-expertise-education-grid d-grid">
                            {sectiondata.Teammemberdata.teamDetails.expertise.title || sectiondata.Teammemberdata.teamDetails.expertise.lists ?
                                <div className="left">
                                    {sectiondata.Teammemberdata.teamDetails.expertise.title?
                                        <h2>{sectiondata.Teammemberdata.teamDetails.expertise.title}</h2>
                                        : ''}
                                    {sectiondata.Teammemberdata.teamDetails.expertise.lists?
                                        <ul className="team-details-expertise lists">
                                            {sectiondata.Teammemberdata.teamDetails.expertise.lists.map((item, index) => {
                                                return <li key={index}>{item}</li>
                                            })}
                                        </ul>
                                        : ''}
                                </div>
                            : ''}
                            {sectiondata.Teammemberdata.teamDetails.educations.title || sectiondata.Teammemberdata.teamDetails.educations.lists ?
                                <div className="right">
                                    {sectiondata.Teammemberdata.teamDetails.educations.title ?
                                        <h2>{sectiondata.Teammemberdata.teamDetails.educations.title}</h2>
                                        : ''}
                                    {sectiondata.Teammemberdata.teamDetails.educations.lists ?
                                        <ul className="team-details-education lists">
                                            {sectiondata.Teammemberdata.teamDetails.educations.lists.map((item, index) => {
                                                return <li key={index}>{item}</li>
                                            })}
                                        </ul>
                                        : ''}
                                </div>
                            : ''}
                        </div>
                    </div>
                </div>
                <div className="team-details-grid-bottom d-grid">
                    <div className="left">
                        <h3>{sectiondata.Teammemberdata.teamDetails.bottomContent.title}</h3>
                        <p>{sectiondata.Teammemberdata.teamDetails.bottomContent.content1}</p>
                        {sectiondata.Teammemberdata.teamDetails.bottomContent.blockquote.content || sectiondata.Teammemberdata.teamDetails.bottomContent.blockquote.name || sectiondata.Teammemberdata.teamDetails.bottomContent.blockquote.designation ?
                            <blockquote>
                                {sectiondata.Teammemberdata.teamDetails.bottomContent.blockquote.content?
                                    <p>{sectiondata.Teammemberdata.teamDetails.bottomContent.blockquote.content}</p>
                                    : ''}
                                {sectiondata.Teammemberdata.teamDetails.bottomContent.blockquote.name || sectiondata.Teammemberdata.teamDetails.bottomContent.blockquote.designation ?
                                    <h3>{sectiondata.Teammemberdata.teamDetails.bottomContent.blockquote.name} {sectiondata.Teammemberdata.teamDetails.bottomContent.blockquote.designation ? <span>{sectiondata.Teammemberdata.teamDetails.bottomContent.blockquote.designation}</span> : ''}</h3>
                                    : ''}
                                <span className="quote-icon">
                                <FaQuoteLeft />
                            </span>
                            </blockquote>
                        : ''}
                        {sectiondata.Teammemberdata.teamDetails.bottomContent.content2 ?
                            <p>
                                {sectiondata.Teammemberdata.teamDetails.bottomContent.content2}
                            </p>
                        : ''}
                    </div>
                    <div className="right">
                        <TeamSidebar />
                    </div>
                </div>
            </div>
        </section>
    )
}
