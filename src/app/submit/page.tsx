'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    url: '',
    category: '',
    tags: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const categories = [
    'AI Writing Tools',
    'AI Image Generators',
    'AI Video Tools',
    'AI Chatbots',
    'AI Productivity',
    'AI Code Assistants',
    'AI Audio Tools',
    'AI Design Tools',
  ];

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Tool Submitted Successfully!
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Thank you for submitting your AI tool. Our team will review it and add it to the directory.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-primary"
        >
          Submit Another Tool
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Submit Your AI Tool
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Share your AI tool with our community. Fill out the form below and we'll review your submission.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
            Tool Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="input-field"
            placeholder="Enter your tool name"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
            rows={4}
            className="input-field resize-none"
            placeholder="Describe your tool in a few sentences"
          />
        </div>

        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
            Website URL
          </label>
          <input
            type="url"
            id="url"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            required
            className="input-field"
            placeholder="https://yourtool.com"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
            Category
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
            className="input-field"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
            Tags
          </label>
          <input
            type="text"
            id="tags"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            className="input-field"
            placeholder="Comma-separated tags (e.g., Writing, Productivity, AI)"
          />
        </div>

        <button
          type="submit"
          className="btn-primary flex items-center justify-center gap-2 w-full py-3"
        >
          <Send className="w-5 h-5" />
          Submit Tool
        </button>
      </form>
    </div>
  );
}
