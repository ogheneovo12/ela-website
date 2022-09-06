import React, { Component } from 'react'
import ModalVideo from 'react-modal-video'
import { FiPlay } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import sectiondata from "../../store/store";

export default class ServiceVideo extends Component {
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
            <>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={sectiondata.Services.serviceVideo.videoId} onClose={() => this.setState({ isOpen: false })} />
                <section className="service-video-wrapper">
                    <div className="container">
                        <div className="service-content-box">
                            <div className="service-video-button">
                                <Link to="#" className="video-btn" onClick={this.openModal}>{sectiondata.Services.serviceVideo.videobutton} <span className="icon"><FiPlay /></span></Link>
                            </div>
                            <img className="service-img" src={sectiondata.Services.serviceVideo.img?.src} alt="Service video" />
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
