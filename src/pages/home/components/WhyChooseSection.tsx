
const WhyChooseSection = () => {
  const advantages = [
    {
      icon: 'ri-global-line',
      title: 'Comprehensive Mobility Ecosystem',
      description: 'End-to-end solutions from importation to after-sales service and infrastructure development.',
      stat: '360°',
      statLabel: 'Coverage'
    },
    {
      icon: 'ri-handshake-line',
      title: 'Trusted International Manufacturers',
      description: 'Strategic partnerships with leading global vehicle and battery manufacturers for quality assurance.',
      stat: '5+',
      statLabel: 'Partners'
    },
    {
      icon: 'ri-flashlight-line',
      title: 'EV & Fuel Vehicle Expertise',
      description: 'Specialized knowledge in both electric and traditional fuel-powered vehicle technologies.',
      stat: '100%',
      statLabel: 'Expertise'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Built for Ghanaian Terrain',
      description: 'Vehicles and solutions specifically configured for local road conditions and climate.',
      stat: '24/7',
      statLabel: 'Support'
    },
    {
      icon: 'ri-building-line',
      title: 'A75 Group Logistics Power',
      description: 'Backed by A75 Enterprise Group\'s extensive logistics and procurement capabilities.',
      stat: '5+',
      statLabel: 'Years'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Quality Assurance & Warranty',
      description: 'Comprehensive quality control processes and extended warranty coverage for peace of mind.',
      stat: '3+',
      statLabel: 'Years Warranty'
    }
  ];

  return (
    <section className="py-24 bg-[#1a2d4d] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1E5AA8]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#F29F05]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#F29F05]/20 text-[#F29F05] px-6 py-3 rounded-full text-sm font-medium mb-6">
            <i className="ri-star-line"></i>
            <span>Why Choose Us</span>
          </div>

          <h3 className="text-5xl font-bold text-white mb-6">
            Why A75 Mobility <span className="text-[#F29F05]">Leads the Way</span>
          </h3>

          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Experience the difference with our comprehensive approach to mobility solutions
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 h-full">
                {/* Icon and Stat */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-[#F29F05]/20 rounded-2xl flex items-center justify-center group-hover:bg-[#F29F05]/30 transition-colors">
                    <i className={`${advantage.icon} text-3xl text-[#F29F05]`}></i>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{advantage.stat}</div>
                    <div className="text-xs text-white/60">{advantage.statLabel}</div>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#F29F05] transition-colors">
                  {advantage.title}
                </h4>

                <p className="text-white/70 leading-relaxed">
                  {advantage.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-6 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#F29F05] to-[#1E5AA8] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"
                  ></div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F29F05]/20 to-[#1E5AA8]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/10">
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '1000+', label: 'Vehicles Delivered' },
            { number: '50+', label: 'Service Centers' },
            { number: '24/7', label: 'Customer Support' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-[#F29F05] mb-2">{stat.number}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
