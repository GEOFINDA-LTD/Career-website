import { Program, categoryLabels } from '@/lib/programs-data'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ProgramCardProps {
  program: Program
}

export function ProgramCard({ program }: ProgramCardProps) {
  const categoryColor = {
    web: 'from-[#4CC3E0]/10 to-[#1B5F7F]/10 border-[#4CC3E0]/30',
    mobile: 'from-[#A6D93A]/10 to-[#0E6B2E]/10 border-[#A6D93A]/30',
    data: 'from-[#0F6FA3]/10 to-[#1B5F7F]/10 border-[#0F6FA3]/30',
    cloud: 'from-[#4CC3E0]/10 to-[#A6D93A]/10 border-[#4CC3E0]/30',
    ai: 'from-[#0E6B2E]/10 to-[#A6D93A]/10 border-[#0E6B2E]/30'
  }

  const categoryBadge = {
    web: 'bg-[#4CC3E0]/20 text-[#0F6FA3] font-bold',
    mobile: 'bg-[#A6D93A]/20 text-[#0E6B2E] font-bold',
    data: 'bg-[#0F6FA3]/20 text-[#0F6FA3] font-bold',
    cloud: 'bg-[#4CC3E0]/20 text-[#0F6FA3] font-bold',
    ai: 'bg-[#0E6B2E]/20 text-[#0E6B2E] font-bold'
  }

  return (
    <Link href={`/programs/${program.id}`}>
      <div className={`h-full border bg-gradient-to-br ${categoryColor[program.category]} rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}>
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col h-full">
          {/* Category Badge */}
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryBadge[program.category]}`}>
              {categoryLabels[program.category]}
            </span>
            <span className="text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded">
              {program.duration}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {program.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
            {program.shortDescription}
          </p>

          {/* Skills */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {program.skills.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="text-xs bg-white text-gray-700 px-2 py-1 rounded-full border border-gray-200"
                >
                  {skill}
                </span>
              ))}
              {program.skills.length > 3 && (
                <span className="text-xs text-gray-500 px-2 py-1">
                  +{program.skills.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Level Badge */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
            <span className={`text-xs font-semibold ${
              program.level === 'Beginner'
                ? 'text-green-700'
                : program.level === 'Intermediate'
                ? 'text-yellow-700'
                : 'text-red-700'
            }`}>
              {program.level}
            </span>
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}
