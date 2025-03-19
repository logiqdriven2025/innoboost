import React from "react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
import { ArrowRight, CheckCircle } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div className="min-h-screen text-white">
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Unlock Your Marketing
            <span className="block gradient-text">Potential</span>
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg">
            Our technology solutions revolutionize marketing through AI-driven
            insights, automation, and cutting-edge tools that deliver measurable
            results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Why Our Clients
                <span className="block gradient-text">Trust Us</span>
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
                  <div
                    key={index}
                    className="glass-card p-4 rounded-xl flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="h-64 glass-card rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80"
                    alt="AI Technology"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 glass-card rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                    alt="Team Collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="h-48 glass-card rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                    alt="Business Meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 glass-card rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80"
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
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Choose Your
            <span className="block gradient-text">Perfect Plan</span>
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg">
            Select the perfect plan that suits your business needs and scale
            your marketing efforts with our AI-powered solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Get Started Plan */}
            <div className="glass-card rounded-2xl p-8 relative group hover:scale-105 transition duration-300 flex flex-col">
              <div>
                <div className="text-sm text-gray-400 mb-4">
                  Get started plan
                </div>
                <h3 className="text-3xl font-bold mb-2">40 hrs</h3>
                <div className="text-sm text-gray-400 mb-4">/ mo</div>
                <div className="text-2xl font-bold mb-1">$3200</div>
                <div className="text-sm text-gray-400 mb-8">$80/hr</div>
                <ul className="space-y-4 mb-8">
                  {[
                    "Basic Analytics Dashboard",
                    "Email Marketing Setup",
                    "5 Marketing Campaigns",
                    "Basic Support",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 min-w-5 h-5 text-primary" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <HashLink
                  smooth
                  to="/#contact"
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-xl hover:opacity-90 transition block text-center"
                >
                  Get Started
                </HashLink>
              </div>
            </div>

            {/* Boost Plan */}
            <div className="glass-card rounded-2xl p-8 relative group hover:scale-105 transition duration-300 flex flex-col">
              <div>
                <div className="text-sm text-gray-400 mb-4">Boost plan</div>
                <h3 className="text-3xl font-bold mb-2">80 hrs</h3>
                <div className="text-sm text-gray-400 mb-4">/ mo</div>
                <div className="text-2xl font-bold mb-1">$5600</div>
                <div className="text-sm text-gray-400 mb-8">$70/hr</div>
                <ul className="space-y-4 mb-8">
                  {[
                    "Advanced Analytics",
                    "Marketing Automation",
                    "15 Marketing Campaigns",
                    "Priority Support",
                    "Custom Integrations",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 min-w-5 h-5 text-primary" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <HashLink
                  smooth
                  to="/#contact"
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-xl hover:opacity-90 transition block text-center"
                >
                  Get Started
                </HashLink>
              </div>
            </div>

            {/* Full Force Plan */}
            <div className="glass-card rounded-2xl p-8 relative group hover:scale-105 transition duration-300 border-2 border-primary flex flex-col">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-4">
                  Full force plan
                </div>
                <h3 className="text-3xl font-bold mb-2">160 hrs</h3>
                <div className="text-sm text-gray-400 mb-4">/ mo</div>
                <div className="text-2xl font-bold mb-1">$9600</div>
                <div className="text-sm text-gray-400 mb-8">$60/hr</div>
                <ul className="space-y-4 mb-8">
                  {[
                    "Full Analytics Suite",
                    "Advanced AI Automation",
                    "Unlimited Campaigns",
                    "24/7 Priority Support",
                    "Custom Development",
                    "Strategy Consulting",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 min-w-5 h-5 text-primary" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <HashLink
                  smooth
                  to="/#contact"
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-xl hover:opacity-90 transition block text-center"
                >
                  Get Started
                </HashLink>
              </div>
            </div>

            {/* All Inclusive Plan */}
            <div className="glass-card rounded-2xl p-8 relative group hover:scale-105 transition duration-300 flex flex-col">
              <div>
                <div className="text-sm text-gray-400 mb-4">
                  👑 All inclusive
                </div>
                <h3 className="text-3xl font-bold mb-2">Custom</h3>
                <div className="text-sm text-gray-400 mb-4">/ mo</div>
                <div className="text-2xl font-bold mb-1">$20K-100K</div>
                <div className="text-sm text-gray-400 mb-8">/ mo</div>
                <ul className="space-y-4 mb-8">
                  {[
                    "Enterprise Analytics",
                    "Custom AI Solutions",
                    "Unlimited Everything",
                    "Dedicated Team",
                    "Strategic Partnership",
                    "White Label Options",
                    "Custom Development",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 min-w-5 h-5 text-primary" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <HashLink
                  smooth
                  to="/#contact"
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-xl hover:opacity-90 transition block text-center"
                >
                  Contact Sales
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Contact Background"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
                Ready to Scale Your
                <span className="block gradient-text">Marketing?</span>
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="glass-card rounded-xl px-4 py-3 focus:outline-none focus:border-primary border border-white/10"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="glass-card rounded-xl px-4 py-3 focus:outline-none focus:border-primary border border-white/10"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full glass-card rounded-xl px-4 py-3 focus:outline-none focus:border-primary border border-white/10"
                />

                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full glass-card rounded-xl px-4 py-3 focus:outline-none focus:border-primary border border-white/10"
                ></textarea>

                <button className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-xl hover:opacity-90 transition flex items-center justify-center space-x-2 text-lg font-semibold">
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
