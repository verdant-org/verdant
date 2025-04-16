"use client"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Shield } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Page() {

    const [time, setTime] = useState<number>(300)
    const [otp, setOtp] = useState<string>("")

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => prev !== 0 ? prev - 1 : 0)
        }, 1000)
        return () => clearInterval(interval)
    }, [time])

    const handleVerify = async () => {

    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-4 justify-center my-32 items-center border border-2 p-8 rounded-lg shadow-md">
                <div className="w-full flex justify-center py-4">
                    <Shield className="w-16 h-16 text-primary" />
                </div>
                <h1 className="text-2xl font-bold">One Time Passcode</h1>
                <p className="text-sm text-muted-foreground">Enter the one time passcode sent to your email</p>
                <InputOTP maxLength={8} value={otp} onChange={(value) => setOtp(value)}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup className="flex">
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5}/>
                        <InputOTPSlot index={6}/>
                        <InputOTPSlot index={7} />
                    </InputOTPGroup>
                </InputOTP>
                <p className="text-sm text-muted-foreground">Resend OTP in {Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}</p>
                <Button className="" disabled={time !== 0}>
                    Verify OTP
                </Button>
            </div>
        </div>
    )
}