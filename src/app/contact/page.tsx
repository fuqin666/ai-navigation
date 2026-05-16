'use client';

import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have questions, suggestions, or feedback? We'd love to hear from you!
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  For general inquiries, please email us at:
                </p>
                <a href="mailto:hello@aitoolshub.com" className="text-primary-500 hover:text-primary-600">
                  hello@aitoolshub.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  For urgent matters, you can reach us at:
                </p>
                <a href="tel:+1-234-567-890" className="text-primary-500 hover:text-primary-600">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  AI Tools Hub
                  <br />
                  123 Tech Street
                  <br />
                  San Francisco, CA 94105
                  <br />
                  United States
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl text-white">
            <h3 className="text-xl font-semibold mb-2">Submit Your AI Tool</h3>
            <p className="text-primary-100 mb-4">
              Have an AI tool to share with our community? Submit it to our directory!
            </p>
            <a
              href="/submit"
              className="inline-flex items-center gap-2 bg-white text-primary-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Submit Tool
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {isSubmitted && (
              <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-4 rounded-lg">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field w-full"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field w-full"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="input-field w-full"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="submit-tool">Submit Tool</option>
                <option value="feedback">Feedback</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="support">Support</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="input-field w-full resize-none"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
