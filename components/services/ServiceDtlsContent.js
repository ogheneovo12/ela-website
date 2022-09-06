import React  from 'react'
import { LineChart } from 'react-chartkick'
import 'chart.js'
import OnlyImageSlider from "../sliders/OnlyImageSlider";
import sectiondata from "../../store/store";
import SimpleTab2 from "../tabs/SimpleTab2";

export default function ServiceDtlsContent() {
    return (
        <div className="service-content-wrap">
            {/* Image Slider */}
            <OnlyImageSlider items={sectiondata.Services.serviceDetails.sliders} />

            <div className="service-content">
                {sectiondata.Services.serviceDetails.title ?
                    <h1>{sectiondata.Services.serviceDetails.title}</h1>
                : ''}
                {sectiondata.Services.serviceDetails.content1 ?
                    <p>{sectiondata.Services.serviceDetails.content1}</p>
                : ''}
                {sectiondata.Services.serviceDetails.content2 ?
                    <p>{sectiondata.Services.serviceDetails.content2}</p>
                : ''}

                {sectiondata.Services.serviceDetails.features || sectiondata.Services.serviceDetails.featuresimg ?
                    <div className="service-content-mdl-grid d-grid">
                        {sectiondata.Services.serviceDetails.features ?
                            <ul>
                                {sectiondata.Services.serviceDetails.features.map((item, i) => {
                                    return (
                                        <li key={i}>{item.icon} {item.title}</li>
                                    )
                                })}
                            </ul>
                        : ''}
                        {sectiondata.Services.serviceDetails.featuresimg ?
                            <div className="service-content-mdl-img">
                                <img src={sectiondata.Services.serviceDetails.featuresimg?.src} alt="Service Details" />
                            </div>
                        : ''}
                    </div>
                : ''}

                {/* Tab */}
                <SimpleTab2 tabnavs={sectiondata.Tabdata.tab3.tabnav} tablists={sectiondata.Tabdata.tab3.tablists} />

                <div className="service-content-planning-grid d-grid">
                    {sectiondata.Services.serviceDetails.plans.img ?
                        <div className="planning-img">
                            <img src={sectiondata.Services.serviceDetails.plans.img?.src} alt="Planning" />
                        </div>
                    : ''}
                    <div className="planning-lists">
                        {sectiondata.Services.serviceDetails.plans.title ?
                            <h3>{sectiondata.Services.serviceDetails.plans.title}</h3>
                        : ''}
                        {sectiondata.Services.serviceDetails.plans.content ?
                            <p>{sectiondata.Services.serviceDetails.plans.content}</p>
                        : ''}
                        {sectiondata.Services.serviceDetails.plans.lists ?
                            <ul>
                                {sectiondata.Services.serviceDetails.plans.lists.map((item, i) => {
                                    return (
                                        <li key={i}>{item.icon} {item.title}</li>
                                    )
                                })}
                            </ul>
                        : ''}
                    </div>
                </div>
                <div className='service-content-project-grid d-grid'>
                    <div className="left">
                        {sectiondata.Services.serviceDetails.project.title ?
                            <h3>{sectiondata.Services.serviceDetails.project.title}</h3>
                        : ''}
                        {sectiondata.Services.serviceDetails.project.content1 ?
                            <p>{sectiondata.Services.serviceDetails.project.content1}</p>
                        : ''}
                        {sectiondata.Services.serviceDetails.project.content2 ?
                            <p>{sectiondata.Services.serviceDetails.project.content2}</p>
                        : ''}
                        {sectiondata.Services.serviceDetails.project.content3 ?
                            <p>{sectiondata.Services.serviceDetails.project.content3}</p>
                        : ''}
                    </div>
                    <div className="right">
                        <LineChart colors={["#f66b5d", "#ddd"]} data={{ "Jan": 10, "Feb": 25, "Mar": 13, "Apr": 22, "May": 32, "Jun": 25 }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
