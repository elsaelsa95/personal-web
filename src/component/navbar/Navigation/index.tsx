"use client";

import { usePathname } from "next/navigation";
import style from "../style.module.css";
import Link from "next/link";
import { MouseEventHandler } from "react";

export default function Navigation({
    isOpen,
    onClick,
}: {
    isOpen?: boolean;
    onClick?: MouseEventHandler;
}) {
    const pathname = usePathname();
    const navigationItems = [
        {
            title: "Home",
            href: "/",
            isActive: pathname === "/",
        },
        {
            title: "Portfolio",
            href: "/portfolio",
            isActive: pathname === "/portfolio",
        },
        {
            title: "Services",
            href: "/services",
            isActive: pathname === "/services"
        },
        {
            title: "Contact",
            href: "/contact",
            isActive: pathname === "/contact"
        }
    ];

    return (
        <div
            className={style.navigationItems}
            data-pathname={pathname}
            data-is-open={isOpen}
        >
            {navigationItems.map((item, i) => (
                <Link
                    key={i}
                    href={item.href}
                    title={item.title}
                    data-is-active={item.isActive}
                    onClick={onClick}
                >
                    {item.title}
                </Link>
            ))}
        </div>
    );
}
