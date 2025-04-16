import { authClient } from "./auth-client";
import React from "react";
import { redirect } from "next/navigation";
import { cp } from "fs";

interface SignedInProps {
    children: React.ReactNode | null
}

export const SignedIn = ({ children }: SignedInProps) => {
    const { data: session } = authClient.useSession()

    if (!session) return null

    return (
        <>
            {children}
        </>
    )
}

export const SignedOut = ({ children }: SignedInProps) => {
    const { data: session } = authClient.useSession()

    if (session) return null

    return (
        <>
            {children}
        </>
    )
}

export const verifyUser = () => {
    const { data: session } = authClient.useSession()

    if (!session) {
        window.localStorage.setItem("redirectUrl", window.location.pathname)
        redirect("/sign-in")
    }
}