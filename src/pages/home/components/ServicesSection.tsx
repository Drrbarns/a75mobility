
const ServicesSection = () => {
  const services = [
    {
      icon: 'ri-car-line',
      title: 'Vehicle Importation & Distribution',
      description: 'Cars, tricycles, motorcycles, buses, trucks from trusted international manufacturers.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'ri-tools-line',
      title: 'Vehicle Assembly & Customization',
      description: 'Local assembly and Ghana-ready configurations for optimal performance.',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Spare Parts & Maintenance',
      description: 'Comprehensive spare parts supply and maintenance services with warranties.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: 'ri-battery-charge-line',
      title: 'Battery Importation & Distribution',
      description: 'High-quality lithium-ion and lead-acid batteries for EV and storage systems.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'ri-charging-pile-2-line',
      title: 'EV Charging & Service Infrastructure',
      description: 'Public and private charging networks with strategic partnerships.',
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      icon: 'ri-truck-line',
      title: 'Fleet & Mobility Partnerships',
      description: 'Bulk vehicle supply, leasing, rental, and comprehensive fleet management.',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#1E5AA8] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#F29F05] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#F29F05]/10 text-[#F29F05] px-6 py-3 rounded-full text-sm font-medium mb-6">
            <i className="ri-service-line"></i>
            <span>Our Solutions</span>
          </div>
          
          <h3 className="text-5xl font-bold text-[#0B1A33] mb-6">
            Core Mobility <span className="text-[#1E5AA8]">Solutions</span>
          </h3>
          
          <p className="text-xl text-[#2C3440] max-w-3xl mx-auto leading-relaxed">
            Comprehensive mobility ecosystem designed for the future of transportation in Ghana and West Africa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#C9CED8]/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1E5AA8]/10 to-[#F29F05]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className={`${service.icon} text-3xl text-[#1E5AA8] group-hover:text-[#F29F05] transition-colors`}></i>
                  </div>
                  
                  {/* Floating number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#F29F05] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-[#0B1A33] mb-4 group-hover:text-[#1E5AA8] transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-[#2C3440] leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Learn More Link */}
                <div className="flex items-center text-[#1E5AA8] font-medium group-hover:text-[#F29F05] transition-colors cursor-pointer">
                  <span className="text-sm">Learn More</span>
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E5AA8]/5 to-[#F29F05]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a 
            href="/services"
            className="inline-flex items-center space-x-2 bg-[#F29F05] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e89004] transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <span>Learn More</span>
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
