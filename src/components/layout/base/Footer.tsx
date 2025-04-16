"use client"

import { faYoutube, faGithub, faDiscord, faLinkedin, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import React from "react"
import components from "@/components/layout/base/navigation-items"

const socialIcons = [
    { name: "YouTube", icon: faYoutube, link: "https://www.youtube.com" },
    { name: "Twitter", icon: faXTwitter, link: "https://www.twitter.com" },
    { name: "GitHub", icon: faGithub, link: "https://www.github.com" },
    { name: "Discord", icon: faDiscord, link: "https://www.discord.com" },
    { name: "LinkedIn", icon: faLinkedin, link: "https://www.linkedin.com" },
    { name: "Instagram", icon: faInstagram, link: "https://www.instagram.com" },
]

const NewsletterForm = () => {
    const [email, setEmail] = React.useState("");
    const [subscribed, setSubscribed] = React.useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email) return

        const response = await fetch(`/api/newsletter`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, subscribed }),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Error");
        setSubscribed(!subscribed);
        
    };
    

    return (
        <form className="flex gap-4" onSubmit={handleSubmit}>
            {!subscribed && (
                <Input type="email" placeholder="Enter your email" className="w-full lg:w-96" value={email} onChange={handleChange}/>
            )}
            <Button type="submit" className="w-full lg:w-36">
                {subscribed ? "Unsubscribe" : "Subscribe"}
            </Button>
        </form>
    );
};

const Footer = () => {
    
    const currentDate = new Date().getFullYear()
    
    return (
        <footer className="bg-stone-100 dark:bg-stone-900 flex flex-col p-16">
            {/* Newsletter Section */}
            <div className="mb-12">
                <div className="flex flex-col gap-4">
                    <div className="font-bold text-3xl">Subscribe to our Newsletter</div>
                    <div className="text-stone-700 dark:text-stone-400 font-bold">Want to know the latest changes in your area? Sign up for the newsletter and join our community.</div>
                    <NewsletterForm />  
                </div>
            </div>
            {/* Information Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
                <div className="flex flex-col gap-6">
                    <div className="flex gap-4 items-center">
                        <Image src="/verdant_logo.png" width={50} height={50} alt="Verdant Logo" className="object-contain"></Image>
                        <div className="font-bold text-2xl lg:text-3xl">Verdant</div>
                    </div>
                    <div className="text-base font-bold text-stone-700 dark:text-stone-400">
                        Verdant is your all in one environmental platform. We provide you with the tools and resources to help you find environmental details for your area.
                    </div>
                </div>
                {components.map((component) => (
                    <div className="flex flex-col gap-6" key={`${component.title}-footer`}>
                        <div className="flex gap-4 items-center">
                            <div className="font-bold text-xl">{component.title}</div>
                        </div>
                        <div>
                            <div className="flex flex-col gap-2 text-base font-bold text-stone-700 dark:text-stone-400">
                                {component.items.map((item) => (
                                    <Link 
                                        href={item.href} 
                                        key={`${item.title}-footer`} 
                                        {...item.title === "Documentation" ? { target: "_blank", rel: "noopener noreferrer" } : {}}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Copyright and Social Media Section */}
            <div className="flex flex-col lg:flex-row lg:gap-0 lg:justify-between lg:items-center gap-4 border-t border-stone-300 dark:border-stone-600 border-solid my-4 pt-4">
                <div className="font-bold text-sm md:text-base lg:text-lg">@ {currentDate} Verdant by Verdant Inc. All rights reserved.</div>
                <div className="flex gap-4">
                    {socialIcons.map((icon) => (
                        <Link 
                            href={icon.link} 
                            key={icon.name}
                            className="bg-stone-300 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 transition duration-300 rounded-lg 
                            flex p-2 w-11 h-11 lg:h-12 lg:w-12 justify-center items-center shadow-stone-400 dark:shadow-black shadow-md"
                             target="_blank"
                             rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={icon.icon} size="xl"/>
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer