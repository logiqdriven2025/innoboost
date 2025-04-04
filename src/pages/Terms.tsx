import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen pt-24 pb-6 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-primary">
            Terms of Service
          </h1>

          <p className="text-slate-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-600">
              By accessing and using InnoBoost's services, you accept and agree
              to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              2. Description of Services
            </h2>
            <p className="text-slate-600 mb-4">
              InnoBoost provides digital marketing services including but not
              limited to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Data Analytics and Insights</li>
              <li>AI-Powered Automation</li>
              <li>Marketing Strategy Development</li>
              <li>Content Creation and Management</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              3. User Obligations
            </h2>
            <p className="text-slate-600 mb-4">Users agree to:</p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Provide accurate information</li>
              <li>Maintain confidentiality of account credentials</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Not engage in unauthorized activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              4. Intellectual Property
            </h2>
            <p className="text-slate-600">
              All content, features, and functionality are owned by InnoBoost
              and are protected by international copyright, trademark, and other
              intellectual property rights laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              5. Contact Information
            </h2>
            <p className="text-slate-600">
              For any questions about these Terms, please contact us at:
              <br />
              Email: office@innoboost.io
              <br />
              Address: Victoria House, Office D, Suite 21/22, 26 Main Street,
              Gibraltar, GX11 1AA
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
