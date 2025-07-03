import React from "react";
import {
 BrowserRouter as Router,
 Routes,
 Route,
 Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
 return (
  <Router>
   <div className="min-h-screen bg-black">
    <Header />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/privacy" element={<Privacy />} />
     <Route path="/terms" element={<Terms />} />
     <Route path="/services" element={<Navigate to="/" />} />
     <Route path="/packages" element={<Navigate to="/" />} />
     <Route path="/about" element={<Navigate to="/" />} />
     <Route path="/contact" element={<Navigate to="/" />} />
    </Routes>
    <Footer />
   </div>
  </Router>
 );
}

export default App;
