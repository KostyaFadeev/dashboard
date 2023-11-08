'use client'

import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";

import {link as linkStyles} from "@nextui-org/theme";

import NextLink from "next/link";
import clsx from "clsx";

import {
    GithubIcon, Login,
    TelegramIcon,
} from "@/public/icons";

import {Logo} from "@/public/icons";
import {siteConfig} from "@/app/ui/site";
import {ThemeSwitch} from "@/app/ui/theme-switch";
import {Dropdown, DropdownItem, DropdownMenu} from "@nextui-org/dropdown";
import {DropdownTrigger} from "@nextui-org/react";

export const Navbar = () => {

    const items = [
        {
            key: "new",
            label: "Войти",
            href: "/login",
        },
        {
            key: "copy",
            label: "Зарегистрироваться",
            href: "/login",
        },
        {
            key: "delete",
            label: "Выйти",
            href: "/login",
        }
    ];

    return (
        <NextUINavbar maxWidth="xl" position="sticky" className="py-4">
            <NavbarContent className="basis-1/3 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <Logo/>
                        <p className="font-bold text-inherit">BOUNDARY</p>
                    </NextLink>
                </NavbarBrand>
                <ul className="hidden lg:flex gap-10 justify-start ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <NextLink
                                className={clsx(
                                    linkStyles({color: "foreground"}),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium"
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
            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    <Link isExternal href={siteConfig.links.telegram} aria-label="Telegram">
                        <TelegramIcon className="text-default-500"/>
                    </Link>
                    <ThemeSwitch/>
                </NavbarItem>
                <NavbarItem className="hidden md:flex">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                variant="bordered"
                                startContent={<Login/>}
                            >
                                Меню
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Dynamic Actions" items={items}>
                            {(item) => (
                                <DropdownItem
                                    key={item.key}
                                    color={item.key === "delete" ? "danger" : "default"}
                                    className={item.key === "delete" ? "text-danger" : ""}
                                    href={item.href}
                                >
                                    {item.label}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>

                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <Link isExternal href={siteConfig.links.github} aria-label="Github">
                    <GithubIcon className="text-default-500"/>
                </Link>
                <ThemeSwitch/>
                <NavbarMenuToggle/>
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2
                                        ? "primary"
                                        : index === siteConfig.navMenuItems.length - 1
                                            ? "danger"
                                            : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};
