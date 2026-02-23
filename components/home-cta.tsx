import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Real project execution across industry scenarios",
  "Structured mentorship from experienced professionals",
  "30+ academic internship tracks to choose from",
  "Industry-simulation work environments",
  "Portfolio of production-quality work on completion",
  "Five specialized technology domains",
];

export function HomeCTA() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-primary-blue to-primary-green rounded-xl overflow-hidden shadow-2xl animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Ready to Start Your Internship?
              </h2>
              <p className="text-white/90 mb-8 leading-relaxed">
                Apply for an academic internship track, build real projects, and
                graduate with the skills employers are looking for.
              </p>

              {/* Benefits List */}
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#A6D93A] flex-shrink-0 mt-0.5" />
                    <span className="text-white text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#A6D93A] text-white font-bold rounded-lg hover:bg-[#61BA49] hover:shadow-lg hover:scale-105 transition-all duration-200 w-full md:w-fit"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right Side - Quick Stats */}
            <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 flex flex-col justify-center border-l border-white/20">
              <div className="space-y-8">
                <div
                  className="animate-float-in"
                  style={{ animationDelay: "0s" }}
                >
                  <div className="text-4xl font-black text-white mb-2">30+</div>
                  <div className="text-white/80">Internship Tracks</div>
                  <div className="text-sm text-white/60 mt-2">
                    From Software Engineering to Motion Graphics
                  </div>
                </div>

                <div
                  className="animate-float-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="text-4xl font-black text-white mb-2">
                    8–14 Weeks
                  </div>
                  <div className="text-white/80">Program Duration</div>
                  <div className="text-sm text-white/60 mt-2">
                    Intensive, focused career preparation
                  </div>
                </div>

                <div
                  className="animate-float-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="text-4xl font-black text-white mb-2">5</div>
                  <div className="text-white/80">Technology Domains</div>
                  <div className="text-sm text-white/60 mt-2">
                    Software, Infrastructure, Electronics, AI, Creative
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Have questions?{" "}
            <Link
              href="/faq"
              className="text-primary font-bold hover:underline"
            >
              Check out our FAQ
            </Link>{" "}
            or{" "}
            <Link
              href="/contact"
              className="text-primary font-bold hover:underline"
            >
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
