"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { User, Mail, MessageSquare, Send, Tag, Shield, Clock, Phone } from "lucide-react"

// Form schema with validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")

  // Initialize form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    setFormStatus("idle")

    try {      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      
      if (!response.ok) throw new Error('Failed to submit form')

      setFormStatus("success")
      toast("Message sent successfully!", {
        description: "We've received your message and will get back to you soon.",
      })
      form.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus("error")
      toast.error("Failed to send message", {
        description: "Something went wrong. Please try again",
      })
        
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6 flex flex-col items-center justify-center lg:px-16 my-32">
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl shadow-lg border border-primary/20 w-full max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary">Get In Touch</h2>
          <p className="text-muted-foreground mt-2">
            We'd love to hear from you. Fill out the form below and we'll respond as soon as possible.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>support@testingemailservice.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>(123) 456-7890</span>
            </div>
          </div>
        </div>

        {formStatus === "success" && (
          <Alert className="bg-green-50 border-green-200 mb-6">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">Message sent successfully!</AlertTitle>
            <AlertDescription className="text-green-700">
              Thank you for reaching out. We'll get back to you as soon as possible.
            </AlertDescription>
          </Alert>
        )}

        {formStatus === "error" && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>There was a problem sending your message. Please try again later.</AlertDescription>
          </Alert>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" />
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        {...field}
                        className="border-primary/20 focus-visible:ring-primary/30"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="your.email@example.com"
                        type="email"
                        {...field}
                        className="border-primary/20 focus-visible:ring-primary/30"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary" />
                    Subject (Optional)
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="What is this regarding?"
                      {...field}
                      className="border-primary/20 focus-visible:ring-primary/30"
                    />
                  </FormControl>
                  <FormDescription>Help us categorize your inquiry.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please provide details about your inquiry..."
                      className="min-h-[150px] border-primary/20 focus-visible:ring-primary/30"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full py-6 text-base font-medium transition-all hover:shadow-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending your message...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting this form, you agree to our{" "}
                <a href="#" className="underline hover:text-primary">
                  Privacy Policy
                </a>{" "}
                and consent to being contacted regarding your inquiry.
              </p>
            </div>
          </form>
        </Form>

        <div className="mt-8 pt-6 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">We typically respond within 24 hours</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Shield className="h-4 w-4 text-primary" />
        <span className="text-xs text-muted-foreground">Your information is secure and encrypted</span>
      </div>
    </div>
  )
}