"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [responseMsg, setResponseMsg] = useState("");
    const [isError, setIsError] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async () => {
        setResponseMsg("");
        setIsError(false);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message })
            });

            const data = await res.json();

            if (!res.ok) {
                setIsError(true);
                throw new Error(data.message || "Something went wrong");
            }

            setEmail("");
            setMessage("");
            setResponseMsg("Message sent successfully!");
            setSubmitted(true);

            setTimeout(() => {
                setResponseMsg("");
                setSubmitted(false);
            }, 3000);
        } catch (err: any) {
            setIsError(true);
            setResponseMsg(err.message);
        }
    };

    return (
        <div className="p-8 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">Contact Us!</h1>

            <input 
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full lg:w-[600px] mt-4 py-4 px-6 text-base border-4 border-gray-300 rounded-lg"
                disabled={submitted}
            />

            <textarea 
                placeholder="Enter your question"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full lg:w-[600px] mt-6 h-40 py-4 px-6 text-base resize-none border-4 border-gray-300 rounded-lg"
                disabled={submitted}
            />

            <Button 
                className="text-white mt-6 w-full lg:w-[600px]"
                onClick={handleSubmit}
                disabled={submitted}
            >
                {submitted ? "Sent" : "Submit"}
            </Button>

            {responseMsg && (
                <p className={`mt-4 text-center text-base transition-opacity duration-300 ${isError ? "text-red-500" : "text-green-600"}`}>
                    {responseMsg}
                </p>
            )}
        </div>
    );
};

export default Contact;
