import React, { useState, useRef } from "react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
import { ArrowRight, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

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
   await emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID_BOOK,
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
   <section id="solutions" className="py-20 px-6 bg-slate-50">
    <div className="container mx-auto">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
       <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
        Boost your marketing performance
       </h2>
       <p className="text-lg text-slate-600 mb-8">
        Our platform provides everything you need to optimize your marketing
        operations and drive better results.
       </p>

       <div className="space-y-4">
        {[
         "Real-time analytics and reporting",
         "Automated lead distribution",
         "Smart campaign optimization",
         "Partner management tools",
         "Integration with major platforms",
         "Advanced security features",
        ].map((feature, index) => (
         <div key={index} className="flex items-start space-x-3">
          <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
          <span className="text-slate-700">{feature}</span>
         </div>
        ))}
       </div>
      </div>

      <div className="relative">
       <div className="rounded-2xl overflow-hidden shadow-xl">
        <img
         src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80"
         alt="Platform Features"
         className="w-full"
        />
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* Pricing Section */}
   <section id="pricing" className="py-20 px-6 bg-slate-50">
    <div className="container mx-auto">
     <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
       Simple, transparent pricing
      </h2>
      <p className="text-lg text-slate-600">
       Choose the plan that best fits your needs
      </p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[
       {
        name: "Essential",
        price: "£777",
        description:
         "Prompt launch of a partner program with all necessary features included",
        features: [
         "Dedicated Tracking Domain: 1 URL + 1 SSL",
         "Unlimited offers and campaigns",
         "Dedicated Onboarding manager",
         "Different types of tracking",
         "Real-time reporting",
         "Customizable dashboards",
         "Basic fraud prevention",
         "Marketplace with 3rd party integrations",
         "Full-access API",
         "Portal customization",
         "2 hours onboarding sessions",
         "Email support",
        ],
        cta: "Request a Demo",
        conversions: "Up to 50K conversions",
       },
       {
        name: "Scale",
        price: "£1,200",
        description:
         "More space for rapid program scale and significant revenue growth",
        features: [
         "Dedicated Tracking Domain: 5 URLs + 5 SSL",
         "Unlimited offers and campaigns",
         "Dedicated Onboarding manager",
         "Different types of tracking",
         "Real-time reporting",
         "Customizable dashboards",
         "Basic fraud prevention",
         "Marketplace with 3rd party integrations",
         "Full-access API",
         "Portal customization",
         "4 hours onboarding sessions",
         "Email support",
        ],
        cta: "Request a Demo",
        conversions: "Up to 100K conversions",
        popular: true,
       },
       {
        name: "Enterprise",
        price: "Custom",
        description: "Endless customization possibilities to reach the heights",
        features: [
         "Custom dedicated Tracking Domains",
         "Unlimited offers and campaigns",
         "Dedicated Onboarding manager",
         "Different types of tracking",
         "Granular targeting",
         "Real-time reporting",
         "Customizable dashboards",
         "Basic fraud prevention",
         "Marketplace with 3rd party integrations",
         "Full-access API",
         "Portal customization",
         "Unlimited Onboarding sessions + ongoing sessions & training",
         "Dedicated Support: Email, chat, call/zoom support",
        ],
        cta: "Contact Us",
        conversions: "Custom conversions",
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
        <div className="mb-8">
         <div className="text-3xl font-bold">{plan.price}</div>
         <div className="text-slate-600">{plan.conversions}</div>
        </div>
        <ul className="space-y-4 mb-8">
         {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
           <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
           <span className="text-slate-600">{feature}</span>
          </li>
         ))}
        </ul>
        <button
         className={`w-full py-3 px-6 rounded-full transition ${
          plan.popular
           ? "bg-primary text-white hover:bg-primary-dark"
           : "text-primary border-2 border-primary hover:bg-primary hover:text-white"
         }`}
        >
         {plan.cta}
        </button>
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
        <span>{isSubmitting ? "Sending" : "Get Started"}</span>
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
