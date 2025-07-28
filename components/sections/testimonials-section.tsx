import { Star, Quote, MapPin, Calendar } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    trip: "Tokyo Adventure",
    rating: 5,
    text: "This platform completely transformed how I plan trips. The AI suggestions were spot-on and saved me hours of research. My Tokyo itinerary was absolutely perfect!",
    avatar: "/placeholder.svg?height=80&width=80&text=SJ",
    savings: "$400 saved",
    duration: "7 days",
  },
  {
    name: "Marco Rodriguez",
    location: "Barcelona, Spain",
    trip: "Southeast Asia Tour",
    rating: 5,
    text: "As a frequent traveler, I was skeptical about AI planning. But the personalized recommendations and budget optimization exceeded all my expectations. Incredible value!",
    avatar: "/placeholder.svg?height=80&width=80&text=MR",
    savings: "$600 saved",
    duration: "14 days",
  },
  {
    name: "Emily Chen",
    location: "Singapore",
    trip: "European Discovery",
    rating: 5,
    text: "The free activity suggestions were amazing! I discovered hidden gems in Paris that I never would have found on my own. The AI really understands what travelers want.",
    avatar: "/placeholder.svg?height=80&width=80&text=EC",
    savings: "$350 saved",
    duration: "10 days",
  },
  {
    name: "David Thompson",
    location: "London, UK",
    trip: "California Road Trip",
    rating: 5,
    text: "Planning a family trip for 5 people seemed overwhelming, but the AI handled everything perfectly. The kids loved every activity, and we stayed within budget!",
    avatar: "/placeholder.svg?height=80&width=80&text=DT",
    savings: "$800 saved",
    duration: "12 days",
  },
  {
    name: "Lisa Park",
    location: "Seoul, South Korea",
    trip: "Australian Adventure",
    rating: 5,
    text: "The level of personalization is incredible. Every recommendation matched my interests perfectly. I felt like I had a local guide in every city I visited.",
    avatar: "/placeholder.svg?height=80&width=80&text=LP",
    savings: "$500 saved",
    duration: "16 days",
  },
  {
    name: "Ahmed Hassan",
    location: "Dubai, UAE",
    trip: "South American Explorer",
    rating: 5,
    text: "The budget optimization feature is a game-changer. I experienced luxury travel at mid-range prices thanks to the smart recommendations and free activity suggestions.",
    avatar: "/placeholder.svg?height=80&width=80&text=AH",
    savings: "$700 saved",
    duration: "18 days",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-coral-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-coral-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 mr-2" />
            Traveler Stories
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            What Our
            <span className="block bg-gradient-to-r from-blue-600 to-coral-500 bg-clip-text text-transparent">
              Travelers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied travelers who have discovered the joy of stress-free trip planning with our
            AI-powered platform. Real stories from real adventures.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
            >
              {/* Background Quote */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-coral-100 group-hover:text-coral-200 transition-colors" />

              {/* Header */}
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 border-4 border-blue-100 group-hover:border-coral-200 transition-colors"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <div className="flex items-center text-gray-600 text-sm mb-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    {testimonial.location}
                  </div>
                  <div className="text-coral-600 font-semibold text-sm">{testimonial.trip}</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-600 text-sm font-semibold">{testimonial.rating}.0</span>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed italic mb-6 group-hover:text-gray-800 transition-colors">
                "{testimonial.text}"
              </p>

              {/* Trip Details */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center text-green-600 font-semibold text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  {testimonial.savings}
                </div>
                <div className="flex items-center text-blue-600 text-sm">
                  <Calendar className="w-3 h-3 mr-1" />
                  {testimonial.duration}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-coral-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-blue-600 to-coral-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Trusted by Travelers Worldwide</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Our AI-powered platform has earned the trust of adventurers across the globe
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9★</div>
              <div className="text-blue-100 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">500K+</div>
              <div className="text-blue-100 text-sm">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">180+</div>
              <div className="text-blue-100 text-sm">Countries Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">$50M+</div>
              <div className="text-blue-100 text-sm">Money Saved</div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Featured in leading travel publications</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-200 px-6 py-3 rounded-lg font-semibold text-gray-700">Travel + Leisure</div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg font-semibold text-gray-700">Condé Nast</div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg font-semibold text-gray-700">Lonely Planet</div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg font-semibold text-gray-700">Forbes Travel</div>
          </div>
        </div>
      </div>
    </section>
  )
}
