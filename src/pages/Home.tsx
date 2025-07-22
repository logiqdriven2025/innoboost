import React, { useState, useRef } from "react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
import emailjs from "@emailjs/browser";
import {
 ArrowRight,
 CheckCircle,
 BarChart3,
 AlertCircle,
 FileText,
 Database,
 Brain,
} from "lucide-react";
const Home = () => {
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
  "idle"
 );
 const formRef = useRef<HTMLFormElement>(null);
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  company: "",
  message: "",
 });

 const handleChange = (
  e: React.ChangeEvent<
   HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >
 ) => {
  setFormData({
   ...formData,
   [e.target.name]: e.target.value,
  });
 };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!formRef.current) return;

  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
   // 1. Send enquiry to office email
   await emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID_OFFICE, // new template for office
    formRef.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
   );

   // 2. Send auto-reply to user
   await emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID_BOOK, // existing template for user
    formRef.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
   );

   setSubmitStatus("success");
   formRef.current.reset();
   setFormData({
    name: "",
    email: "",
    company: "",
    message: "",
   });
  } catch (error) {
   console.error("Failed to send email!:", error);
   setSubmitStatus("error");
  } finally {
   setIsSubmitting(false);
  }
 };

 const titles: Record<string, { title: string; description: string }> = {
  "Real-time analytics and reporting": {
   title: "Instant Insights, Instant Impact",
   description:
    "Unlock the power of live data to make faster, smarter decisions. Empower every team with up-to-the-second analytics—no delays, no guesswork.",
  },
  "Automated lead distribution": {
   title: "Lead Delivery in Real Time",
   description:
    "Automatically route leads to the right teams, partners, or reps based on custom rules. Increase speed-to-lead and never miss an opportunity.",
  },
  "Smart campaign optimization": {
   title: "Marketing That Learns and Adapts",
   description:
    "Optimize campaign performance in real-time with AI-driven adjustments and deep performance tracking.",
  },
  "Partner management tools": {
   title: "Collaborate Smarter, Grow Faster",
   description:
    "Centralize your partner programs, manage performance, and streamline communication in one platform.",
  },
  "Integration with major platforms": {
   title: "Connect with Your Stack Seamlessly",
   description:
    "No silos. No barriers. Our platform integrates with leading CRMs, marketing tools, and productivity apps.",
  },
  "Advanced security features": {
   title: "Enterprise-Grade Protection, Always On",
   description:
    "Protect your data, users, and systems with cutting-edge security protocols.",
  },
 };
 const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
 const keyFeatures: Record<
  string,
  { icon: JSX.Element; title: string; description: string }[]
 > = {
  "Real-time analytics and reporting": [
   {
    icon: <BarChart3 className="w-5 h-5 text-blue-500" />,
    title: "Live Dashboard Feeds",
    description:
     "View continuously updating KPIs and metrics in a single, intuitive dashboard.",
   },
   {
    icon: <AlertCircle className="w-5 h-5 text-amber-500" />,
    title: "Automated Alerts",
    description:
     "Get notified immediately when thresholds are met or anomalies are detected.",
   },
   {
    icon: <FileText className="w-5 h-5 text-green-500" />,
    title: "Custom Reporting Suite",
    description:
     "Create, save, and share bespoke reports tailored to your teams.",
   },
   {
    icon: <Database className="w-5 h-5 text-purple-500" />,
    title: "Unified Data Integration",
    description:
     "Seamlessly connect your CRM, ERP, web, IoT, and cloud systems.",
   },
   {
    icon: <Brain className="w-5 h-5 text-pink-500" />,
    title: "Smart Insights Engine",
    description:
     "AI-driven pattern spotting for subtle trends and predictive signals.",
   },
  ],
  "Automated lead distribution": [
   {
    icon: <BarChart3 className="w-5 h-5 text-blue-500" />,
    title: "Rule-Based Routing",
    description:
     "Configure lead flow rules by geography, score, product, or capacity.",
   },
   {
    icon: <AlertCircle className="w-5 h-5 text-amber-500" />,
    title: "Round Robin or Priority Logic",
    description:
     "Distribute leads fairly or based on availability and expertise.",
   },
   {
    icon: <FileText className="w-5 h-5 text-green-500" />,
    title: "Instant Notifications",
    description: "Alert recipients immediately via email, SMS, or CRM.",
   },
   {
    icon: <Database className="w-5 h-5 text-purple-500" />,
    title: "Performance Tracking",
    description:
     "Monitor response times and conversion metrics for every recipient.",
   },
  ],
  "Smart campaign optimization": [
   {
    icon: <BarChart3 className="w-5 h-5 text-blue-500" />,
    title: "Real-Time A/B Testing",
    description: "",
   },
   {
    icon: <AlertCircle className="w-5 h-5 text-amber-500" />,
    title: "AI Budget Allocation",
    description: "",
   },
   {
    icon: <FileText className="w-5 h-5 text-green-500" />,
    title: "Audience Performance Insights",
    description: "",
   },
   {
    icon: <Database className="w-5 h-5 text-purple-500" />,
    title: "Channel Optimization (Web, Email, Ads)",
    description: "",
   },
  ],
  "Partner management tools": [
   {
    icon: <BarChart3 className="w-5 h-5 text-blue-500" />,
    title: "Partner Onboarding Automation",
    description: "",
   },
   {
    icon: <AlertCircle className="w-5 h-5 text-amber-500" />,
    title: "Performance Dashboards",
    description: "",
   },
   {
    icon: <FileText className="w-5 h-5 text-green-500" />,
    title: "Resource Sharing Hub",
    description: "",
   },
   {
    icon: <Database className="w-5 h-5 text-purple-500" />,
    title: "Lead Sharing & Deal Registration",
    description: "",
   },
  ],
  "Integration with major platforms": [
   {
    icon: <BarChart3 className="w-5 h-5 text-blue-500" />,
    title: "CMS Integrations (WordPress, Webflow, WooCommerce, etc.)",
    description: "",
   },
   {
    icon: <AlertCircle className="w-5 h-5 text-amber-500" />,
    title: "Marketing Automation Tools (Google Ads, Mailchimp, etc.)",
    description: "",
   },
   {
    icon: <FileText className="w-5 h-5 text-green-500" />,
    title: "E-commerce Platforms (Shopify, BigCommerce, Magento, etc.)",
    description: "",
   },
   {
    icon: <Database className="w-5 h-5 text-purple-500" />,
    title: "Single Sign-On and Identity Management",
    description: "",
   },
  ],
  "Advanced security features": [
   {
    icon: <BarChart3 className="w-5 h-5 text-blue-500" />,
    title: "Role-Based Access Controls",
    description: "",
   },
   {
    icon: <AlertCircle className="w-5 h-5 text-amber-500" />,
    title: "Data Encryption (at-rest and in-transit)",
    description: "",
   },
   {
    icon: <FileText className="w-5 h-5 text-green-500" />,
    title: "Multi-Factor Authentication (MFA)",
    description: "",
   },
   {
    icon: <Database className="w-5 h-5 text-purple-500" />,
    title: "Audit Logs and Activity Monitoring",
    description: "",
   },
   {
    icon: <Database className="w-5 h-5 text-purple-500" />,
    title: "Compliance Support (GDPR, SOC 2, etc.)",
    description: "",
   },
  ],
 };

 const benefits: Record<string, { benefit: string; description: string }[]> = {
  "Real-time analytics and reporting": [
   {
    benefit: "Instant Action",
    description: "Respond the moment insights emerge.",
   },
   {
    benefit: "Proactive Risk Mitigation",
    description: "Detect issues before they escalate.",
   },
   {
    benefit: "Unified Data View",
    description: "One live source of truth for all stakeholders.",
   },
   {
    benefit: "Efficient Operations",
    description: "Automate reporting, reduce manual labor.",
   },
  ],
  "Automated lead distribution": [
   {
    benefit: "Speed",
    description: "Reduce lead response time dramatically.",
   },
   {
    benefit: "Fairness",
    description: "Ensure balanced distribution across teams.",
   },
   {
    benefit: "Customization",
    description: "Set rules that fit your business model.",
   },
   {
    benefit: "Scalability",
    description: "Handles lead spikes with ease.",
   },
  ],
  "Smart campaign optimization": [
   {
    benefit: "Better ROI",
    description: "Focus budget on what performs.",
   },
   {
    benefit: "Agility",
    description: "Adjust campaigns without manual intervention.",
   },
   {
    benefit: "Deeper Insights",
    description: "Understand audience behavior by the second.",
   },
  ],
  "Partner management tools": [
   {
    benefit: "Stronger Relationships",
    description: "Engage and support partners effectively.",
   },
   {
    benefit: "Visibility",
    description: "Real-time tracking of partner performance.",
   },
   {
    benefit: "Efficiency",
    description: "One centralized system for all interactions.",
   },
  ],
  "Integration with major platforms": [
   {
    benefit: "Faster Setup",
    description: "Plug-and-play with existing tools.",
   },
   {
    benefit: "Improved Efficiency",
    description: "Reduce duplication and manual entry.",
   },
   {
    benefit: "Data Consistency",
    description: "Ensure data flows smoothly across systems.",
   },
  ],
  "Advanced security features": [
   {
    benefit: "Compliance Ready",
    description: "Meet modern standards and regulations.",
   },
   {
    benefit: "Risk Reduction",
    description: "Minimize vulnerabilities and breaches.",
   },
   {
    benefit: "Peace of Mind",
    description: "Know your data is fully protected.",
   },
  ],
 };

 const idealFor: Record<string, string[]> = {
  "Real-time analytics and reporting": [
   "Sales & Marketing teams tracking campaign performance",
   "Operations managers optimizing workflows in real time",
   "Finance monitoring live revenue and expense trends",
   "Product teams reacting to live user behavior",
  ],
  "Automated lead distribution": [
   "Sales operations",
   "Partner networks",
   "Customer support centers",
  ],
  "Smart campaign optimization": [
   "Marketing managers",
   "Digital advertising teams",
   "Growth-focused startups",
  ],
  "Partner management tools": [
   "Channel managers",
   "Affiliate marketers",
   "B2B partnerships",
  ],
  "Integration with major platforms": [
   "IT administrators",
   "Sales and marketing teams",
   "Product managers",
  ],
  "Advanced security features": [
   "Enterprises handling sensitive data",
   "SaaS providers",
   "Regulated industries",
  ],
 };

 const howItWorks: Record<string, string[]> = {
  "Real-time analytics and reporting": [
   "Connect Your Systems",
   "Configure Your Metrics",
   "Go Live Instantly",
   "Refine & Scale",
  ],
  "Automated lead distribution": [],
  "Smart campaign optimization": [],
  "Partner management tools": [],
  "Integration with major platforms": [],
  "Advanced security features": [],
 };

 const included: Record<string, string[]> = {
  "Real-time analytics and reporting": [
   "Pre-built dashboard templates",
   "Alert and notification engine",
   "Data connector hub",
   "Custom report builder",
   "AI-powered insight suggestions",
  ],
  "Automated lead distribution": [],
  "Smart campaign optimization": [],
  "Partner management tools": [],
  "Integration with major platforms": [],
  "Advanced security features": [],
 };

 return (
  <div className="min-h-screen bg-white">
   <Hero />

   {/* Features Section */}
   <section id="features" className="py-20 px-6 bg-white">
    <div className="container mx-auto">
     <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
       Everything you need to scale your marketing
      </h2>
      <p className="text-lg text-slate-600">
       Powerful features to help you manage, analyze, and optimize your
       marketing efforts
      </p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
       <ServiceCard key={index} service={service} />
      ))}
     </div>
    </div>
   </section>

   {/* Solutions Section */}
   <section id="solutions" className="py-24 px-4 bg-slate-50">
    <div className="container mx-auto">
     <div className=" flex flex-col justify-center items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
       Boost your marketing performance
      </h2>
      <p className="text-lg text-slate-600 mb-8">
       Our platform provides everything you need to optimize your marketing
       operations and drive better results.
      </p>
     </div>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
      {/* Feature List */}
      <div className="lg:sticky lg:top-32">
       <ul className="space-y-4">
        {Object.keys(titles).map((feature) => (
         <li
          key={feature}
          className={`
                flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition
                ${
                 expandedFeature === feature
                  ? "bg-primary/10 border-l-4 border-primary shadow"
                  : "hover:bg-slate-100"
                }
              `}
          onClick={() =>
           setExpandedFeature(expandedFeature === feature ? null : feature)
          }
         >
          <CheckCircle
           className={`w-6 h-6 ${
            expandedFeature === feature ? "text-primary" : "text-slate-400"
           }`}
          />
          <span
           className={`font-medium text-lg ${
            expandedFeature === feature ? "text-primary" : "text-slate-800"
           }`}
          >
           {feature}
          </span>
         </li>
        ))}
       </ul>
      </div>
      {/* Expanded Feature Details */}
      <div className="lg:col-span-2">
       {expandedFeature ? (
        <div className="bg-white rounded-2xl shadow-xl p-8 transition-all">
         {/* Title & Description */}
         <div className="mb-8 text-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-2 flex items-center justify-center gap-2">
           <span>🔹</span>
           {titles[expandedFeature]?.title || expandedFeature}
          </h3>
          <p className="text-lg text-slate-700">
           {titles[expandedFeature]?.description}
          </p>
         </div>
         {/* Key Features */}
         {keyFeatures[expandedFeature]?.length > 0 && (
          <div className="mb-8">
           <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <span>✨</span> Key Features
           </h4>
           <div className="grid md:grid-cols-2 gap-6">
            {keyFeatures[expandedFeature].map((kf, i) => (
             <div
              key={i}
              className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg"
             >
              <div className="mt-1">{kf.icon}</div>
              <div>
               <div className="font-medium text-slate-900">{kf.title}</div>
               <div className="text-sm text-slate-600">{kf.description}</div>
              </div>
             </div>
            ))}
           </div>
          </div>
         )}
         {/* Benefits */}
         {benefits[expandedFeature]?.length > 0 && (
          <div className="mb-8">
           <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <span>🚀</span> Why Choose Our {expandedFeature}
           </h4>
           <div className="grid md:grid-cols-2 gap-4">
            {benefits[expandedFeature].map((b, i) => (
             <div key={i} className="bg-green-50 p-4 rounded-lg">
              <div className="font-medium text-green-700">{b.benefit}</div>
              <div className="text-sm text-slate-600">{b.description}</div>
             </div>
            ))}
           </div>
          </div>
         )}
         {/* Ideal For */}
         {idealFor[expandedFeature]?.length > 0 && (
          <div className="mb-8">
           <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <span>🎯</span> Ideal For
           </h4>
           <ul className="flex flex-wrap gap-3">
            {idealFor[expandedFeature].map((item, i) => (
             <li
              key={i}
              className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
             >
              {item}
             </li>
            ))}
           </ul>
          </div>
         )}
         {/* How It Works */}
         {howItWorks[expandedFeature]?.length > 0 && (
          <div className="mb-8">
           <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <span>🛠</span> How It Works
           </h4>
           <div className="flex flex-wrap gap-4">
            {howItWorks[expandedFeature].map((step, i) => (
             <div
              key={i}
              className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-lg"
             >
              <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
               {i + 1}
              </span>
              <span className="text-slate-800">{step}</span>
             </div>
            ))}
           </div>
          </div>
         )}
         {/* What's Included */}
         {included[expandedFeature]?.length > 0 && (
          <div>
           <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <span>✅</span> What's Included
           </h4>
           <ul className="grid md:grid-cols-2 gap-3">
            {included[expandedFeature].map((item, i) => (
             <li
              key={i}
              className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-lg"
             >
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-slate-800">{item}</span>
             </li>
            ))}
           </ul>
          </div>
         )}
        </div>
       ) : (
        <div className="rounded-2xl overflow-hidden shadow-xl">
         <img
          src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80"
          alt="Platform Features"
          className="w-full h-96 object-cover"
         />
        </div>
       )}
      </div>
     </div>
    </div>
   </section>

   {/* Packages Section */}
   <section id="packages" className="py-20 px-6 bg-slate-50">
    <div className="container mx-auto">
     <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
       Simple, transparent packages
      </h2>
      <p className="text-lg text-slate-600">
       Choose the plan that best fits your needs
      </p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[
       {
        name: "Essential",
        description:
         "Prompt launch of a partner program with all necessary features included",
        features: [
         "Up to 50,000 monthly conversions",
         "1–5 included users",
         "1 dedicated tracking domain + SSL",
         "Unlimited offers & campaigns",
         "Dedicated onboarding manager",
         "Multiple tracking methods",
         "Real-time reporting",
         "Customizable dashboards",
         "Basic fraud prevention",
         "5 third-party integrations",
         "Full API access + webhooks",
         "Basic portal customization",
         "Basic campaign optimisation",
         "Automated lead distribution",
         "Core partner management",
         "Security & access controls",
         "2 hours training included",
         "Email support",
        ],
       },
       {
        name: "Scale",
        description:
         "More space for rapid program scale and significant revenue growth",
        features: [
         "Up to 100,000 monthly conversions",
         "6–10 included users",
         "5 dedicated tracking domains + SSL",
         "Unlimited offers & campaigns",
         "Dedicated onboarding manager",
         "Multiple tracking methods",
         "Real-time reporting",
         "Customizable dashboards",
         "Enhanced fraud prevention",
         "10 third-party integrations",
         "Full API access + webhooks",
         "Themed portal templates",
         "Intermediate campaign optimization",
         "Automated lead distribution",
         "Extended partner management",
         "Security & access controls",
         "4 hours training included",
         "Email + chat support",
        ],
        popular: true,
       },
       {
        name: "Enterprise",
        description: "Endless customization possibilities to reach the heights",
        features: [
         "From 100,000+ monthly conversions",
         "Up to 30 included users",
         "Custom tracking domains + SSL",
         "Unlimited offers & campaigns",
         "Dedicated onboarding manager",
         "Multiple tracking methods",
         "Advanced real-time dashboards",
         "Fully configurable dashboards",
         "Advanced fraud prevention",
         "20 third-party integrations",
         "Priority API access + webhooks",
         "Full branding & UI support",
         "Granular targeting & segmentation",
         "Advanced campaign optimization",
         "Advanced lead distribution logic",
         "Full partner management suite",
         "Enterprise-grade security",
         "Unlimited training sessions",
         "Priority support (all channels)",
        ],
       },
      ].map((plan, index) => (
       <div
        key={index}
        className={`bg-white rounded-2xl p-8 ${
         plan.popular
          ? "border-2 border-primary relative"
          : "border border-slate-200"
        }`}
       >
        {plan.popular && (
         <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
          Best Choice
         </div>
        )}
        <h3 className="text-2xl font-bold mb-6">{plan.name}</h3>
        <p className="text-slate-600 mb-6">{plan.description}</p>
        <ul className="space-y-4 mb-8">
         {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
           <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
           <span className="text-slate-600">{feature}</span>
          </li>
         ))}
        </ul>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Contact Section */}
   <section id="contact" className="py-20 px-6 bg-white">
    <div className="container mx-auto max-w-4xl">
     <div className="bg-slate-50 rounded-2xl p-8">
      <div className="text-center max-w-2xl mx-auto mb-8">
       <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        Ready to get started?
       </h2>
       <p className="text-lg text-slate-600">
        Get in touch with us to learn more about how InnoBoost can help your
        business
       </p>
      </div>

      <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
         type="text"
         id="name"
         name="name"
         value={formData.name}
         onChange={handleChange}
         placeholder="Name"
         className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        />
        <input
         type="email"
         id="email"
         name="email"
         value={formData.email}
         onChange={handleChange}
         placeholder="Email"
         className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        />
       </div>

       <input
        type="text"
        id="company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company"
        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
       />

       <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        rows={4}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
       ></textarea>

       <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-primary text-white py-4 rounded-xl hover:bg-primary-dark transition flex items-center justify-center space-x-2 text-lg font-semibold ${
         isSubmitting ? "opacity-75 cursor-not-allowed" : ""
        }`}
       >
        <span>{isSubmitting ? "Sending" : "Get in touch"}</span>
        <ArrowRight className="w-5 h-5" />
       </button>
       {submitStatus === "success" && (
        <p className="text-green-500 text-center">
         Form submitted successfully!
        </p>
       )}
       {submitStatus === "error" && (
        <p className="text-red-500 text-center">
         Failed to submit form. Please try again.
        </p>
       )}
      </form>
     </div>
    </div>
   </section>
  </div>
 );
};

export default Home;
