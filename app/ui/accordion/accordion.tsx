'use client'

import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";


export default function AccordionMain({ data }: { data: any }) {

    return (
        <Accordion
            disableAnimation={false}
            disableIndicatorAnimation={false}
            hideIndicator={false}
            isCompact={false}
            isDisabled={false}
        >
            {data.map((item, index) => {
                const {Icon, title, description} = item;
                return (
                    <AccordionItem key={index} aria-label="Anchor" indicator={Icon} title={title}
                                   className="text-green-400">
                        {description}
                    </AccordionItem>
                )
            })}
        </Accordion>
    );
}
