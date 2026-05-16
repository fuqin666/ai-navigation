import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <div className="text-6xl mb-4">404</div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Page Not Found
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 btn-primary"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back Home
        </Link>
        <Link
          href="/tools"
          className="flex items-center gap-2 btn-secondary"
        >
          <Search className="w-4 h-4" />
          Browse Tools
        </Link>
      </div>
    </div>
  );
}
