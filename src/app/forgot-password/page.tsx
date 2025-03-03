"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import React, { useState } from "react"


export default function ForgotPassword() {

    const [email, setEmail] = useState("")

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setEmail("")
    }

    return (
        <div className="flex justify-center">
            <Card className="max-w-md w-[350px] my-32">
                <CardHeader>
                    <CardTitle>Forgot Password</CardTitle>
                    <CardDescription>Enter your email to reset your password</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
                        <div className="font-bold">Email</div>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            onChange={handleEmailChange}
                            value={email}
                        />
                        <Button className="mt-2">Send Reset Link</Button>
                    </form>
                </CardContent>
                <CardContent className="flex justify-center">
                    <Link href="/sign-in" className="text-base font-bold">Back to Sign In</Link>
                </CardContent>
                <CardFooter>
                    <div className="flex justify-center w-full border-t py-4">
                        <p className="text-center text-xs text-neutral-500">
                        Powered by{" "}
                        <Link
                            href="https://better-auth.com"
                            className="underline"
                            target="_blank"
                        >
                            <span className="dark:text-orange-200/90">better-auth.</span>
                        </Link>
                        </p>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}