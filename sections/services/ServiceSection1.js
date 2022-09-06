import SectionsTitle from "../../components/common/SectionsTitle";
import {Link} from "react-router-dom";
import {FiChevronRight} from "react-icons/fi";
import Service from "../../components/services/Services";
import React from "react";


export default function ServiceSection1({secTitle, secSubtitle, secButton, secButtonUrl, serviceItems}) {
    return (
        <div className="h-service">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <SectionsTitle title={secTitle} subtitle={secSubtitle} />
                    </div>
                    {
                        secButton?
                            (
                                <div className="col-4">
                                    <div className="service-button text-right">
                                        <Link to={secButtonUrl} className="theme-button">{secButton} <FiChevronRight className="icon" /></Link>
                                    </div>
                                </div>
                            ) : ''
                    }
                </div>
            </div>
            <div className="container">
                <div className="services-items-grid">
                    <Service sLists={serviceItems} />
                </div>
            </div>
        </div>
    )
}