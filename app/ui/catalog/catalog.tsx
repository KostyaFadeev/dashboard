'use client';
import React, {useState} from 'react';

import Filters from "@/app/ui/filters/filters";
import CardItem from "@/app/ui/card-item";

interface Object {
    id: number;
    category: string;
    currentSize: string;
    images: string[];
    title: string;
    tableSize: any;
    description: string;
    price: string;
    currency: string;
    weight: string;
    variants: any;
}

interface CatalogProps {
    data: any[];
    currency: any;
}

export default function Catalog({data, currency}: CatalogProps) {
    const [filterValue, setFilterValue] = useState('all');
    const onChangeFilter = (val:string) => {
        setFilterValue(val);
    }

    const filterData = filterValue !== 'all' ? data.filter(item => item.category === filterValue) : data;

    return (
        <>
            <Filters onChangeValue={onChangeFilter}/>
            <div className="w-full flex gap-2 flex-wrap mt-6 justify-center">
                {filterData?.map((item, index) => {
                    const {id, currentSize, title, description, images, price, weight, variants, tableSize} = item;
                    return (
                        <div className="w-full sm:w-32percent lg:w-23percent" key={index}>
                            <CardItem
                                currentSize={currentSize}
                                key={index}
                                id={id}
                                title={title}
                                description={description}
                                images={images}
                                price={price}
                                weight={weight}
                                variants={variants}
                                tableSize={tableSize}
                                currency={currency}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
