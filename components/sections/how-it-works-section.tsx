import { ArrowRight, MapPin, Settings, Sparkles, Download, Clock } from "lucide-react"

const steps = [
  {
    icon: MapPin,
    title: "Tell Us Your Dreams",
    description: "Share your destination, budget, travel dates, and preferences through our intuitive multi-step form.",
    color: "from-blue-500 to-blue-600",
    details: ["Destination selection", "Date planning", "Budget setting", "Group preferences"],
  },
  {
    icon: Settings,
    title: "AI Works Its Magic",
    description:
      "Our advanced Google Gemini AI analyzes your preferences and creates a personalized itinerary in seconds.",
    color: "from-coral-500 to-orange-500",
    details: ["AI analysis", "Preference matching", "Budget optimization", "Local insights"],
  },
  {
    icon: Sparkles,
    title: "Review & Customize",
    description: "Fine-tune your itinerary, add personal touches, and make it perfectly yours with our editing tools.",
    color: "from-purple-500 to-pink-500",
    details: ["Activity customization", "Schedule adjustments", "Budget tweaks", "Personal notes"],
  },
  {
    icon: Download,
    title: "Travel with Confidence",
    description: "Download your itinerary, share with friends, and embark on your perfectly planned adventure.",
    color: "from-green-500 to-emerald-500",
    details: ["Download options", "Share features", "Offline access", "Real-time updates"],
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-coral-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Clock className="w-4 h-4 mr-2" />
            Simple Process
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            How It
            <span className="block bg-gradient-to-r from-blue-600 to-coral-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From dream to reality in just four simple steps. Our streamlined process makes trip planning effortless,
            enjoyable, and incredibly efficient.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-coral-200 via-purple-200 to-green-200 transform -translate-y-1/2 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative z-10 border border-gray-100">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className={`bg-gradient-to-br ${step.color} rounded-2xl p-4 w-16 h-16 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                      {step.description}
                    </p>

                    {/* Feature Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center justify-center text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-coral-400 rounded-full mr-2"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-3xl`}
                  />
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="bg-white rounded-full p-3 shadow-lg border border-gray-200">
                      <ArrowRight className="w-5 h-5 text-coral-500" />
                    </div>
                  </div>
                )}

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-6">
                    <div className="bg-white rounded-full p-3 shadow-lg border border-gray-200">
                      <ArrowRight className="w-5 h-5 text-coral-500 transform rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-coral-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Travelers Choose Our Process</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Our streamlined approach has helped thousands of travelers create unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">60s</div>
              <div className="text-blue-100 text-sm">Average Planning Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100 text-sm">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">500K+</div>
              <div className="text-blue-100 text-sm">Trips Planned</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100 text-sm">AI Availability</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of travelers who have discovered the magic of AI-powered trip planning
            </p>
            <button className="bg-gradient-to-r from-coral-500 to-orange-500 hover:from-coral-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Planning Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
