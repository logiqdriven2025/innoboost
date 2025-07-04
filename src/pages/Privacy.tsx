import { useEffect } from "react";

const Privacy = () => {
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (
  <div className="min-h-screen pt-24 pb-6 bg-white">
   <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-8 shadow-lg">
     <h1 className="text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>

     <p className="text-slate-600 mb-2">
      Effective Date: {new Date().toLocaleDateString("en-GB")}
     </p>
     <p className="mb-4 text-slate-600">
      This Privacy Policy describes how <strong>InnoSphere Ltd.</strong> –
      operator of the <strong>InnoBoost</strong> website and related services –
      collect, uses, shares, and safeguards your personal information when you
      engage with us – whether through our website, digital communications, or
      business relationships.
     </p>
     <p className="mb-8 text-slate-600">
      We are committed to handling your personal data with transparency, care,
      and in accordance with applicable data protection laws, including the{" "}
      <strong>Gibraltar Data Protection Act 2004</strong> and the{" "}
      <strong>EU General Data Protection Regulation (GDPR)</strong> where
      relevant.
     </p>
     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       1. Information We Collect
      </h2>
      <p className="text-slate-600 mb-4">
       We may collect personal information directly from you, through your
       interactions with our services, or automatically via website usage. This
       may include:
      </p>
      <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
       <li>
        <strong>Identification and Contact Details</strong>: Your full name,
        email address, phone number, job title, and company name
       </li>
       <li>
        <strong>Business and Transactional Information</strong>: Billing
        address, payment information, and contractual data
       </li>
       <li>
        <strong>Preferences and Communications</strong>: Subscription choices,
        inquiry records, and correspondence
       </li>
       <li>
        <strong>Technical and Usage Information</strong>: IP address, browser
        type, access times, referring URLs, and website interaction data
        (collected via cookies and similar technologies)
       </li>
      </ul>
     </section>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       2. How We Use Your Information
      </h2>
      <p className="text-slate-600 mb-4">
       Your personal data is used in a lawful, fair, and transparent manner for
       purposes such as:
      </p>
      <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
       <li>Delivering, maintaining, and improving our services</li>
       <li>Responding to your inquiries or support requests</li>
       <li>Managing payments and billing</li>
       <li>
        Sending relevant updates, newsletters, or marketing materials (with your
        consent)
       </li>
       <li>Ensuring website performance, usability, and security</li>
       <li>
        Complying with applicable legal obligations or regulatory requirements
       </li>
      </ul>
      <p className="text-slate-600 mb-4">
       We never sell or rent your personal data to third parties
      </p>
     </section>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       3. Cookies and Tracking Technologies
      </h2>
      <p className="text-slate-600 mb-4">
       We use <strong>cookies</strong> and similar technologies to enhance your
       browsing experience, analyze website performance, and deliver tailored
       content. These may include:
      </p>
      <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
       <li>
        <strong>Strictly Necessary Cookies</strong>: Enable core functionality
        such as security, network management, and accessibility
       </li>
       <li>
        <strong>Performance and Analytics Cookies</strong>: Help us understand
        how users interact with our website
       </li>
       <li>
        <strong>Marketing Cookies</strong>: Track your activity across sites to
        present more relevant advertising
       </li>
      </ul>
      <p className="text-slate-600 mb-4">
       You can manage your cookie preferences at any time through your browser
       settings or via our cookie consent tool.
      </p>
     </section>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       4. Third-Party Services
      </h2>
      <p className="text-slate-600 mb-4">
       We may engage third-party service providers to support our operations and
       service delivery. These trusted partners may process data on our behalf
       under strict confidentiality agreements and include:
      </p>
      <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
       <li>
        <strong>Payment Processors</strong> (e.g. Stripe, PayPal)
       </li>
       <li>
        <strong>Marketing and Email Platforms</strong> (e.g. Mailchimp, HubSpot)
       </li>
       <li>
        <strong>Cloud Hosting and Storage Providers</strong> (e.g. AWS, Google
        Cloud)
       </li>
       <li>
        <strong>Analytics Tools</strong> (e.g. Google Analytics)
       </li>
      </ul>
      <p className="text-slate-600 mb-4">
       All third parties are vetted to ensure compliance with applicable data
       protection regulations.
      </p>
     </section>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       5. International Data Transfers
      </h2>
      <p className="text-slate-600 mb-4">
       In the event that your personal data is transferred outside of{" "}
       <strong>Gibraltar</strong>
       or the <strong>European Economic Area (EEA)</strong>—for example, to
       cloud service providers or data processors—we ensure that:
      </p>
      <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
       <li>
        Transfers are made only to jurisdictions recognized as offering an
        adequate level of data protection, or
       </li>
       <li>
        Appropriate safeguards are in place, such as{" "}
        <strong>Standard Contractual Clauses (SCCs)</strong> approved by the
        European Commission
       </li>
      </ul>
      <p className="text-slate-600 mb-4">
       We take all necessary steps to ensure your data is handled securely and
       in line with this Privacy Policy.
      </p>
     </section>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       6. Data Retention
      </h2>
      <p className="text-slate-600 mb-4">
       We retain your personal data only for as long as necessary to fulfill the
       purposes outlined in this policy, including to satisfy any legal,
       accounting, or reporting requirements.
      </p>
      <p className="text-slate-600 mb-4">
       The specific retention period depends on the type of data and the context
       in which it was collected. Once your data is no longer needed, it is
       securely deleted or anonymized.
      </p>
     </section>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       7. Information Security
      </h2>
      <p className="text-slate-600 mb-4">
       We implement robust technical and organizational measures to protect your
       personal information from unauthorized access, disclosure, alteration, or
       destruction. These include:
      </p>
      <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
       <li>Encrypted data storage and transmission</li>
       <li>Access control and authentication mechanisms</li>
       <li>Secure server infrastructure and system monitoring</li>
      </ul>
      <p className="text-slate-600 mb-4">
       While we strive to use commercially acceptable means to protect your
       data, no method of transmission or storage is completely secure.
      </p>
     </section>

     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       8. Your Data Protection Rights
      </h2>
      <p className="text-slate-600 mb-4">
       As a data subject, you have the right to:
      </p>
      <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
       <li>
        <strong>Access</strong> the personal data we hold about you
       </li>
       <li>
        <strong>Rectify</strong> inaccuracies or incomplete information
       </li>
       <li>
        <strong>Request erasure</strong> of your data (subject to lawful
        exceptions)
       </li>
       <li>
        <strong>Restrict or object</strong> to the processing of your
        information
       </li>
       <li>
        <strong>Withdraw consent</strong> at any time (where processing is based
        on consent)
       </li>
       <li>
        <strong>Request data portability</strong> to another provider
       </li>
       <li>
        <strong>Lodge a complaint</strong> with the{" "}
        <strong>Gibraltar Regulatory Authority (GRA)</strong> if you believe
        your rights have been violated
       </li>
      </ul>
      <p className="text-slate-600 mb-4">
       To exercise any of your rights, please contact us using the details
       provided below.
      </p>
     </section>
     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       9. Contact Us
      </h2>
      <p className="text-slate-600">
       If you have questions, concerns, or requests regarding this Privacy
       Policy or how your data is handled, you can contact us at:
      </p>
      <p className="text-slate-600">
       <strong>Email</strong>: office@innoboost.io
      </p>
      <p className="text-slate-600 mb-4">
       <strong>Address</strong>: 15C1 Milton House, Town Range, Gibraltar
      </p>
     </section>
     <section>
      <h2 className="text-lg font-semibold mb-2 text-slate-900">
       10. Updates to This Privacy Policy
      </h2>
      <p className="text-slate-600 mb-4">
       We may update this Privacy Policy from time to time in response to legal,
       technical, or business developments. When we do, we will revise the
       "Effective Date" at the top of the policy and notify users where
       appropriate. We encourage you to review this policy periodically to stay
       informed of how we protect your information.
      </p>
     </section>
    </div>
   </div>
  </div>
 );
};

export default Privacy;
