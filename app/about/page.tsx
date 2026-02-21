import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Eye, Target, Heart, Zap } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="gradient-hero py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              About <span className="text-gradient-brand">GEOFINDA Tech Hub</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Transforming careers through technology, mentorship, and real-world experience.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Eye,
                  title: 'Vision',
                  description: 'A world where passionate individuals can launch fulfilling careers in technology with the guidance, experience, and support they need.'
                },
                {
                  icon: Target,
                  title: 'Mission',
                  description: 'To provide accessible, high-quality tech training combined with mentorship and career support that transforms lives.'
                },
                {
                  icon: Heart,
                  title: 'Values',
                  description: 'Excellence in teaching, integrity in partnerships, diversity in our community, and genuine care for our students\' success.'
                },
                {
                  icon: Zap,
                  title: 'Impact',
                  description: 'Over 500 graduates successfully launched in technology careers. 95% placement rate. Building the diverse tech workforce of tomorrow.'
                }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="text-center animate-float-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-8">Our Story</h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                <span className="font-bold text-gray-900">GEOFINDA Tech Hub</span> was founded on a simple belief: technology careers should be accessible to everyone passionate about learning and growth. We started with a team of experienced engineers and educators who saw a gap in tech education - programs that focused solely on technical skills without real mentorship, industry exposure, or career support.
              </p>

              <p>
                We realized that the most successful career transitions happened when people had three things: expert guidance from someone who'd been in their shoes, real-world experience working on meaningful projects, and comprehensive support from application to employment.
              </p>

              <p>
                So we built <span className="font-bold text-gray-900">GEOFINDA Tech Hub</span> - a platform that combines these three elements. Each program pairs students with mentors, provides hands-on projects that mirror real company environments, and includes career guidance that extends beyond graduation. It's not a one-size-fits-all bootcamp; it's personalized learning with professional accountability.
              </p>

              <p>
                Since our launch, we've had the privilege of helping hundreds of individuals launch careers they love. We've seen career changers transition into their first tech roles. We've watched students discover they're passionate about cloud architecture or AI. We've celebrated graduates landing at companies like [Partner Names] and launching startups of their own.
              </p>

              <p>
                We're just getting started. Our vision is to continue expanding our programs, deepening our mentor network, and ensuring that talent - not circumstance - is what determines career success in technology.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-12">
              Leadership Team
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Founder & CEO', role: 'Tech Entrepreneur', bio: 'Former engineering lead at major tech companies' },
                { name: 'VP Education', role: 'Curriculum Expert', bio: 'PhD in Computer Science, 10+ years teaching' },
                { name: 'VP Partnerships', role: 'Industry Connector', bio: 'Built hiring relationships across Fortune 500 companies' }
              ].map((member, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="mb-4 w-24 h-24 mx-auto bg-gradient-brand rounded-full" />
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* By the Numbers */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-center mb-12">By the Numbers</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { number: '500+', label: 'Graduates' },
                { number: '95%', label: 'Job Placement' },
                { number: '25+', label: 'Programs' },
                { number: '50+', label: 'Industry Mentors' },
                { number: '5', label: 'Tech Categories' }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-float-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-5xl font-black text-primary mb-2">{stat.number}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose GEOFINDA */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-12">
              Why Choose <span className="text-gradient-brand">GEOFINDA Tech Hub</span>
            </h2>

            <div className="space-y-6">
              {[
                { title: 'Expert Mentorship', description: 'Learn from professionals with real industry experience, not just online content.' },
                { title: 'Real-World Projects', description: 'Build actual projects for your portfolio, not toy exercises.' },
                { title: 'Career Support', description: 'Comprehensive guidance from application to job placement and beyond.' },
                { title: 'Diverse Community', description: 'Learn alongside diverse peers in an inclusive, supportive environment.' },
                { title: 'Proven Results', description: '95% of our graduates land meaningful tech roles within 6 months.' },
                { title: 'Flexible Learning', description: 'Programs designed for people with different backgrounds and schedules.' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 pb-6 border-b border-gray-200 last:border-0 animate-float-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="w-2 h-2 bg-gradient-brand rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-brand">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-black mb-4">Join Our Community</h2>
            <p className="text-lg mb-8">
              Ready to transform your career in technology? Start your journey with GEOFINDA Tech Hub today.
            </p>
            <a href="/apply" className="inline-block px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all">
              Apply Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
