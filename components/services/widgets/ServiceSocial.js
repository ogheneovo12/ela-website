import React  from 'react'
import SocialProfile from "../../widgets/SocialProfile";

export default function ServiceSocial({title, lists}) {
    return (
        <>
            <div className="service-widgets sidebar-social-profile">
                <SocialProfile title={title} lists={lists} />
            </div>
        </>
    )
}
