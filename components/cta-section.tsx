"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Sparkles, ArrowRight, MapPin, Calendar, Euro, Star, Zap } from "lucide-react"

export function CTASection() {
  const benefits = [
    {
      icon: Sparkles,
      text: "IA Personnalisée",
    },
    {
      icon: MapPin,
      text: "150+ Destinations",
    },
    {
      icon: Calendar,
      text: "Planification Rapide",
    },
    {
      icon: Euro,
      text: "Budget Optimisé",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-coral-500 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <Badge className="bg-white/20 text-white border-white/30 px-6 py-3 mb-8 hover:bg-white/30 transition-all duration-300">
            <Zap className="w-4 h-4 mr-2" />
            Offre Limitée - Gratuit Pendant 30 Jours
            <Star className="w-4 h-4 ml-2" />
          </Badge>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transformez Vos Rêves
            <span className="block text-yellow-300">en Aventures Réelles</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Rejoignez plus de <span className="font-bold text-yellow-300">10,000 voyageurs</span> qui ont déjà créé leur
            itinéraire parfait avec notre IA révolutionnaire
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white hover:bg-white/30 transition-all duration-300"
              >
                <benefit.icon className="w-5 h-5 mr-2" />
                <span className="font-semibold">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/plan">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
                <Sparkles className="w-6 h-6 mr-3" />
                Créer Mon Itinéraire Gratuit
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
            <Link href="/examples">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-6 text-xl font-bold rounded-2xl backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                Voir des Exemples
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">4.9/5</div>
              <div className="text-white/80">Note Moyenne</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">10,000+</div>
              <div className="text-white/80">Voyages Créés</div>
              <div className="text-sm text-white/60 mt-2">Ce mois-ci</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">98%</div>
              <div className="text-white/80">Satisfaction</div>
              <div className="text-sm text-white/60 mt-2">Recommandent</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-6">Utilisé par des voyageurs du monde entier</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold">✈️ TripAdvisor</div>
              <div className="text-white font-semibold">🏨 Booking.com</div>
              <div className="text-white font-semibold">🌍 Expedia</div>
              <div className="text-white font-semibold">🏠 Airbnb</div>
              <div className="text-white font-semibold">⭐ Google Travel</div>
            </div>
          </div>

          {/* Urgency */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-white font-semibold">Offre Spéciale</span>
            </div>
            <p className="text-white/90 text-sm">
              Profitez de <span className="font-bold text-yellow-300">30 jours gratuits</span> pour tester toutes nos
              fonctionnalités premium. Aucune carte de crédit requise. Annulation possible à tout moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
