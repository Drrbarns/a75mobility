
const ServicesGrid = () => {
  const services = [
    {
      icon: 'ri-ship-line',
      title: 'Vehicle Import',
      description: 'Professional import services for electric and fuel-powered vehicles from trusted global manufacturers.',
      features: [
        'Global sourcing network',
        'Quality assurance checks',
        'Customs clearance',
        'Documentation handling'
      ],
      image: 'https://readdy.ai/api/search-image?query=Modern%20cargo%20ship%20at%20Ghana%20port%20with%20vehicles%20being%20unloaded%2C%20professional%20logistics%20operation%20with%20cranes%20and%20containers%2C%20bright%20daylight%20with%20organized%20port%20environment&width=600&height=400&seq=import-service&orientation=landscape'
    },
    {
      icon: 'ri-tools-line',
      title: 'Vehicle Assembly',
      description: 'Local assembly operations ensuring quality control and supporting Ghana\'s automotive industry development.',
      features: [
        'Modern assembly facility',
        'Skilled technicians',
        'Quality control systems',
        'Local job creation'
      ],
      image: 'https://readdy.ai/api/search-image?query=Modern%20vehicle%20assembly%20line%20in%20Ghana%20with%20African%20workers%20assembling%20electric%20vehicles%2C%20clean%20industrial%20environment%20with%20organized%20workspace%20and%20quality%20control%20processes&width=600&height=400&seq=assembly-service&orientation=landscape'
    },
    {
      icon: 'ri-battery-line',
      title: 'Battery Distribution',
      description: 'Comprehensive battery solutions including supply, installation, and recycling for electric vehicles.',
      features: [
        'Premium battery brands',
        'Installation services',
        'Recycling programs',
        'Warranty coverage'
      ],
      image: 'https://readdy.ai/api/search-image?query=Modern%20battery%20storage%20facility%20with%20organized%20electric%20vehicle%20batteries%2C%20clean%20industrial%20warehouse%20with%20safety%20equipment%20and%20professional%20storage%20systems&width=600&height=400&seq=battery-service&orientation=landscape'
    },
    {
      icon: 'ri-charging-pile-line',
      title: 'Charging Infrastructure',
      description: 'Design, installation, and maintenance of EV charging stations across Ghana for convenient electric vehicle use.',
      features: [
        'Fast charging stations',
        'Smart charging systems',
        'Maintenance support',
        'Network expansion'
      ],
      image: 'https://readdy.ai/api/search-image?query=Modern%20electric%20vehicle%20charging%20station%20in%20Ghana%20with%20sleek%20design%2C%20contemporary%20EV%20charger%20with%20digital%20display%20in%20urban%20setting%20with%20clean%20environment&width=600&height=400&seq=charging-service&orientation=landscape'
    },
    {
      icon: 'ri-team-line',
      title: 'Fleet Management',
      description: 'Complete fleet solutions for businesses including vehicle selection, maintenance, and optimization.',
      features: [
        'Fleet consultation',
        'Maintenance scheduling',
        'Performance monitoring',
        'Cost optimization'
      ],
      image: 'https://readdy.ai/api/search-image?query=Professional%20fleet%20of%20electric%20vehicles%20parked%20in%20organized%20formation%2C%20modern%20business%20fleet%20with%20various%20EV%20models%20in%20clean%20corporate%20environment&width=600&height=400&seq=fleet-service&orientation=landscape'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'After-Sales Support',
      description: '24/7 customer support, maintenance services, and technical assistance for all our vehicles.',
      features: [
        '24/7 support hotline',
        'Certified technicians',
        'Genuine spare parts',
        'Warranty services'
      ],
      image: 'https://readdy.ai/api/search-image?query=Professional%20automotive%20service%20center%20with%20African%20technicians%20providing%20customer%20support%2C%20modern%20service%20bay%20with%20diagnostic%20equipment%20and%20friendly%20customer%20service%20environment&width=600&height=400&seq=support-service&orientation=landscape'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#F29F05]/10 text-[#F29F05] rounded-full text-sm font-semibold">
              What We Offer
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1A33] mb-6">
            Comprehensive Services
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end mobility solutions, from importing vehicles to building charging infrastructure, ensuring a complete ecosystem for sustainable transportation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="relative overflow-hidden h-64 md:h-auto">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A33]/20 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#F29F05]/10 rounded-xl flex items-center justify-center mr-4">
                      <i className={`${service.icon} text-2xl text-[#F29F05]`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B1A33]">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <i className="ri-check-line text-[#F29F05] mr-2"></i>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="bg-[#0B1A33] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1E5AA8] transition-colors cursor-pointer whitespace-nowrap">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
