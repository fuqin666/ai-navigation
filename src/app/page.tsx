'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import CategoryList from '@/components/CategoryList';
import ToolCard from '@/components/ToolCard';
import { tools, featuredTools } from '@/data/tools';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    if (!searchQuery) return tools;
    const query = searchQuery.toLowerCase();
    return tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          Discover AI Tools
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Find the Best{' '}
          <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
            AI Tools
          </span>{' '}
          for Your Workflow
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Browse thousands of AI-powered tools for writing, design, development, and more.
          Find the perfect AI assistant to boost your productivity.
        </p>
        <SearchBar onSearch={setSearchQuery} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Categories</h2>
        <CategoryList />
      </section>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured AI Tools</h2>
          <Link
            href="/tools"
            className="flex items-center gap-1 text-primary-500 hover:text-primary-600 font-medium transition-colors duration-200"
          >
            View All Tools
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {searchQuery && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Search Results for "{searchQuery}" ({filteredTools.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          {filteredTools.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
              No tools found matching "{searchQuery}".
            </p>
          )}
        </section>
      )}

      <section className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Submit Your AI Tool</h2>
        <p className="text-primary-100 mb-6">
          Have an AI tool to share? Submit it to our directory and reach thousands of users.
        </p>
        <Link
          href="/submit"
          className="inline-flex items-center gap-2 bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          Submit Tool
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
