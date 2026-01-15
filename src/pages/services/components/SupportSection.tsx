
const SupportSection = () => {
  const supportFeatures = [
    {
      icon: 'ri-24-hours-line',
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your mobility needs and emergency situations.',
      stats: '365 Days/Year'
    },
    {
      icon: 'ri-tools-fill',
      title: 'Expert Technicians',
      description: 'Certified professionals with extensive experience in electric and fuel-powered vehicles.',
      stats: '50+ Technicians'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Service Centers',
      description: 'Strategically located service centers across Ghana for convenient access.',
      stats: '15+ Locations'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Warranty Coverage',
      description: 'Comprehensive warranty protection for peace of mind and long-term reliability.',
      stats: '3+ Years'
    }
  ];

  const testimonials = [
    {
      name: 'Kwame Osei',
      position: 'Fleet Manager, TransGhana Ltd',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20business%20manager%20in%20modern%20office%20setting%2C%20confident%20fleet%20manager%20wearing%20business%20attire%2C%20clean%20corporate%20headshot%20with%20natural%20lighting&width=100&height=100&seq=testimonial-1&orientation=squarish',
      quote: 'A75 Mobility transformed our fleet operations. Their electric vehicles reduced our operating costs by 60% while improving our environmental impact.',
      rating: 5
    },
    {
      name: 'Ama Adjei',
      position: 'Operations Director, GreenLogistics',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20female%20executive%20in%20corporate%20environment%2C%20confident%20operations%20director%20wearing%20business%20attire%2C%20clean%20corporate%20headshot%20with%20natural%20lighting&width=100&height=100&seq=testimonial-2&orientation=squarish',
      quote: 'The charging infrastructure they installed has been flawless. Their support team is always responsive and professional.',
      rating: 5
    },
    {
      name: 'Yaw Mensah',
      position: 'CEO, Urban Mobility Solutions',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20CEO%20in%20modern%20business%20setting%2C%20confident%20executive%20wearing%20business%20attire%2C%20clean%20corporate%20headshot%20with%20natural%20lighting&width=100&height=100&seq=testimonial-3&orientation=squarish',
      quote: 'From consultation to implementation, A75 Mobility exceeded our expectations. Their expertise in the EV space is unmatched in Ghana.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#F29F05]/10 text-[#F29F05] rounded-full text-sm font-semibold">
              Customer Support
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1A33] mb-6">
            Always Here for You
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment doesn't end with delivery. We provide ongoing support to ensure your mobility solutions continue to perform at their best.
          </p>
        </div>

        {/* Support Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {supportFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#F29F05] to-[#e89004] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <i className={`${feature.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-[#0B1A33] mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>
              
              <div className="text-2xl font-bold text-[#1E5AA8]">
                {feature.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0B1A33] mb-4">
              What Our Clients Say
            </h3>
            <p className="text-xl text-gray-600">
              Real feedback from businesses we've helped transform their mobility operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 relative"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-[#F29F05]/10 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-double-quotes-l text-2xl text-[#F29F05]"></i>
                </div>
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-[#F29F05]"></i>
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-[#0B1A33]">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
