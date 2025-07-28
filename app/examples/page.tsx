"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Calendar, Users, Euro, Search, Filter, Star, Clock, Plane } from "lucide-react"

const EXAMPLE_ITINERARIES = [
  {
    id: "tokyo-7-days",
    title: "Tokyo Moderne & Traditionnel",
    destination: "Tokyo, Japon",
    country: "Japon",
    continent: "Asie",
    duration: "7 jours",
    budget: "1,800€",
    budgetLevel: "mid-range",
    groupSize: "2 personnes",
    image: "/tokyo-skyline-night.png",
    description: "Découvrez le parfait équilibre entre tradition et modernité dans la capitale japonaise",
    highlights: ["Temples historiques", "Quartiers futuristes", "Cuisine authentique", "Culture pop"],
    rating: 4.8,
    reviews: 127,
    tags: ["Culture", "Gastronomie", "Technologie", "Temples"],
    bestTime: "Mars-Mai, Sept-Nov",
    difficulty: "Facile",
  },
  {
    id: "paris-5-days",
    title: "Paris Romantique",
    destination: "Paris, France",
    country: "France",
    continent: "Europe",
    duration: "5 jours",
    budget: "1,200€",
    budgetLevel: "mid-range",
    groupSize: "2 personnes",
    image: "/paris-eiffel-sunset-romance.png",
    description: "Un séjour romantique dans la Ville Lumière avec les incontournables et des expériences intimes",
    highlights: [
      "Tour Eiffel au coucher du soleil",
      "Croisière sur Seine",
      "Montmartre bohème",
      "Gastronomie française",
    ],
    rating: 4.9,
    reviews: 203,
    tags: ["Romance", "Art", "Gastronomie", "Histoire"],
    bestTime: "Avr-Juin, Sept-Oct",
    difficulty: "Facile",
  },
  {
    id: "bali-10-days",
    title: "Bali Authentique",
    destination: "Bali, Indonésie",
    country: "Indonésie",
    continent: "Asie",
    duration: "10 jours",
    budget: "1,500€",
    budgetLevel: "budget",
    groupSize: "2 personnes",
    image: "/bali-rice-terraces.png",
    description: "Découverte complète de Bali : temples, rizières, plages et culture balinaise",
    highlights: ["Rizières de Jatiluwih", "Temples sacrés", "Plages paradisiaques", "Cuisine indonésienne"],
    rating: 4.7,
    reviews: 89,
    tags: ["Nature", "Spiritualité", "Plages", "Culture"],
    bestTime: "Mai-Sept",
    difficulty: "Modéré",
  },
  {
    id: "new-york-6-days",
    title: "New York Intense",
    destination: "New York, États-Unis",
    country: "États-Unis",
    continent: "Amérique du Nord",
    duration: "6 jours",
    budget: "2,200€",
    budgetLevel: "luxury",
    groupSize: "2 personnes",
    image: "/nyc-skyline-central-park.png",
    description: "L'expérience urbaine ultime dans la ville qui ne dort jamais",
    highlights: ["Skyline iconique", "Broadway shows", "Central Park", "Musées de classe mondiale"],
    rating: 4.6,
    reviews: 156,
    tags: ["Urbain", "Culture", "Shopping", "Spectacles"],
    bestTime: "Avr-Juin, Sept-Nov",
    difficulty: "Modéré",
  },
  {
    id: "barcelona-4-days",
    title: "Barcelone Artistique",
    destination: "Barcelone, Espagne",
    country: "Espagne",
    continent: "Europe",
    duration: "4 jours",
    budget: "800€",
    budgetLevel: "budget",
    groupSize: "2 personnes",
    image: "/barcelona-sagrada-familia.png",
    description: "Art, architecture et tapas dans la capitale catalane",
    highlights: ["Sagrada Familia", "Park Güell", "Quartier Gothique", "Plages urbaines"],
    rating: 4.8,
    reviews: 94,
    tags: ["Art", "Architecture", "Plages", "Gastronomie"],
    bestTime: "Mai-Sept",
    difficulty: "Facile",
  },
  {
    id: "costa-rica-12-days",
    title: "Costa Rica Aventure",
    destination: "Costa Rica",
    country: "Costa Rica",
    continent: "Amérique Centrale",
    duration: "12 jours",
    budget: "2,800€",
    budgetLevel: "mid-range",
    groupSize: "4 personnes",
    image: "/costa-rica-rainforest-adventure.png",
    description: "Aventure écologique entre volcans, forêts tropicales et plages des deux océans",
    highlights: ["Parc Manuel Antonio", "Volcan Arenal", "Forêt nuageuse", "Faune exceptionnelle"],
    rating: 4.9,
    reviews: 67,
    tags: ["Aventure", "Nature", "Écotourisme", "Faune"],
    bestTime: "Déc-Avr",
    difficulty: "Difficile",
  },
]

