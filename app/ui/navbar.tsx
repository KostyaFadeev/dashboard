import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from '@nextui-org/navbar';
import {Link} from '@nextui-org/link';
import {link as linkStyles} from '@nextui-org/theme';
import NextLink from 'next/link';
import clsx from 'clsx';

import {Logo} from '@/public/icons';
import {siteConfig} from '@/app/ui/site';
import React, {Suspense} from 'react';
import {CartNavItem} from "@/app/ui/CardNavItem";
import {MobileMenu} from "@/app/ui/MobileMenu";
// import {CurrencyMenu} from "@/app/ui/CurrencyMenu";
import {Button} from "@nextui-org/react";

export const Navbar = () => {
    const dataMenu = [
        {
            key: 'profile',
            label: 'Войти / Зарегестрироваться',
            href: '/login',
        },
        {
            key: 'favorite',
            label: 'Избранное',
            href: '/login',
        },
    ];

    return (
        <NextUINavbar maxWidth="xl" position="sticky" className="py-4">
            <NavbarContent className="basis-1/3 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <Logo/>
                        <p className="font-bold text-inherit text-xl">BOUNDARY</p>
                    </NextLink>
                </NavbarBrand>
                <ul className="hidden lg:flex gap-10 justify-start ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <NextLink
                                className={clsx(
                                    linkStyles({color: 'foreground'}),
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
            {/*<CurrencyMenu />*/}
            <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
                <Suspense fallback={<div className="w-6"/>}>
                    <Button variant="light" className="px-0 hidden lg:flex">
                        <CartNavItem/>
                    </Button>
                </Suspense>
                <NavbarItem className="hidden lg:flex">
                    <Suspense fallback={<div className="w-6"/>}>
                        <Button variant="light" className="px-0 hidden lg:flex">
                            <MobileMenu/>
                        </Button>
                    </Suspense>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
                <Suspense fallback={<div className="w-6"/>}>
                    <Button variant="light" className="px-0 hidden lg:flex">
                        <CartNavItem/>
                    </Button>
                </Suspense>
                <NavbarMenuToggle/>
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-8 flex flex-col gap-8">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link color={'foreground'} href={item.href} size="lg">
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};
