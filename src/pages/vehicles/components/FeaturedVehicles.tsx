
const FeaturedVehicles = () => {
  const vehicles = [
    {
      name: 'A75 Urban EV',
      category: 'Electric Car',
      price: 'GHS 180,000',
      image: 'https://readdy.ai/api/search-image?query=Sleek%20modern%20electric%20sedan%20car%20in%20white%20color%2C%20contemporary%20EV%20design%20with%20aerodynamic%20body%2C%20professional%20automotive%20photography%20with%20clean%20studio%20lighting%20and%20minimal%20background&width=600&height=400&seq=urban-ev&orientation=landscape',
      specs: {
        range: '350 km',
        charging: '45 min',
        topSpeed: '160 km/h',
        seats: '5 Seats'
      },
      features: ['Autopilot Ready', 'Premium Interior', 'Fast Charging', 'Smart Connectivity'],
      badge: 'Best Seller'
    },
    {
      name: 'A75 City Rider',
      category: 'Electric Motorcycle',
      price: 'GHS 25,000',
      image: 'https://readdy.ai/api/search-image?query=Modern%20electric%20motorcycle%20in%20blue%20color%2C%20sleek%20electric%20bike%20design%20with%20contemporary%20styling%2C%20professional%20automotive%20photography%20with%20clean%20studio%20lighting%20and%20minimal%20background&width=600&height=400&seq=city-rider&orientation=landscape',
      specs: {
        range: '120 km',
        charging: '3 hours',
        topSpeed: '80 km/h',
        weight: '85 kg'
      },
      features: ['Removable Battery', 'LED Lighting', 'Digital Display', 'Anti-theft System'],
      badge: 'Eco Choice'
    },
    {
      name: 'A75 Cargo Trike',
      category: 'Electric Tricycle',
      price: 'GHS 45,000',
      image: 'https://static.readdy.ai/image/8e94e1476ded2dfd78d904370fe1b75f/9c4e572769f75bffdc66f5313cd38bc1.jpeg',
      specs: {
        range: '100 km',
        charging: '4 hours',
        topSpeed: '60 km/h',
        payload: '300 kg'
      },
      features: ['Large Cargo Space', 'Stable Design', 'Weather Protection', 'Low Maintenance'],
      badge: 'Commercial'
    }
  ];

  return (
    <section id="featured-vehicles" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#F29F05]/10 text-[#F29F05] rounded-full text-sm font-semibold">
              Featured Vehicles
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1A33] mb-6">
            Popular Models
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular vehicles that combine cutting-edge technology, exceptional performance, and outstanding value for money.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-product-shop>
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              {/* Badge */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#F29F05] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {vehicle.badge}
                  </span>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-sm text-[#F29F05] font-semibold mb-1">
                    {vehicle.category}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1A33] mb-2">
                    {vehicle.name}
                  </h3>
                  <div className="text-3xl font-bold text-[#1E5AA8]">
                    {vehicle.price}
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                  {Object.entries(vehicle.specs).map(([key, value], specIndex) => (
                    <div key={specIndex} className="text-center">
                      <div className="text-sm text-gray-500 capitalize mb-1">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="font-semibold text-[#0B1A33]">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {vehicle.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <i className="ri-check-line text-[#F29F05] mr-2"></i>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="w-full bg-[#F29F05] text-white py-3 rounded-lg font-semibold hover:bg-[#e89004] transition-colors cursor-pointer whitespace-nowrap block text-center"
                  >
                    View Details
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full border-2 border-[#0B1A33] text-[#0B1A33] py-3 rounded-lg font-semibold hover:bg-[#0B1A33] hover:text-white transition-colors cursor-pointer whitespace-nowrap block text-center"
                  >
                    Schedule Test Drive
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="bg-[#0B1A33] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1E5AA8] transition-colors cursor-pointer whitespace-nowrap inline-block"
          >
            Inquire About Availability
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
