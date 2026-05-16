'use client';

import { useState, useMemo } from 'react';
import SearchBar from '@/components/SearchBar';
import ToolCard from '@/components/ToolCard';
import Filters from '@/components/Filters';
import { tools } from '@/data/tools';

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedPricing, setSelectedPricing] = useState<string[]>([]);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          tool.category.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Category filter
      if (selectedCategories.length > 0) {
        if (!selectedCategories.includes(tool.category)) return false;
      }

      // Pricing filter
      if (selectedPricing.length > 0) {
        if (!selectedPricing.includes(tool.pricing)) return false;
      }

      // Tags filter - match any selected tag
      if (selectedTags.length > 0) {
        const hasMatchingTag = tool.tags.some((tag) => selectedTags.includes(tag));
        if (!hasMatchingTag) return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategories, selectedTags, selectedPricing]);

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedTags([]);
    setSelectedPricing([]);
  };

  const hasActiveFilters =
    selectedCategories.length > 0 || selectedTags.length > 0 || selectedPricing.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          All AI Tools
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Browse our complete directory of AI tools across all categories.
          Filter by category, tags, or pricing to find what you need.
        </p>
        <SearchBar onSearch={setSearchQuery} />
      </section>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <aside className="w-72 flex-shrink-0 hidden lg:block">
          <Filters
            selectedCategories={selectedCategories}
            selectedTags={selectedTags}
            selectedPricing={selectedPricing}
            onCategoryChange={setSelectedCategories}
            onTagChange={setSelectedTags}
            onPricingChange={setSelectedPricing}
            onClearFilters={handleClearFilters}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Mobile Filters Button */}
          <div className="lg:hidden mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <div className="flex flex-wrap items-center gap-2">
                {hasActiveFilters && (
                  <>
                    {selectedCategories.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 text-sm rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                    {selectedTags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {selectedPricing.slice(0, 2).map((p) => (
                      <span
                        key={p}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 text-sm rounded-full"
                      >
                        {p === 'free' ? 'Free' : p === 'paid' ? 'Paid' : 'Freemium'}
                      </span>
                    ))}
                    <button
                      onClick={handleClearFilters}
                      className="text-sm text-gray-500 hover:text-primary-500"
                    >
                      Clear filters
                    </button>
                  </>
                )}
                {!hasActiveFilters && (
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    No filters applied
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Tool Count and Results */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {searchQuery ? `Results for "${searchQuery}"` : 'All Tools'}
              {hasActiveFilters && (
                <span className="ml-2 text-sm font-normal text-gray-500">
                  (with filters)
                </span>
              )}
            </h2>
            <span className="text-gray-500 dark:text-gray-400">
              {filteredTools.length} tools found
            </span>
          </div>

          {/* Tool Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          {/* Empty State */}
          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No tools found
              </h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                {searchQuery
                  ? `No tools match your search for "${searchQuery}". Try adjusting your filters or search term.`
                  : 'No tools match your current filter selection. Try adjusting your filters.'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  handleClearFilters();
                }}
                className="mt-4 text-primary-500 hover:text-primary-600 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
