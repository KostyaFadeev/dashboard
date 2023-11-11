export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Boundary",
    description: "Сервис по доставке товаров из-за границы.",
    navItems: [
        {
            label: "Каталог",
            href: "/catalog",
        },
        {
            label: "О нас",
            href: "/about",
        },
        {
            label: "Доставка и оплата",
            href: "/delivery",
        },
        {
            label: "Рассчитать стоимость",
            href: "/calculator",
        },
    ],
    navMenuItems: [
        {
            label: "Каталок",
            href: "/catalog",
        },
        {
            label: "О нас",
            href: "/about",
        },
        {
            label: "Доставка и оплата",
            href: "/delivery",
        },
        {
            label: "Рассчитать стоимость",
            href: "/calculator",
        },
    ],
    links: {
        github: "https://github.com/nextui-org/nextui",
        telegram: "https://t.me/boundary_dostavka",

    },
};
