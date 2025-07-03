const Hero = () => {
 return (
  <div className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-b from-slate-50 to-slate-100">
   <div className="container mx-auto px-6 relative z-10">
    <div className="text-center max-w-3xl mx-auto my-16">
     <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
      InnoBoost is a performance marketing solutions provider
     </h1>
     <p className="text-xl text-slate-600 mb-8 leading-relaxed">
      Empower your marketing efforts with our comprehensive platform designed
      for modern marketers
     </p>
    </div>

    <div className="relative max-w-5xl mx-auto mb-16">
     <div className="rounded-2xl overflow-hidden shadow-2xl">
      <img
       src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
       alt="Platform Dashboard"
       className="w-full"
      />
     </div>
     <div className="sm:absolute sm:-bottom-6 sm:left-1/2 sm:transform sm:-translate-x-1/2 max-sm:mt-6">
      <div className="sm:bg-white border-none sm:rounded-full py-3 px-6 sm:shadow-lg flex flex-col sm:flex-row gap-4 sm:gap-8 min-w-[280px]">
       <div className="flex items-center gap-2 justify-center">
        <span className="text-green-500 text-lg">●</span>
        <span className="text-sm font-medium whitespace-nowrap">
         99.9% Uptime
        </span>
       </div>
       <div className="flex items-center gap-2 justify-center">
        <span className="text-blue-500 text-lg">●</span>
        <span className="text-sm font-medium whitespace-nowrap">
         Real-time Analytics
        </span>
       </div>
       <div className="flex items-center gap-2 justify-center">
        <span className="text-purple-500 text-lg">●</span>
        <span className="text-sm font-medium whitespace-nowrap">
         24/7 Support
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Hero;
