import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen pt-24 pb-6">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8">
          <h1 className="text-4xl font-bold mb-8 gradient-text">
            Terms of Service
          </h1>

          <p className="text-gray-300 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-300">
              By accessing and using InnoBoost's services, you accept and agree
              to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              2. Description of Services
            </h2>
            <p className="text-gray-300 mb-4">
              InnoBoost provides digital marketing services including but not
              limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Data Analytics and Insights</li>
              <li>AI-Powered Automation</li>
              <li>Marketing Strategy Development</li>
              <li>Content Creation and Management</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              3. User Obligations
            </h2>
            <p className="text-gray-300 mb-4">Users agree to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Provide accurate information</li>
              <li>Maintain confidentiality of account credentials</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Not engage in unauthorized activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              4. Intellectual Property
            </h2>
            <p className="text-gray-300">
              All content, features, and functionality are owned by InnoBoost
              and are protected by international copyright, trademark, and other
              intellectual property rights laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              5. Contact Information
            </h2>
            <p className="text-gray-300">
              For any questions about these Terms, please contact us at:
              <br />
              Email: legal@innoboost.com
              <br />
              Address: 123 Innovation Street, Tech City
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
