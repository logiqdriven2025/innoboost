import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Zap, Menu, X } from "lucide-react";

const Header = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const closeMenu = () => setIsMenuOpen(false);

 return (
  <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
   <nav className="container mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
     <HashLink to="/#" className="flex items-center space-x-2">
      <Zap className="w-8 h-8 text-primary" />
      <span className="text-2xl font-bold text-primary">InnoBoost</span>
     </HashLink>

     <div className="flex items-center justify-between gap-8">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
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

      <HashLink
       smooth
       to="/#contact"
       className="hidden md:block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition"
      >
       Get Started
      </HashLink>
     </div>

     {/* Mobile Menu Button */}
     <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="md:hidden text-slate-700"
     >
      {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
     </button>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
     <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200">
      <div className="flex flex-col space-y-4 p-6">
       <HashLink
        smooth
        to="/#features"
        className="text-slate-600 hover:text-primary transition"
        onClick={closeMenu}
       >
        Features
       </HashLink>
       <HashLink
        smooth
        to="/#solutions"
        className="text-slate-600 hover:text-primary transition"
        onClick={closeMenu}
       >
        Solutions
       </HashLink>
       <HashLink
        smooth
        to="/#pricing"
        className="text-slate-600 hover:text-primary transition"
        onClick={closeMenu}
       >
        Pricing
       </HashLink>
       <HashLink
        smooth
        to="/#contact"
        className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition w-full text-center"
        onClick={closeMenu}
       >
        Get Started
       </HashLink>
      </div>
     </div>
    )}
   </nav>
  </header>
 );
};

export default Header;
