import { Code, Users, Zap, TrendingUp } from 'lucide-react'

const pillars = [
  {
    icon: Code,
    title: 'Expert Technical Training',
    description: 'Learn from industry professionals. Master the latest technologies and frameworks through hands-on projects and real-world scenarios.'
  },
  {
    icon: Users,
    title: 'Dedicated Mentorship',
    description: 'Get paired with experienced mentors who guide your learning journey. Regular 1-on-1 sessions and career advice included.'
  },
  {
    icon: Zap,
    title: 'Industry Simulation',
    description: 'Work on projects that mirror real company environments. Gain experience solving actual business problems and collaborating with teams.'
  },
  {
    icon: TrendingUp,
    title: 'Career Placement Focus',
    description: 'Build skills and networks that lead to opportunities. Our network and placement support help you launch your tech career.'
  }
]

export function HomePillars() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Why Choose <span className="text-gradient-brand">GEOFINDA Tech Hub</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our four pillars approach ensures you gain practical skills, guidance, and experience for career success.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div
                key={index}
                className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 animate-float-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 bg-gradient-brand rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
