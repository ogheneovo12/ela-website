import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import React from "react";


export default function SimpleTab2({tabnavs, tablists}) {
    return (
        <>
            {tabnavs || tablists ?
                <Tabs className="service-details-tab">
                    {tabnavs ?
                        <TabList className="tabs-nav d-flex">
                            {tabnavs.map((item, i) => {
                                return (
                                    <Tab key={i}>{item}</Tab>
                                )
                            })}
                        </TabList>
                        : ''}
                    {tablists.map((item, i) => {
                        return (
                            <TabPanel key={i} className="tabs-content">
                                <p>{item.content}</p>
                            </TabPanel>
                        )
                    })}

                </Tabs>
            : ''}
        </>
    )
}
