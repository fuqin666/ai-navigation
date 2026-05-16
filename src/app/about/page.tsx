import { Sparkles, Users, Award, Heart } from 'lucide-react';

const stats = [
  { icon: Sparkles, value: '100+', label: 'AI Tools' },
  { icon: Users, value: '100K+', label: 'Monthly Visitors' },
  { icon: Award, value: '50+', label: 'Categories' },
  { icon: Heart, value: '99%', label: 'User Satisfaction' },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        About AI Tools Hub
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Your go-to directory for discovering the best AI-powered tools to enhance your productivity and creativity.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="card text-center"
          >
            <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      <section className="space-y-6 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-400">
          At AI Tools Hub, our mission is to help professionals, creators, and enthusiasts discover 
          the most powerful AI tools available. We curate and categorize the best AI solutions 
          to make it easy for you to find the right tool for your needs.
        </p>
      </section>

      <section className="space-y-6 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How We Work</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-primary-600 dark:text-primary-400 font-bold">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Submit</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Tool developers submit their AI tools through our submission form.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-primary-600 dark:text-primary-400 font-bold">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Review</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Our team reviews each submission to ensure quality and relevance.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-primary-600 dark:text-primary-400 font-bold">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Publish</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Approved tools are added to our directory and made available to users.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Have questions or suggestions? Feel free to reach out to us at{' '}
          <a href="mailto:hello@aitoolshub.com" className="text-primary-500 hover:underline">
            hello@aitoolshub.com
          </a>.
        </p>
      </section>
    </div>
  );
}
