import { HashLink } from "react-router-hash-link";
import { Zap, Mail, MapPin } from "lucide-react";

const Footer = () => {
 return (
  <footer className="bg-white border-t border-slate-200">
   <div className="container mx-auto px-6 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
     <div>
      <HashLink to="/#" className="flex items-center space-x-2">
       <Zap className="w-8 h-8 text-primary" />
       <span className="text-2xl font-bold text-primary">InnoBoost</span>
      </HashLink>
      <p className="mt-4 text-slate-600">
       The complete marketing technology platform for modern marketers.
      </p>
     </div>

     <div>
      <h3 className="text-lg font-semibold mb-6 text-slate-900">Product</h3>
      <div className="flex flex-col space-y-4">
       <HashLink
        smooth
        to="/#features"
        className="text-slate-600 hover:text-primary transition"
       >
        Features
       </HashLink>
       <HashLink
        smooth
        to="/#solutions"
        className="text-slate-600 hover:text-primary transition"
       >
        Solutions
       </HashLink>
       <HashLink
        smooth
        to="/#pricing"
        className="text-slate-600 hover:text-primary transition"
       >
        Pricing
       </HashLink>
      </div>
     </div>

     <div>
      <h3 className="text-lg font-semibold mb-6 text-slate-900">Legal</h3>
      <div className="flex flex-col space-y-4">
       <HashLink
        smooth
        to="/privacy"
        className="text-slate-600 hover:text-primary transition"
       >
        Privacy Policy
       </HashLink>
       <HashLink
        smooth
        to="/terms"
        className="text-slate-600 hover:text-primary transition"
       >
        Terms of Service
       </HashLink>
       <HashLink
        smooth
        to="/#contact"
        className="text-slate-600 hover:text-primary transition"
       >
        Contact
       </HashLink>
      </div>
     </div>

     <div>
      <h3 className="text-lg font-semibold mb-6">Contact</h3>
      <div className="space-y-4 text-slate-600">
       <div className="flex items-center space-x-3">
        <Mail className="w-5 min-w-5 h-5 text-primary" />
        <span>office@innoboost.io</span>
       </div>
       <div className="flex items-center space-x-3">
        <MapPin className="w-5 min-w-5 h-5 text-primary" />
        <span>InnoSphere Ltd.
         Victoria House, Offics D, Suite 21/22, 26 Main Street, Gibraltar GX11 1AA</span>
       </div>
      </div>
     </div>
    </div>

    <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-600">
     <p>&copy; {new Date().getFullYear()} InnoBoost. All rights reserved.</p>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
