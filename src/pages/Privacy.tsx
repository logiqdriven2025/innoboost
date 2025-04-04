import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen pt-24 pb-6 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-primary">
            Privacy Policy
          </h1>

          <p className="text-slate-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              1. Information We Collect
            </h2>
            <p className="text-slate-600 mb-4">
              We collect information that you provide directly to us, including
              but not limited to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Name and contact information</li>
              <li>Business information</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              2. How We Use Your Information
            </h2>
            <p className="text-slate-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Provide and improve our services</li>
              <li>Communicate with you</li>
              <li>Process payments</li>
              <li>Send marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              3. Information Security
            </h2>
            <p className="text-slate-600">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              4. Your Rights
            </h2>
            <p className="text-slate-600 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              5. Contact Us
            </h2>
            <p className="text-slate-600">
              If you have any questions about this Privacy Policy, please
              contact us at:
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

export default Privacy;
