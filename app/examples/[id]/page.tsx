"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  Euro,
  Clock,
  Star,
  Utensils,
  Car,
  AlertCircle,
  Phone,
  Building2,
} from "lucide-react"

const EXAMPLE_ITINERARIES = {
  "tokyo-7-days": {
    id: "tokyo-7-days",
    title: "Tokyo Moderne & Traditionnel",
    destination: "Tokyo, Japon",
    duration: "7 jours",
    budget: "1,800€",
    groupSize: "2 personnes",
    image: "/tokyo-skyline-night.png",
    description: "Découvrez le parfait équilibre entre tradition et modernité dans la capitale japonaise",
    highlights: ["Temples historiques", "Quartiers futuristes", "Cuisine authentique", "Culture pop"],
    dailySchedule: [
      {
        day: 1,
        date: "15 mars 2024",
        theme: "Arrivée et première découverte de Tokyo",
        activities: {
          morning: {
            time: "9h00 - 12h00",
            title: "Arrivée et installation",
            description: "Transfert depuis l'aéroport de Narita, installation à l'hôtel dans le quartier de Shibuya",
            cost: "45€",
            rating: "4.2",
            category: "Transport",
            duration: "3 heures",
            difficulty: "Facile",
            bookingRequired: false,
          },
          afternoon: {
            time: "13h00 - 17h00",
            title: "Exploration de Shibuya",
            description: "Découverte du célèbre carrefour de Shibuya, shopping dans le quartier et visite du Hachiko",
            cost: "25€",
            rating: "4.7",
            category: "Culture",
            duration: "4 heures",
            difficulty: "Facile",
            bookingRequired: false,
          },
          evening: {
            time: "18h00 - 22h00",
            title: "Dîner traditionnel à Shinjuku",
            description: "Expérience culinaire dans un izakaya traditionnel avec vue sur les gratte-ciels",
            cost: "65€",
            rating: "4.8",
            category: "Restauration",
            duration: "4 heures",
            difficulty: "Facile",
            bookingRequired: true,
          },
        },
        meals: {
          breakfast: { name: "Café de l'hôtel", cost: "15€", cuisine: "Continental", rating: "4.0" },
          lunch: { name: "Ramen Ichiran", cost: "12€", cuisine: "Japonaise", rating: "4.5" },
          dinner: { name: "Izakaya Torikizoku", cost: "45€", cuisine: "Japonaise traditionnelle", rating: "4.8" },
        },
        transportation: {
          method: "JR Pass + Métro",
          estimatedCost: "15€",
          duration: "45 minutes total",
        },
        estimatedCost: "180€",
      },
      {
        day: 2,
        date: "16 mars 2024",
        theme: "Temples et jardins traditionnels",
        activities: {
          morning: {
            time: "8h00 - 12h00",
            title: "Temple Senso-ji à Asakusa",
            description: "Visite du plus ancien temple de Tokyo, promenade dans Nakamise-dori",
            cost: "Gratuit",
            rating: "4.9",
            category: "Culture",
            duration: "4 heures",
            difficulty: "Facile",
            bookingRequired: false,
          },
          afternoon: {
            time: "13h00 - 17h00",
            title: "Jardins du Palais Impérial",
            description:
              "Promenade dans les jardins Est du Palais Impérial, découverte de l'architecture traditionnelle",
            cost: "Gratuit",
            rating: "4.6",
            category: "Nature",
            duration: "4 heures",
            difficulty: "Facile",
            bookingRequired: false,
          },
          evening: {
            time: "18h00 - 22h00",
            title: "Quartier de Ginza",
            description: "Shopping de luxe et dîner dans le quartier le plus chic de Tokyo",
            cost: "85€",
            rating: "4.7",
            category: "Shopping",
            duration: "4 heures",
            difficulty: "Facile",
            bookingRequired: false,
          },
        },
        meals: {
          breakfast: { name: "Café Doutor", cost: "8€", cuisine: "Café", rating: "4.2" },
          lunch: { name: "Tempura Daikokuya", cost: "35€", cuisine: "Japonaise", rating: "4.7" },
          dinner: { name: "Sushi Kyubei", cost: "120€", cuisine: "Sushi", rating: "4.9" },
        },
        transportation: {
          method: "Métro Tokyo",
          estimatedCost: "12€",
          duration: "60 minutes total",
        },
        estimatedCost: "260€",
      },
      {
        day: 3,
        date: "17 mars 2024",
        theme: "Culture pop et technologie",
        activities: {
          morning: {
            time: "9h00 - 12h00",
            title: "Quartier d'Akihabara",
            description: "Exploration du quartier électronique, boutiques manga et anime",
            cost: "30€",
            rating: "4.5",
            category: "Culture",
            duration: "3 heures",
            difficulty: "Facile",
            bookingRequired: false,
          },
          afternoon: {
            time: "13h00 - 17h00",
            title: "Harajuku et Takeshita Street",
            description: "Découverte de la mode kawaii et de la culture jeune japonaise",
            cost: "40€",
            rating: "4.4",
            category: "Culture",
            duration: "4 heures",
            difficulty: "Facile",
            bookingRequired: false,
          },
          evening: {
            time: "18h00 - 22h00",
            title: "Robot Restaurant",
            description: "Spectacle futuriste avec robots, lasers et performances",
            cost: "75€",
            rating: "4.3",
            category: "Divertissement",
            duration: "4 heures",
            difficulty: "Facile",
            bookingRequired: true,
          },
        },
        meals: {
          breakfast: { name: "Hôtel", cost: "15€", cuisine: "Continental", rating: "4.0" },
          lunch: { name: "Maid Café", cost: "25€", cuisine: "Thématique", rating: "4.1" },
          dinner: { name: "Yakiniku M", cost: "55€", cuisine: "Barbecue japonais", rating: "4.6" },
        },
        transportation: {
          method: "JR Yamanote Line",
          estimatedCost: "10€",
          duration: "40 minutes total",
        },
        estimatedCost: "250€",
      },
    ],
    budgetBreakdown: {
      accommodation: "560€",
      food: "420€",
      activities: "280€",
      transportation: "140€",
      total: "1,400€",
    },
    recommendations: {
      restaurants: [
        "Sukiyabashi Jiro (sushi légendaire)",
        "Ichiran Ramen (ramen authentique)",
        "Gonpachi (restaurant Kill Bill)",
        "Nabezo (shabu-shabu à volonté)",
      ],
      attractions: [
        "Tour de Tokyo Skytree",
        "Marché aux poissons de Tsukiji",
        "Quartier de Roppongi",
        "Parc d'Ueno et ses musées",
      ],
      tips: [
        "Achetez un JR Pass pour économiser sur les transports",
        "Apprenez quelques mots de japonais de base",
        "Respectez l'étiquette dans les transports",
        "Gardez toujours de l'argent liquide sur vous",
      ],
      shopping: [
        "Don Quijote (magasin 24h/24)",
        "Uniqlo (mode japonaise)",
        "Tokyu Hands (gadgets créatifs)",
        "Ginza Six (luxe et design)",
      ],
    },
    weatherInfo: {
      expectedConditions: "Temps frais et sec, typique du printemps",
      temperature: "8-15°C",
      rainfall: "Faible probabilité de pluie",
      recommendations: [
        "Emportez des couches, les températures varient",
        "Chaussures confortables pour beaucoup de marche",
        "Parapluie compact recommandé",
      ],
    },
    localTips: {
      currency: "Yen japonais (JPY), 1€ ≈ 160¥",
      language: "Japonais, anglais limité mais Google Translate aide",
      customs: "Inclinez-vous pour saluer, retirez vos chaussures",
      safety: "Tokyo est très sûr, même la nuit",
      connectivity: "WiFi gratuit dans la plupart des lieux publics",
      tipping: "Le pourboire n'est pas pratiqué au Japon",
    },
    emergencyInfo: {
      emergencyNumbers: {
        police: "110",
        medical: "119",
        fire: "119",
        tourist: "050-3816-2787",
      },
      hospitals: ["Hôpital International St. Luke's", "Centre Médical International de Tokyo"],
      embassies: ["Ambassade de France: 4-11-44 Minami-Azabu, Minato-ku", "Services consulaires: +81-1-5798-6000"],
    },
  },
  "paris-5-days": {
    id: "paris-5-days",
    title: "Paris Romantique",
    destination: "Paris, France",
    duration: "5 jours",
    budget: "1,200€",
    groupSize: "2 personnes",
    image: "/paris-eiffel-sunset-romance.png",
    description: "Un séjour romantique dans la Ville Lumière avec les incontournables et des expériences intimes",
    highlights: [
      "Tour Eiffel au coucher du soleil",
      "Croisière sur Seine",
      "Montmartre bohème",
      "Gastronomie française",
    ],
    dailySchedule: [
      {
        day: 1,
        date: "20 avril 2024",
        theme: "Arrivée et charme parisien",
        activities: {
          morning: {
            time: "10h00 - 12h00",
            title: "Arrivée et Île de la Cité",
            description: "Installation puis visite de Notre-Dame et Sainte-Chapelle",
            cost: "15€",
            rating: "4.8",
            category: "Culture",
            duration: "2 heures",
            difficulty: "Facile",
            bookingRequired: true,
          },
          afternoon: {
            time: "14h00 - 17h00",
            title: "Quartier Latin",
            description: "Promenade dans les ruelles historiques, Panthéon et Sorbonne",
            cost: "12€",
            rating: "4.6",
            category: "Culture",
            duration: "3 heures",
            difficulty: "Facile",
            bookingRequired: false,
          },
          evening: {
            time: "19h00 - 22h00",
            title: "Dîner romantique",
            description: "Restaurant traditionnel avec vue sur la Seine",
            cost: "85€",
            rating: "4.7",
            category: "Restauration",
            duration: "3 heures",
            difficulty: "Facile",
            bookingRequired: true,
          },
        },
        meals: {
          breakfast: { name: "Café de Flore", cost: "18€", cuisine: "Française", rating: "4.5" },
          lunch: { name: "L'As du Fallafel", cost: "12€", cuisine: "Moyen-orientale", rating: "4.4" },
          dinner: { name: "Le Procope", cost: "75€", cuisine: "Française traditionnelle", rating: "4.7" },
        },
        transportation: {
          method: "Métro + Marche",
          estimatedCost: "8€",
          duration: "30 minutes total",
        },
        estimatedCost: "225€",
      },
    ],
    budgetBreakdown: {
      accommodation: "400€",
      food: "350€",
      activities: "200€",
      transportation: "80€",
      total: "1,030€",
    },
    recommendations: {
      restaurants: [
        "Le Jules Verne (Tour Eiffel)",
        "L'Ami Jean (bistrot authentique)",
        "Breizh Café (crêperie moderne)",
        "Du Pain et des Idées (boulangerie)",
      ],
      attractions: ["Musée du Louvre", "Arc de Triomphe", "Sacré-Cœur", "Musée d'Orsay"],
      tips: [
        "Réservez les restaurants à l'avance",
        "Évitez les heures de pointe dans le métro",
        "Apprenez quelques mots de français",
        "Gardez vos affaires en sécurité dans les zones touristiques",
      ],
      shopping: [
        "Champs-Élysées",
        "Le Marais (boutiques vintage)",
        "Galeries Lafayette",
        "Marché aux Puces (antiquités)",
      ],
    },
    weatherInfo: {
      expectedConditions: "Temps doux de printemps",
      temperature: "12-18°C",
      rainfall: "Quelques averses possibles",
      recommendations: [
        "Emportez un imperméable léger",
        "Chaussures confortables pour marcher",
        "Veste pour les soirées fraîches",
      ],
    },
    localTips: {
      currency: "Euro (EUR)",
      language: "Français, anglais parlé dans les zones touristiques",
      customs: 'Saluez avec "Bonjour/Bonsoir", soyez poli',
      safety: "Attention aux pickpockets dans le métro et zones touristiques",
      connectivity: "WiFi gratuit dans de nombreux cafés et lieux publics",
      tipping: "10% dans les restaurants si satisfait du service",
    },
    emergencyInfo: {
      emergencyNumbers: {
        police: "17",
        medical: "15",
        fire: "18",
        tourist: "01 42 96 70 00",
      },
      hospitals: ["Hôpital Américain de Paris", "Hôpital Européen Georges-Pompidou"],
      embassies: ["Services consulaires français disponibles", "Ambassades étrangères dans le 7e et 8e arrondissement"],
    },
  },
  "bali-10-days": {
    id: "bali-10-days",
    title: "Bali Authentique",
    destination: "Bali, Indonésie",
    duration: "10 jours",
    budget: "1,500€",
    groupSize: "2 personnes",
    image: "/bali-rice-terraces.png",
    description: "Découverte complète de Bali : temples, rizières, plages et culture balinaise",
    highlights: ["Rizières de Jatiluwih", "Temples sacrés", "Plages paradisiaques", "Cuisine indonésienne"],
    dailySchedule: [
      {
        day: 1,
        date: "1 juin 2024",
        theme: "Arrivée à Denpasar et Ubud",
        activities: {
          morning: {
            time: "9h00 - 12h00",
            title: "Transfert vers Ubud",
            description: "Voyage depuis l'aéroport vers le cœur culturel de Bali",
            cost: "25€",
            rating: "4.3",
            category: "Transport",
            duration: "3 heures",
            difficulty: "Facile",
            bookingRequired: true,
          },
          afternoon: {
            time: "14h00 - 17h00",
            title: "Forêt des Singes Sacrés",
            description: "Visite de la réserve naturelle et du temple Pura Dalem",
            cost: "8€",
            rating: "4.2",
            category: "Nature",
            duration: "3 heures",
            difficulty: "Facile",
            bookingRequired: false,
          },
          evening: {
            time: "19h00 - 22h00",
            title: "Marché de nuit d'Ubud",
            description: "Découverte de la street food et artisanat local",
            cost: "20€",
            rating: "4.5",
            category: "Culture",
            duration: "3 heures",
            difficulty: "Facile",
            bookingRequired: false,
          },
        },
        meals: {
          breakfast: { name: "Café local", cost: "5€", cuisine: "Indonésienne", rating: "4.2" },
          lunch: { name: "Warung traditionnel", cost: "8€", cuisine: "Balinaise", rating: "4.4" },
          dinner: { name: "Marché de nuit", cost: "12€", cuisine: "Street food", rating: "4.3" },
        },
        transportation: {
          method: "Scooter + Taxi",
          estimatedCost: "15€",
          duration: "45 minutes total",
        },
        estimatedCost: "93€",
      },
    ],
    budgetBreakdown: {
      accommodation: "400€",
      food: "300€",
      activities: "350€",
      transportation: "200€",
      total: "1,250€",
    },
    recommendations: {
      restaurants: [
        "Locavore (cuisine moderne)",
        "Warung Babi Guling Ibu Oka",
        "Bebek Bengil (canard croustillant)",
        "Café Lotus (vue sur temple)",
      ],
      attractions: [
        "Temple Tanah Lot",
        "Volcan Batur au lever du soleil",
        "Cascades de Sekumpul",
        "Plages de Seminyak",
      ],
      tips: [
        "Louez un scooter pour plus de liberté",
        "Respectez les coutumes dans les temples",
        "Négociez les prix dans les marchés",
        "Attention aux singes, ne montrez pas de nourriture",
      ],
      shopping: [
        "Marché d'Ubud (artisanat)",
        "Seminyak (boutiques design)",
        "Sukawati (souvenirs)",
        "Kuta (surf et plage)",
      ],
    },
    weatherInfo: {
      expectedConditions: "Climat tropical, saison sèche",
      temperature: "24-30°C",
      rainfall: "Très faible en juin",
      recommendations: [
        "Crème solaire indispensable",
        "Vêtements légers et respirants",
        "Chapeau et lunettes de soleil",
      ],
    },
    localTips: {
      currency: "Roupie indonésienne (IDR), 1€ ≈ 16,000 IDR",
      language: "Bahasa Indonesia, anglais courant dans le tourisme",
      customs: "Couvrez-vous dans les temples, utilisez la main droite",
      safety: "Attention aux pickpockets, eau en bouteille recommandée",
      connectivity: "WiFi disponible partout, carte SIM locale conseillée",
      tipping: "10% dans les restaurants, arrondir pour les services",
    },
    emergencyInfo: {
      emergencyNumbers: {
        police: "110",
        medical: "118",
        fire: "113",
        tourist: "+62 361 227 067",
      },
      hospitals: ["BIMC Hospital Ubud", "Sanglah General Hospital Denpasar"],
      embassies: ["Consulat de France à Denpasar", "Services consulaires: +62 361 285 485"],
    },
  },
}

