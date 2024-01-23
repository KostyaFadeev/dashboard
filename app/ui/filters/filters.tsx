'use client';
import React  from 'react';

import {Select, SelectItem} from '@nextui-org/react';

export default function Filters({onChangeValue}) {
 const categories = [
    {label: "Все", value: "all"},
    {label: "Одежда", value: "wear"},
    {label: "Обувь", value: "shoes"},
    {label: "Электроника", value: "electronic"},
  ];

  const handleSelectionChange = (e) => {
    onChangeValue(e.target.value)
  };

  return (
    <div className="mt-4 flex flex-col md:flex-row items-center justify-between md:mt-8">
      <div className="flex w-full max-w-xs flex-col gap-2">
        <Select
            label="Выберите категорию"
            placeholder="Все"
            defaultSelectedKeys={["all"]}
            className="max-w-xs"
            onChange={handleSelectionChange}
        >
          {categories.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
}
