
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20electric%20vehicle%20showroom%20in%20Ghana%20with%20sleek%20EVs%20on%20display%2C%20contemporary%20automotive%20dealership%20with%20bright%20lighting%2C%20clean%20white%20background%20showcasing%20various%20electric%20cars%20and%20motorcycles%20in%20professional%20setting&width=1920&height=1080&seq=vehicles-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A33]/90 via-[#0B1A33]/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#F29F05]/20 text-[#F29F05] rounded-full text-sm font-semibold backdrop-blur-sm">
              Our Vehicle Fleet
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Discover Your
            <span className="text-[#F29F05] block">Perfect Ride</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-2xl">
            From electric cars to fuel-powered motorcycles, explore our comprehensive range of mobility solutions designed for Ghana's roads and your lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-[#F29F05] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e89004] transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap">
              Browse Vehicles
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B1A33] transition-all cursor-pointer whitespace-nowrap">
              Schedule Test Drive
            </button>
          </div>
        </div>
      </div>

      {/* Vehicle Stats */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <div className="flex space-x-8 text-white text-center">
          <div>
            <div className="text-2xl font-bold text-[#F29F05]">15+</div>
            <div className="text-sm opacity-80">Vehicle Models</div>
          </div>
          <div className="border-l border-white/20 pl-8">
            <div className="text-2xl font-bold text-[#F29F05]">500+</div>
            <div className="text-sm opacity-80">Units Available</div>
          </div>
          <div className="border-l border-white/20 pl-8">
            <div className="text-2xl font-bold text-[#F29F05]">3+</div>
            <div className="text-sm opacity-80">Years Warranty</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
