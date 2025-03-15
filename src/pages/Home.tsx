import React from "react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
import { ArrowRight, CheckCircle } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Unlock Your Marketing Potential
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Our technology solutions revolutionize marketing through AI-driven
            insights, automation, and cutting-edge tools that deliver measurable
            results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-6 bg-gradient-to-b from-black to-purple-900/20"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why Our Clients Trust Us
              </h2>

              <div className="grid gap-6">
                {[
                  "Cutting-edge AI and machine learning solutions",
                  "Custom-tailored services to meet specific needs",
                  "Data-driven decisions that deliver results",
                  "Scalable solutions that grow with you",
                  "24/7 support and ongoing optimization",
                  "Industry-leading expertise and innovation",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                    alt="AI Technology"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                    alt="Team Collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-48 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                    alt="Business Meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1550305080-4e029753abcf?auto=format&fit=crop&q=80"
                    alt="Data Analytics"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 px-6 bg-gradient-to-b from-purple-900/20 to-black"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Select the perfect plan that suits your business needs and scale
            your marketing efforts with our AI-powered solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <div className="text-3xl font-bold mb-4">
                $99<span className="text-lg text-gray-400">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-300">Basic Analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-300">Email Automation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-300">5 Marketing Campaigns</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-300">Basic Support</span>
                </li>
              </ul>
              <HashLink
                smooth
                to="/#contact"
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition block text-center"
              >
                Get Started
              </HashLink>
            </div>

            {/* Pro Plan */}
            <div className="bg-purple-600 backdrop-blur-lg border border-purple-500 rounded-xl p-8 hover:transform hover:scale-105 transition duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <div className="text-3xl font-bold mb-4">
                $199<span className="text-lg text-gray-200">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span>Advanced Analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span>AI-Powered Automation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span>15 Marketing Campaigns</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span>Custom Integrations</span>
                </li>
              </ul>
              <HashLink
                smooth
                to="/#contact"
                className="w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-gray-100 transition block text-center"
              >
                Get Started
              </HashLink>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <div className="text-3xl font-bold mb-4">
                Custom<span className="text-lg text-gray-400">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-300">Full Analytics Suite</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-300">Custom AI Solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-300">Unlimited Campaigns</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-300">24/7 Dedicated Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-300">Custom Development</span>
                </li>
              </ul>
              <HashLink
                smooth
                to="/#contact"
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition block text-center"
              >
                Contact Sales
              </HashLink>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80"
                alt="Contact Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
            </div>

            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-center mb-8">
                Ready to Scale Your Marketing?
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                />

                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                ></textarea>

                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition flex items-center justify-center space-x-2">
                  <span>Contact Us Today</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
