"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Icons from "@/components/icons"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { AnimatePresence, motion } from "framer-motion"
import ModeToggle  from "./ModeToggle"
import { useSession } from "@/lib/auth-client";
// import { AlignJustify, Sheet } from "lucide-react"
// import { SheetTrigger } from "@/components/ui/sheet"

const components: { title: string; href: string; description: string }[] = [
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

const NavBar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                        <NavigationMenuLink asChild>
                        <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                        >
                            <Icons.House className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-2xl font-medium text-bold">
                            Verdant
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              
                            </p>
                        </a>
                        </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Typography">
                        Styles for headings, paragraphs, lists...etc
                    </ListItem>
                    </ul>
                </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                        <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        >
                        {component.description}
                        </ListItem>
                    ))}
                    </ul>
                </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <Link href="https://nextjs.org/docs" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} target="_blank" rel="noopener noreferrer">
                    Documentation
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const Dropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false)

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full space-y-2"
      >
        <div className="flex items-center justify-between space-x-4">
          <h4 className="text-xl font-semibold">
            Features
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0}}
                transition={{ duration: 0.2, ease: "easeInOut" }}>
                <Icons.ChevronDown className="h-4 w-4" />
              </motion.div>
            </Button>
          </CollapsibleTrigger>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              exit={{ opacity: 0, height: 0 }}
            >
             {components.map((component) => (
              <Link href={component.href} key={component.title}>
                <div className="font-bold text-base">{component.title}</div>
                <div className="text-sm">{component.description}</div>
              </Link>
             ))}
          </motion.div>
          )}
        </AnimatePresence>
      </Collapsible> 
    )
}

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const {
      data: session,
      isPending,
      error,
      refetch
    } = useSession()
    const baseRef = useRef<HTMLDivElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

      window.addEventListener("resize", () => {
        if (isOpen && window.innerWidth >= 1024) {
          setIsOpen(false)
        }
      })
      window.addEventListener("click", (event) => {
        let currentHeight = 24
        currentHeight += baseRef.current ? baseRef.current.getBoundingClientRect().height : 0
        currentHeight += dropdownRef.current ? dropdownRef.current.getBoundingClientRect().height : 0
        if (isOpen && event.clientY > currentHeight) {
          setIsOpen(false)
        }
      })
    })

    const handleToggle = () => {
      setIsOpen(!isOpen)
    }

    return (   
      <>
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-lg bg-black bg-opacity-50 z-50"></div>
      )}
        <header className={`flex flex-col bg-stone-100 dark:bg-stone-900 px-4 py-2 gap-2 sticky z-50 top-0 ${isOpen ? "backdrop-blur-lg" : ""} lg:backdrop-blur-none`}>
            <div className="flex items-center justify-between items-center" ref={baseRef}>
                <div className="flex gap-4 items-center">
                    <button onClick={handleToggle}><Icons.AlignJustify size={24} className="block lg:hidden" /></button>
                    <Link href="/" className="flex gap-2">
                        <Icons.House size={32}></Icons.House>
                        <div className="font-bold text-2xl">Verdant</div>
                    </Link>
                </div>
                <div className="hidden lg:block"><NavBar /></div>
                <div className="flex">
                    <div className="font-bold text-lg flex gap-4">
                        <ModeToggle />
                        {session ? (
                          <div className="flex gap-4 items-center">
                              <Link href="/profile" className="">Profile</Link>
                              <Link href="/dashboard">Dashboard</Link>
                          </div>
                        ) : (
                          <div className="flex gap-4 items-center">
                              <Link href="/sign-in">Login</Link>
                              <Link href="/sign-up" className="bg-stone-950 transition duration-300 ease-in-out hover:bg-stone-800 text-white py-1 rounded-full px-8 dark:bg-stone-100 dark:text-black dark:hover:bg-stone-300">Register</Link>
                          </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="block lg:hidden">
              <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      exit={{ height: 0, opacity: 0 }}
                      className="absolute top-full left-0 w-full bg-stone-100 z-50 dark:bg-stone-900"
                    >
                      <div className="px-4" ref={dropdownRef}><Dropdown /></div>
                    </motion.div>
                  )}
              </AnimatePresence>
            </div>
        </header>
      </>
    )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

