import React  from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SectionsTitle from '../common/SectionsTitle'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

export default function SimpleTab({secTitle, secSubtitle, tabsnav, tabslist}) {
    return (
        <section className="tabs-wrapper">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <SectionsTitle title={secTitle} subtitle={secSubtitle} />
                    </div>
                </div>


                <div className="tabs-content-wrap">
                    <Tabs>
                        <TabList className="tabs-nav">
                            {tabsnav.map((item, index) => {
                                return <Tab key={index}>{item.title}</Tab>
                            })}
                        </TabList>
                        {tabslist.map((tab, index) => {
                            return (
                                <TabPanel className="tabs-content" key={index}>
                                    <div className={'tabs-content-flex ' + tab.img_position}>
                                        {tab.img?
                                            <div className="tabs-left">
                                                <img src={tab.img?.src} alt="Tabs" />
                                            </div> : ''
                                        }
                                        <div className="tabs-right">
                                            {tab.desc?
                                                <p className="tabs-desc">
                                                    {tab.desc}
                                                </p> : ''
                                            }
                                            {tab.button?
                                                <Link to={tab.buttonurl} className="theme-button">{tab.button} <FiChevronRight className="icon" /></Link>
                                                : ''
                                            }
                                        </div>
                                    </div>
                                </TabPanel>
                            )
                        })}
                    </Tabs>
                </div>
            </div>
        </section>
    )
}
