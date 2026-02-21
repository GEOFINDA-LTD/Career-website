import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Zap, Users, TrendingUp, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function PartnershipPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="gradient-hero py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Partner With <span className="text-gradient-brand">GEOFINDA Tech Hub</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Access top tech talent, engage with our community, and build the future of technology together.
            </p>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-gray-900 text-center mb-12">
              Partnership Opportunities
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Users,
                  title: 'Talent Acquisition',
                  description: 'Access our pool of skilled graduates ready for entry-level and mid-level positions. Our graduates bring both technical skills and professional readiness.'
                },
                {
                  icon: Zap,
                  title: 'Mentorship & Speaking',
                  description: 'Share your expertise as a mentor or guest speaker. Invest in the next generation of tech professionals while building your employer brand.'
                },
                {
                  icon: TrendingUp,
                  title: 'Curriculum Partnership',
                  description: 'Collaborate on curriculum development to ensure our programs reflect the latest industry trends and your company\'s technology stack.'
                },
                {
                  icon: Award,
                  title: 'Sponsorship',
                  description: 'Sponsor scholarships, events, or programs to give opportunities to underrepresented groups in technology.'
                }
              ].map((opp, index) => {
                const Icon = opp.icon
                return (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-all animate-float-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="mb-4">
                      <div className="w-14 h-14 bg-gradient-brand rounded-lg flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{opp.title}</h3>
                    <p className="text-gray-600">{opp.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#4CC3E0]/5 to-[#A6D93A]/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-12">
              Why Companies Partner With <span className="text-gradient-brand">GEOFINDA Tech Hub</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: '500+', label: 'Graduates in Pipeline', detail: 'Access pre-trained talent ready to contribute' },
                { number: '95%', label: 'Success Rate', detail: 'Proven track record of career placement' },
                { number: '25+', label: 'Program Tracks', detail: 'Coverage across all major tech areas' }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-5xl font-black text-primary mb-2">{stat.number}</div>
                  <div className="font-bold text-gray-900">{stat.label}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-12">
              Partner Benefits
            </h2>

            <div className="space-y-6">
              {[
                { title: 'Pre-screened Talent', description: 'Our graduates have demonstrated commitment, technical skills, and professional readiness.' },
                { title: 'Industry Alignment', description: 'Our curriculum reflects current industry needs and your company\'s technology priorities.' },
                { title: 'Brand Building', description: 'Increase visibility within the tech community and support talent development.' },
                { title: 'Cost Efficiency', description: 'Reduce recruiting and training costs with pre-trained professionals.' },
                { title: 'Diverse Talent', description: 'Access to a diverse pipeline of candidates from various backgrounds.' },
                { title: 'Community Impact', description: 'Make a difference by supporting the next generation of tech professionals.' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 pb-6 border-b border-gray-200 last:border-0 animate-float-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-12">
              Trusted by Leading Companies
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-center min-h-24 hover:shadow-lg transition-all animate-float-in" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="text-center">
                    <div className="text-4xl font-black text-gray-300">
                      Partner {i + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-600 mt-8">
              Your company could be here. Let's build the future of tech together.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-brand">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-3xl font-black mb-4">Ready to Partner?</h2>
                <p className="text-lg text-white/90 mb-6">
                  Let's explore how <span className="text-gradient-brand">GEOFINDA Tech Hub</span> can help you access top talent, build your employer brand, and grow your team.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/contact?subject=partnership"
                    className="inline-block px-6 py-3 bg-white text-gray-900 font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 rounded-lg p-8 border border-white/20 text-white">
                  <h3 className="text-xl font-bold mb-4">Next Steps</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">1</span>
                      <span>Connect with our partnership team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">2</span>
                      <span>Discuss your specific needs and goals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">3</span>
                      <span>Customize a partnership that works for you</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