// Simplified and unified header
export function Header2() {
  // Track whether profile/dashboard component mounted in browser. 
  // Sign-in/sign-up component mounted by default
  const [isMounted, setIsMounted] = useState(false)

  // Tracking whether hamburger menu sheet is open.
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  // Get authentication status
  const { data: session } = useSession()

  // Update sign-in/register to profile/dashboard and vice versa
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Updates screen given resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isSheetOpen) {
        setIsSheetOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [isSheetOpen])

  // Render authentication UI
  const renderAuthLinks = (variant = "desktop") => {
    if (!isMounted) return null

    const isMobile = variant === "mobile"

    // Check if authenticated
    if (session) {
      const profileLink = (
        <Link 
          href="/profile"
          className={`text-sm font-medium ${isMobile ? "text-lg" : ""}`}
        >
          Profile
        </Link>
      )
      
      const dashboardLink = (
        <Link href="/dashboard">
          <Button 
            variant="default"
            size={isMobile ? "default" : "sm"}
          >
            Dashboard
          </Button>
        </Link>
      )

      return (
        <div className={`flex items-center gap-4 ${isMobile ? "px-4 py-3" : ""}`}>
          {isMobile ? (
            <>
              <SheetClose asChild>{profileLink}</SheetClose>
              <SheetClose asChild>{dashboardLink}</SheetClose>
            </>
          ) : (
            <>
            {profileLink}
            {dashboardLink}
            </>
          )}
        </div>
      )
    }

    // O.W. unauthenticated
    const signInLink = (
      <Link 
        href="/sign-in" 
        className={`text-sm font-medium ${isMobile ? "text-lg" : ""}`}
      >
        Sign In
      </Link>
    )
    
    const registerLink = (
      <Link href="/sign-up">
        <Button 
          variant="default" 
          size={isMobile ? "default" : "sm"}
        >
          Register
        </Button>
      </Link>
    )

    return (
      <div className={`flex items-center gap-4 ${isMobile ? "px-4 py-3" : ""}`}>
        {isMobile ? (
          <>
            <SheetClose asChild>{signInLink}</SheetClose>
            <SheetClose asChild>{registerLink}</SheetClose>
          </>
        ) : (
          <>
            {signInLink}
            {registerLink}
          </>
        )}
      </div>
    )
  }

  const navItems = [
    {
      title: "Map",
      href: "/map"
    },
    {
      title: "Help",
      href: "/help"
    },
    {
      title: "About",
      href: "/about"
    }
    // Future pages/nav items can be added here
  ]

  return (
    <header className="top-0 z-50 w-full bg-secondary">
      <div className="w-full px-4 md:px-6 lg:px-8 flex h-14 items-center justify-between">
        {/* Logo and Verdant brand name */}
        <div className="flex gap-4 items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Verdant Logo"
              width={32}
              height={32}
              className="dark:invert"
            />
            <span className="font-semibold text-xl">Verdant</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* User authentication and menu button */}
        <div className="flex items-center gap-4">
          {renderAuthLinks("desktop")}

          {/* Hamburger menu */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                aria-label="Open menu"
              >
                <Icons.AlignJustify className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 pt-14 border-t-0 z-50 w-full sm:max-w-sm">
              <VisuallyHidden>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                </VisuallyHidden>
              <div className="flex flex-col pt-6">

                {/* Main navigation items */}
                {navItems.map((item) => (
                  <SheetClose asChild key={item.title}>
                    <Link 
                      href={item.href}
                      className="px-4 py-3 text-2xl font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}

                <div className="pt-20">
                  {renderAuthLinks("mobile")}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header2;