import React from "react";
import { ArrowRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Marketing with
              <span className="block gradient-text mt-2">
                Cutting-Edge Technology
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              AI-driven solutions, data insights, and automation that scale your
              marketing efforts.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <HashLink
                smooth
                to="/#contact"
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full hover:opacity-90 transition flex items-center space-x-2 text-lg font-semibold shadow-lg w-full sm:w-auto justify-center"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </HashLink>

              <HashLink
                smooth
                to="/#services"
                className="px-8 py-4 glass-card text-white rounded-full hover:bg-white/20 transition text-lg font-semibold w-full sm:w-auto text-center"
              >
                Learn More
              </HashLink>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden glass-card">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Marketing Innovation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 right-0 transform translate-x-1/3 translate-y-1/3 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/90 z-0"></div>
    </div>
  );
};

export default Hero;
