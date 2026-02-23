import {
  Eye,
  Target,
  Heart,
  Rocket,
  Building2,
  UserCheck,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const pillars = [
    {
      icon: Rocket,
      title: "Real Project Execution",
      description:
        "Interns build real-world projects that mirror what professional teams deliver — from planning and architecture to production deployment.",
    },
    {
      icon: Building2,
      title: "Industry Simulation",
      description:
        "Work environments mirror professional settings. Deadlines, code reviews, sprint cycles, and cross-functional collaboration — the way real teams operate.",
    },
    {
      icon: UserCheck,
      title: "Structured Mentorship",
      description:
        "Every intern is paired with an experienced mentor who provides regular guidance, technical feedback, and career direction throughout the internship.",
    },
    {
      icon: TrendingUp,
      title: "Career-Level Skill Building",
      description:
        "Our tracks develop not just technical skills, but the professional capabilities employers look for — communication, problem-solving, and ownership.",
    },
  ];

  const missionsVision = [
    {
      icon: Eye,
      title: "Vision",
      description:
        "A future where Rwandan youth — from high school students to university graduates — are globally competitive technology professionals.",
    },
    {
      icon: Target,
      title: "Mission",
      description:
        "To deliver structured, industry-aligned academic internship tracks that bridge the gap between education and employment in technology.",
    },
    {
      icon: Heart,
      title: "Values",
      description:
        "Execution over theory. Mentorship over lectures. Industry standards over academic exercises. Measured outcomes over participation certificates.",
    },
  ];

  const domains = [
    {
      name: "Core Software & Engineering",
      count: 10,
      color: "from-[#4CC3E0] to-[#0F6FA3]",
    },
    {
      name: "Infrastructure & Systems",
      count: 7,
      color: "from-[#1E9BD1] to-[#0C5876]",
    },
    {
      name: "Electronics & Embedded Systems",
      count: 6,
      color: "from-[#61BA49] to-[#0E6B2E]",
    },
    {
      name: "AI & Emerging Technologies",
      count: 7,
      color: "from-[#0F6FA3] to-[#0E4A30]",
    },
    {
      name: "Creative & Digital Technology",
      count: 5,
      color: "from-[#A6D93A] to-[#1E9BD1]",
    },
  ];

  return (
    <>
      <main>
        {/* Hero */}
        <section className="gradient-hero py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              About{" "}
              <span className="text-gradient-brand">GEOFINDA Tech Hub</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A tech solutions and software development company based in Kigali,
              Rwanda — dedicated to building the next generation of technology
              professionals.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-8">
              Who We Are
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                <span className="font-bold text-gray-900">
                  GEOFINDA Tech Hub
                </span>{" "}
                is a technology solutions and software development company
                headquartered in Kigali, Rwanda. We build software products,
                engineering systems, and digital solutions for organizations
                across East Africa and beyond.
              </p>
              <p>
                Beyond our core business, we are deeply committed to developing
                Rwanda&apos;s technology talent pipeline. Through our{" "}
                <span className="font-bold text-gray-900">Career Portal</span>,
                we offer structured academic internship tracks designed to
                prepare high school students, university/college students, and
                early-career professionals for real careers in technology.
              </p>
              <p>
                Our approach is different from traditional training programs.
                Every internship track is built around{" "}
                <span className="font-bold text-gray-900">
                  real project execution
                </span>
                ,{" "}
                <span className="font-bold text-gray-900">
                  industry-simulated work environments
                </span>
                , and{" "}
                <span className="font-bold text-gray-900">
                  structured mentorship
                </span>{" "}
                — because we know these are the elements that produce
                career-ready professionals, not certificates alone.
              </p>
              <p>
                We partner with leading companies in specific technology domains
                to provide internship placements, ensuring our participants gain
                exposure not just to simulated projects but to real industry
                environments and professional teams.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {missionsVision.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="text-center animate-float-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Approach - 4 Pillars */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Our Approach
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Four principles that define how every GEOFINDA Tech Hub
                internship operates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 animate-float-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mb-4">
                      <div className="w-14 h-14 bg-gradient-brand rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technology Domains */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-4">
                Five Technology Domains
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                30+ internship tracks organized across five specialized domains
                — each aligned to real industry career paths.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {domains.map((domain, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-center animate-float-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`text-4xl font-black bg-gradient-to-r ${domain.color} bg-clip-text text-transparent mb-2`}
                  >
                    {domain.count}
                  </div>
                  <div className="font-bold text-sm text-white">
                    {domain.name}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 text-[#A6D93A] font-bold hover:gap-4 transition-all"
              >
                Explore All Internship Tracks
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-12">
              Who This Is For
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "High School Students",
                  description:
                    "Students looking to explore technology careers early, build foundational skills, and gain practical experience before university.",
                },
                {
                  title: "University & College Students",
                  description:
                    "Students seeking academic internships that provide real industry exposure, portfolio-quality projects, and mentorship alongside their studies.",
                },
                {
                  title: "Career Changers",
                  description:
                    "Professionals transitioning into tech who need structured exposure, real projects, and mentorship to build credible skills.",
                },
                {
                  title: "Self-Taught Developers",
                  description:
                    "Self-learners who need structured environments, professional feedback, and portfolio-quality projects to become industry-ready.",
                },
              ].map((profile, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-[#4CC3E0]/5 to-[#A6D93A]/5 rounded-lg border border-[#4CC3E0]/20 hover:border-[#4CC3E0]/40 transition-all animate-float-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h3 className="font-bold text-gray-900 mb-2">
                    {profile.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{profile.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-brand">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-black mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-white/90">
              Browse our internship tracks, find the right fit, and apply. Your
              career in technology starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#A6D93A] text-white font-bold rounded-lg hover:bg-[#61BA49] hover:shadow-lg hover:scale-105 transition-all"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md text-white font-bold rounded-lg border border-white/30 hover:bg-white/30 transition-all"
              >
                Browse Internship Tracks
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
