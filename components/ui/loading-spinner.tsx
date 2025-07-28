"use client"

import { Loader2, Sparkles, Brain } from "lucide-react"

interface LoadingSpinnerProps {
  message?: string
  submessage?: string
  size?: "sm" | "md" | "lg"
}

export default function LoadingSpinner({ message = "Chargement...", submessage, size = "md" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* Animation principale */}
      <div className="relative">
        <div className="absolute inset-0 animate-ping">
          <div className="bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 h-20 w-20"></div>
        </div>
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-4 shadow-lg">
          <Loader2 className={`${sizeClasses[size]} text-white animate-spin`} />
        </div>
      </div>

      {/* Icônes flottantes */}
      <div className="relative w-32 h-16">
        <Sparkles
          className="absolute top-0 left-4 h-4 w-4 text-blue-400 animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <Brain
          className="absolute top-2 right-4 h-5 w-5 text-purple-400 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        />
        <Sparkles
          className="absolute bottom-0 left-8 h-3 w-3 text-indigo-400 animate-bounce"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Messages */}
      <div className="text-center max-w-md">
        <h3 className={`font-bold text-gray-900 mb-2 ${textSizeClasses[size]}`}>{message}</h3>
        {submessage && <p className="text-gray-600 text-base leading-relaxed">{submessage}</p>}
      </div>

      {/* Barre de progression animée */}
      <div className="w-64 bg-gray-200 rounded-full h-2 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full animate-pulse"></div>
      </div>

      {/* Points de chargement */}
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
      </div>
    </div>
  )
}
