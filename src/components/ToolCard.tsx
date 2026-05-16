import Link from 'next/link';
import Image from 'next/image';
import { Star, Users, ExternalLink } from 'lucide-react';
import type { Tool } from '@/data/tools';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="card group hover:-translate-y-1 transition-transform duration-300">
      <div className="flex gap-4">
        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={tool.image}
            alt={tool.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-gray-900 dark:text-white truncate group-hover:text-primary-500 transition-colors duration-200">
              {tool.name}
            </h3>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 line-clamp-2">
            {tool.description}
          </p>
          
          <div className="flex flex-wrap gap-1.5 mt-2">
            {tool.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 mt-3 text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              {tool.rating}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              {tool.users} users
            </span>
          </div>
          
          <Link
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 font-medium text-sm mt-3 transition-colors duration-200"
          >
            Visit
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
