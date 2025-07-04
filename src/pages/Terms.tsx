import { useEffect } from "react";

const Terms = () => {
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (
  <div className="min-h-screen pt-24 pb-6 bg-white">
   <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-8 shadow-lg">
     <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Service</h1>

     <p className="text-slate-600 mb-2">
      Effective Date: {new Date().toLocaleDateString("en-GB")}
     </p>

     <p className="mb-8 text-slate-600">
      These Terms of Service (“Terms”) govern your access to, and use of
      services provided by <strong>InnoSphere</strong> Ltd., operating under the
      trade name
      <strong> InnoBoost</strong>. By using our website, engaging with our
      services, or entering into any agreement with us, you agree to comply with
      and be bound by these Terms. If you do not agree with these Terms, you
      must not access or use our services.
     </p>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       1. Scope of Services
      </h2>
      <p className="text-slate-600 mb-4">
       InnoBoost provides digital marketing and automation services, including
       but not limited to:
      </p>
      <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
       <li>Data Analytics and Insights</li>
       <li>AI-Powered Marketing Automation</li>
       <li>Marketing Strategy Development</li>
       <li>Content Creation and Management</li>
       <li>Performance Monitoring and Reporting</li>
      </ul>
      <p className="text-slate-600 mb-4">
       The scope, pricing, and specific deliverables of any service engagement
       will be detailed in individual proposals, statements of work, or
       commercial agreements.
      </p>
     </section>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       2. Eligibility and Account Responsibilities
      </h2>
      <p className="text-slate-600 mb-4">
       To use our services, you must be legally capable of entering into a
       binding agreement. If you access our services on behalf of a company or
       other legal entity, you represent that you have the authority to bind
       that entity to these Terms.
      </p>
      <p className="text-slate-600">You agree to:</p>
      <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
       <li>
        Provide accurate, current, and complete information during any
        registration or onboarding process
       </li>
       <li>
        Maintain the confidentiality of account credentials and restrict
        unauthorized access
       </li>
       <li>
        Notify us immediately of any security breach or misuse of your account
       </li>
      </ul>
     </section>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       3. Acceptable Use
      </h2>
      <p className="text-slate-600 mb-4">
       You agree to use our services in compliance with all applicable laws and
       regulations and not to:
      </p>
      <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
       <li>Use our services for unlawful, fraudulent, or malicious purposes</li>
       <li>
        Interfere with or disrupt our infrastructure or other users' access
       </li>
       <li>Attempt to gain unauthorized access to our systems or data</li>
       <li>
        Transmit viruses, malware, or any harmful code through our platforms
       </li>
      </ul>
      <p className="text-slate-600 mb-4">
       We reserve the right to suspend or terminate your access if you violate
       these conditions.
      </p>
     </section>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       4. Fees and Payment
      </h2>
      <p className="text-slate-600 mb-4">
       All fees for services are specified in our proposals, contracts, or
       invoices. Unless otherwise agreed in writing:
      </p>
      <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
       <li>
        Payments are due in full within the timeline specified on the invoice
       </li>
       <li>Late payments may incur interest or suspension of services</li>
      </ul>
      <p className="text-slate-600 mb-4">
       All prices are exclusive of VAT or applicable taxes, unless stated
       otherwise InnoBoost reserves the right to modify pricing with prior
       written notice.
      </p>
     </section>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       5. Intellectual Property
      </h2>
      <p className="text-slate-600 mb-4">
       All content, tools, software, documentation, and other intellectual
       property provided by InnoBoost remain the sole property of{" "}
       <strong>InnoSphere Ltd</strong>. or its licensors. You may not copy,
       reproduce, modify, or distribute any of our intellectual property without
       prior written consent.
      </p>
      <p className="text-slate-600 mb-4">
       We do not claim ownership of content or materials provided by you, but
       you grant us a non-exclusive license to use such content strictly for the
       delivery of our services.
      </p>
     </section>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       6. Confidentiality
      </h2>
      <p className="text-slate-600 mb-4">
       Each party agrees to maintain the confidentiality of proprietary or
       non-public information disclosed during the course of the relationship.
       This obligation remains in effect both during and after the termination
       of the agreement.
      </p>
     </section>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       7. Disclaimers and Limitation of Liability
      </h2>
      <p className="text-slate-600 mb-4">
       Our services are provided on an “as-is” and “as-available” basis. We do
       not warrant that our services will be uninterrupted, error-free, or fully
       secure.
      </p>
      <p className="text-slate-600">
       To the maximum extent permitted by law, InnoBoost shall not be liable
       for:
      </p>
      <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
       <li>Any indirect, incidental, or consequential damages</li>
       <li>Loss of profits, business, or data</li>
       <li>Service interruptions due to events beyond our control</li>
      </ul>
      <p className="text-slate-600 mb-4">
       Our total liability shall not exceed the amount you paid to us for
       services during the six (6) months preceding the claim.
      </p>
     </section>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       8. Termination
      </h2>
      <p className="text-slate-600 mb-4">
       Either party may terminate a service agreement with written notice,
       subject to the terms of any signed contract. Upon termination:
      </p>
      <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
       <li>All outstanding fees become immediately due</li>
       <li>Your right to access or use our services ceases</li>
       <li>
        We may retain and/or destroy your data in accordance with our Privacy
        Policy and legal obligations
       </li>
      </ul>
     </section>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       9. Governing Law
      </h2>
      <p className="text-slate-600 mb-4">
       These Terms shall be governed by and construed in accordance with the
       laws of <strong>Gibraltar</strong>. Any disputes arising from or related
       to these Terms shall be subject to the exclusive jurisdiction of the
       courts of Gibraltar.
      </p>
     </section>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       10. Force Majeure
      </h2>
      <p className="text-slate-600 mb-4">
       InnoBoost shall not be held liable for any failure or delay in the
       performance of its obligations due to causes beyond its reasonable
       control, including but not limited to acts of God, natural disasters,
       pandemics, cyberattacks, telecommunications failures, government actions,
       labor disputes, or outages in third-party hosting services.
      </p>
     </section>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       11. Entire Agreement
      </h2>
      <p className="text-slate-600 mb-4">
       These Terms, together with any signed proposals, contracts, or service
       agreements, constitute the entire agreement between you and InnoBoost
       regarding the use of our services. They supersede all prior agreements,
       understandings, or representations, whether oral or written, relating to
       the subject matter herein.
      </p>
      <p className="text-slate-600 mb-4">
       No amendment or waiver of these Terms shall be valid unless in writing
       and signed by both parties.
      </p>
     </section>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       12. Changes to These Terms
      </h2>
      <p className="text-slate-600 mb-4">
       We may update these Terms from time to time to reflect changes in our
       services, operations, or legal requirements. When we do, we will post the
       updated version on our website with a revised effective date. Continued
       use of our services constitutes acceptance of the updated Terms.
      </p>
     </section>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       13. Contact Information
      </h2>
      <p className="text-slate-600">
       If you have any questions about these Terms, please contact us at:
      </p>
      <p className="text-slate-600">
       <strong>InnoSphere Ltd. (trading as InnoBoost)</strong>
      </p>
      <p className="text-slate-600">
       <strong>Email</strong>: office@innoboost.io
      </p>
      <p className="text-slate-600 mb-4">
       <strong>Address</strong>: 15C1 Milton House, Town Range, Gibraltar
      </p>
     </section>
    </div>
   </div>
  </div>
 );
};

export default Terms;
