"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, MapPin, Calendar, Euro, Users, Clock, Star, Zap, Globe, Heart, Camera, Utensils } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: "IA Avancée",
      description: "Notre intelligence artificielle analyse vos préférences pour créer l'itinéraire parfait",
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      benefits: ["Personnalisation poussée", "Apprentissage continu", "Recommandations intelligentes"],
    },
    {
      icon: MapPin,
      title: "150+ Destinations",
      description: "Explorez le monde entier avec nos destinations soigneusement sélectionnées",
      color: "bg-green-500",
      bgColor: "bg-green-50",
      benefits: ["Destinations authentiques", "Lieux cachés", "Expériences locales"],
    },
    {
      icon: Euro,
      title: "Optimisation Budget",
      description: "Maximisez votre expérience tout en respectant votre budget",
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      benefits: ["Calculs précis", "Alternatives économiques", "Transparence totale"],
    },
    {
      icon: Calendar,
      title: "Planification Flexible",
      description: "Adaptez votre voyage selon vos dates et contraintes",
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      benefits: ["Dates flexibles", "Durée variable", "Modifications faciles"],
    },
    {
      icon: Users,
      title: "Tous Types de Groupes",
      description: "Solo, couple, famille ou amis - nous avons la solution",
      color: "bg-pink-500",
      bgColor: "bg-pink-50",
      benefits: ["Voyage solo", "Romantique", "Familial", "Entre amis"],
    },
    {
      icon: Clock,
      title: "Gain de Temps",
      description: "Créez votre itinéraire en minutes au lieu d'heures de recherche",
      color: "bg-indigo-500",
      bgColor: "bg-indigo-50",
      benefits: ["Création rapide", "Recherche automatisée", "Comparaisons instantanées"],
    },
  ]

  const additionalFeatures = [
    {
      icon: Star,
      title: "Recommandations Premium",
      description: "Accès aux meilleures adresses et expériences exclusives",
    },
    {
      icon: Globe,
      title: "Informations Locales",
      description: "Conseils culturels, météo, et informations pratiques",
    },
    {
      icon: Heart,
      title: "Favoris & Partage",
      description: "Sauvegardez et partagez vos itinéraires préférés",
    },
    {
      icon: Camera,
      title: "Spots Photo",
      description: "Les meilleurs endroits pour immortaliser votre voyage",
    },
    {
      icon: Utensils,
      title: "Gastronomie Locale",
      description: "Découvrez la cuisine authentique de chaque destination",
    },
    {
      icon: Zap,
      title: "Mises à Jour Temps Réel",
      description: "Informations actualisées sur les attractions et événements",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Fonctionnalités Avancées
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi Choisir Notre
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Planificateur IA ?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment notre technologie révolutionnaire transforme la façon dont vous planifiez vos voyages
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <CardHeader className={`${feature.bgColor} pb-6`}>
                <div
                  className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Et Bien Plus Encore...</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez toutes les fonctionnalités qui font de notre planificateur l'outil ultime pour vos voyages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                99.2%
              </div>
              <div className="text-gray-600 font-medium">Précision IA</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                3 min
              </div>
              <div className="text-gray-600 font-medium">Temps Moyen</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Disponibilité</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                150+
              </div>
              <div className="text-gray-600 font-medium">Pays Couverts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
