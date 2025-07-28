"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, MapPin, Calendar } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      location: "Paris, France",
      avatar: "/placeholder.svg?height=60&width=60&text=MD",
      rating: 5,
      trip: "Tokyo, 7 jours",
      date: "Mars 2024",
      text: "Incroyable ! L'IA a créé un itinéraire parfait pour notre lune de miel à Tokyo. Chaque jour était une découverte, et le budget était respecté à l'euro près. Nous avons découvert des lieux authentiques que nous n'aurions jamais trouvés seuls.",
      highlight: "Lune de miel parfaite",
    },
    {
      id: 2,
      name: "Thomas Martin",
      location: "Lyon, France",
      avatar: "/placeholder.svg?height=60&width=60&text=TM",
      rating: 5,
      trip: "Bali, 10 jours",
      date: "Février 2024",
      text: "En tant que voyageur solo, j'étais un peu inquiet pour mon premier voyage en Asie. L'itinéraire généré était parfait : mélange de culture, nature et détente. Les recommandations de restaurants étaient exceptionnelles !",
      highlight: "Voyage solo réussi",
    },
    {
      id: 3,
      name: "Sophie & Pierre",
      location: "Marseille, France",
      avatar: "/placeholder.svg?height=60&width=60&text=SP",
      rating: 5,
      trip: "Costa Rica, 12 jours",
      date: "Janvier 2024",
      text: "Avec nos deux enfants, organiser un voyage au Costa Rica semblait compliqué. L'IA a pensé à tout : activités familiales, restaurants kid-friendly, et même les temps de trajet optimisés. Vacances inoubliables !",
      highlight: "Parfait en famille",
    },
    {
      id: 4,
      name: "Alexandre Chen",
      location: "Bordeaux, France",
      avatar: "/placeholder.svg?height=60&width=60&text=AC",
      rating: 5,
      trip: "New York, 6 jours",
      date: "Décembre 2023",
      text: "Business trip transformé en découverte culturelle ! L'IA a su adapter l'itinéraire à mes contraintes professionnelles tout en maximisant les expériences. Les spectacles Broadway recommandés étaient parfaits.",
      highlight: "Business & plaisir",
    },
    {
      id: 5,
      name: "Camille Rousseau",
      location: "Toulouse, France",
      avatar: "/placeholder.svg?height=60&width=60&text=CR",
      rating: 5,
      trip: "Barcelone, 4 jours",
      date: "Novembre 2023",
      text: "Week-end entre copines réussi ! L'itinéraire était parfaitement équilibré entre culture (Gaudí), gastronomie (tapas tours) et shopping. Même la météo était prévue dans les recommandations !",
      highlight: "Entre copines",
    },
    {
      id: 6,
      name: "Jean-Luc Moreau",
      location: "Nantes, France",
      avatar: "/placeholder.svg?height=60&width=60&text=JM",
      rating: 5,
      trip: "Islande, 8 jours",
      date: "Octobre 2023",
      text: "À 65 ans, je pensais que les voyages d'aventure étaient derrière moi. L'IA a créé un itinéraire adapté à mon rythme avec des merveilles naturelles à couper le souffle. L'Islande était magique !",
      highlight: "Aventure senior",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Voyageurs Satisfaits" },
    { number: "4.9/5", label: "Note Moyenne" },
    { number: "98%", label: "Recommandent" },
    { number: "150+", label: "Destinations" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 px-4 py-2 mb-6">
            <Star className="w-4 h-4 mr-2" />
            Témoignages Clients
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ce Que Disent Nos
            <span className="block bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Voyageurs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les expériences authentiques de nos utilisateurs qui ont transformé leurs rêves de voyage en
            réalité
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                {/* Trip Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {testimonial.trip}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {testimonial.date}
                  </div>
                </div>

                {/* Highlight Badge */}
                <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
                  {testimonial.highlight}
                </Badge>

                {/* User Info */}
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-yellow-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Rejoignez Notre Communauté de Voyageurs
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Plus de 10,000 personnes ont déjà créé leur voyage de rêve. À votre tour de vivre une expérience
              inoubliable !
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-semibold">4.9/5 étoiles</span>
              <span>•</span>
              <span>Basé sur 2,847 avis vérifiés</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
