import {
  FileText,
  CheckCircle,
  Users,
  Code,
  Briefcase,
  Award,
  Rocket,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: 1,
    title: "Application & Assessment",
    icon: FileText,
    description:
      "Submit your application and complete our assessment to showcase your current level, interests, and learning potential.",
    details: [
      "Online application form",
      "Skills & interest assessment",
      "Motivation & fit evaluation",
    ],
  },
  {
    number: 2,
    title: "Opportunity Selection",
    icon: CheckCircle,
    description:
      "Choose from our 30+ career opportunities across five technology domains based on your interests and career direction.",
    details: [
      "Browse all internship tracks",
      "Get personalized recommendations",
      "Confirm your track choice",
    ],
  },
  {
    number: 3,
    title: "Mentor Matching",
    icon: Users,
    description:
      "Get paired with an experienced industry professional who will guide you throughout your internship journey.",
    details: [
      "Mentor profile review",
      "Initial meeting & goal setting",
      "Regular 1-on-1 sessions",
    ],
  },
  {
    number: 4,
    title: "Foundations Phase",
    icon: Code,
    description:
      "Dive deep into fundamentals. Master core concepts through structured curriculum and hands-on exercises.",
    details: [
      "Live interactive sessions",
      "Self-paced learning modules",
      "Daily challenges",
      "Peer collaboration",
    ],
  },
  {
    number: 5,
    title: "Real-World Projects",
    icon: Briefcase,
    description:
      "Apply your knowledge to projects that mirror real company environments. Build your portfolio with tangible, production-quality work.",
    details: [
      "Industry-relevant projects",
      "Team-based development",
      "Code review & feedback",
      "Performance optimization",
    ],
  },
  {
    number: 6,
    title: "Partner Placement",
    icon: Rocket,
    description:
      "Gain hands-on experience with one of our seasonal internship partners, working in a real professional environment.",
    details: [
      "On-site or hybrid placement",
      "Real team integration",
      "Industry mentorship",
      "Professional workflow experience",
    ],
  },
  {
    number: 7,
    title: "Capstone & Career Launch",
    icon: Award,
    description:
      "Complete your capstone project, finalize your portfolio, and receive career support to launch your technology career.",
    details: [
      "Final capstone project",
      "Portfolio completion",
      "Interview preparation",
      "Career guidance & support",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="gradient-hero py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              How GEOFINDA Tech Hub{" "}
              <span className="text-gradient-brand">Works</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our 7-phase career journey takes you from application to career
              launch. From foundations to partner placement and job placements,
              we guide every step.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={step.number}
                    className="animate-float-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? "" : "lg:grid-cols-2"}`}
                    >
                      {/* Content - Left on odd, right on even */}
                      <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-brand">
                              <Icon className="h-8 w-8 text-white" />
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-primary mb-2">
                              Phase {step.number} of {steps.length}
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-3">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                              {step.description}
                            </p>
                            <ul className="space-y-2">
                              {step.details.map((detail) => (
                                <li
                                  key={detail}
                                  className="flex items-center gap-2 text-gray-700"
                                >
                                  <div className="w-2 h-2 bg-gradient-to-r from-[#4CC3E0] to-[#A6D93A] rounded-full flex-shrink-0" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Visual - Right on odd, left on even */}
                      <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                        <div className="gradient-brand rounded-lg p-8 border-2 border-white/30 h-48 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-6xl font-black text-white/40 mb-2">
                              {step.number}
                            </div>
                            <p className="text-white font-semibold">
                              {step.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Connector */}
                    {index < steps.length - 1 && (
                      <div className="flex justify-center my-8">
                        <div className="w-1 h-12 bg-gradient-to-b from-primary to-secondary rounded-full" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-12">
              What Makes GEOFINDA Tech Hub Different
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div
                className="animate-float-in"
                style={{ animationDelay: "0s" }}
              >
                <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 h-full">
                  <h3 className="text-xl font-bold mb-4">
                    Structured Mentorship
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Paired with experienced professionals for dedicated
                    guidance, not just lectures and videos.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Regular 1-on-1 sessions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Career guidance
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Network building
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="animate-float-in"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 h-full">
                  <h3 className="text-xl font-bold mb-4">
                    Real-World Projects
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Work on actual projects that mirror professional
                    environments, not theoretical exercises.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Team collaboration
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Portfolio building
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Industry standards
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="animate-float-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 h-full">
                  <h3 className="text-xl font-bold mb-4">Partner Placements</h3>
                  <p className="text-gray-300 mb-4">
                    Gain hands-on experience at real companies through our
                    seasonal internship partner network.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Real work environments
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Industry exposure
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Professional networking
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-12">
              Common Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "How long are the internship tracks?",
                  a: "Most internship tracks run for 10-14 weeks, with an average of 12 weeks. You'll spend 20-30 hours per week on coursework and projects.",
                },
                {
                  q: "Do I need prior experience?",
                  a: "While some tracks require basics, we have Foundation-level options. Our application assessment helps place you in the right track.",
                },
                {
                  q: "Who can apply?",
                  a: "High school students, university/college students, and early-career professionals in Rwanda. We welcome anyone passionate about building a career in technology.",
                },
                {
                  q: "Can I study while enrolled?",
                  a: "Yes! Our internship tracks are designed to complement academic schedules. Many of our interns are full-time students.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="group border border-gray-300 rounded-lg overflow-hidden hover:border-primary transition-colors"
                >
                  <summary className="cursor-pointer p-6 font-bold text-gray-900 flex items-center justify-between hover:bg-gray-50">
                    <span>{faq.q}</span>
                    <span className="text-primary group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Want to know more?</p>
              <Link
                href="/faq"
                className="inline-block px-6 py-3 bg-primary text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Visit Full FAQ
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-brand">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Ready to Start Your Career?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Apply now and take the first step towards your tech career.
            </p>
            <Link
              href="/apply"
              className="inline-block px-8 py-4 bg-[#A6D93A] text-white font-bold rounded-lg hover:bg-[#61BA49] hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Apply Now
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
