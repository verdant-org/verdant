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
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { AnimatePresence, motion } from "framer-motion"
import ModeToggle  from "./ModeToggle"
import { useSession } from "@/lib/auth-client";
import Image from "next/image"
import components from "@/components/layout/base/navigation-items"

const NavBar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
              {components.map((component) => (
                <NavigationMenuItem key={`${component.title}-header-navbar`}>
                <NavigationMenuTrigger>{component.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {component.items.map((item) => (
                        <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        >
                        {item.description}
                        </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const Dropdown = () => {
  const [openDropDown, setOpenDropDown] = React.useState<{ [key: string]: boolean }>({})

  const handleToggle = (title: string) => {
    setOpenDropDown((prev) => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

    return (
      <>
        {components.map((component) => (
          <Collapsible
            key={`${component.title}-header-dropdown-main`}
            open={!openDropDown[component.title]}
            onOpenChange={() => handleToggle(component.title)}
            className="w-full space-y-2 mb-5 border-b border-b-2 border-stone-300 dark:border-stone-600"
          >
            <div className="flex items-center justify-between space-x-4">
              <h4 className="text-xl font-semibold outline-black">
                {component.title}
              </h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <motion.div
                    animate={{ rotate: openDropDown[component.title] ? 180 : 0}}
                    transition={{ duration: 0.2, ease: "easeInOut" }}>
                    <Icons.ChevronDown className="h-4 w-4" />
                  </motion.div>
                </Button>
              </CollapsibleTrigger>
            </div>
            <AnimatePresence>
              {openDropDown[component.title] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                {component.items.map((item) => (
                  <div className="my-4" key={`${item.title}-header-dropdown`}>
                    <Link href={item.href}>
                      <div className="font-bold text-base">{item.title}</div>
                      <div className="text-sm">{item.description}</div>
                    </Link>
                  </div>
                ))}
              </motion.div>
              )}
            </AnimatePresence>
          </Collapsible> 
      ))}
    </>
  )
}

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const { data: session } = useSession()
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
                    <Link href="/" className="flex gap-2 flex items-center">
                        <Image src="/verdant_logo.png" width={50} height={50} alt="Verdant Logo" className="object-contain"></Image>
                        <div className="font-bold text-2xl">Verdant</div>
                    </Link>
                </div>
                <div className="hidden lg:block"><NavBar /></div>
                <div className="flex">
                    <div className="font-bold text-lg flex gap-4">
                        <ModeToggle className="hidden lg:block"/>
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
        <ModeToggle className="fixed bottom-4 right-4 lg:hidden z-50"/>
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