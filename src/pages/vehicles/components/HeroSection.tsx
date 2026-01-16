import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=Modern%20luxury%20car%20dealership%20showroom%20with%20electric%20vehicles%20and%20SUVs%20lined%20up,%20cinematic%20lighting,%20high%20quality,%20photorealistic&width=1920&height=1080&seq=vehicles-hero&orientation=landscape"
          alt="A75 Mobility Vehicle Fleet"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A33]/90 via-[#0B1A33]/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20 mt-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-[#F29F05]/20 text-[#F29F05] rounded-full text-sm font-semibold backdrop-blur-md border border-[#F29F05]/20">
              <i className="ri-car-line mr-2"></i>
              Our Vehicle Fleet
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Your
            <span className="text-[#F29F05] block mt-2">Perfect Ride</span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            From sleek electric cars to rugged fuel-powered SUVs and motorcycles, explore our comprehensive range of mobility solutions designed for Ghana's roads.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#categories"
              className="bg-[#F29F05] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e89004] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <span>Browse Vehicles</span>
              <i className="ri-arrow-down-line"></i>
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-lg font-semibold text-white border-2 border-white/30 hover:bg-white hover:text-[#0B1A33] transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <span>Schedule Test Drive</span>
              <i className="ri-steering-fill"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 pb-8">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl inline-block sm:w-auto w-full">
            <div className="flex flex-row justify-between sm:gap-12 gap-4 text-white">
              <div className="text-center px-4">
                <div className="text-2xl md:text-3xl font-bold text-[#F29F05] mb-1">15+</div>
                <div className="text-xs md:text-sm text-gray-300">Models</div>
              </div>
              <div className="w-px bg-white/10 my-1"></div>
              <div className="text-center px-4">
                <div className="text-2xl md:text-3xl font-bold text-[#F29F05] mb-1">500+</div>
                <div className="text-xs md:text-sm text-gray-300">Units</div>
              </div>
              <div className="w-px bg-white/10 my-1"></div>
              <div className="text-center px-4">
                <div className="text-2xl md:text-3xl font-bold text-[#F29F05] mb-1">3+ Years</div>
                <div className="text-xs md:text-sm text-gray-300">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
