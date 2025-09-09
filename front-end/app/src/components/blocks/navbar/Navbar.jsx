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

const components = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export function NavigationMenuDemo() {
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/"><img src="https://img.icons8.com/?size=512&id=CvGu0jSeBZLs&format=png" alt="" className="w-15" /></Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/">Home</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/transacoes">Transações</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/metas">Metas</Link>
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
