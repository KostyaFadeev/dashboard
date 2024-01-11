'use client'
import {Dropdown, DropdownItem, DropdownMenu} from "@nextui-org/dropdown";
import React from "react";
import {DropdownTrigger} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {Login} from "@/public/icons";

export const MobileMenu = ({data}) => {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="bordered" startContent={<Login />}>
                    Меню
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={data}>
                {(item) => (
                    <DropdownItem
                        key={item.key}
                        color={item.key === 'delete' ? 'danger' : 'default'}
                        className={item.key === 'delete' ? 'text-danger' : ''}
                        href={item.href}
                    >
                        {item.label}
                    </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
    )}
