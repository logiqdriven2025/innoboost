import React from "react";
import { ArrowRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Transform Your Marketing with
          <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Cutting-Edge Technology
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          AI-driven solutions, data insights, and automation that scale your
          marketing efforts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <HashLink
            smooth
            to="/#contact"
            className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition flex items-center space-x-2"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </HashLink>

          <HashLink
            smooth
            to="/#services"
            className="px-8 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition"
          >
            Learn More
          </HashLink>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
