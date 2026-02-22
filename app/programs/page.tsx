'use client'

import { useState, useMemo } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProgramCard } from '@/components/program-card'
import { programs, categoryLabels, type Program } from '@/lib/programs-data'
import { Search, Filter } from 'lucide-react'

type CategoryType = Program['category']

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPrograms = useMemo(() => {
    return programs.filter(program => {
      const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory
      const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           program.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const categories: (CategoryType | 'all')[] = ['all', 'web', 'mobile', 'data', 'cloud', 'ai']

  return (
    <>
      <main>
        {/* Page Hero */}
        <section className="gradient-hero py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Explore Our <span className="text-gradient-brand">Technology Programs</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Choose from 25+ carefully designed programs across five major technology areas. Each program includes mentorship, hands-on projects, and career support.
            </p>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="sticky top-20 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search programs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <Filter className="w-5 h-5 text-gray-600 flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? 'gradient-brand text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Programs' : categoryLabels[category as CategoryType]}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <p className="text-sm text-gray-600 mt-4">
              Showing {filteredPrograms.length} of {programs.length} programs
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredPrograms.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPrograms.map((program, index) => (
                  <div
                    key={program.id}
                    className="animate-float-in"
                    style={{ animationDelay: `${(index % 6) * 0.05}s` }}
                  >
                    <ProgramCard program={program} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600 mb-4">
                  No programs found matching your search.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('all')
                  }}
                  className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Choose your program and apply today. Our team will guide you through the enrollment process.
            </p>
            <a
              href="/apply"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-green text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Apply Now
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
