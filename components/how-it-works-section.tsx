"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Calendar, Heart, Sparkles, ArrowRight, CheckCircle, Users, Euro, Plane } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: MapPin,
      title: "Choisissez Votre Destination",
      description:
        "Sélectionnez où vous voulez aller ou laissez notre IA vous suggérer des destinations basées sur vos préférences",
      details: [
        "Plus de 150 destinations disponibles",
        "Suggestions personnalisées par IA",
        "Filtres par climat, budget, activités",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      number: "02",
      icon: Calendar,
      title: "Définissez Vos Paramètres",
      description: "Indiquez vos dates, budget, taille du groupe et préférences pour un voyage sur mesure",
      details: ["Dates flexibles ou fixes", "Budget adapté à vos moyens", "Groupe de 1 à 20+ personnes"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      number: "03",
      icon: Heart,
      title: "Partagez Vos Intérêts",
      description: "Sélectionnez vos centres d'intérêt pour que l'IA personnalise votre expérience de voyage",
      details: ["Culture, gastronomie, aventure", "Art, nature, vie nocturne", "Expériences authentiques locales"],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Recevez Votre Itinéraire",
      description: "Notre IA génère un itinéraire détaillé jour par jour, optimisé selon vos critères",
      details: ["Planning heure par heure", "Recommandations restaurants", "Conseils pratiques et budget"],
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50",
    },
  ]

  const features = [
    {
      icon: CheckCircle,
      title: "Personnalisation Complète",
      description: "Chaque itinéraire est unique et adapté à vos goûts",
    },
    {
      icon: Users,
      title: "Adapté à Tous",
      description: "Solo, couple, famille ou groupe d'amis",
    },
    {
      icon: Euro,
      title: "Respect du Budget",
      description: "Optimisation intelligente de vos dépenses",
    },
    {
      icon: Plane,
      title: "Prêt à Partir",
      description: "Itinéraire complet avec toutes les informations",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Comment Ça Marche
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Créez Votre Voyage en
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              4 Étapes Simples
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre processus intelligent vous guide pas à pas pour créer l'itinéraire parfait en quelques minutes
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 ${step.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <step.icon className="w-6 h-6 text-gray-700" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                  {/* Details */}
                  <ul className="space-y-2 text-sm">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Prêt à Créer Votre Voyage de Rêve ?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez plus de 10,000 voyageurs qui ont déjà créé leur itinéraire parfait avec notre IA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/plan">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Commencer Maintenant
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/examples">
                <Button
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 hover:bg-white transition-all duration-300 bg-transparent"
                >
                  Voir des Exemples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
