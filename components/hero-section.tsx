"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles, MapPin, Calendar, Users, ArrowRight, Star, Globe } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-coral-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            IA de Planification de Voyage Avancée
            <Star className="w-4 h-4 ml-2 text-yellow-500" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Planifiez Votre
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-coral-500 bg-clip-text text-transparent animate-gradient">
              Voyage Parfait
            </span>
            <span className="block text-4xl md:text-5xl mt-4">avec l'IA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Créez des itinéraires personnalisés en quelques minutes grâce à notre intelligence artificielle avancée.
            <span className="block mt-2 font-semibold text-blue-600">
              Plus de 10,000 voyageurs nous font confiance !
            </span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10,000+</div>
              <div className="text-sm text-gray-600">Voyages Planifiés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">150+</div>
              <div className="text-sm text-gray-600">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coral-600">4.9/5</div>
              <div className="text-sm text-gray-600">Note Moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">98%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/plan">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
                <Sparkles className="w-5 h-5 mr-2" />
                Commencer Gratuitement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/examples">
              <Button
                variant="outline"
                className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 hover:bg-gray-50 transition-all duration-300 bg-transparent"
              >
                <Globe className="w-5 h-5 mr-2" />
                Voir des Exemples
              </Button>
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Destinations Personnalisées</h3>
              <p className="text-gray-600 text-sm">
                L'IA analyse vos préférences pour suggérer les destinations parfaites
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Planification Intelligente</h3>
              <p className="text-gray-600 text-sm">Itinéraires optimisés jour par jour selon votre budget et style</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-coral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-coral-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Adapté à Votre Groupe</h3>
              <p className="text-gray-600 text-sm">
                Parfait pour les voyages solo, en couple, en famille ou entre amis
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm mb-6">Utilisé par des voyageurs du monde entier</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">TripAdvisor</div>
              <div className="text-2xl font-bold text-gray-400">Booking.com</div>
              <div className="text-2xl font-bold text-gray-400">Expedia</div>
              <div className="text-2xl font-bold text-gray-400">Airbnb</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
