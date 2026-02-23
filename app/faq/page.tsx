import Link from "next/link";

const faqCategories = [
  {
    title: "General Questions",
    faqs: [
      {
        q: "What is GEOFINDA Tech Hub?",
        a: "GEOFINDA Tech Hub is a tech solutions and software development company based in Kigali, Rwanda. Through our Career Portal, we offer structured academic internship tracks with mentorship, real-world projects, and career support for aspiring technology professionals.",
      },
      {
        q: "Who is GEOFINDA Tech Hub for?",
        a: "We welcome high school students, university/college students, and early-career professionals in Rwanda who are passionate about building a career in technology. We have internship tracks for all levels from Foundation to Advanced.",
      },
      {
        q: "How is GEOFINDA Tech Hub different from bootcamps?",
        a: "Our approach combines structured mentorship from industry professionals, real-world project execution, and internship placements with partner companies. You're not just learning — you're working in industry-simulated environments and building real portfolio work.",
      },
    ],
  },
  {
    title: "Internship Tracks & Enrollment",
    faqs: [
      {
        q: "How many internship tracks do you offer?",
        a: "We offer 30+ internship tracks across 5 technology domains: Core Software & Engineering, Infrastructure & Systems, Electronics & Embedded Systems, AI & Emerging Technologies, and Creative & Digital Technology.",
      },
      {
        q: "How long are the internship tracks?",
        a: "Most tracks run for 10-14 weeks, with an average of 12 weeks. You'll typically spend 20-30 hours per week on coursework, projects, and partner placement activities.",
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
        q: "How much do internship tracks cost?",
        a: "Pricing varies by track and includes mentorship, curriculum, and career support. Contact us for specific pricing and available payment arrangements.",
      },
      {
        q: "Can I study while enrolled?",
        a: "Absolutely! Many of our interns are full-time high school or university students. Our scheduling is designed to complement academic commitments.",
      },
      {
        q: "Is the internship online or in-person?",
        a: "Most tracks combine online learning with on-site components, especially during partner placement phases. The format depends on the specific track and partner.",
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
        q: "What are internship partners?",
        a: "We partner with established companies in specific technology domains to provide real-world internship placements. Partners change by season to give interns diverse industry exposure. Visit our Partners page to see current season partners.",
      },
      {
        q: "Will I work at a partner company?",
        a: "Yes — during the partner placement phase of your internship, you'll gain hands-on experience at one of our seasonal partner companies, working in real professional environments.",
      },
      {
        q: "Who is the current internship partner?",
        a: "Partners change by season. Visit our Partners page for the most up-to-date list of active partners for the current internship season.",
      },
    ],
  },
  {
    title: "Outcomes & Career",
    faqs: [
      {
        q: "What will I have after completing an internship track?",
        a: "You'll have a portfolio of real-world projects, professional experience from partner placements, a capstone project, structured mentorship experience, and career support — all of which prepare you for employment in technology.",
      },
      {
        q: "Do you guarantee a job?",
        a: "We don't guarantee jobs. We provide portfolio-quality projects, partner placement experience, interview preparation, and career guidance. Your effort combined with our support creates opportunity.",
      },
      {
        q: "What levels of internship tracks are available?",
        a: "We offer Foundation (beginner-friendly), Intermediate (some prior knowledge), and Advanced (experienced learners) level tracks across all five technology domains.",
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
