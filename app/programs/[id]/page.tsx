"use client";

import { programs, categoryLabels } from "@/lib/programs-data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Clock,
  Users,
  BookOpen,
  Target,
  Code,
  Zap,
  Layers,
} from "lucide-react";

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProgramDetailPage({ params }: PageProps) {
  const program = programs.find((p) => p.id === params.id);

  if (!program) {
    notFound();
  }

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative h-96 gradient-hero overflow-hidden">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F6FA3]/80 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8">
              <span className="inline-block mb-4 px-4 py-2 bg-primary text-white font-bold rounded-full text-sm">
                {categoryLabels[program.category]}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                {program.title}
              </h1>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-5 h-5" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Users className="w-5 h-5" />
                  <span>{program.level}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Left Column - Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <section className="mb-12">
                <h2 className="text-3xl font-black text-gray-900 mb-4">
                  Track Overview
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </section>

              {/* Skills */}
              <section className="mb-12">
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Skills You'll Master
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {program.skills.map((skill) => (
                    <div
                      key={skill}
                      className="p-4 bg-gradient-to-r from-[#4CC3E0]/10 to-[#A6D93A]/10 rounded-lg border border-[#4CC3E0]/30 flex items-center gap-3 hover:border-[#4CC3E0]/60 transition-colors"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-[#4CC3E0] to-[#A6D93A] rounded-full flex-shrink-0" />
                      <span className="font-semibold text-gray-900">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tools & Technologies */}
              <section className="mb-12">
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
                  <Code className="w-6 h-6 text-primary" />
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {program.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-gradient-to-r from-[#4CC3E0]/10 to-[#A6D93A]/10 text-gray-900 font-semibold rounded-lg border border-[#4CC3E0]/30 hover:border-[#4CC3E0] hover:bg-[#4CC3E0]/20 transition-all"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </section>

              {/* Learning Outcomes */}
              <section className="mb-12">
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Learning Outcomes
                </h3>
                <ul className="space-y-3">
                  {program.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Project Exposure */}
              <section className="mb-12">
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
                  <Layers className="w-6 h-6 text-primary" />
                  Project Exposure
                </h3>
                <div className="grid md:grid-cols-1 gap-3">
                  {program.projectExposure.map((project) => (
                    <div
                      key={project}
                      className="p-4 bg-gradient-to-r from-[#0F6FA3]/10 to-[#4CC3E0]/10 rounded-lg border border-[#0F6FA3]/20 flex items-center gap-3 hover:border-[#0F6FA3]/50 transition-colors"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-[#0F6FA3] to-[#4CC3E0] rounded-full flex-shrink-0" />
                      <span className="font-semibold text-gray-900">
                        {project}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Candidate Profile */}
              <section>
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  Ideal Candidate Profile
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {program.candidateProfile.map((profile) => (
                    <div
                      key={profile}
                      className="p-4 bg-gradient-to-r from-[#A6D93A]/10 to-[#0E6B2E]/10 rounded-lg border border-[#A6D93A]/30 hover:border-[#A6D93A] transition-colors"
                    >
                      <p className="font-semibold text-gray-900">{profile}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <div className="sticky top-24 bg-gradient-to-br from-primary-blue to-primary-green rounded-lg p-8 text-white shadow-xl">
                <h4 className="text-2xl font-black mb-2">Ready to Apply?</h4>
                <p className="text-white/90 mb-6">
                  Start your internship in {program.title} today with expert
                  mentorship and hands-on learning.
                </p>
                <Link
                  href={`/apply?program=${program.id}`}
                  className="block w-full text-center px-6 py-3 bg-white text-primary font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 mb-4"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-lg hover:bg-white/30 transition-all"
                >
                  Ask a Question
                </Link>
              </div>

              {/* Program Info */}
              <div className="mt-8 space-y-6">
                {/* Duration */}
                <div className="bg-gradient-to-br from-[#4CC3E0]/10 to-[#1B5F7F]/10 p-6 rounded-lg border border-[#4CC3E0]/20">
                  <div className="text-sm font-bold text-[#0F6FA3] mb-2">
                    Duration
                  </div>
                  <div className="text-2xl font-black text-gray-900">
                    {program.duration}
                  </div>
                </div>

                {/* Level */}
                <div className="bg-gradient-to-br from-[#A6D93A]/10 to-[#0E6B2E]/10 p-6 rounded-lg border border-[#A6D93A]/20">
                  <div className="text-sm font-bold text-[#0E6B2E] mb-2">
                    Level
                  </div>
                  <div className="text-xl font-bold text-gray-900">
                    {program.level}
                  </div>
                </div>

                {/* Skills Count */}
                <div className="bg-gradient-to-br from-[#0F6FA3]/10 to-[#4CC3E0]/10 p-6 rounded-lg border border-[#0F6FA3]/20">
                  <div className="text-sm font-bold text-[#0F6FA3] mb-2">
                    Skills
                  </div>
                  <div className="text-2xl font-black text-gray-900">
                    {program.skills.length}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Skills to master
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Programs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#4CC3E0]/5 to-[#A6D93A]/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-8">
              Other Internship Tracks in {categoryLabels[program.category]}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {programs
                .filter(
                  (p) => p.category === program.category && p.id !== program.id,
                )
                .slice(0, 3)
                .map((related) => (
                  <Link
                    key={related.id}
                    href={`/programs/${related.id}`}
                    className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
                  >
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {related.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      {related.shortDescription}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-xs font-semibold text-gray-600">
                        {related.duration}
                      </span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
