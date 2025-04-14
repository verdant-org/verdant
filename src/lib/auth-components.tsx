import { authClient } from "./auth-client";
import React from "react";

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