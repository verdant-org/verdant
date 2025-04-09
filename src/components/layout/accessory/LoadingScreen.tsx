"use client"

import Icons from "@/components/icons";
import { useEffect, useState } from "react";

interface Props {
  className?: string
}

const LoadingScreen = ({ className }: Props) => {
  
  const [dots, setDots] = useState<string>("")

  useEffect(() => {

    const interval = setInterval(() => {
      setDots((prev) => prev.length === 5 ? "" : prev + ".")
    }, 250)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`h-screen w-full flex flex-col items-center justify-center gap-4 ${className}`}>
        <Icons.Loader2 size={128} className="animate-spin" />
        <div className="text-4xl">Loading {dots}</div>
    </div>
  )
}

export default LoadingScreen