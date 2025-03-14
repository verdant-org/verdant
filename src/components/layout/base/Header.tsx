"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Icons from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { AnimatePresence, motion } from "framer-motion"
import ModeToggle  from "./ModeToggle"
import { useSession } from "@/lib/auth-client";

const companyComponents: {title: string, href: string, description: string}[] = [
  {
    title: "About Us",
    href: "/about-us",
    description: "Learn more about our website and purpose"
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    description: "Reach out to us and find further assistance"
  },
  {
    title: "Opportunities",
    href: "/opportunities",
    description: "Find potential collaboration and partnernship opportunities with us"
  }
]

const resourceComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Frequenty Asked Questions",
    href: "/faq",
    description: "Search for frequently asked questions for our website"
  },
  {
    title: "Guide",
    href: "/guide",
    description: "Learn how to navigate and use the resources for our website"
  },
  {
    title: "Documentation",
    href: "/documentation",
    description: "Find out the technical information and utilities used for our application"
  },
]

const agreementComponents: { title: string, href: string, description: string }[] = [
  {
    title: "Terms and Conditions",
    href: "/tos",
    description: "Read the terms and conditions for using our website"
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
    description: "Learn how we handle and protect your personal information"
  },
  {
    title: "Accessibility Statement",
    href: "/accessibility",
    description: "Find out how we ensure our website is accessible to everyone"
  }
]

const NavBar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {companyComponents.map((component) => (
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
                <NavigationMenuTrigger>Resource</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {resourceComponents.map((component) => (
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
                <NavigationMenuTrigger>Agreements</NavigationMenuTrigger>
                  <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {agreementComponents.map((component) => (
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
             {resourceComponents.map((component) => (
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


export default Header;