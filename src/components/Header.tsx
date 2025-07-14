"use client"

import type React from "react"

import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, Settings, Users, Phone } from "lucide-react"

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/#services", label: "Services", icon: Settings },
  { to: "/about", label: "About Us", icon: Users },
  { to: "/contact", label: "Contact Us", icon: Phone },
]

const Header = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (window.location.pathname === "/") {
      e.preventDefault()
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const renderNavLinks = (isMobile = false) =>
      navLinks.map(({ to, label }) => {
        if (to.startsWith("/#")) {
          const targetId = to.substring(2)
          return (
              <a
                  key={label}
                  href={to}
                  onClick={(e) => handleScroll(e, targetId)}
                  className={`relative transition-all duration-300 hover:text-brand-yellow-100 hover:scale-105 ${
                      isMobile ? "block py-3 text-lg font-medium" : "px-4 py-2 rounded-lg hover:bg-brand-yellow-100/10"
                  }`}
              >
                {label}
                {!isMobile && (
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-yellow-100 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                )}
              </a>
          )
        }
        return (
            <NavLink
                key={label}
                to={to}
                className={({ isActive }) =>
                    `relative transition-all duration-300 hover:text-brand-yellow-100 hover:scale-105 ${
                        isActive ? "text-brand-yellow-100" : ""
                    } ${isMobile ? "block py-3 text-lg font-medium" : "px-4 py-2 rounded-lg hover:bg-brand-yellow-100/10"}`
                }
            >
              {({ isActive }) => (
                  <>
                    {label}
                    {!isMobile && isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-yellow-100"></span>
                    )}
                  </>
              )}
            </NavLink>
        )
      })

  return (
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 font-bold text-xl transition-transform hover:scale-105">
            <img className="w-[5rem] h-[5rem] object-contain" src="/logo.png" alt="WEFIX LTD" />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 md:flex">{renderNavLinks()}</nav>

          <div className="flex items-center gap-2">
            <Button
                asChild
                className="hidden sm:inline-flex bg-brand-yellow-100 hover:bg-brand-yellow-100/90 text-brand-primary-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a href="tel:+353 (86) 8758890" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call for Help
              </a>
            </Button>

            {/* Fallback hamburger menu for very small screens */}
            {/*<Sheet>*/}
            {/*  <SheetTrigger asChild>*/}
            {/*    <Button variant="outline" size="icon" className="md:hidden sm:hidden bg-transparent">*/}
            {/*      <Menu className="h-6 w-6" />*/}
            {/*      <span className="sr-only">Toggle navigation menu</span>*/}
            {/*    </Button>*/}
            {/*  </SheetTrigger>*/}
            {/*  <SheetContent side="right">*/}
            {/*    <div className="grid gap-4 py-6">*/}
            {/*      {renderNavLinks(true)}*/}
            {/*      <Button*/}
            {/*          asChild*/}
            {/*          className="mt-4 bg-brand-yellow-100 hover:bg-brand-yellow-100/90 text-brand-primary-100"*/}
            {/*      >*/}
            {/*        <a href="tel:+353 (86) 8758890" className="flex items-center gap-2">*/}
            {/*          <Phone className="h-4 w-4" />*/}
            {/*          Call for Help*/}
            {/*        </a>*/}
            {/*      </Button>*/}
            {/*    </div>*/}
            {/*  </SheetContent>*/}
            {/*</Sheet>*/}
          </div>

            <Button
                asChild
                className="md:hidden sm:hidden bg-red-600 text-white font-semibold hover:bg-red-700 transition"
            >
                <NavLink to="/contact" className=" flex items-center justify-center">
                    Emergency Call
                </NavLink>
            </Button>
        </div>
      </header>
  )
}

export default Header
