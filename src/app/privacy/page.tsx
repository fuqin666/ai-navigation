export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Privacy Policy
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Last updated: May 2024
      </p>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Introduction</h2>
        <p className="text-gray-600 dark:text-gray-400">
          AI Tools Hub ("we", "us", or "our") is committed to protecting the privacy and security 
          of your personal information. This Privacy Policy explains how we collect, use, 
          disclose, and protect information about you when you use our website.
        </p>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Information We Collect</h2>
        <p className="text-gray-600 dark:text-gray-400">
          We may collect the following types of information:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>Personal Information:</strong> When you submit a tool, we may collect your name, email address, and website URL.</li>
          <li><strong>Usage Data:</strong> We may collect information about how you use our website, including pages visited and time spent.</li>
          <li><strong>Cookies:</strong> We use cookies to improve your experience and track usage patterns.</li>
        </ul>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">How We Use Your Information</h2>
        <p className="text-gray-600 dark:text-gray-400">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li>To provide and maintain our website</li>
          <li>To review and process tool submissions</li>
          <li>To improve our website and services</li>
          <li>To communicate with you about your submissions</li>
        </ul>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Disclosure of Your Information</h2>
        <p className="text-gray-600 dark:text-gray-400">
          We do not sell your personal information to third parties. We may disclose your information in the following cases:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li>To comply with legal obligations</li>
          <li>To protect our rights and property</li>
          <li>With your consent</li>
        </ul>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Security</h2>
        <p className="text-gray-600 dark:text-gray-400">
          We take reasonable measures to protect your information from unauthorized access, use, or disclosure. 
          However, no method of transmission over the internet or electronic storage is completely secure.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Changes to This Policy</h2>
        <p className="text-gray-600 dark:text-gray-400">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
          the new Privacy Policy on this page.
        </p>
      </section>
    </div>
  );
}
