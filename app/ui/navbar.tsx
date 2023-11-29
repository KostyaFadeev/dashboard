'use client';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { Dropdown, DropdownItem, DropdownMenu } from '@nextui-org/dropdown';
import { DropdownTrigger } from '@nextui-org/react';
import { link as linkStyles } from '@nextui-org/theme';
import NextLink from 'next/link';
import clsx from 'clsx';

import { Login, TelegramIcon } from '@/public/icons';

import { Logo } from '@/public/icons';
import { siteConfig } from '@/app/ui/site';
import { ThemeSwitch } from '@/app/ui/theme-switch';
import { CurrencyDollarIcon, CurrencyEuroIcon, CurrencyYenIcon } from '@heroicons/react/24/outline';
import React from 'react';

const iconMap = {
  usd: CurrencyDollarIcon,
  cny: CurrencyYenIcon,
  eur: CurrencyEuroIcon,
};

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="py-4">
      <NavbarContent className="basis-1/3 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit text-xl">BOUNDARY</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-10 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="light" className="px-auto hidden xl:flex">
            Курсы валют
            <CurrencyDollarIcon color={'rgba(113, 113, 120, 1)'} width={24} height={24} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions" items={siteConfig.mainDropdownCourses}>
          {(item) => {
            const Icon = iconMap[item.key as keyof typeof iconMap];
            return (
              <DropdownItem
                key={item.key}
                color={'default'}
                startContent={Icon ? <Icon width={20} /> : null}
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
      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden lg:flex gap-2">
          <Link isExternal href={siteConfig.links.telegram} aria-label="Telegram">
            <TelegramIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" startContent={<Login />}>
                Меню
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={siteConfig.mainDropdownData}>
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
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.telegram} aria-label="Telegram">
          <TelegramIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-8 flex flex-col gap-8">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color={index === 2 ? 'primary' : 'foreground'} href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
