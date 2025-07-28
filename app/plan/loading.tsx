"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Sparkles, MapPin, Calendar, Users } from "lucide-react"

export default function PlanLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-coral-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
            Planification Intelligente par IA
          </div>
          <Skeleton className="h-16 w-3/4 mx-auto mb-8" />
          <Skeleton className="h-6 w-2/3 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>

        {/* Progress Bar Skeleton */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex flex-col items-center group">
                <Skeleton className="w-12 h-12 rounded-full mb-2" />
                <div className="text-center hidden md:block">
                  <Skeleton className="h-4 w-20 mb-1" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
            ))}
          </div>
          <Skeleton className="w-full h-2 mb-4" />
          <div className="flex justify-between text-sm">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>

        {/* Form Card Skeleton */}
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="pb-8 bg-gradient-to-r from-blue-50 to-coral-50 rounded-t-2xl">
            <div className="flex items-center">
              <MapPin className="mr-4 w-8 h-8 text-blue-500" />
              <div className="flex-1">
                <Skeleton className="h-8 w-64 mb-2" />
                <Skeleton className="h-5 w-48" />
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-10 p-8">
            {/* Destination Field */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                <Skeleton className="h-6 w-48" />
              </div>
              <Skeleton className="h-16 w-full rounded-2xl" />
            </div>

            {/* Date Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-500" />
                  <Skeleton className="h-6 w-32" />
                </div>
                <Skeleton className="h-16 w-full rounded-2xl" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-coral-500" />
                  <Skeleton className="h-6 w-32" />
                </div>
                <Skeleton className="h-16 w-full rounded-2xl" />
              </div>
            </div>

            {/* Budget and Group Size */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-500" />
                  <Skeleton className="h-6 w-40" />
                </div>
                <Skeleton className="h-16 w-full rounded-2xl" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-6 w-36" />
                <Skeleton className="h-16 w-full rounded-2xl" />
              </div>
            </div>

            {/* Interests Grid */}
            <div className="space-y-6">
              <Skeleton className="h-6 w-64" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(12)].map((_, index) => (
                  <Skeleton key={index} className="h-16 w-full rounded-2xl" />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between pt-10 border-t-2 border-gray-100">
              <Skeleton className="h-16 w-32 rounded-2xl" />
              <Skeleton className="h-16 w-48 rounded-2xl" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
