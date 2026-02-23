import Link from "next/link";

const faqCategories = [
  {
    title: "General Questions",
    faqs: [
      {
        q: "What is GEOFINDA Tech Hub?",
        a: "GEOFINDA Tech Hub is a tech solutions and software development company based in Kigali, Rwanda. Through our Career Portal, we offer structured career opportunities including academic and professional internships, job placements, mentorship, and real-world projects for aspiring technology professionals.",
      },
      {
        q: "Who is GEOFINDA Tech Hub for?",
        a: "We welcome high school students, university/college students, early-career professionals, and career changers in Rwanda who are passionate about building a career in technology. We offer opportunities for all levels from Foundation to Advanced.",
      },
      {
        q: "How is GEOFINDA Tech Hub different from bootcamps?",
        a: "Our approach combines structured mentorship from industry professionals, real-world project execution, and internship placements with partner companies. You're not just learning — you're working in industry-simulated environments and building real portfolio work.",
      },
    ],
  },
  {
    title: "Opportunities & Enrollment",
    faqs: [
      {
        q: "How many opportunities do you offer?",
        a: "We offer 30+ opportunities across 5 technology domains: Core Software & Engineering, Infrastructure & Systems, Electronics & Embedded Systems, AI & Emerging Technologies, and Creative & Digital Technology. These include academic internships, professional internships, and job placements.",
      },
      {
        q: "How long are the opportunities?",
        a: "Most structured internship tracks run for 10-14 weeks, with an average of 12 weeks. Job placements and professional roles vary by employer. Check specific listings for details.",
      },
      {
        q: "Do I need prior experience?",
        a: "While some tracks require basics, we have Foundation-level tracks designed for beginners. Our application assessment helps identify the right starting point for you.",
      },
      {
        q: "What's the application process?",
        a: "Apply online, complete an assessment, and our team will review your application. We aim to notify you within 2-3 business days.",
      },
      {
        q: "When can I start?",
        a: "Internship tracks start on a seasonal basis. Check our Career Portal for upcoming cohorts and available start dates.",
      },
    ],
  },
  {
    title: "Cost & Logistics",
    faqs: [
      {
        q: "How much do opportunities cost?",
        a: "Pricing varies by offering. Some opportunities (structured internships and training) may have fees that include mentorship and curriculum; job placements are employer roles. Contact us for specific pricing and arrangements.",
      },
      {
        q: "Can I study while enrolled?",
        a: "Absolutely! Many of our interns are full-time high school or university students. Our scheduling is designed to complement academic commitments.",
      },
      {
        q: "Are opportunities online or in-person?",
        a: "Formats vary by opportunity — some are fully online, some are hybrid, and partner placements are often on-site. Check each listing for format details.",
      },
      {
        q: "Where is GEOFINDA Tech Hub located?",
        a: "We are based in Nyarugenge, Kigali, Rwanda. Partner placements may be at different locations depending on the partner company.",
      },
    ],
  },
  {
    title: "Mentorship & Partners",
    faqs: [
      {
        q: "What is the mentorship like?",
        a: "You'll be paired with an experienced professional for dedicated 1-on-1 guidance. Regular sessions cover technical skills, career planning, and professional development throughout your internship.",
      },
      {
        q: "What are partner placements?",
        a: "We partner with established companies across technology domains to provide real-world placements and hiring opportunities. Partners change by season to give participants diverse industry exposure. Visit our Partners page to see current partners.",
      },
      {
        q: "Will I work at a partner company?",
        a: "Yes — depending on the opportunity, you may be placed with a partner company for hands-on experience or considered for direct hire by partners during/after the placement.",
      },
      {
        q: "Who are the current partners?",
        a: "Partners change by season. Visit our Partners page for the most up-to-date list of active partner organizations and hiring partners.",
      },
    ],
  },
  {
    title: "Outcomes & Career",
    faqs: [
      {
        q: "What will I gain after completing an opportunity?",
        a: "You'll have portfolio projects, practical experience from partner placements, a capstone (where applicable), structured mentorship, and career support — all designed to prepare you for employment or advancement in technology.",
      },
      {
        q: "Do you guarantee a job?",
        a: "We don't guarantee jobs. We provide portfolio-quality projects, partner placement experience, interview preparation, and career guidance. Your effort combined with our support creates opportunity.",
      },
      {
        q: "What levels of opportunities are available?",
        a: "We offer Foundation (beginner-friendly), Intermediate, and Advanced levels across all five technology domains, suitable for students, early-career professionals, and career changers.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="gradient-hero py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90">
              Find answers to common questions about{" "}
              <span className="text-gradient-brand">GEOFINDA Tech Hub</span>,
              our internship tracks, and the application process.
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {faqCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="animate-fade-in-up"
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
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
    </>
  );
}
