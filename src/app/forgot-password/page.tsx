"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Shield, ArrowLeft, CheckCircle2, Eye, EyeOff, Lock } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"
import { authClient } from "@/lib/auth-client"

export default function PasswordResetPage() {
  const [step, setStep] = useState<"email" | "otp" | "reset" | "complete">("email")
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [time, setTime] = useState<number>(300)
  const [isSubmitting, setIsSubmitting] = useState(false)


  useEffect(() => {
    if (step !== "otp") return

    const interval = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [time, step])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? `0${secs}` : secs}`
  }

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email.trim()) {
      toast.error("Please enter your email address")
      return
    }

    setStep("reset")
  }

  const handleVerifyOtp = async () => {
    if (otp.length !== 8) {
      toast.error("Please enter the complete 8-digit passcode")
      return
    }

    setIsSubmitting(true)

    try {
      const { data, error } = await authClient.emailOtp.resetPassword({
        email,
        otp,
        password
      })

      if (error) {
        toast.error("Failed to verify passcode", {
          description: error.message,
        })
        return
      }

      toast.success("Verification successful", {
        description: "You can now reset your password",
      })

      setStep("complete")
    } catch (error) {
      toast.error("Failed to verify passcode")
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResendOtp = async () => {
    setIsSubmitting(true)

    try {
      const { data, error } = await authClient.emailOtp.sendVerificationOtp({
        email,
        type: "forget-password",
      })

      if (error) {
        toast.error("Failed to resend passcode", {
          description: error.message,
        })
        return
      }

      toast.success("New passcode sent to your email", {
        description: "Please check your email for the new passcode",
      })

      setOtp("")  
      setTime(300)
    } catch (error) {
      toast.error("An unexpected error occurred")
    } finally {
      setIsSubmitting(true)
    }
  }

  const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long")
      return
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match")
      return
    }

    setIsSubmitting(true)
    const { data, error } = await authClient.emailOtp.sendVerificationOtp({
      email,
      type: "forget-password",
    })

    if (error) {
      toast.error("Failed to send reset passcode", {
        description: error.message,
      })
      setIsSubmitting(false)
      return
    }

    setTime(300)
    setStep("otp")
    setIsSubmitting(false)
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="max-w-md w-full shadow-lg">
        <CardHeader className="space-y-1">
          <div className="w-full flex justify-center py-2">
            <Shield className="w-12 h-12 text-primary" />
          </div>

          <CardTitle className="text-2xl font-bold text-center">
            {step === "email" && "Forgot Password"}
            {step === "otp" && "Verify Your Identity"}
            {step === "reset" && "Reset Your Password"}
            {step === "complete" && "Password Reset Complete"}
          </CardTitle>

          <CardDescription className="text-center">
            {step === "email" && "Enter your email to reset your password"}
            {step === "otp" && `Enter the verification code sent to ${email}`}
            {step === "reset" && "Create a new password for your account"}
            {step === "complete" && "Your password has been successfully reset"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {step === "email" && (
            <form className="space-y-4" onSubmit={handleEmailSubmit}>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Reset Code"}
              </Button>
            </form>
          )}

          {step === "otp" && (
            <div className="space-y-6">
              <div className="space-y-4">
                <InputOTP maxLength={8} value={otp} onChange={setOtp} className="justify-center gap-2">
                  <InputOTPGroup className="gap-2">
                    <InputOTPSlot
                      index={0}
                      className="w-9 h-10 text-center text-lg border-2 rounded-md focus:border-primary focus:ring-1 focus:ring-primary data-[filled]:border-primary data-[filled]:bg-primary/10"
                    />
                    <InputOTPSlot
                      index={1}
                      className="w-9 h-10 text-center text-lg border-2 rounded-md focus:border-primary focus:ring-1 focus:ring-primary data-[filled]:border-primary data-[filled]:bg-primary/10"
                    />
                    <InputOTPSlot
                      index={2}
                      className="w-9 h-10 text-center text-lg border-2 rounded-md focus:border-primary focus:ring-1 focus:ring-primary data-[filled]:border-primary data-[filled]:bg-primary/10"
                    />
                    <InputOTPSlot
                      index={3}
                      className="w-9 h-10 text-center text-lg border-2 rounded-md focus:border-primary focus:ring-1 focus:ring-primary data-[filled]:border-primary data-[filled]:bg-primary/10"
                    />
                  </InputOTPGroup>
                  <InputOTPSeparator>
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                  </InputOTPSeparator>
                  <InputOTPGroup className="gap-2">
                    <InputOTPSlot
                      index={4}
                      className="w-9 h-10 text-center text-lg border-2 rounded-md focus:border-primary focus:ring-1 focus:ring-primary data-[filled]:border-primary data-[filled]:bg-primary/10"
                    />
                    <InputOTPSlot
                      index={5}
                      className="w-9 h-10 text-center text-lg border-2 rounded-md focus:border-primary focus:ring-1 focus:ring-primary data-[filled]:border-primary data-[filled]:bg-primary/10"
                    />
                    <InputOTPSlot
                      index={6}
                      className="w-9 h-10 text-center text-lg border-2 rounded-md focus:border-primary focus:ring-1 focus:ring-primary data-[filled]:border-primary data-[filled]:bg-primary/10"
                    />
                    <InputOTPSlot
                      index={7}
                      className="w-9 h-10 text-center text-lg border-2 rounded-md focus:border-primary focus:ring-1 focus:ring-primary data-[filled]:border-primary data-[filled]:bg-primary/10"
                    />
                  </InputOTPGroup>
                </InputOTP>

                <div className="text-center text-sm text-muted-foreground">
                  {time > 0 ? (
                    <p>Resend code in {formatTime(time)}</p>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      className="text-primary hover:underline focus:outline-none"
                      disabled={isSubmitting}
                    >
                      Resend code
                    </button>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full" onClick={handleVerifyOtp} disabled={otp.length !== 8 || isSubmitting}>
                  {isSubmitting ? "Verifying..." : "Verify Code"}
                </Button>

                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center"
                  onClick={() => setStep("email")}
                  disabled={isSubmitting}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Email
                </Button>
              </div>
            </div>
          )}

          {step === "reset" && (
            <form className="space-y-6" onSubmit={handlePasswordReset}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium flex items-center">
                    <Lock className="h-4 w-4 mr-1" />
                    New Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full pr-10"
                      minLength={8}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground">Password must be at least 8 characters long</p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="text-sm font-medium flex items-center">
                    <Lock className="h-4 w-4 mr-1" />
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="w-full pr-10"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending OTP ..." : "Send Reset OTP"}
              </Button>
            </form>
          )}

          {step === "complete" && (
            <div className="space-y-6 text-center">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
              </div>

              <p className="text-muted-foreground">
                Your password has been successfully reset. You can now sign in with your new password.
              </p>

              <Button className="w-full" asChild>
                <Link href="/sign-in">Go to Sign In</Link>
              </Button>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex flex-col space-y-4 pt-0">
          {step !== "complete" && (
            <div className="text-center w-full">
              <Link href="/sign-in" className="text-sm font-medium text-primary hover:underline">
                Back to Sign In
              </Link>
            </div>
          )}

          <div className="w-full border-t pt-4">
            <p className="text-center text-xs text-neutral-500">
              Powered by{" "}
              <Link href="https://better-auth.com" className="underline" target="_blank">
                <span className="dark:text-orange-200/90">better-auth.</span>
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
