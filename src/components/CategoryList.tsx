import Link from 'next/link';
import { categories } from '@/data/tools';
import { PenTool, Image, Video, MessageCircle, Zap, Code, Mic, Palette } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'pen-tool': PenTool,
  'image': Image,
  'video': Video,
  'message-circle': MessageCircle,
  'zap': Zap,
  'code': Code,
  'mic': Mic,
  'palette': Palette,
};

interface CategoryListProps {
  selectedCategory?: string;
}

export default function CategoryList({ selectedCategory }: CategoryListProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
      {categories.map((category) => {
        const Icon = iconMap[category.icon] || Zap;
        const isSelected = selectedCategory === category.slug;
        
        return (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 ${
              isSelected
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-xs font-medium text-center">{category.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
