import React  from 'react'
import { Link } from 'react-router-dom'
import { FiChevronsLeft } from 'react-icons/fi'
import sectiondata from "../../store/store";

export default function ErrorContent() {
    return (
        <section className="error-content-wrapper text-center">
            <div className="error-content-width">
                {sectiondata.errorpagedata.img ?
                    <img src={sectiondata.errorpagedata.img?.src} alt="Error" />
                : ''}
                {sectiondata.errorpagedata.title ?
                    <h1>{sectiondata.errorpagedata.title}</h1>
                : ''}
                {sectiondata.errorpagedata.content ?
                    <p>{sectiondata.errorpagedata.content}</p>
                : ''}
                {sectiondata.errorpagedata.connector ?
                    <div className="connector">
                        <span>{sectiondata.errorpagedata.connector}</span>
                    </div>
                : ''}
                {sectiondata.errorpagedata.backbtn ?
                    <Link className="theme-button" to="/"><FiChevronsLeft className="icon" /> {sectiondata.errorpagedata.backbtn}</Link>
                : ''}
            </div>
        </section>
    )
}
