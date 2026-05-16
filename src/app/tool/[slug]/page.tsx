import { notFound } from 'next/navigation';
import { tools, categories } from '@/data/tools';
import { Star, Users, ExternalLink, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ToolImage from '@/components/ToolImage';
import ToolShareButtons from '@/components/ToolShareButtons';

interface ToolPageProps {
  params: Promise<{      
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = tools.find((t) => t.name.toLowerCase().replace(/\s+/g, '-') === slug);
  
  if (!tool) {
    return {
      title: 'Tool Not Found',
      description: 'The tool you are looking for was not found.',
    };
  }

  const currentUrl = `https://ai-tools-hub.com/tool/${slug}`;

  return {
    title: `${tool.name} - AI Tools Hub - Discover the Best AI Tools`,
    description: `${tool.description} - ${tool.name} is a powerful AI tool in the ${tool.category} category. Try it now!`,
    keywords: [...tool.tags, tool.category, 'AI', 'AI tools', tool.name].join(', '),
    authors: [{ name: 'AI Tools Hub' }],
    openGraph: {
      title: `${tool.name} - AI Tools Hub`,
      description: tool.description,
      url: currentUrl,
      siteName: 'AI Tools Hub',
      images: [
        {
          url: tool.image,
          width: 1200,
          height: 630,
          alt: tool.name,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} - AI Tools Hub`,
      description: tool.description,
      images: [tool.image],
      creator: '@AIToolsHub',
    },
    robots: {
      index: true,
      follow: true,
      maxImagePreview: 'large',
    },
  };
}

const getPricingBadge = (pricing: string) => {
  switch (pricing) {
    case 'free':
      return { label: 'Free', className: 'bg-green-100 text-green-700' };
    case 'paid':
      return { label: 'Paid', className: 'bg-red-100 text-red-700' };
    case 'freemium':
      return { label: 'Freemium', className: 'bg-blue-100 text-blue-700' };
    default:
      return { label: pricing, className: 'bg-gray-100 text-gray-700' };
  }
};

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = tools.find((t) => t.name.toLowerCase().replace(/\s+/g, '-') === slug);
  
  if (!tool) {
    notFound();
  }

  const category = categories.find((cat) => cat.name === tool.category);
  const pricingInfo = getPricingBadge(tool.pricing);

  const similarTools = tools
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 6);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-8">
        <Link
          href="/tools"
          className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Tools
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3">
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 aspect-square">
            <ToolImage tool={tool} size="large" />
          </div>
        </div>

        <div className="lg:w-2/3">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {tool.name}
            </h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${pricingInfo.className}`}>
              {pricingInfo.label}
            </span>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {tool.description}
          </p>

          <div className="flex items-center gap-6 mb-6">
            <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">{tool.rating}</span>
              <span className="text-gray-400">(Rating)</span>
            </span>
            <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Users className="w-5 h-5" />
              <span>{tool.users} users</span>
            </span>
          </div>

          {category && (
            <div className="mb-6">
              <span className="text-gray-500 dark:text-gray-400 text-sm">Category:</span>
              <Link
                href={`/categories/${category.slug}`}
                className="ml-2 text-primary-500 hover:text-primary-600 font-medium"
              >
                {category.name}
              </Link>
            </div>
          )}

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-4 h-4 text-gray-500" />
              <span className="text-gray-500 dark:text-gray-400 text-sm">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tool.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Visit Website
              <ExternalLink className="w-4 h-4" />
            </a>
            
            <ToolShareButtons 
              toolName={tool.name} 
              toolDescription={tool.description} 
              slug={slug} 
            />
          </div>
        </div>
      </div>

      <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Similar Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {similarTools.map((similarTool) => (
            <Link
              key={similarTool.id}
              href={`/tool/${similarTool.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="card flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50">
                <ToolImage tool={similarTool} size="small" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {similarTool.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
                  {similarTool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
