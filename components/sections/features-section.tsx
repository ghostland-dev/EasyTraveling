import { Brain, DollarSign, Clock, Globe, Shield, Heart, Zap, Users, MapPin, Sparkles } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Advanced AI Planning",
    description:
      "Our GPT-4 powered AI analyzes millions of travel data points to create perfectly personalized itineraries.",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: DollarSign,
    title: "Smart Budget Optimization",
    description:
      "Maximize your travel budget with intelligent recommendations for free activities and cost-effective experiences.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Clock,
    title: "Instant Generation",
    description: "Get a complete, detailed itinerary in under 60 seconds. No more hours of research and planning.",
    gradient: "from-coral-500 to-orange-500",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Plan trips to over 180 countries with local insights, cultural tips, and hidden gems.",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Your travel data is encrypted and secure. We never share your personal information with third parties.",
    gradient: "from-gray-600 to-gray-800",
  },
  {
    icon: Heart,
    title: "Personalized Experience",
    description: "Every itinerary is tailored to your preferences, interests, budget, and travel style.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Get live updates on weather, events, and local conditions that might affect your trip.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Group Planning",
    description: "Coordinate with friends and family. Share itineraries and collaborate on trip planning.",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: MapPin,
    title: "Offline Access",
    description: "Download your itinerary for offline access. Never lose your plans, even without internet.",
    gradient: "from-teal-500 to-green-600",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Why Choose Our
            <span className="block bg-gradient-to-r from-blue-600 to-coral-500 bg-clip-text text-transparent">
              AI Platform?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge artificial intelligence with deep travel expertise to deliver the most personalized
            and efficient trip planning experience available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-4 w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-coral-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-coral-500 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience the Future of Travel Planning?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Join over 500,000 travelers who have discovered the magic of AI-powered trip planning.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
