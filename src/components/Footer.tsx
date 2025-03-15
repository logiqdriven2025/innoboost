import { HashLink } from "react-router-hash-link";
import { Zap, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <HashLink to="/#" className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                InnoBoost
              </span>
            </HashLink>
            <p className="mt-4 text-gray-400">
              Transform your marketing with cutting-edge technology and
              AI-driven solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <HashLink
                smooth
                to="/#services"
                className="text-gray-400 hover:text-purple-400 transition"
              >
                Services
              </HashLink>
              <HashLink
                smooth
                to="/#features"
                className="text-gray-400 hover:text-purple-400 transition"
              >
                Features
              </HashLink>
              <HashLink
                smooth
                to="/#pricing"
                className="text-gray-400 hover:text-purple-400 transition"
              >
                Pricing
              </HashLink>
              <HashLink
                smooth
                to="/#contact"
                className="text-gray-400 hover:text-purple-400 transition"
              >
                Contact
              </HashLink>
              <HashLink
                smooth
                to="/privacy/#"
                className="text-gray-400 hover:text-purple-400 transition"
              >
                Privacy Policy
              </HashLink>
              <HashLink
                smooth
                to="/terms/#"
                className="text-gray-400 hover:text-purple-400 transition"
              >
                Terms of Service
              </HashLink>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex flex-col space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>contact@innoboost.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>123 Innovation Street, Tech City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} InnoBoost. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
