'use client';

import { useState, useMemo } from 'react';
import SearchBar from '@/components/SearchBar';
import CategoryList from '@/components/CategoryList';
import ToolCard from '@/components/ToolCard';
import { tools } from '@/data/tools';
import { Filter } from 'lucide-react';

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    if (!searchQuery) return tools;
    const query = searchQuery.toLowerCase();
    return tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        tool.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          All AI Tools
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Browse our complete directory of AI tools across all categories.
          Filter by category or search to find what you need.
        </p>
        <SearchBar onSearch={setSearchQuery} />
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-gray-500" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filter by Category</h2>
        </div>
        <CategoryList />
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {searchQuery ? `Results for "${searchQuery}"` : 'All Tools'}
          </h2>
          <span className="text-gray-500 dark:text-gray-400">
            {filteredTools.length} tools found
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
        {filteredTools.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 py-12">
            No tools found matching "{searchQuery}". Try a different search term.
          </p>
        )}
      </section>
    </div>
  );
}
