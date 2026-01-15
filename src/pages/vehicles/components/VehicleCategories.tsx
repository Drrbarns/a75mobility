
const VehicleCategories = () => {
  const categories = [
    {
      title: 'Electric Cars',
      description: 'Sustainable passenger vehicles for urban and highway driving',
      icon: 'ri-car-line',
      image: 'https://readdy.ai/api/search-image?query=Modern%20electric%20car%20in%20Ghana%20urban%20setting%2C%20sleek%20EV%20sedan%20with%20clean%20design%20parked%20in%20contemporary%20city%20environment%2C%20professional%20automotive%20photography%20with%20bright%20lighting&width=600&height=400&seq=electric-cars&orientation=landscape',
      features: ['Zero Emissions', '300+ km Range', 'Fast Charging', 'Smart Features'],
      count: '8 Models'
    },
    {
      title: 'Electric Motorcycles',
      description: 'Efficient two-wheelers perfect for city commuting',
      icon: 'ri-motorbike-line',
      image: 'https://readdy.ai/api/search-image?query=Modern%20electric%20motorcycle%20in%20Ghana%20street%20setting%2C%20sleek%20electric%20bike%20with%20contemporary%20design%2C%20professional%20automotive%20photography%20with%20urban%20background&width=600&height=400&seq=electric-bikes&orientation=landscape',
      features: ['Silent Operation', '150+ km Range', 'Quick Charge', 'Lightweight'],
      count: '5 Models'
    },
    {
      title: 'Fuel-Powered Vehicles',
      description: 'Reliable traditional vehicles with proven performance',
      icon: 'ri-gas-station-line',
      image: 'https://readdy.ai/api/search-image?query=Modern%20fuel-powered%20vehicle%20in%20Ghana%20setting%2C%20reliable%20car%20with%20contemporary%20design%20parked%20in%20professional%20environment%2C%20clean%20automotive%20photography&width=600&height=400&seq=fuel-vehicles&orientation=landscape',
      features: ['Proven Reliability', 'Wide Service Network', 'Fuel Efficient', 'Affordable'],
      count: '4 Models'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#F29F05]/10 text-[#F29F05] rounded-full text-sm font-semibold">
              Vehicle Categories
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1A33] mb-6">
            Choose Your Category
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you need an eco-friendly electric vehicle or a reliable fuel-powered option, we have the perfect mobility solution for your needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-[#F29F05] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {category.count}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                {/* Title Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-14 h-14 bg-[#F29F05]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className={`${category.icon} text-2xl text-[#F29F05]`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B1A33]">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="mb-8 flex-grow">
                  <h4 className="text-sm font-semibold text-[#0B1A33] uppercase tracking-wide mb-4">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <i className="ri-check-line text-[#F29F05] text-lg mt-0.5 flex-shrink-0"></i>
                        <span className="text-sm text-gray-700 leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-[#0B1A33] text-white py-3.5 rounded-lg font-semibold hover:bg-[#1E5AA8] transition-all duration-300 cursor-pointer group-hover:shadow-lg mt-auto">
                  View Models
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleCategories;
