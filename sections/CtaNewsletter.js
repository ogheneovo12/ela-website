import SubscribeForm from "../components/other/SubscribeForm";
import React from "react";

export default function CtaNewsletter({title, content}) {
    return (
        <div className="contact-form-subscribe-wrap text-center">
            { title ?
                <h1>{ title }</h1>
            : '' }
            { content ?
                <p>{content}</p>
            : '' }
            <SubscribeForm />
        </div>
    )
}

