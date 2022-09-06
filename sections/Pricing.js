import React  from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SectionsTitle from "../components/common/SectionsTitle";
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

export default function Pricing({secTitle, secSubtitle, navlist, planlists}) {
    return (
        <section className="pricing-wrapper">
            <div className="container">
                <div className="text-center">
                    <SectionsTitle title={secTitle} subtitle={secSubtitle} />
                </div>
                <Tabs>
                    {navlist?
                        <TabList className="tabs-nav">
                            {navlist.map((item, i) => {
                                return (
                                    <Tab key={i}>{item}</Tab>
                                )
                            })}
                        </TabList>
                    : ''}
                    {planlists.map((item, i) => {
                        return (
                            <TabPanel className="tabs-content text-center" key={i}>
                                <div className="pricing-plan-grid">
                                    {item.plans.map((plan, index) => {
                                        return (
                                            <div key={index} className={plan.isactive?'pricing-plan-box active' : 'pricing-plan-box'}>
                                                {plan.title?
                                                    <h2 className="title">{plan.title}</h2>
                                                    : ''}
                                                {plan.price?
                                                    <h1 className="price"> {plan.currency?<sup>{plan.currency}</sup>:''}{plan.price}</h1>
                                                    : ''}
                                                {plan.mo?
                                                    <h3 className="mo">{plan.mo}</h3>
                                                    : ''}
                                                {plan.features?
                                                    <ul className="feature-lists">
                                                        {plan.features.map((item, i) => {
                                                            return (
                                                                <li key={i}>{item}</li>
                                                            )
                                                        })}
                                                    </ul>
                                                    : ''}
                                                {plan.buttontext?
                                                    <Link to={plan.buttonurl} className="theme-button"><FiShoppingCart className="icon" /> {plan.buttontext}</Link>
                                                :''}
                                            </div>
                                        )
                                    })}
                                </div>
                            </TabPanel>
                        )
                    })}
                </Tabs>
            </div>

        </section>
    )
}
