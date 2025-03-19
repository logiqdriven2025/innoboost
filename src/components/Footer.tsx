import { HashLink } from "react-router-hash-link";
import { Zap, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-card border-t border-white/10 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <HashLink to="/#" className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold gradient-text">
                InnoBoost
              </span>
            </HashLink>
            <p className="mt-4 text-gray-300">
              Transform your marketing with cutting-edge technology and
              AI-driven solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <HashLink
                smooth
                to="/#services"
                className="text-gray-300 hover:text-primary transition"
              >
                Services
              </HashLink>
              <HashLink
                smooth
                to="/#features"
                className="text-gray-300 hover:text-primary transition"
              >
                Features
              </HashLink>
              <HashLink
                smooth
                to="/#pricing"
                className="text-gray-300 hover:text-primary transition"
              >
                Pricing
              </HashLink>
              <HashLink
                smooth
                to="/#contact"
                className="text-gray-300 hover:text-primary transition"
              >
                Contact
              </HashLink>
              <HashLink
                smooth
                to="/privacy/#"
                className="text-gray-300 hover:text-primary transition"
              >
                Privacy Policy
              </HashLink>
              <HashLink
                smooth
                to="/terms/#"
                className="text-gray-300 hover:text-primary transition"
              >
                Terms of Service
              </HashLink>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 min-w-5 h-5 text-primary" />
                <span>office@innoboost.io</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 min-w-5 h-5 text-primary" />
                <span>
                  Victoria House, Office D, Suite 21/22, 26 Main Street,
                  Gibraltar, GX11 1AA
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} InnoBoost. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
