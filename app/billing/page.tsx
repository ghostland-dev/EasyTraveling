"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { CreditCard, Calendar, Download, Check, X, AlertCircle, Crown, Zap, Star } from "lucide-react"

export default function BillingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const [currentPlan, setCurrentPlan] = useState("adventurer")

  const plans = [
    {
      id: "explorer",
      name: "Explorateur",
      price: { monthly: 0, yearly: 0 },
      icon: Star,
      features: ["3 itinéraires par mois", "Destinations populaires", "Support communautaire", "Accès mobile"],
      limitations: ["Pas de génération IA", "Pas d'export PDF", "Pas de personnalisation avancée"],
      color: "from-gray-500 to-gray-600",
    },
    {
      id: "adventurer",
      name: "Aventurier",
      price: { monthly: 15, yearly: 144 },
      icon: Zap,
      features: [
        "Itinéraires illimités",
        "Génération IA personnalisée",
        "Export PDF & partage",
        "Support prioritaire",
        "Synchronisation multi-appareils",
        "Recommandations premium",
      ],
      limitations: [],
      color: "from-blue-500 to-coral-500",
      popular: true,
    },
    {
      id: "globetrotter",
      name: "Globe-trotter",
      price: { monthly: 39, yearly: 390 },
      icon: Crown,
      features: [
        "Tout du plan Aventurier",
        "IA ultra-personnalisée",
        "Concierge voyage 24/7",
        "Réservations intégrées",
        "API pour agences",
        "Rapports analytiques",
        "Support dédié",
      ],
      limitations: [],
      color: "from-purple-500 to-pink-500",
    },
  ]

  const invoices = [
    {
      id: "INV-2024-001",
      date: "15 Mars 2024",
      amount: "15,00€",
      status: "Payé",
      plan: "Aventurier - Mensuel",
    },
    {
      id: "INV-2024-002",
      date: "15 Février 2024",
      amount: "15,00€",
      status: "Payé",
      plan: "Aventurier - Mensuel",
    },
    {
      id: "INV-2024-003",
      date: "15 Janvier 2024",
      amount: "15,00€",
      status: "Payé",
      plan: "Aventurier - Mensuel",
    },
  ]

  const currentPlanData = plans.find((p) => p.id === currentPlan)
  const savings =
    billingCycle === "yearly"
      ? Math.round((currentPlanData?.price.monthly || 0) * 12 - (currentPlanData?.price.yearly || 0))
      : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Facturation & Abonnement</h1>
          <p className="text-gray-600">Gérez votre abonnement et consultez votre historique de facturation</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Plan */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-blue-500" />
                  Plan Actuel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${currentPlanData?.color} flex items-center justify-center`}
                  >
                    {currentPlanData?.icon && <currentPlanData.icon className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{currentPlanData?.name}</h3>
                  <p className="text-3xl font-bold text-coral-600 mt-2">
                    {currentPlanData?.price[billingCycle] || 0}€
                    <span className="text-sm text-gray-600">/{billingCycle === "monthly" ? "mois" : "an"}</span>
                  </p>
                  {billingCycle === "yearly" && savings > 0 && (
                    <Badge className="mt-2 bg-green-100 text-green-800">Économisez {savings}€/an</Badge>
                  )}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Prochaine facturation</span>
                    <span className="text-sm font-semibold">15 Avril 2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Méthode de paiement</span>
                    <span className="text-sm">•••• 4242</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full bg-transparent" variant="outline">
                    Modifier le Plan
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    Mettre à Jour la Carte
                  </Button>
                  <Button className="w-full text-red-600 hover:text-red-700" variant="ghost">
                    Annuler l'Abonnement
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Usage Stats */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Utilisation ce Mois</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Itinéraires générés</span>
                    <span className="font-semibold">12 / ∞</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Exports PDF</span>
                    <span className="font-semibold">8 / ∞</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Support utilisé</span>
                    <span className="font-semibold">2 tickets</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Plans & Billing */}
          <div className="lg:col-span-2 space-y-8">
            {/* Billing Toggle */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Changer de Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-8">
                  <span className={`mr-3 ${billingCycle === "monthly" ? "font-semibold" : "text-gray-500"}`}>
                    Mensuel
                  </span>
                  <Switch
                    checked={billingCycle === "yearly"}
                    onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
                  />
                  <span className={`ml-3 ${billingCycle === "yearly" ? "font-semibold" : "text-gray-500"}`}>
                    Annuel
                  </span>
                  {billingCycle === "yearly" && (
                    <Badge className="ml-3 bg-green-100 text-green-800">Économisez jusqu'à 20%</Badge>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {plans.map((plan) => {
                    const IconComponent = plan.icon
                    const isCurrentPlan = plan.id === currentPlan
                    const planSavings =
                      billingCycle === "yearly" ? Math.round(plan.price.monthly * 12 - plan.price.yearly) : 0

                    return (
                      <div
                        key={plan.id}
                        className={`relative border-2 rounded-2xl p-6 transition-all duration-300 ${
                          isCurrentPlan
                            ? "border-blue-500 bg-blue-50"
                            : plan.popular
                              ? "border-coral-500 bg-coral-50"
                              : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        {plan.popular && !isCurrentPlan && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-coral-500 text-white">Plus Populaire</Badge>
                          </div>
                        )}

                        {isCurrentPlan && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-blue-500 text-white">Plan Actuel</Badge>
                          </div>
                        )}

                        <div
                          className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>

                        <h3 className="text-xl font-bold text-center mb-2">{plan.name}</h3>

                        <div className="text-center mb-6">
                          <span className="text-3xl font-bold">{plan.price[billingCycle]}€</span>
                          <span className="text-gray-600">/{billingCycle === "monthly" ? "mois" : "an"}</span>
                          {billingCycle === "yearly" && planSavings > 0 && (
                            <div className="text-sm text-green-600 font-medium mt-1">Économisez {planSavings}€/an</div>
                          )}
                        </div>

                        <div className="space-y-3 mb-6">
                          {plan.features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                          {plan.limitations.map((limitation, index) => (
                            <div key={index} className="flex items-start opacity-60">
                              <X className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-500">{limitation}</span>
                            </div>
                          ))}
                        </div>

                        <Button
                          className={`w-full ${
                            isCurrentPlan
                              ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                              : plan.popular
                                ? "bg-gradient-to-r from-coral-500 to-orange-500 hover:from-coral-600 hover:to-orange-600 text-white"
                                : "bg-gray-900 hover:bg-gray-800 text-white"
                          }`}
                          disabled={isCurrentPlan}
                        >
                          {isCurrentPlan ? "Plan Actuel" : "Choisir ce Plan"}
                        </Button>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Invoice History */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                  Historique de Facturation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {invoices.map((invoice) => (
                    <div
                      key={invoice.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <CreditCard className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{invoice.id}</h4>
                          <p className="text-sm text-gray-600">{invoice.plan}</p>
                          <p className="text-xs text-gray-500">{invoice.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">{invoice.amount}</p>
                        <Badge className="bg-green-100 text-green-800 mt-1">{invoice.status}</Badge>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-6">
                  <Button variant="outline">Voir Toutes les Factures</Button>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Méthode de Paiement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <CreditCard className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Visa se terminant par 4242</h4>
                      <p className="text-sm text-gray-600">Expire 12/2027</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Modifier
                    </Button>
                    <Button variant="outline" size="sm">
                      Supprimer
                    </Button>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  Ajouter une Nouvelle Carte
                </Button>
              </CardContent>
            </Card>

            {/* Billing Alerts */}
            <Card className="shadow-lg border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-orange-900">Informations Importantes</h4>
                    <p className="text-sm text-orange-800 mt-1">
                      Votre prochaine facturation aura lieu le 15 avril 2024. Assurez-vous que votre méthode de paiement
                      est à jour.
                    </p>
                    <div className="mt-3 space-x-2">
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
                        Mettre à Jour
                      </Button>
                      <Button size="sm" variant="outline">
                        Rappeler Plus Tard
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
