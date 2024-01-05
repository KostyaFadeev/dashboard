'use client';
import React, { useState } from 'react';

import { Avatar, CheckboxGroup, Select, SelectItem } from '@nextui-org/react';
import { CustomCheckbox } from '@/app/ui/CustomCheckbox';

export default function Filters() {
  const [groupSelected, setGroupSelected] = useState<string[]>([]);

  return (
    <div className="mt-4 flex flex-col md:flex-row items-center justify-between md:mt-8">
      <div className="flex flex-col gap-1 w-full md:w-5/12">
        <CheckboxGroup
          className="gap-1"
          label="Фильтры:"
          orientation="horizontal"
          value={groupSelected}
          onChange={(value) => {
            if (typeof value === 'string') {
              setGroupSelected(value);
            }
          }}
        >
          <CustomCheckbox value="Nike">Nike</CustomCheckbox>
          <CustomCheckbox value="New Balance">New Balance</CustomCheckbox>
          <CustomCheckbox value="Adidas">Adidas</CustomCheckbox>
          <CustomCheckbox value="Reebok">Reebok</CustomCheckbox>
        </CheckboxGroup>
        <p className="mt-4 ml-1 text-default-500">{groupSelected.join(', ')}</p>
      </div>
      <div className="w-full md:w-3/12">
        <Select className="max-w-full md:max-w-sm" label="Выберите категорию">
          <SelectItem
            key="argentina"
            startContent={
              <Avatar alt="Argentina" className="w-6 h-6" src="https://flagcdn.com/us.svg" />
            }
          >
            Обувь
          </SelectItem>
          <SelectItem
            key="venezuela"
            startContent={
              <Avatar alt="Venezuela" className="w-6 h-6" src="https://flagcdn.com/ve.svg" />
            }
          >
            Одежда
          </SelectItem>
          <SelectItem
            key="brazil"
            startContent={
              <Avatar alt="Brazil" className="w-6 h-6" src="https://flagcdn.com/br.svg" />
            }
          >
            Техника
          </SelectItem>
          <SelectItem
            key="germany"
            startContent={
              <Avatar alt="Germany" className="w-6 h-6" src="https://flagcdn.com/us.svg" />
            }
          >
            Apple
          </SelectItem>
        </Select>
      </div>
    </div>
  );
}
