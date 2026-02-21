import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'

const faqCategories = [
  {
    title: 'General Questions',
    faqs: [
      { q: 'What is GEOFINDA Tech Hub?', a: 'GEOFINDA Tech Hub is an innovative tech career platform offering 25+ programs with mentorship, real-world projects, and career support to help you launch a successful tech career.' },
      { q: 'Who is GEOFINDA Tech Hub for?', a: 'We welcome anyone passionate about technology - students, career changers, and professionals looking to upskill. We have programs for all levels from beginner to advanced.' },
      { q: 'How is GEOFINDA Tech Hub different from other bootcamps?', a: 'Our unique approach combines structured mentorship from industry professionals, hands-on real-world projects, and comprehensive career support. You\'re not just learning - you\'re building connections and experience.' }
    ]
  },
  {
    title: 'Programs & Enrollment',
    faqs: [
      { q: 'How many programs do you offer?', a: 'We offer 25+ carefully designed programs across 5 major categories: Web Development, Mobile Development, Data & Analytics, Cloud & DevOps, and AI & Emerging Tech.' },
      { q: 'How long are the programs?', a: 'All our programs are designed to be completed in 8 weeks. You\'ll typically spend 20-30 hours per week on coursework and projects.' },
      { q: 'Do I need prior experience?', a: 'While some programs require basics, we have beginner-friendly options. Our application assessment helps identify the right starting point for you.' },
      { q: 'What\'s the application process?', a: 'Apply online, complete a technical assessment, and our team will review your application. We aim to notify you within 2-3 business days.' },
      { q: 'When can I start?', a: 'Programs start regularly throughout the year. You can choose your preferred start date during enrollment. Check our programs page for upcoming cohorts.' }
    ]
  },
  {
    title: 'Cost & Logistics',
    faqs: [
      { q: 'How much do programs cost?', a: 'Pricing varies by program and includes mentorship, curriculum, and career support. Contact us for specific pricing and available payment plans.' },
      { q: 'Is there financial aid?', a: 'Yes, we offer scholarships and flexible payment plans. We believe cost shouldn\'t be a barrier to education. Reach out to discuss options.' },
      { q: 'Can I work while enrolled?', a: 'Absolutely! Many students work part-time or have other commitments. Our flexible scheduling accommodates various lifestyles.' },
      { q: 'Is the program online or in-person?', a: 'Most programs are offered online with live sessions and community interaction. This allows flexibility while maintaining real-time engagement with instructors and peers.' }
    ]
  },
  {
    title: 'Mentorship & Support',
    faqs: [
      { q: 'What is the mentorship like?', a: 'You\'ll be paired with an experienced professional for dedicated 1-on-1 guidance. Weekly sessions cover technical skills, career planning, and professional development.' },
      { q: 'How are mentors selected?', a: 'Our mentors are experienced professionals from leading tech companies with proven teaching ability and genuine commitment to student success.' },
      { q: 'What happens after I complete the program?', a: 'Our career support team helps with interview prep, resume review, job search strategy, and connections with hiring partners. We support you beyond graduation.' },
      { q: 'Is there a community or alumni network?', a: 'Yes! You\'ll join an active community of learners and graduates. Many lifelong professional connections are made through GEOFINDA Tech Hub.' }
    ]
  },
  {
    title: 'Success & Outcomes',
    faqs: [
      { q: 'What\'s your success rate?', a: 'Our graduates have a 95% success rate in landing tech roles within 6 months. But success is defined differently for everyone - we support your specific goals.' },
      { q: 'Do you guarantee a job?', a: 'We don\'t guarantee jobs, but we provide placement support, interview coaching, and industry connections to help you succeed. Your effort + our support = opportunity.' },
      { q: 'What companies hire GEOFINDA graduates?', a: 'Our graduates work at leading tech companies, startups, and established organizations. From Fortune 500 to innovative startups - everywhere needs great tech talent.' },
      { q: 'How much can I expect to earn?', a: 'Salaries vary widely based on role, location, and experience. Many of our graduates see significant salary growth within their first year. Discuss with our team for specific market data.' }
    ]
  }
]

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="gradient-hero py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90">
              Find answers to common questions about <span className="text-gradient-brand">GEOFINDA Tech Hub</span>, our programs, and the application process.
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="animate-fade-in-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
                <h2 className="text-3xl font-black text-gray-900 mb-8 pb-4 border-b-4 border-primary">
                  {category.title}
                </h2>

                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <details
                      key={faqIndex}
                      className="group border border-gray-300 rounded-lg overflow-hidden hover:border-primary hover:shadow-md transition-all"
                    >
                      <summary className="cursor-pointer p-6 font-bold text-gray-900 flex items-center justify-between hover:bg-gray-50 group-open:bg-blue-50 group-open:text-primary transition-all">
                        <span>{faq.q}</span>
                        <span className="text-primary group-open:rotate-180 transition-transform text-xl">
                          ▼
                        </span>
                      </summary>
                      <div className="px-6 pb-6 text-gray-600 border-t border-gray-200 leading-relaxed">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're here to help. Reach out to our team anytime.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-brand text-white font-bold rounded-lg hover:shadow-lg transition-all"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
