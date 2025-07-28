"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Calendar, Users, Sparkles, ArrowRight, Play, Globe, Star, Heart } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HeroSection() {
  const [destination, setDestination] = useState("")
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [currentDestination, setCurrentDestination] = useState(0)
  const router = useRouter()

  const popularDestinations = [
    { name: "Paris", emoji: "🇫🇷", description: "City of Light" },
    { name: "Tokyo", emoji: "🇯🇵", description: "Modern Tradition" },
    { name: "New York", emoji: "🇺🇸", description: "The Big Apple" },
    { name: "Bali", emoji: "🇮🇩", description: "Island Paradise" },
    { name: "London", emoji: "🇬🇧", description: "Royal Heritage" },
    { name: "Rome", emoji: "🇮🇹", description: "Eternal City" },
  ]

  const featuredDestinations = ["Santorini", "Kyoto", "Machu Picchu", "Dubai", "Iceland", "Morocco"]

  // Rotation automatique des destinations
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDestination((prev) => (prev + 1) % featuredDestinations.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleQuickStart = () => {
    if (destination.trim()) {
      router.push(`/plan?destination=${encodeURIComponent(destination)}`)
    } else {
      router.push("/plan")
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background animé amélioré */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Particules flottantes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Formes géométriques animées */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-coral-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <div className="animate-fade-in-up">
          {/* Badge amélioré */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-8 py-4 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <Sparkles className="w-5 h-5 text-coral-400 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-coral-300 font-semibold text-lg">Intelligence Artificielle Avancée</span>
            <div className="ml-4 bg-gradient-to-r from-coral-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">
              NOUVEAU
            </div>
          </div>

          {/* Titre principal avec animation de frappe */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Planifiez Votre
            <span className="block bg-gradient-to-r from-coral-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient relative">
              Aventure Parfaite
              <div className="absolute -top-4 -right-4 animate-bounce">
                <Heart className="w-8 h-8 text-coral-400 fill-current" />
              </div>
            </span>
          </h1>

          {/* Sous-titre avec destination rotative */}
          <div className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            <p className="mb-4">
              Laissez notre IA créer des itinéraires personnalisés qui maximisent votre budget et minimisent le stress
              de planification.
            </p>
            <div className="flex items-center justify-center space-x-2 text-coral-300 font-semibold">
              <Globe className="w-5 h-5 animate-spin-slow" />
              <span>Découvrez</span>
              <span className="bg-white/20 px-3 py-1 rounded-full transition-all duration-500 transform">
                {featuredDestinations[currentDestination]}
              </span>
            </div>
          </div>

          {/* Formulaire de démarrage rapide amélioré */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-12 max-w-4xl mx-auto border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1 relative w-full group">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <Input
                  placeholder="Où voulez-vous aller ?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:bg-white/30 rounded-2xl h-16 focus:ring-2 focus:ring-coral-400 transition-all duration-300"
                  onKeyPress={(e) => e.key === "Enter" && handleQuickStart()}
                />
                {destination && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current animate-pulse" />
                  </div>
                )}
              </div>
              <Button
                onClick={handleQuickStart}
                className="bg-gradient-to-r from-coral-500 to-orange-500 hover:from-coral-600 hover:to-orange-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl h-16 min-w-[220px] group"
              >
                <span className="mr-3">Commencer</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Destinations populaires améliorées */}
            <div className="mt-8 text-center">
              <p className="text-blue-200 text-sm mb-4 font-medium">Destinations populaires :</p>
              <div className="flex flex-wrap justify-center gap-3">
                {popularDestinations.map((dest, index) => (
                  <button
                    key={dest.name}
                    onClick={() => setDestination(dest.name)}
                    className="group bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-full text-sm transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105 flex items-center space-x-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {dest.emoji}
                    </span>
                    <div className="text-left">
                      <div className="font-semibold">{dest.name}</div>
                      <div className="text-xs text-blue-200">{dest.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Statistiques améliorées */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            {[
              { value: "500K+", label: "Voyages Planifiés", icon: "✈️" },
              { value: "98%", label: "Satisfaction", icon: "⭐" },
              { value: "180+", label: "Pays", icon: "🌍" },
              { value: "24/7", label: "Support IA", icon: "🤖" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
                <div className="text-4xl font-bold text-coral-400 mb-2 group-hover:text-coral-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Démo vidéo améliorée */}
          <div className="relative max-w-3xl mx-auto">
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-3 border border-white/20 group hover:bg-white/15 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {!isVideoPlaying ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-coral-600/50" />
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="relative z-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-8 transition-all duration-300 transform hover:scale-110 border border-white/30 group"
                    >
                      <Play className="w-12 h-12 text-white ml-2 group-hover:scale-110 transition-transform duration-300" />
                    </button>
                    <div className="absolute inset-0 flex items-end justify-center p-6">
                      <div className="bg-black/50 backdrop-blur-sm rounded-xl px-4 py-2 text-white text-sm">
                        🎬 Découvrez comment l'IA crée votre itinéraire parfait
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="animate-spin w-12 h-12 border-4 border-white/30 border-t-white rounded-full mx-auto mb-6"></div>
                      <p className="text-lg font-semibold">Chargement de la démo...</p>
                      <p className="text-sm text-blue-200 mt-2">Préparez-vous à être émerveillé !</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-blue-200 text-lg font-medium">
                ⚡ Regardez l'IA créer votre itinéraire parfait en quelques secondes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Éléments flottants améliorés */}
      <div className="absolute top-20 left-10 animate-float hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 group hover:bg-white/15 transition-all duration-300">
          <Calendar className="w-10 h-10 text-coral-400 group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float-delayed hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 group hover:bg-white/15 transition-all duration-300">
          <Users className="w-10 h-10 text-coral-400 group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      <div className="absolute top-1/2 right-20 animate-float hidden xl:block" style={{ animationDelay: "2s" }}>
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 group hover:bg-white/15 transition-all duration-300">
          <Globe className="w-10 h-10 text-coral-400 group-hover:rotate-12 transition-transform duration-300" />
        </div>
      </div>
    </section>
  )
}
