import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0B1A33] via-[#1E5AA8]/20 to-[#0B1A33]">
      {/* ... (background elements unchanged) ... */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1E5AA8]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F29F05]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#1E5AA8 1px, transparent 1px), linear-gradient(90deg, #1E5AA8 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Diagonal Lines */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent to-[#F29F05] transform rotate-45 origin-top-right"></div>
          <div className="absolute top-20 right-0 w-full h-1 bg-gradient-to-r from-transparent to-[#1E5AA8] transform rotate-45 origin-top-right"></div>
          <div className="absolute top-40 right-0 w-full h-1 bg-gradient-to-r from-transparent to-[#F29F05] transform rotate-45 origin-top-right"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="text-white space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 sm:px-5 py-2 rounded-full">
              <div className="w-2 h-2 bg-[#F29F05] rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium">Leading Mobility Innovation in West Africa</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Driving the
              <span className="block text-[#F29F05]">
                Future of Mobility
              </span>
              in Ghana
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl">
              Importing, assembling, and distributing electric and fuel-powered vehicles for sustainable mobility across Ghana and West Africa.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                to="/vehicles"
                className="bg-[#F29F05] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e89004] transition-all transform hover:scale-105 text-center cursor-pointer whitespace-nowrap"
              >
                Explore Vehicles
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B1A33] transition-all transform hover:scale-105 text-center cursor-pointer whitespace-nowrap"
              >
                Partner With Us
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#F29F05]">500+</div>
                <div className="text-xs sm:text-sm text-white/60">Vehicles Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#F29F05]">5+</div>
                <div className="text-xs sm:text-sm text-white/60">Years Excellence</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#F29F05]">24/7</div>
                <div className="text-xs sm:text-sm text-white/60">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Visual - Feature Cards */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20sleek%20electric%20vehicle%20in%20professional%20studio%20lighting%20with%20clean%20white%20background%2C%20futuristic%20EV%20car%20design%2C%20sustainable%20mobility%20technology%2C%20high-end%20automotive%20photography%2C%20metallic%20blue%20and%20orange%20accent%20lighting%2C%20minimalist%20professional%20product%20shot%2C%20cutting-edge%20vehicle%20innovation&width=800&height=900&seq=hero-ev-main&orientation=portrait"
                alt="Electric Vehicle"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A33]/80 via-transparent to-transparent"></div>
            </div>

            {/* Floating Feature Cards */}
            <div className="hidden sm:block absolute -left-6 top-1/4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-[#1E5AA8]/20 max-w-[200px]">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#1E5AA8]/10 rounded-xl flex items-center justify-center">
                  <i className="ri-battery-charge-line text-2xl text-[#1E5AA8]"></i>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B1A33]">EV Technology</div>
                  <div className="text-xs text-[#2C3440]">Sustainable Power</div>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute -right-6 bottom-1/4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-[#F29F05]/20 max-w-[200px]">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#F29F05]/10 rounded-xl flex items-center justify-center">
                  <i className="ri-tools-line text-2xl text-[#F29F05]"></i>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B1A33]">Local Assembly</div>
                  <div className="text-xs text-[#2C3440]">Ghana-Ready</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="hidden lg:block absolute -top-4 -right-4 w-24 h-24 border-2 border-[#F29F05]/30 rounded-full"></div>
            <div className="hidden lg:block absolute -bottom-4 -left-4 w-32 h-32 border-2 border-[#1E5AA8]/30 rounded-2xl rotate-12"></div>
          </div>
        </div>

        {/* Service Icons Strip - Below Main Content */}
        <div className="mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { icon: 'ri-car-line', text: 'Electric & Fuel Vehicle Importation' },
              { icon: 'ri-tools-line', text: 'Vehicle Assembly & Distribution' },
              { icon: 'ri-battery-charge-line', text: 'Lithium Battery Distribution' },
              { icon: 'ri-battery-line', text: 'Lead-Acid Battery Distribution' },
              { icon: 'ri-settings-3-line', text: 'Spare Parts & After-Sales' },
              { icon: 'ri-charging-pile-2-line', text: 'Charging & Service Infrastructure' }
            ].map((item, index) => (
              <div key={index} className="group flex flex-col items-center text-center space-y-2 sm:space-y-3 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-[#1E5AA8]/20 transition-all">
                  <i className={`${item.icon} text-xl sm:text-2xl text-[#1E5AA8] group-hover:text-[#F29F05] transition-colors`}></i>
                </div>
                <p className="text-xs sm:text-sm font-medium text-white/80 group-hover:text-white transition-colors leading-tight">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Tagline */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-white/60 text-xs sm:text-sm font-medium px-4">
            A proud subsidiary of A75 Enterprise Group Ltd — Driven by Diversity. United by Vision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;