"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles, MapPin, Users, Heart, Globe, Zap, Target, Award, TrendingUp, Shield } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "Marie Dubois",
      role: "CEO & Fondatrice",
      description: "Passionnée de voyage et d'IA, Marie a créé VoyageAI pour démocratiser la planification de voyage.",
      avatar: "/placeholder.svg?height=100&width=100&text=MD",
    },
    {
      name: "Thomas Chen",
      role: "CTO",
      description:
        "Expert en intelligence artificielle, Thomas développe les algorithmes qui rendent nos recommandations si précises.",
      avatar: "/placeholder.svg?height=100&width=100&text=TC",
    },
    {
      name: "Sophie Martin",
      role: "Head of Travel",
      description:
        "Ancienne guide touristique, Sophie apporte son expertise terrain pour enrichir nos recommandations.",
      avatar: "/placeholder.svg?height=100&width=100&text=SM",
    },
    {
      name: "Alexandre Rousseau",
      role: "Lead Developer",
      description: "Développeur full-stack passionné, Alexandre construit l'expérience utilisateur que vous adorez.",
      avatar: "/placeholder.svg?height=100&width=100&text=AR",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion du Voyage",
      description: "Nous croyons que chaque voyage doit être une expérience transformatrice et mémorable.",
    },
    {
      icon: Sparkles,
      title: "Innovation IA",
      description: "Nous utilisons l'intelligence artificielle pour créer des expériences de voyage personnalisées.",
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Nous construisons une communauté de voyageurs qui s'entraident et partagent leurs expériences.",
    },
    {
      icon: Shield,
      title: "Confiance",
      description: "Nous protégeons vos données et vous offrons des recommandations fiables et vérifiées.",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Voyageurs Satisfaits", icon: Users },
    { number: "150+", label: "Destinations Couvertes", icon: MapPin },
    { number: "4.9/5", label: "Note Moyenne", icon: Award },
    { number: "98%", label: "Taux de Satisfaction", icon: TrendingUp },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />À Propos de VoyageAI
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Révolutionner la
            <span className="block text-yellow-300">Planification de Voyage</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Nous utilisons l'intelligence artificielle pour créer des expériences de voyage personnalisées, authentiques
            et inoubliables pour chaque voyageur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plan">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                <Sparkles className="w-5 h-5 mr-2" />
                Essayer Maintenant
              </Button>
            </Link>
            <Link href="/examples">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold bg-transparent"
              >
                Voir nos Exemples
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Démocratiser l'accès à des voyages exceptionnels en utilisant l'intelligence artificielle pour créer des
              expériences personnalisées et authentiques.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi VoyageAI ?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Personnalisation Poussée</h4>
                    <p className="text-gray-600">
                      Notre IA analyse vos préférences, votre budget et vos contraintes pour créer l'itinéraire parfait
                      qui vous ressemble.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Rapidité & Efficacité</h4>
                    <p className="text-gray-600">
                      Fini les heures de recherche ! Obtenez un itinéraire complet et détaillé en quelques minutes
                      seulement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise Mondiale</h4>
                    <p className="text-gray-600">
                      Accédez à notre base de données de plus de 150 destinations avec des recommandations locales
                      authentiques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
              <img
                src="/placeholder.svg?height=400&width=500&text=Mission+Image"
                alt="Notre mission"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <blockquote className="text-lg italic text-gray-700 text-center">
                "Nous croyons que chaque personne mérite de vivre des expériences de voyage extraordinaires, peu importe
                son budget ou son niveau d'expérience."
              </blockquote>
              <cite className="block text-center mt-4 font-semibold text-blue-600">
                - Marie Dubois, CEO & Fondatrice
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre travail et notre engagement envers nos utilisateurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Équipe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe passionnée de voyageurs et d'experts en technologie, unis par la même vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <img
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à Transformer Vos Voyages ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez plus de 10,000 voyageurs qui ont déjà découvert la magie de la planification par IA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plan">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                <Sparkles className="w-5 h-5 mr-2" />
                Créer Mon Premier Voyage
              </Button>
            </Link>
            <Link href="/examples">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold bg-transparent"
              >
                Découvrir les Exemples
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
