import React  from 'react'
import SocialProfile from "../../widgets/SocialProfile";

export default function WidgetFollower({title, lists})  {
    return (
        <>
            { title || lists ?
                <div className="shop-widget sidebar-social-profile">
                    <SocialProfile lists={lists} title={title} />
                </div>
            : '' }
        </>
    )
}
