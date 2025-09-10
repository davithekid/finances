"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/themes/mode-toggle"


export function NavigationMenuDemo() {
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/">
                        <img
                            src="./melody.png"
                            alt="light"
                            className="w-15 dark:hidden"
                        />
                        <img
                            src="https://img.icons8.com/?size=512&id=CvGu0jSeBZLs&format=png"
                            alt="dark"
                            className="w-15 hidden dark:block"
                        />
                    </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/">Home</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/transacoes">Gastos</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/metas">Metas</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/historico">Histórico</Link>
                </NavigationMenuLink>
            </NavigationMenuList>
            {/* futuramente... */}
            {/* <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/planos">Planos</Link>
                </NavigationMenuLink> */}
        </NavigationMenu>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
