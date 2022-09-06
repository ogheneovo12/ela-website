import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SectionsTitle from '../common/SectionsTitle'
import { FiChevronRight } from 'react-icons/fi'
import ModalVideo from 'react-modal-video'
import Progressbar from '../other/Progressbar'
import sectiondata from "../../store/store";

export default class About extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <section className="about-wrapper">
                <div className="container">
                    <div className="about-grid-wrap">
                        <div className="about-left">
                            <SectionsTitle title={sectiondata.Aboutdata.about1.title} subtitle={sectiondata.Aboutdata.about1.subtitle} />
                            <p className="about-left-desc">
                                {sectiondata.Aboutdata.about1.content}
                            </p>
                            {sectiondata.Aboutdata.about1.readmorebtn?
                                <Link to={sectiondata.Aboutdata.about1.readmorebtnurl}>
                                    {sectiondata.Aboutdata.about1.readmorebtn} <FiChevronRight className="icon" />
                                </Link> : ''
                            }

                            <div className="about-iconbox-grid">
                                {sectiondata.Aboutdata.about1.supports.map((item, index) => {
                                    return (
                                        <div className="about-iconbox" key={index}>
                                            {item.icon?
                                                <span className="about-iconbox-icon">
                                                    {item.icon}
                                                </span> : ''
                                            }
                                            {item.title?
                                                <h3 className="about-iconbox-title">
                                                    {item.title}
                                                </h3> : ''
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                            <Progressbar items={sectiondata.Aboutdata.about1.skills} />
                        </div>
                        <div className="about-right">
                            {sectiondata.Aboutdata.about1.images.map((img, index) => {
                                return <img key={index} className={'about_img_' + index} src={img?.src} alt={'About Image ' + index} />
                            })}
                            {sectiondata.Aboutdata.about1.videobtn?
                                (
                                    <>
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={sectiondata.Aboutdata.about1.videoId} onClose={() => this.setState({ isOpen: false })} />
                                        <Link to="#" className="video-btn" onClick={this.openModal}>
                                            {sectiondata.Aboutdata.about1.videobtn}
                                        </Link>
                                    </>
                                ) : ''
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


