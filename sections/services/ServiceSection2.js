import React  from 'react'
import Service from "../../components/services/Services";


export default function ServiceSection2({servicelist}) {
    return (
        <section className="services-area service-3columns">
            <div className="container">
                <div className="services-items-grid">
                    <Service sLists={servicelist} />
                </div>
            </div>
        </section>
    )
}
