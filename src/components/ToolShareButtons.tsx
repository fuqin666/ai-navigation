'use client';

import { Copy, Check, Twitter, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface ToolShareButtonsProps {
  toolName: string;
  toolDescription: string;
  slug: string;
}

export default function ToolShareButtons({ toolName, toolDescription, slug }: ToolShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const currentUrl = `https://ai-tools-hub.com/tool/${slug}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShareTwitter = () => {
    const tweetText = `Check out ${toolName} - ${toolDescription}\n${currentUrl}`;
    const encodedText = encodeURIComponent(tweetText);
    window.open(`https://twitter.com/intent/tweet?text=${encodedText}`, '_blank');
  };

  const handleShareWhatsApp = () => {
    const shareText = `Check out ${toolName}: ${toolDescription}\n${currentUrl}`;
    const encodedText = encodeURIComponent(shareText);
    window.open(`https://api.whatsapp.com/send?text=${encodedText}`, '_blank');
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-500 dark:text-gray-400 text-sm">Share:</span>
      <button
        onClick={handleShareTwitter}
        className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:hover:bg-blue-800/30 dark:text-blue-400 transition-colors duration-200"
        title="Share on Twitter"
      >
        <Twitter className="w-5 h-5" />
      </button>
      <button
        onClick={handleShareWhatsApp}
        className="p-2 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 dark:bg-green-900/30 dark:hover:bg-green-800/30 dark:text-green-400 transition-colors duration-200"
        title="Share on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </button>
      <button
        onClick={handleCopyLink}
        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400 transition-colors duration-200"
        title="Copy Link"
      >
        {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
      </button>
    </div>
  );
}
