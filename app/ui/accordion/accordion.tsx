'use client';
import React from 'react';

import { Accordion, AccordionItem } from '@nextui-org/react';

interface Object {
  Icon: any;
  title: string;
  description: string;
}

interface AccordionMainProps {
  data: Array<Object>;
}

export default function AccordionMain({ data }: AccordionMainProps) {
  return (
    <Accordion
      disableAnimation={false}
      disableIndicatorAnimation={false}
      hideIndicator={false}
      isCompact={false}
      isDisabled={false}
    >
      {data.map((item, index) => {
        const { Icon, title, description } = item;
        return (
          <AccordionItem
            key={index}
            aria-label="Anchor"
            indicator={Icon}
            title={title}
            className="text-green-400"
          >
            {description}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
