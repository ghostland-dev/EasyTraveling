"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, MapPin, Calendar, Users } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CTASection() {
  const router = useRouter()

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-coral-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 animate-float hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <MapPin className="w-8 h-8 text-coral-400" />
        </div>
      </div>
      <div className="absolute bottom-20 right-20 animate-float-delayed hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <Calendar className="w-8 h-8 text-coral-400" />
        </div>
      </div>
      <div className="absolute top-1/2 left-10 animate-float hidden lg:block" style={{ animationDelay: "1s" }}>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <Users className="w-8 h-8 text-coral-400" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20">
            <Sparkles className="w-5 h-5 text-coral-400 mr-2" />
            <span className="text-coral-300 font-semibold">Ready to Explore?</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Your Next Adventure
            <span className="block bg-gradient-to-r from-coral-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient">
              Awaits
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join over 500,000 travelers who have discovered the magic of AI-powered trip planning. Start your journey
            today and create memories that will last a lifetime.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              onClick={() => router.push("/plan")}
              className="bg-gradient-to-r from-coral-500 to-orange-500 hover:from-coral-600 hover:to-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl group"
            >
              Start Planning Now
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push("/examples")}
              className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 backdrop-blur-md bg-white/5"
            >
              View Examples
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-coral-400 mb-2">500K+</div>
              <div className="text-blue-200 text-sm">Trips Planned</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-coral-400 mb-2">98%</div>
              <div className="text-blue-200 text-sm">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-coral-400 mb-2">180+</div>
              <div className="text-blue-200 text-sm">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-coral-400 mb-2">24/7</div>
              <div className="text-blue-200 text-sm">AI Support</div>
            </div>
          </div>

          {/* Features Highlight */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">What You Get:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-coral-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-white mb-1">AI-Powered Planning</div>
                  <div className="text-blue-200 text-sm">Personalized itineraries in seconds</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-coral-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-white mb-1">Budget Optimization</div>
                  <div className="text-blue-200 text-sm">Maximize value with smart recommendations</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-coral-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-white mb-1">Local Insights</div>
                  <div className="text-blue-200 text-sm">Hidden gems and authentic experiences</div>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-blue-200 text-lg mb-4">No credit card required • Free to start • Cancel anytime</div>
          <div className="text-blue-300 text-sm">✨ Join the travel revolution powered by Google Gemini AI</div>
        </div>
      </div>
    </section>
  )
}
