import React  from 'react'
import ServiceCategory from './widgets/ServiceCategory'
import ServiceContact from './widgets/ServiceContact'
import ServiceBroucher from './widgets/ServiceBroucher'
import ServiceSocial from './widgets/ServiceSocial'
import sectiondata from "../../store/store";

export default function ServiceSidebar() {
    return (
        <aside className="service-sidebar">
            <ServiceCategory title={sectiondata.Services.serviceDetails.sidebar.categories.title} lists={sectiondata.Services.serviceDetails.sidebar.categories.lists} />
            <ServiceContact
                title={sectiondata.Services.serviceDetails.sidebar.contactinfos.title}
                address={sectiondata.Services.serviceDetails.sidebar.contactinfos.address}
                phonenumber={sectiondata.Services.serviceDetails.sidebar.contactinfos.phonenumber}
                email={sectiondata.Services.serviceDetails.sidebar.contactinfos.email} />
            <ServiceBroucher
                title={sectiondata.Services.serviceDetails.sidebar.broucher.title}
                content={sectiondata.Services.serviceDetails.sidebar.broucher.content}
                button={sectiondata.Services.serviceDetails.sidebar.broucher.button}
                buttonurl={sectiondata.Services.serviceDetails.sidebar.broucher.buttonurl} />
            <ServiceSocial title={sectiondata.Footerdata.ftLeftwidget.socials.title} lists={sectiondata.Footerdata.ftLeftwidget.socials.lists} />
        </aside>
    )
}
