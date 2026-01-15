
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B1A33] via-[#1E5AA8] to-[#0B1A33]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20electric%20vehicle%20assembly%20facility%20in%20Ghana%20with%20African%20engineers%20working%20on%20sustainable%20mobility%20solutions%2C%20clean%20industrial%20environment%20with%20solar%20panels%20and%20green%20technology%2C%20professional%20automotive%20manufacturing%20setting%20with%20bright%20lighting%20and%20organized%20workspace&width=1920&height=1080&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A33]/90 via-[#0B1A33]/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#F29F05]/20 text-[#F29F05] rounded-full text-sm font-semibold backdrop-blur-sm">
              About A75 Mobility
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Driving Ghana's
            <span className="text-[#F29F05] block">Mobility Future</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-2xl">
            We are pioneering the transformation of Ghana's transportation landscape through innovative electric and fuel-powered vehicle solutions, creating sustainable mobility for all.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-[#F29F05] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e89004] transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap">
              Our Story
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B1A33] transition-all cursor-pointer whitespace-nowrap">
              Meet Our Team
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#F29F05]/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-[#1E5AA8]/20 rounded-full blur-lg animate-bounce"></div>
    </section>
  );
};

export default HeroSection;
