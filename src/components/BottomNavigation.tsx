"use client"

import type React from "react"
import { NavLink } from "react-router-dom"
import { Home, Settings, Users, Phone } from "lucide-react"
import { cn } from "@/lib/utils.ts"

const navItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/services", label: "Services", icon: Settings },
    { to: "/about", label: "About", icon: Users },
    { to: "/contact", label: "Contact", icon: Phone },
]

const BottomNavigation = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        if (window.location.pathname === "/") {
            e.preventDefault()
            const element = document.getElementById(targetId)
            if (element) {
                element.scrollIntoView({ behavior: "smooth" })
            }
        }
    }

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg sm:hidden">
            <div className="flex items-center justify-around px-2 py-2">
                {navItems.map(({ to, label, icon: Icon }) => {
                    // Handle services link - scroll to services section if on homepage, otherwise navigate
                    if (to === "/services") {
                        return (
                            <NavLink
                                key={label}
                                to={to}
                                onClick={(e) => {
                                    if (window.location.pathname === "/") {
                                        e.preventDefault()
                                        handleScroll(e, "services")
                                    }
                                }}
                                className={({ isActive }) =>
                                    cn(
                                        "flex flex-col items-center justify-center min-w-0 flex-1 px-2 py-2 text-xs font-medium transition-all duration-200 hover:text-brand-primary-100 active:scale-95",
                                        (isActive || (window.location.pathname === "/" && label === "Services")) && "text-brand-primary-100",
                                    )
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <div
                                            className={cn(
                                                "relative p-1 rounded-full transition-all duration-200",
                                                (isActive || (window.location.pathname === "/" && label === "Services")) &&
                                                "bg-brand-primary-100/20",
                                            )}
                                        >
                                            <Icon className="h-5 w-5" />
                                            {(isActive || (window.location.pathname === "/" && label === "Services")) && (
                                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-brand-primary-100 rounded-full"></div>
                                            )}
                                        </div>
                                        <span className="truncate mt-1">{label}</span>
                                    </>
                                )}
                            </NavLink>
                        )
                    }

                    return (
                        <NavLink
                            key={label}
                            to={to}
                            className={({ isActive }) =>
                                cn(
                                    "flex flex-col items-center justify-center min-w-0 flex-1 px-2 py-2 text-xs font-medium transition-all duration-200 hover:text-brand-primary-100 active:scale-95",
                                    isActive && "text-brand-primary-100",
                                )
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <div
                                        className={cn(
                                            "relative p-1 rounded-full transition-all duration-200",
                                            isActive && "bg-brand-primary-100/20",
                                        )}
                                    >
                                        <Icon className="h-5 w-5" />
                                        {isActive && (
                                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-brand-primary-100 rounded-full"></div>
                                        )}
                                    </div>
                                    <span className="truncate mt-1">{label}</span>
                                </>
                            )}
                        </NavLink>
                    )
                })}
            </div>
        </nav>
    )
}

export default BottomNavigation
