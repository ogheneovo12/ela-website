import React  from 'react'
import SectionsTitle from '../common/SectionsTitle'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

export default function About2({lfTitle, lfContent1, lfContent2, lfLists, lfButtontext, lfButtonurl, rtImg1, ftImg2, rtTitle, rtContent, rtButtontext, rtButtonurl}) {
    return (
        <section className="about-history-wrapper">
            <div className="container">
                <div className="about-history-grid d-grid">
                    <div className="about-history-left">
                        <SectionsTitle title={lfTitle} />
                        {lfContent1?
                            <p className="desc">
                                {lfContent1}
                            </p>
                        : ''}
                        {lfContent2?
                            <p className="desc">
                                {lfContent2}
                            </p>
                        : ''}
                        {lfLists?
                            <ul className="lists">
                                {lfLists.map((list, index) => {
                                    return <li key={index}>{list}</li>
                                })}
                            </ul>
                        : ''}
                        {lfButtontext?
                            <Link to={lfButtonurl} className="theme-button">{lfButtontext} <FiChevronRight className="icon" /></Link>
                        : ''}
                    </div>
                    <div className="about-history-right">
                        <div className="about-history-right-img-grid d-grid">
                            {rtImg1?
                                <img src={rtImg1.src} alt="About" />
                            : ''}
                            {ftImg2?
                                <img src={ftImg2.src} alt="About" />
                            : ''}
                        </div>
                        <div className="about-history-trusted-box">
                            {rtTitle?
                                <h1>{rtTitle}</h1>
                            : ''}
                            {rtContent?
                                <p className="info">{rtContent}</p>
                            : ''}
                            {rtButtontext?
                                <Link to={rtButtonurl} className="simple-button">{rtButtontext} <FiChevronRight className="icon" /></Link>
                            : ''}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
