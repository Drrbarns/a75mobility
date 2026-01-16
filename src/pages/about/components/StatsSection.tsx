
const StatsSection = () => {
  const stats = [
    {
      number: '500+',
      label: 'Vehicles Imported',
      icon: 'ri-car-line',
      description: 'Electric and fuel-powered vehicles brought to Ghana'
    },
    {
      number: '5+',
      label: 'Local Partners',
      icon: 'ri-team-line',
      description: 'Strategic partnerships across the country'
    },
    {
      number: '20',
      label: 'Charging stations',
      icon: 'ri-charging-pile-line',
      description: 'EV charging infrastructure deployed'
    },
    {
      number: '1000+',
      label: 'Satisfied Customers',
      icon: 'ri-user-heart-line',
      description: 'Happy customers across Ghana'
    },
    {
      number: '15+',
      label: 'Vehicle Models',
      icon: 'ri-roadster-line',
      description: 'Diverse range of mobility solutions'
    },
    {
      number: '3+',
      label: 'Years Warranty',
      icon: 'ri-shield-check-line',
      description: 'Comprehensive coverage on all vehicles'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F29F05]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1E5AA8]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#F29F05]/10 text-[#F29F05] rounded-full text-sm font-semibold">
              Our Impact
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1A33] mb-6">
            Numbers That Tell Our Story
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Since our inception, we've been making measurable impact in Ghana's transportation sector through innovation and dedication.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#F29F05] to-[#e89004] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <i className={`${stat.icon} text-3xl text-white`}></i>
              </div>

              <div className="text-4xl md:text-5xl font-bold text-[#0B1A33] mb-3">
                {stat.number}
              </div>

              <h3 className="text-xl font-bold text-[#1E5AA8] mb-3">
                {stat.label}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievement Banner */}
        <div className="mt-20 bg-gradient-to-r from-[#F29F05] to-[#e89004] rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0B1A33]/20 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-trophy-line text-4xl text-white"></i>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-4">Leading Ghana's EV Revolution</h3>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
              Recognized as a pioneer in sustainable transportation, we continue to set new standards for electric vehicle adoption and infrastructure development in West Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
