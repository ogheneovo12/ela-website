import React  from 'react'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import { FaEnvelope } from 'react-icons/fa'

export default function ServiceContact({title, phonenumber, address, email}) {
    return (
        <>
            {title || address || phonenumber || email ?
                <div className="service-widgets widget_contact">
                    {title ?
                        <h3>{title}</h3>
                        : ''}
                    {address || phonenumber || email ?
                        <ul>
                            {address ?
                                <li className="d-flex"><span className="icon"><FiMapPin /></span> {address}</li>
                                : ''}
                            {phonenumber ?
                                <li className="d-flex"><span className="icon"><FiPhone /></span> <a href={"tel:"+phonenumber}>{phonenumber}</a></li>
                                : ''}
                            { email ?
                                <li className="d-flex"><span className="icon"><FaEnvelope /></span> <a href={"mailto:"+email}>{email}</a></li>
                                : ''}
                        </ul>
                        : ''}
                </div>
            : ''}
        </>
    )
}
