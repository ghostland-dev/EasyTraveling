"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown, Sparkles } from "lucide-react"
import AuthModal from "@/components/auth/auth-modal"

const plans = [
  {
    name: "Explorateur",
    price: "Gratuit",
    description: "Parfait pour commencer votre aventure",
    icon: Star,
    features: [
      "3 itinéraires par mois",
      "Destinations populaires",
      "Recommandations de base",
      "Support communautaire",
      "Accès mobile",
    ],
    limitations: ["Pas de génération IA", "Pas d'export PDF", "Pas de personnalisation avancée"],
    cta: "Commencer gratuitement",
    popular: false,
    color: "from-gray-500 to-gray-600",
  },
  {
    name: "Aventurier",
    price: "15€",
    period: "/mois",
    description: "Pour les voyageurs passionnés",
    icon: Zap,
    features: [
      "Itinéraires illimités",
      "Génération IA personnalisée",
      "Toutes les destinations",
      "Export PDF & partage",
      "Recommandations premium",
      "Support prioritaire",
      "Synchronisation multi-appareils",
    ],
    cta: "Essayer 7 jours gratuits",
    popular: true,
    color: "from-blue-500 to-coral-500",
  },
  {
    name: "Globe-trotter",
    price: "39€",
    period: "/mois",
    description: "Pour les professionnels du voyage",
    icon: Crown,
    features: [
      "Tout du plan Aventurier",
      "IA ultra-personnalisée",
      "Concierge voyage 24/7",
      "Réservations intégrées",
      "Itinéraires collaboratifs",
      "API pour agences",
      "Rapports analytiques",
      "Support dédié",
    ],
    cta: "Démarrer l'essai premium",
    popular: false,
    color: "from-purple-500 to-pink-500",
  },
]

export default function PricingSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-coral-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Tarifs Transparents
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choisissez Votre
            <span className="block bg-gradient-to-r from-blue-600 to-coral-500 bg-clip-text text-transparent">
              Plan de Voyage
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des options flexibles pour tous les types de voyageurs. Commencez gratuitement et évoluez selon vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <Card
                key={plan.name}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  plan.popular
                    ? "border-2 border-blue-500 shadow-xl scale-105"
                    : "border border-gray-200 hover:border-gray-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-blue-500 to-coral-500 text-white text-center py-2 text-sm font-semibold">
                      ⭐ Plus Populaire
                    </div>
                  </div>
                )}

                <CardHeader className={`text-center ${plan.popular ? "pt-12" : "pt-8"} pb-8`}>
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">{plan.description}</CardDescription>
                  <div className="mt-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      {plan.period && <span className="text-xl text-gray-600 ml-1">{plan.period}</span>}
                    </div>
                    {plan.period && (
                      <p className="text-sm text-gray-500 mt-2">Facturé mensuellement • Annulez à tout moment</p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations && (
                      <div className="pt-4 border-t border-gray-100">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <div key={limitIndex} className="flex items-start opacity-60">
                            <span className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-gray-400">×</span>
                            <span className="text-gray-500 text-sm">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <AuthModal>
                    <Button
                      className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-coral-500 hover:from-blue-700 hover:to-coral-600 text-white shadow-lg hover:shadow-xl"
                          : "bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </AuthModal>

                  {plan.popular && (
                    <p className="text-center text-sm text-gray-500 mt-4">
                      💳 Aucune carte de crédit requise pour l'essai
                    </p>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-coral-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Besoin d'une solution sur mesure ?</h3>
            <p className="text-gray-600 mb-6">
              Pour les agences de voyage, tour-opérateurs et entreprises avec des besoins spécifiques.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                API personnalisée
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Intégration sur mesure
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Support dédié
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Tarifs volume
              </Badge>
            </div>
            <Button variant="outline" className="mt-6 px-8 py-3 bg-transparent">
              Contactez notre équipe
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            🔒 Paiement sécurisé • 💯 Garantie satisfait ou remboursé 30 jours • 🌍 Support multilingue
          </p>
        </div>
      </div>
    </section>
  )
}
