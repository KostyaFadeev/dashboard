'use client';
import React from 'react';

import {Accordion, AccordionItem} from '@nextui-org/react';

interface Object {
    Icon: any;
    title: string;
    description: string;
}

interface AccordionMainProps {
    data: Array<Object>;
}

export default function AccordionMain({data}: AccordionMainProps) {
    return (
        <Accordion
            variant="splitted"
        >
            {data.map((item, index) => {
                const {Icon, title, description} = item;
                return (
                    <AccordionItem
                        className="w-full"
                        key={index}
                        aria-label="Anchor"
                        indicator={Icon}
                        title={title}
                    >
                        <div className="mb-4">
                            {description}
                        </div>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
}
