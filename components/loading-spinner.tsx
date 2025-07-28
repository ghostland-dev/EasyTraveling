"use client"

import { Sparkles } from "lucide-react"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  text?: string
  className?: string
}

export function LoadingSpinner({ size = "md", text, className = "" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className="relative">
        <div
          className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-gray-200 border-t-blue-600`}
        ></div>
        <Sparkles className={`${sizeClasses[size]} absolute inset-0 text-blue-600 animate-pulse`} />
      </div>
      {text && <p className={`${textSizeClasses[size]} text-gray-600 font-medium animate-pulse`}>{text}</p>}
    </div>
  )
}
