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
          {/* ... */}

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Complete Mobility
            <span className="text-[#F29F05] block">Solutions</span>
          </h1>

          <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-2xl">
            From vehicle import and assembly to charging infrastructure and fleet management, we provide comprehensive services to support Ghana's transportation transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#services-grid"
              className="bg-[#F29F05] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e89004] transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap text-center"
            >
              Explore Services
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B1A33] transition-all cursor-pointer whitespace-nowrap text-center"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Service Stats */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <div className="flex space-x-8 text-white text-center">
          <div>
            <div className="text-2xl font-bold text-[#F29F05]">5+</div>
            <div className="text-sm opacity-80">Core Services</div>
          </div>
          <div className="border-l border-white/20 pl-8">
            <div className="text-2xl font-bold text-[#F29F05]">24/7</div>
            <div className="text-sm opacity-80">Support</div>
          </div>
          <div className="border-l border-white/20 pl-8">
            <div className="text-2xl font-bold text-[#F29F05]">100%</div>
            <div className="text-sm opacity-80">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
