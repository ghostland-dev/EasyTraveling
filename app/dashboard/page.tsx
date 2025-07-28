"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MapPin, Calendar, CreditCard, Settings, Download, Share2, Star, TrendingUp, Globe, Clock } from "lucide-react"

export default function DashboardPage() {
  const [user, setUser] = useState({
    name: "Jean Dupont",
    email: "jean.dupont@email.com",
    plan: "Aventurier",
    joinDate: "Mars 2024",
    avatar: "/diverse-user-avatars.png",
  })

  const [stats, setStats] = useState({
    itinerariesGenerated: 12,
    countriesVisited: 8,
    totalSaved: "2,450€",
    planLimit: 50,
    planUsed: 12,
  })

  const [recentItineraries, setRecentItineraries] = useState([
    {
      id: 1,
      destination: "Tokyo, Japon",
      dates: "15-22 Mai 2024",
      status: "Planifié",
      cost: "2,240€",
      rating: 4.9,
      image: "/tokyo-skyline-night.png",
    },
    {
      id: 2,
      destination: "Barcelona, Espagne",
      dates: "3-8 Juin 2024",
      status: "En cours",
      cost: "1,680€",
      rating: 4.7,
      image: "/barcelona-sagrada-familia.png",
    },
    {
      id: 3,
      destination: "Bali, Indonésie",
      dates: "20-30 Juillet 2024",
      status: "Brouillon",
      cost: "1,920€",
      rating: 4.8,
      image: "/bali-rice-terraces.png",
    },
  ])

  const planProgress = (stats.planUsed / stats.planLimit) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tableau de Bord</h1>
          <p className="text-gray-600">Gérez vos voyages et suivez vos aventures</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <img
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-100"
                />
                <h3 className="font-bold text-lg text-gray-900">{user.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{user.email}</p>
                <Badge className="bg-gradient-to-r from-coral-500 to-orange-500 text-white">Plan {user.plan}</Badge>
                <p className="text-xs text-gray-500 mt-2">Membre depuis {user.joinDate}</p>
              </CardContent>
            </Card>

            {/* Plan Usage */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                  Utilisation du Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Itinéraires générés</span>
                      <span>
                        {stats.planUsed}/{stats.planLimit}
                      </span>
                    </div>
                    <Progress value={planProgress} className="h-2" />
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Gérer l'abonnement
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Actions Rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-coral-500 hover:from-blue-700 hover:to-coral-600 text-white">
                  <MapPin className="w-4 h-4 mr-2" />
                  Nouveau Voyage
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Settings className="w-4 h-4 mr-2" />
                  Paramètres
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Itinéraires Créés</p>
                      <p className="text-3xl font-bold text-blue-600">{stats.itinerariesGenerated}</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Pays Visités</p>
                      <p className="text-3xl font-bold text-green-600">{stats.countriesVisited}</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <Globe className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Économies Totales</p>
                      <p className="text-3xl font-bold text-coral-600">{stats.totalSaved}</p>
                    </div>
                    <div className="bg-coral-100 p-3 rounded-full">
                      <TrendingUp className="w-6 h-6 text-coral-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Itineraries */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Calendar className="w-6 h-6 mr-3 text-blue-500" />
                  Mes Itinéraires Récents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentItineraries.map((itinerary) => (
                    <div
                      key={itinerary.id}
                      className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <img
                        src={itinerary.image || "/placeholder.svg"}
                        alt={itinerary.destination}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{itinerary.destination}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {itinerary.dates}
                          </span>
                          <span className="flex items-center">
                            <Star className="w-4 h-4 mr-1 text-yellow-500" />
                            {itinerary.rating}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-coral-600">{itinerary.cost}</p>
                        <Badge
                          variant={
                            itinerary.status === "Planifié"
                              ? "default"
                              : itinerary.status === "En cours"
                                ? "secondary"
                                : "outline"
                          }
                          className="mt-1"
                        >
                          {itinerary.status}
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-6">
                  <Button variant="outline" className="px-8 bg-transparent">
                    Voir Tous les Itinéraires
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Travel Insights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Destinations Favorites</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { country: "Japon", visits: 3, flag: "🇯🇵" },
                      { country: "Espagne", visits: 2, flag: "🇪🇸" },
                      { country: "Indonésie", visits: 2, flag: "🇮🇩" },
                      { country: "France", visits: 1, flag: "🇫🇷" },
                    ].map((destination, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{destination.flag}</span>
                          <span className="font-medium">{destination.country}</span>
                        </div>
                        <Badge variant="secondary">
                          {destination.visits} voyage{destination.visits > 1 ? "s" : ""}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Prochains Voyages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Tokyo, Japon</p>
                        <p className="text-sm text-gray-600">Dans 12 jours</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <Clock className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium text-gray-900">Barcelona, Espagne</p>
                        <p className="text-sm text-gray-600">Dans 28 jours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