export default function ExampleDetailPage() {
  const params = useParams()
  const router = useRouter()
  const itinerary = EXAMPLE_ITINERARIES[params.id as keyof typeof EXAMPLE_ITINERARIES]

  if (!itinerary) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Exemple non trouvé</h1>
          <Button onClick={() => router.push("/examples")}>Retour aux exemples</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => router.push("/examples")} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour aux exemples
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">Utiliser comme modèle</Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <img
          src={itinerary.image || "/placeholder.svg"}
          alt={itinerary.title}
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{itinerary.title}</h1>
            <p className="text-xl mb-6">{itinerary.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <MapPin className="h-4 w-4 mr-1" />
                {itinerary.destination}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Calendar className="h-4 w-4 mr-1" />
                {itinerary.duration}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Users className="h-4 w-4 mr-1" />
                {itinerary.groupSize}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Euro className="h-4 w-4 mr-1" />
                {itinerary.budget}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="itinerary" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="itinerary">Itinéraire</TabsTrigger>
            <TabsTrigger value="budget">Budget</TabsTrigger>
            <TabsTrigger value="recommendations">Conseils</TabsTrigger>
            <TabsTrigger value="practical">Infos Pratiques</TabsTrigger>
            <TabsTrigger value="emergency">Urgences</TabsTrigger>
          </TabsList>

          <TabsContent value="itinerary" className="space-y-6">
            <div className="grid gap-6">
              {itinerary.dailySchedule.map((day) => (
                <Card key={day.day} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Calendar className="h-5 w-5" />
                          Jour {day.day} - {day.date}
                        </CardTitle>
                        <CardDescription className="mt-1">{day.theme}</CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-white">
                        <Euro className="h-3 w-3 mr-1" />
                        {day.estimatedCost}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid gap-6 md:grid-cols-3">
                      {/* Morning */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-orange-600">
                          <Clock className="h-4 w-4" />
                          <span className="font-semibold">Matin</span>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">{day.activities.morning.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{day.activities.morning.description}</p>
                          <div className="flex flex-wrap gap-2 text-xs">
                            <Badge variant="outline">{day.activities.morning.time}</Badge>
                            <Badge variant="outline">{day.activities.morning.cost}</Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Star className="h-3 w-3" />
                              {day.activities.morning.rating}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Afternoon */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-blue-600">
                          <Clock className="h-4 w-4" />
                          <span className="font-semibold">Après-midi</span>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">{day.activities.afternoon.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{day.activities.afternoon.description}</p>
                          <div className="flex flex-wrap gap-2 text-xs">
                            <Badge variant="outline">{day.activities.afternoon.time}</Badge>
                            <Badge variant="outline">{day.activities.afternoon.cost}</Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Star className="h-3 w-3" />
                              {day.activities.afternoon.rating}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Evening */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-purple-600">
                          <Clock className="h-4 w-4" />
                          <span className="font-semibold">Soir</span>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">{day.activities.evening.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{day.activities.evening.description}</p>
                          <div className="flex flex-wrap gap-2 text-xs">
                            <Badge variant="outline">{day.activities.evening.time}</Badge>
                            <Badge variant="outline">{day.activities.evening.cost}</Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Star className="h-3 w-3" />
                              {day.activities.evening.rating}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Meals & Transport */}
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Utensils className="h-4 w-4" />
                          Repas
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Petit-déjeuner:</span>
                            <span>
                              {day.meals.breakfast.name} ({day.meals.breakfast.cost})
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Déjeuner:</span>
                            <span>
                              {day.meals.lunch.name} ({day.meals.lunch.cost})
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Dîner:</span>
                            <span>
                              {day.meals.dinner.name} ({day.meals.dinner.cost})
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Car className="h-4 w-4" />
                          Transport
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Moyen:</span>
                            <span>{day.transportation.method}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Coût estimé:</span>
                            <span>{day.transportation.estimatedCost}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Durée totale:</span>
                            <span>{day.transportation.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="budget">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Euro className="h-5 w-5" />
                  Répartition du Budget
                </CardTitle>
                <CardDescription>
                  Détail des coûts pour {itinerary.groupSize} pendant {itinerary.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="font-medium">Hébergement</span>
                      <span className="font-bold text-blue-600">{itinerary.budgetBreakdown.accommodation}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <span className="font-medium">Restauration</span>
                      <span className="font-bold text-green-600">{itinerary.budgetBreakdown.food}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                      <span className="font-medium">Activités</span>
                      <span className="font-bold text-purple-600">{itinerary.budgetBreakdown.activities}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                      <span className="font-medium">Transport</span>
                      <span className="font-bold text-orange-600">{itinerary.budgetBreakdown.transportation}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Total</h3>
                      <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {itinerary.budgetBreakdown.total}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">pour {itinerary.groupSize}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5" />
                    Restaurants Recommandés
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {itinerary.recommendations.restaurants.map((restaurant, index) => (
                      <li key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{restaurant}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Attractions Incontournables
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {itinerary.recommendations.attractions.map((attraction, index) => (
                      <li key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        <span>{attraction}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Conseils de Voyage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {itinerary.recommendations.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                        <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Shopping</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {itinerary.recommendations.shopping.map((shop, index) => (
                      <li key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <span className="text-lg">🛍️</span>
                        <span>{shop}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="practical">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Informations Météo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Conditions Attendues</h4>
                    <p className="text-sm text-gray-600">{itinerary.weatherInfo.expectedConditions}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                      <h5 className="font-semibold text-sm">Température</h5>
                      <p className="text-lg font-bold text-blue-600">{itinerary.weatherInfo.temperature}</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                      <h5 className="font-semibold text-sm">Précipitations</h5>
                      <p className="text-sm text-gray-600">{itinerary.weatherInfo.rainfall}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Recommandations</h4>
                    <ul className="space-y-1">
                      {itinerary.weatherInfo.recommendations.map((rec, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Conseils Locaux</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h5 className="font-semibold text-sm mb-1">Monnaie</h5>
                      <p className="text-sm text-gray-600">{itinerary.localTips.currency}</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-sm mb-1">Langue</h5>
                      <p className="text-sm text-gray-600">{itinerary.localTips.language}</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <h5 className="font-semibold text-sm mb-1">Coutumes</h5>
                      <p className="text-sm text-gray-600">{itinerary.localTips.customs}</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <h5 className="font-semibold text-sm mb-1">Sécurité</h5>
                      <p className="text-sm text-gray-600">{itinerary.localTips.safety}</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h5 className="font-semibold text-sm mb-1">Connectivité</h5>
                      <p className="text-sm text-gray-600">{itinerary.localTips.connectivity}</p>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <h5 className="font-semibold text-sm mb-1">Pourboires</h5>
                      <p className="text-sm text-gray-600">{itinerary.localTips.tipping}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="emergency">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Numéros d'Urgence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="font-medium">Police</span>
                      <span className="font-bold text-red-600">{itinerary.emergencyInfo.emergencyNumbers.police}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Urgences Médicales</span>
                      <span className="font-bold text-blue-600">
                        {itinerary.emergencyInfo.emergencyNumbers.medical}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="font-medium">Pompiers</span>
                      <span className="font-bold text-orange-600">{itinerary.emergencyInfo.emergencyNumbers.fire}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Assistance Touristique</span>
                      <span className="font-bold text-green-600">
                        {itinerary.emergencyInfo.emergencyNumbers.tourist}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    Services Médicaux & Consulaires
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Hôpitaux</h4>
                    <ul className="space-y-2">
                      {itinerary.emergencyInfo.hospitals.map((hospital, index) => (
                        <li key={index} className="p-2 bg-blue-50 rounded text-sm">
                          {hospital}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ambassades & Consulats</h4>
                    <ul className="space-y-2">
                      {itinerary.emergencyInfo.embassies.map((embassy, index) => (
                        <li key={index} className="p-2 bg-green-50 rounded text-sm">
                          {embassy}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
