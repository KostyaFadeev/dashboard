'use client'
import {Avatar, CheckboxGroup, Select, SelectItem} from "@nextui-org/react";
import React from "react";
import {CustomCheckbox} from "@/app/ui/CustomCheckbox";

export default function Filters() {
    const [groupSelected, setGroupSelected] = React.useState([]);

    return (
        <div className="mt-4 flex items-center justify-between md:mt-8">
            <div className="flex flex-col gap-1 w-5/12">
                <CheckboxGroup
                    className="gap-1"
                    label="Фильтры:"
                    orientation="horizontal"
                    value={groupSelected}
                    onChange={setGroupSelected}
                >
                    <CustomCheckbox value="Nike">Nike</CustomCheckbox>
                    <CustomCheckbox value="New Balance">New Balance</CustomCheckbox>
                    <CustomCheckbox value="Adidas">Adidas</CustomCheckbox>
                    <CustomCheckbox value="Reebok">Reebok</CustomCheckbox>
                </CheckboxGroup>
                <p className="mt-4 ml-1 text-default-500">
                    {groupSelected.join(", ")}
                </p>
            </div>
            <div className="w-3/12">
                <Select
                    className="max-w-xs"
                    label="Выбери категорию"
                >
                    <SelectItem
                        key="argentina"
                        startContent={<Avatar alt="Argentina" className="w-6 h-6" src="https://flagcdn.com/ar.svg" />}
                    >
                        Обувь
                    </SelectItem>
                    <SelectItem
                        key="venezuela"
                        startContent={<Avatar alt="Venezuela" className="w-6 h-6" src="https://flagcdn.com/ve.svg" />}
                    >
                        Одежда
                    </SelectItem>
                    <SelectItem
                        key="brazil"
                        startContent={<Avatar alt="Brazil" className="w-6 h-6" src="https://flagcdn.com/br.svg" />}
                    >
                        Техника
                    </SelectItem>
                    <SelectItem
                        key="germany"
                        startContent={<Avatar alt="Germany" className="w-6 h-6" src="https://flagcdn.com/de.svg" />}
                    >
                        Apple
                    </SelectItem>
                </Select>
            </div>
        </div>
    );
}
