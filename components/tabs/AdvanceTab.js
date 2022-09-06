import React  from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SectionsTitle from '../common/SectionsTitle';

export default function AdvanceTab({secTitle, secSubtitle, tabnav, tablists}) {
    return (
        <section className="advancetab-wrapper">
            <div className="container">
                <div className="text-center">
                    <SectionsTitle title={secTitle} subtitle={secSubtitle} />
                </div>
                <Tabs className="advancetab-grid d-grid">
                    <TabList className="advancetab-nav">
                        <div>
                            {tabnav.map((item, i) => {
                                return (
                                    <Tab key={i}>
                                        {item.title?
                                            <h3>{item.title}</h3>
                                        : ''}
                                        {item.content?
                                            <p>{item.content}</p>
                                        : ''}
                                    </Tab>
                                )
                            })}
                        </div>
                    </TabList>
                    <div className="advancetab-content">

                        {tablists.map((item, i) => {
                            return (
                                <TabPanel key={i}>
                                    <div className="content-top-box">
                                        {item.title?
                                            <h2>{item.title}</h2>
                                        : ''}
                                        {item.content?
                                            <p>{item.content}</p>
                                        : ''}
                                    </div>
                                    {item.lists?
                                        <div className="content-box-grid d-grid">
                                            {item.lists.map((list, index) => {
                                                return (
                                                    <div className="item" key={index}>
                                                        {list.icon?
                                                            <span className="icon">
                                                                {list.icon}
                                                            </span>
                                                        : ''}
                                                        {list.title?
                                                            <h2>{list.title}</h2>
                                                        : ''}
                                                        {list.content?
                                                            <p>{list.content}</p>
                                                        : ''}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    : ''}
                                </TabPanel>
                            )
                        })}

                    </div>
                </Tabs>
            </div>
        </section>
    )
}
