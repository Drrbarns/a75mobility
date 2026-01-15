
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20office%20building%20in%20Accra%20Ghana%20with%20professional%20business%20environment%2C%20contemporary%20architecture%20with%20glass%20facade%20and%20organized%20entrance%20area%20in%20urban%20setting&width=1920&height=1080&seq=contact-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A33]/90 via-[#0B1A33]/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#F29F05]/20 text-[#F29F05] rounded-full text-sm font-semibold backdrop-blur-sm">
              Get In Touch
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Let's Drive
            <span className="text-[#F29F05] block">Together</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-2xl">
            Ready to transform your mobility experience? Our team is here to help you find the perfect vehicle solution and answer all your questions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-[#F29F05] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e89004] transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap">
              Contact Us Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B1A33] transition-all cursor-pointer whitespace-nowrap">
              Visit Our Showroom
            </button>
          </div>
        </div>
      </div>

      {/* Contact Stats */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <div className="flex space-x-8 text-white text-center">
          <div>
            <div className="text-2xl font-bold text-[#F29F05]">&lt;1hr</div>
            <div className="text-sm opacity-80">Response Time</div>
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
