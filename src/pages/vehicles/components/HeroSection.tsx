import { Link } from 'react-router-dom';

const HeroSection = () => {
  // ...
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ... */}
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          {/* ... */}
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

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#categories"
              className="bg-[#F29F05] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e89004] transition-all transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl text-center"
            >
              Browse Vehicles
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B1A33] transition-all cursor-pointer shadow-lg hover:shadow-xl text-center"
            >
              Schedule Test Drive
            </Link>
          </div>
        </div>
      </div>

      {/* Vehicle Stats */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center px-6">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 text-white">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#F29F05] mb-2">15+</div>
              <div className="text-sm md:text-base opacity-90 whitespace-nowrap">Vehicle Models</div>
            </div>
            <div className="hidden sm:block w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#F29F05] mb-2">500+</div>
              <div className="text-sm md:text-base opacity-90 whitespace-nowrap">Units Available</div>
            </div>
            <div className="hidden sm:block w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#F29F05] mb-2">3+</div>
              <div className="text-sm md:text-base opacity-90 whitespace-nowrap">Years Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
