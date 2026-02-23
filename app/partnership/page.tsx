import {
  Building2,
  Cpu,
  Globe,
  Handshake,
  ArrowRight,
  Calendar,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import {
  partners,
  getActivePartners,
  getCurrentSeason,
} from "@/lib/partners-data";

export default function PartnershipPage() {
  const activePartners = getActivePartners();
  const currentSeason = getCurrentSeason();

  return (
    <>
      <main>
        {/* Hero */}
        <section className="gradient-hero py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 inline mr-2" />
              Season {currentSeason}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Our Internship{" "}
              <span className="text-gradient-brand">Partners</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              GEOFINDA Tech Hub partners with leading companies to provide
              real-world internship placements for our participants. Partners
              change by season to give interns diverse industry exposure.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-12">
              How Our Partnerships Work
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <p>
                GEOFINDA Tech Hub partners with established companies in
                specific technology domains to offer internship placement
                opportunities. Each partner brings specialized expertise and
                real working environments that complement our internship tracks.
              </p>
              <p>
                Partnerships are{" "}
                <span className="font-bold text-gray-900">seasonal</span> — they
                are reviewed and updated each internship cycle. This ensures our
                interns gain exposure to current industry practices, diverse
                company cultures, and relevant technologies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: Building2,
                  title: "Domain Expertise",
                  description:
                    "Each partner specializes in specific technology areas, providing deep industry knowledge and mentorship.",
                },
                {
                  icon: Cpu,
                  title: "Real Environments",
                  description:
                    "Interns work in actual professional settings with real tools, processes, and team dynamics.",
                },
                {
                  icon: Handshake,
                  title: "Seasonal Rotation",
                  description:
                    "Partners rotate by season, ensuring fresh perspectives and diverse exposure for our interns.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 animate-float-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mx-auto mb-4 w-14 h-14 bg-gradient-brand rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Current Season Partners */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-3">
                Current Season Partners
              </h2>
              <p className="text-gray-600">
                Active partners for the {currentSeason} internship season
              </p>
            </div>

            <div className="grid gap-8">
              {activePartners.map((partner, index) => (
                <div
                  key={partner.id}
                  className="bg-white rounded-xl border border-gray-200 p-8 md:p-10 hover:shadow-xl transition-all animate-float-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Partner Logo Area */}
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-[#4CC3E0]/10 to-[#A6D93A]/10 rounded-xl border border-[#4CC3E0]/20 flex items-center justify-center">
                        {partner.logo ? (
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-24 h-24 object-contain"
                          />
                        ) : (
                          <Building2 className="w-12 h-12 text-[#4CC3E0]" />
                        )}
                      </div>
                    </div>

                    {/* Partner Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-black text-gray-900">
                            {partner.name}
                          </h3>
                          {partner.location && (
                            <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                              <MapPin className="w-4 h-4" />
                              {partner.location}
                            </div>
                          )}
                        </div>
                        <span className="px-3 py-1 bg-[#A6D93A]/10 text-[#0E6B2E] text-sm font-bold rounded-full border border-[#A6D93A]/30">
                          Season {partner.season}
                        </span>
                      </div>

                      <p className="text-gray-700 mb-6">
                        {partner.description}
                      </p>

                      {/* Specializations */}
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                          Specializations
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {partner.specializations.map((spec) => (
                            <span
                              key={spec}
                              className="px-3 py-1.5 bg-[#4CC3E0]/10 text-[#0F6FA3] text-sm font-medium rounded-lg border border-[#4CC3E0]/20"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Internship Tracks Covered */}
                      {partner.internshipTracks &&
                        partner.internshipTracks.length > 0 && (
                          <div className="mb-6">
                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                              Internship Tracks Available
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {partner.internshipTracks.map((track) => (
                                <span
                                  key={track}
                                  className="px-3 py-1.5 bg-[#A6D93A]/10 text-[#0E6B2E] text-sm font-medium rounded-lg border border-[#A6D93A]/20"
                                >
                                  {track}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                      {partner.website && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#0F6FA3] font-bold hover:text-[#4CC3E0] transition-colors"
                        >
                          <Globe className="w-4 h-4" />
                          Visit Website
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {activePartners.length === 0 && (
              <div className="text-center py-16">
                <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Partners Coming Soon
                </h3>
                <p className="text-gray-600">
                  We are finalizing partnerships for the upcoming season. Check
                  back soon!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Become an Internship Partner
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We are always looking for companies that share our commitment to
                developing Rwanda&apos;s technology talent. If your company can
                offer real-world internship placements, we&apos;d like to hear
                from you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "What We Look For",
                  items: [
                    "Established companies in technology domains",
                    "Capacity to host and mentor interns",
                    "Real projects and working environments",
                    "Commitment for at least one full season",
                  ],
                },
                {
                  title: "What Partners Receive",
                  items: [
                    "Access to pre-trained, motivated interns",
                    "Co-branded visibility on our Career Portal",
                    "Structured integration and onboarding support",
                    "First access to top-performing participants",
                  ],
                },
              ].map((col, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg border border-gray-200 animate-float-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-bold text-gray-900 mb-4">{col.title}</h3>
                  <ul className="space-y-3">
                    {col.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#A6D93A] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-brand">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-black mb-4">
              Interested in Partnering?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Reach out to discuss how your company can become an internship
              partner with GEOFINDA Tech Hub for the upcoming season.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?subject=partnership"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#A6D93A] text-white font-bold rounded-lg hover:bg-[#61BA49] hover:shadow-lg hover:scale-105 transition-all"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md text-white font-bold rounded-lg border border-white/30 hover:bg-white/30 transition-all"
              >
                View Internship Tracks
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
