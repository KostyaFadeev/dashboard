// 'use client'
//
// import React from "react";
// import {Accordion, AccordionItem} from "@nextui-org/react";
// import {array} from "zod";
//
//
// export default function AccordionMain({data}: { data: array}) {
//
//     return (
//         <Accordion disableAnimation={false}>
//             {data.map((item, index) => {
//                 const {Icon, title, description} = item;
//                 return(
//                 <AccordionItem key={index} aria-label="Anchor" indicator={Icon} title={title} className="text-green-400">
//                     {description}
//                 </AccordionItem>
//             )})}
//         </Accordion>
//     );
// }
