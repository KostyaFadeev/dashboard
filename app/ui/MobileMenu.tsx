'use client'
import {Dropdown, DropdownItem, DropdownMenu} from "@nextui-org/dropdown";
import React from "react";
import {DropdownTrigger} from "@nextui-org/react";
import { UserIcon } from '@heroicons/react/24/solid';

export const MobileMenu = ({data}) => {
    return (
        <Dropdown>
            <DropdownTrigger className="cursor-pointer">
                <UserIcon color={'rgba(113, 113, 120, 1)'} width={24} height={24} />
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={data}>
                {(item) => (
                    <DropdownItem
                        key={item.key}
                        color={'default'}
                        className={item.key === 'delete' ? 'text-danger' : ''}
                        href={item.href}
                    >
                        {item.label}
                    </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
    )}
