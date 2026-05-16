'use client';

import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { useState } from 'react';
import type { Tool } from '@/data/tools';

interface ToolImageProps {
  tool: Tool;
  size?: 'small' | 'large';
}

export default function ToolImage({ tool, size = 'small' }: ToolImageProps) {
  const [imageError, setImageError] = useState(false);

  const getAvatarUrl = () => {
    const hash = tool.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${hash}&background=%236366f1`;
  };

  return (
    <>
      {imageError ? (
        <div className="w-full h-full flex items-center justify-center">
          <Sparkles className={`${size === 'large' ? 'w-16 h-16' : 'w-6 h-6'} text-primary-500`} />
        </div>
      ) : (
        <Image
          src={imageError ? getAvatarUrl() : tool.image}
          alt={tool.name}
          fill
          className="object-cover"
          loading="lazy"
          onError={() => setImageError(true)}
        />
      )}
    </>
  );
}
