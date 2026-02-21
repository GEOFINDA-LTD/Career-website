import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle, Users, Briefcase, TrendingUp, Shield, BookOpen } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  { icon: Users, title: 'Expert Mentorship', description: 'Your child is paired with experienced professionals who provide dedicated guidance and career support.' },
  { icon: BookOpen, title: 'Structured Learning', description: 'Our curriculum is carefully designed with clear milestones and progress tracking so you can see real growth.' },
  { icon: Briefcase, title: 'Real Career Exposure', description: 'Beyond theory - your child works on actual projects that mirror professional environments and build real skills.' },
  { icon: TrendingUp, title: 'Career Advancement', description: 'Comprehensive support from training through job placement. We help launch meaningful careers.' },
  { icon: Shield, title: 'Safe Community', description: 'A supportive, inclusive community focused on learning and growth with professional standards.' },
  { icon: CheckCircle, title: 'Measurable Progress', description: 'Clear skill milestones, regular feedback, and success metrics you can track.' }
]

const timeline = [
  { phase: 'Weeks 1-4', title: 'Foundation Building', description: 'Core concepts and fundamentals with structured learning and daily practice' },
  { phase: 'Weeks 5-8', title: 'Practical Application', description: 'Hands-on projects, collaborative development, and real-world problem solving' },
  { phase: 'Weeks 9-12', title: 'Mastery & Career Ready', description: 'Advanced techniques, capstone project, interview prep, and job placement support' }
]

export default function ForParentsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="gradient-hero py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Supporting Your Child's Tech <span className="text-gradient-brand">Career Journey</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Understand how <span className="text-gradient-brand">GEOFINDA Tech Hub</span> provides structured mentorship, real-world experience, and career support to help your child succeed in technology.
            </p>
          </div>
        </section>

        {/* Why GEOFINDA */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-gray-900 text-center mb-12">
              Why <span className="text-gradient-brand">GEOFINDA Tech Hub</span> for Your Child
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all animate-float-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Program Timeline */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#4CC3E0]/5 to-[#A6D93A]/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-12">
              What to Expect: 12-Week Journey
            </h2>

            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-8 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#4CC3E0] to-[#A6D93A] rounded-full flex items-center justify-center text-white font-black shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="text-sm font-bold text-primary mb-1">{item.phase}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Assurances */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-12">
              What You Can Expect
            </h2>

            <div className="space-y-6">
              {[
                { title: 'Professional Mentorship', description: 'Industry experts guiding your child with weekly 1-on-1 meetings and career coaching.' },
                { title: 'Clear Curriculum', description: 'Structured learning path with defined milestones, measurable progress, and regular assessments.' },
                { title: 'Progress Transparency', description: 'Regular updates on your child\'s progress, skills development, and areas of focus.' },
                { title: 'Supportive Community', description: 'Peer learning in a professional environment with high standards for conduct and collaboration.' },
                { title: 'Career Focus', description: 'From day one, we focus on building skills that lead to career opportunities and meaningful employment.' },
                { title: 'Ongoing Support', description: 'Career guidance extends beyond the program - we support job search, interviews, and early career transition.' }
              ].map((assurance, index) => (
                <div key={index} className="flex items-start gap-4 pb-6 border-b border-gray-200 last:border-0 animate-float-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{assurance.title}</h3>
                    <p className="text-gray-600">{assurance.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-12">
              Parent FAQs
            </h2>

            <div className="space-y-4">
              {[
                { q: 'How long is the program and what\'s the time commitment?', a: 'Programs typically run 10-14 weeks with an average of 12 weeks. Students spend 20-30 hours per week on coursework, projects, and mentor sessions. We work with flexible schedules.' },
                { q: 'What if my child needs additional support?', a: 'We provide additional support resources including peer tutoring, extra mentor sessions, and learning accommodations. Your child won\'t be left behind.' },
                { q: 'How is success measured?', a: 'Success includes skill development, project completion, mentor feedback, and career readiness. We track progress regularly and communicate with you.' },
                { q: 'What happens after the program ends?', a: 'Career support continues including job search assistance, interview coaching, and connections with hiring partners. Many graduates land positions within 3-6 months.' },
                { q: 'How can I stay informed about my child\'s progress?', a: 'We provide regular progress reports and have a parent-friendly dashboard. You can also request check-ins with your child\'s mentor.' }
              ].map((faq, index) => (
                <details key={index} className="group border border-gray-300 rounded-lg overflow-hidden hover:border-primary transition-colors">
                  <summary className="cursor-pointer p-6 font-bold text-gray-900 flex items-center justify-between hover:bg-gray-100 group-open:bg-blue-50">
                    <span>{faq.q}</span>
                    <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-brand">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-black mb-4">
              Support Your Child's Tech Future
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Help them explore technology careers with expert mentorship and real-world experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="inline-block px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all">
                Help Them Apply
              </Link>
              <Link href="/contact" className="inline-block px-8 py-4 bg-white/20 text-white font-bold rounded-lg border border-white/30 hover:bg-white/40 transition-all">
                Ask Questions
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
