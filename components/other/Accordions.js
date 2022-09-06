import React  from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

export default function Accordions({items}) {
    return (
        <div className="accordion-wrapper">
            <Accordion>
                {items.map((item, index) => {
                    return (
                        <AccordionItem key={index}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    {item.title}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>{item.content}</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </div>
    )
}
