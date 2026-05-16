'use client';

import { useState, useMemo } from 'react';
import { Filter, X, Check, ChevronDown, ChevronRight } from 'lucide-react';
import { tools, categories } from '@/data/tools';

interface FiltersProps {
  selectedCategories: string[];
  selectedTags: string[];
  selectedPricing: string[];
  onCategoryChange: (categories: string[]) => void;
  onTagChange: (tags: string[]) => void;
  onPricingChange: (pricing: string[]) => void;
  onClearFilters: () => void;
}

type FilterSection = 'categories' | 'tags' | 'pricing';

export default function Filters({
  selectedCategories,
  selectedTags,
  selectedPricing,
  onCategoryChange,
  onTagChange,
  onPricingChange,
  onClearFilters,
}: FiltersProps) {
  const [expandedSections, setExpandedSections] = useState<FilterSection[]>(['categories', 'tags', 'pricing']);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    tools.forEach((tool) => {
      tool.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, []);

  const pricingOptions = ['free', 'paid', 'freemium'];

  const hasActiveFilters =
    selectedCategories.length > 0 || selectedTags.length > 0 || selectedPricing.length > 0;

  const toggleSection = (section: FilterSection) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  const toggleCategory = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    onCategoryChange(newCategories);
  };

  const toggleTag = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    onTagChange(newTags);
  };

  const togglePricing = (pricing: string) => {
    const newPricing = selectedPricing.includes(pricing)
      ? selectedPricing.filter((p) => p !== pricing)
      : [...selectedPricing, pricing];
    onPricingChange(newPricing);
  };

  const getPricingLabel = (pricing: string) => {
    switch (pricing) {
      case 'free':
        return 'Free';
      case 'paid':
        return 'Paid';
      case 'freemium':
        return 'Freemium';
      default:
        return pricing;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-primary-500" />
          <h3 className="font-semibold text-gray-900 dark:text-white">Filters</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm text-gray-500 hover:text-primary-500 transition-colors flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            Clear
          </button>
        )}
      </div>

      {/* Categories Section */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('categories')}
          className="w-full flex items-center justify-between text-left mb-3"
        >
          <span className="font-medium text-gray-900 dark:text-white">Categories</span>
          {expandedSections.includes('categories') ? (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          )}
        </button>
        {expandedSections.includes('categories') && (
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => toggleCategory(category.name)}
                className={`w-full flex items-center gap-2 cursor-pointer p-2 rounded-lg transition-colors text-left ${
                  selectedCategories.includes(category.name)
                    ? 'bg-primary-50 dark:bg-primary-900/30'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                    selectedCategories.includes(category.name)
                      ? 'bg-primary-500 border-primary-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  {selectedCategories.includes(category.name) && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {category.name}
                  <span className="ml-2 text-gray-400">({category.count})</span>
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Pricing Section */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('pricing')}
          className="w-full flex items-center justify-between text-left mb-3"
        >
          <span className="font-medium text-gray-900 dark:text-white">Pricing</span>
          {expandedSections.includes('pricing') ? (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          )}
        </button>
        {expandedSections.includes('pricing') && (
          <div className="space-y-2">
            {pricingOptions.map((pricing) => (
              <button
                key={pricing}
                onClick={() => togglePricing(pricing)}
                className={`w-full flex items-center gap-2 cursor-pointer p-2 rounded-lg transition-colors text-left ${
                  selectedPricing.includes(pricing)
                    ? 'bg-primary-50 dark:bg-primary-900/30'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                    selectedPricing.includes(pricing)
                      ? 'bg-primary-500 border-primary-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  {selectedPricing.includes(pricing) && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {getPricingLabel(pricing)}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tags Section */}
      <div>
        <button
          onClick={() => toggleSection('tags')}
          className="w-full flex items-center justify-between text-left mb-3"
        >
          <span className="font-medium text-gray-900 dark:text-white">Tags</span>
          {expandedSections.includes('tags') ? (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          )}
        </button>
        {expandedSections.includes('tags') && (
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 mb-3">Active filters:</p>
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-1 px-2 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 text-xs rounded-full"
              >
                {cat}
                <button
                  onClick={() => onCategoryChange(selectedCategories.filter((c) => c !== cat))}
                  className="hover:text-primary-800 dark:hover:text-primary-200"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {selectedPricing.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 text-xs rounded-full"
              >
                {getPricingLabel(p)}
                <button
                  onClick={() => onPricingChange(selectedPricing.filter((pr) => pr !== p))}
                  className="hover:text-green-800 dark:hover:text-green-200"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {selectedTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs rounded-full"
              >
                {tag}
                <button
                  onClick={() => onTagChange(selectedTags.filter((t) => t !== tag))}
                  className="hover:text-blue-800 dark:hover:text-blue-200"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
