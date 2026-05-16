import { notFound } from 'next/navigation';
import ToolCard from '@/components/ToolCard';
import { tools, categories } from '@/data/tools';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((cat) => cat.slug === slug);
  
  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.name} - AI Tools Hub`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((cat) => cat.slug === slug);
  
  if (!category) {
    notFound();
  }

  const filteredTools = tools.filter((tool) => tool.category === category.name);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-8">
        <Link
          href="/tools"
          className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Tools
        </Link>
      </div>

      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {category.name}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          {category.description}
        </p>
        <div className="mt-4 flex items-center gap-4">
          <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-medium">
            {filteredTools.length} tools
          </span>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
        {filteredTools.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 py-12">
            No tools found in this category yet.
          </p>
        )}
      </section>
    </div>
  );
}
