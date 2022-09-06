import React  from 'react'
import SectionsTitle from '../common/SectionsTitle'
import Teammembers from "./Teammembers";

export default function Team({secTitle, secSubtitle, teammembers}) {
    return (
        <section className="team-wrapper">
            <div className="container">
                <div className="text-center">
                    <SectionsTitle title={secTitle} subtitle={secSubtitle} />
                </div>
                <div className="team-grid text-center">

                    <Teammembers teammembers={teammembers} />

                </div>
            </div>
        </section>
    )
}
