export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Terms of Service
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Last updated: May 2024
      </p>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Introduction</h2>
        <p className="text-gray-600 dark:text-gray-400">
          These Terms of Service ("Terms") govern your use of the AI Tools Hub website 
          ("Website"). By accessing or using our Website, you agree to be bound by these Terms.
        </p>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Use of Website</h2>
        <p className="text-gray-600 dark:text-gray-400">
          You may use our Website for lawful purposes only. You agree not to:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li>Use the Website for any illegal or unauthorized purpose</li>
          <li>Submit false or misleading information</li>
          <li>Interfere with the operation of the Website</li>
          <li>Violate any applicable laws or regulations</li>
        </ul>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Tool Submissions</h2>
        <p className="text-gray-600 dark:text-gray-400">
          When submitting a tool to our directory, you represent and warrant that:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li>You have the right to submit the tool</li>
          <li>The information provided is accurate and complete</li>
          <li>The tool does not violate any third-party rights</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400">
          We reserve the right to review, reject, or remove any tool submission at our discretion.
        </p>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Intellectual Property</h2>
        <p className="text-gray-600 dark:text-gray-400">
          All content on this Website, including text, graphics, logos, and images, is the property 
          of AI Tools Hub or its licensors and is protected by copyright laws.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Limitation of Liability</h2>
        <p className="text-gray-600 dark:text-gray-400">
          AI Tools Hub shall not be liable for any damages arising from your use of the Website 
          or any tools listed on the Website. Use of any tool is at your own risk.
        </p>
      </section>
    </div>
  );
}
