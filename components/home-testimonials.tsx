import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Senior Frontend Engineer',
    company: 'Tech Startup',
    program: 'Full Stack Web Development',
    testimonial: 'GEOFINDA Tech Hub transformed my career. The mentorship and hands-on projects gave me real-world experience I couldn\'t get elsewhere. Within 3 months of completing the program, I landed my dream job.',
    rating: 5
  },
  {
    name: 'Sarah Martinez',
    role: 'Mobile Developer',
    company: 'Fortune 500 Tech Company',
    program: 'React Native Development',
    testimonial: 'The instructors were incredible and truly invested in our success. I appreciated the focus on both technical skills and career guidance. Highly recommend!',
    rating: 5
  },
  {
    name: 'James Wilson',
    role: 'Data Engineer',
    company: 'Analytics Firm',
    program: 'Data Engineering',
    testimonial: 'Best investment I made in my career. The curriculum is current, relevant, and taught by practitioners. The peer network alone is invaluable.',
    rating: 5
  },
  {
    name: 'Priya Patel',
    role: 'Cloud Architect',
    company: 'Enterprise Solutions',
    program: 'Kubernetes & Container Orchestration',
    testimonial: 'From beginner to confident practitioner in 8 weeks. The hands-on labs and real-world scenarios prepared me perfectly for my current role.',
    rating: 5
  }
]

export function HomeTestimonials() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Trusted by Our Graduates
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hear from people who have transformed their careers through <span className="text-gradient-brand">GEOFINDA Tech Hub</span>.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-800 border border-gray-700 rounded-lg hover:border-primary hover:shadow-xl transition-all duration-300 animate-float-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-white mb-6 leading-relaxed italic">
                "{testimonial.testimonial}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-700 pt-4">
                <div className="font-bold text-white mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-400 mb-2">
                  {testimonial.role} @ {testimonial.company}
                </div>
                <div className="text-xs bg-primary/20 text-primary-blue px-3 py-1 rounded-full w-fit">
                  {testimonial.program}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-gray-700">
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">4.9/5</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">500+</div>
            <div className="text-gray-400">Happy Graduates</div>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">95%</div>
            <div className="text-gray-400">Job Placement</div>
          </div>
        </div>
      </div>
    </section>
  )
}
