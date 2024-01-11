'use client'
import {Dropdown, DropdownItem, DropdownMenu} from "@nextui-org/dropdown";
import React, {useEffect, useState} from "react";
import {DropdownTrigger} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {CurrencyDollarIcon, CurrencyEuroIcon, CurrencyYenIcon} from "@heroicons/react/24/outline";
import {getCNYRate} from "@/app/lib/utils";

const iconMap = {
    usd: CurrencyDollarIcon,
    cny: CurrencyYenIcon,
    eur: CurrencyEuroIcon,
};

export const CurrencyMenu = () => {
    const [currentCourse, setCurrentCourse] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const course = await getCNYRate();
            setCurrentCourse(course);
        };
        fetchData();
    }, []);

    const mainDropdownCourses = [
        {
            key: 'usd',
            label: 'Доллар',
            value: currentCourse[1]?.toFixed(2),
        },
        {
            key: 'cny',
            label: 'Юань',
            value: currentCourse[0]?.toFixed(2),
        },
        {
            key: 'eur',
            label: 'Евро',
            value: currentCourse[2]?.toFixed(2),
        },
    ];

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="light" className="px-auto hidden xl:flex">
                    Курсы валют
                    <CurrencyDollarIcon color={'rgba(113, 113, 120, 1)'} width={24} height={24}/>
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={mainDropdownCourses}>
                {(item) => {
                    const Icon = iconMap[item.key as keyof typeof iconMap];
                    return (
                        <DropdownItem
                            textValue={item.label}
                            key={item.key}
                            color={'default'}
                            startContent={Icon ? <Icon width={20}/> : null}
                        >
                            <div className="flex justify-between">
                                <div>{item.label}</div>
                                <div>{item.value}</div>
                            </div>
                        </DropdownItem>
                    );
                }}
            </DropdownMenu>
        </Dropdown>
    )
}