export default function ExamplesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedContinent, setSelectedContinent] = useState("all")
  const [selectedBudget, setSelectedBudget] = useState("all")
  const [selectedDuration, setSelectedDuration] = useState("all")

  const continents = [
    "all",
    "Europe",
    "Asie",
    "Amérique du Nord",
    "Amérique du Sud",
    "Amérique Centrale",
    "Afrique",
    "Océanie",
  ]
  const budgetLevels = ["all", "budget", "mid-range", "luxury"]
  const durations = ["all", "1-5 jours", "6-10 jours", "11+ jours"]

  const filteredItineraries = EXAMPLE_ITINERARIES.filter((itinerary) => {
    const matchesSearch =
      itinerary.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      itinerary.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      itinerary.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesContinent = selectedContinent === "all" || itinerary.continent === selectedContinent
    const matchesBudget = selectedBudget === "all" || itinerary.budgetLevel === selectedBudget

    let matchesDuration = true
    if (selectedDuration !== "all") {
      const days = Number.parseInt(itinerary.duration)
      if (selectedDuration === "1-5 jours") matchesDuration = days <= 5
      else if (selectedDuration === "6-10 jours") matchesDuration = days >= 6 && days <= 10
      else if (selectedDuration === "11+ jours") matchesDuration = days >= 11
    }

    return matchesSearch && matchesContinent && matchesBudget && matchesDuration
  })

  const getBudgetColor = (level: string) => {
    switch (level) {
      case "budget":
        return "bg-green-100 text-green-800"
      case "mid-range":
        return "bg-blue-100 text-blue-800"
      case "luxury":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getBudgetLabel = (level: string) => {
    switch (level) {
      case "budget":
        return "Budget"
      case "mid-range":
        return "Moyen"
      case "luxury":
        return "Luxe"
      default:
        return level
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile":
        return "bg-green-100 text-green-800"
      case "Modéré":
        return "bg-yellow-100 text-yellow-800"
      case "Difficile":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Exemples d'Itinéraires
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos itinéraires soigneusement conçus pour vous inspirer dans la planification de votre prochain
              voyage
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filtres de Recherche
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Recherche</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Destination, ville, tag..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Continent</label>
                <Select value={selectedContinent} onValueChange={setSelectedContinent}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {continents.map((continent) => (
                      <SelectItem key={continent} value={continent}>
                        {continent === "all" ? "Tous les continents" : continent}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Budget</label>
                <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les budgets</SelectItem>
                    <SelectItem value="budget">Budget (&lt; 100€/jour)</SelectItem>
                    <SelectItem value="mid-range">Moyen (100-200€/jour)</SelectItem>
                    <SelectItem value="luxury">Luxe (&gt; 200€/jour)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Durée</label>
                <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {durations.map((duration) => (
                      <SelectItem key={duration} value={duration}>
                        {duration === "all" ? "Toutes les durées" : duration}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredItineraries.length} itinéraire{filteredItineraries.length > 1 ? "s" : ""} trouvé
            {filteredItineraries.length > 1 ? "s" : ""}
          </p>
        </div>

        {/* Itineraries Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItineraries.map((itinerary) => (
            <Card key={itinerary.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600">
                <img
                  src={itinerary.image || "/placeholder.svg"}
                  alt={itinerary.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-gray-900">
                    <Star className="h-3 w-3 mr-1 text-yellow-500" />
                    {itinerary.rating}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge className={getBudgetColor(itinerary.budgetLevel)}>
                    {getBudgetLabel(itinerary.budgetLevel)}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{itinerary.title}</CardTitle>
                    <CardDescription className="text-sm mb-3">{itinerary.description}</CardDescription>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {itinerary.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {itinerary.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{itinerary.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="truncate">{itinerary.destination}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>{itinerary.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span>{itinerary.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Euro className="h-4 w-4 text-gray-400" />
                      <span className="font-semibold text-green-600">{itinerary.budget}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>Meilleure période: {itinerary.bestTime}</span>
                    </div>
                    <Badge variant="outline" className={`text-xs ${getDifficultyColor(itinerary.difficulty)}`}>
                      {itinerary.difficulty}
                    </Badge>
                  </div>

                  <div className="pt-2">
                    <h4 className="font-semibold text-sm mb-2">Points forts:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {itinerary.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-xs text-gray-500">{itinerary.reviews} avis</div>
                    <Link href={`/examples/${itinerary.id}`}>
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        Voir les détails
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItineraries.length === 0 && (
          <div className="text-center py-12">
            <Plane className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucun itinéraire trouvé</h3>
            <p className="text-gray-600 mb-4">
              Essayez de modifier vos critères de recherche ou explorez tous nos exemples.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedContinent("all")
                setSelectedBudget("all")
                setSelectedDuration("all")
              }}
              variant="outline"
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-none">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prêt à créer votre propre itinéraire ?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Utilisez notre planificateur intelligent pour créer un voyage personnalisé selon vos préférences, votre
                budget et vos centres d\'intérêt.
              </p>
              <Link href="/plan">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Planifier Mon Voyage
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
