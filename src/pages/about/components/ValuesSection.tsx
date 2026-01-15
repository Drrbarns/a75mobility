
const ValuesSection = () => {
  const values = [
    {
      icon: 'ri-leaf-line',
      title: 'Sustainability',
      description: 'Committed to reducing carbon emissions and promoting eco-friendly transportation solutions across Ghana.',
      color: 'bg-green-500'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation',
      description: 'Continuously advancing technology and processes to deliver cutting-edge mobility solutions.',
      color: 'bg-[#F29F05]'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Quality',
      description: 'Ensuring the highest standards in every vehicle and service we provide to our customers.',
      color: 'bg-[#1E5AA8]'
    },
    {
      icon: 'ri-team-line',
      title: 'Community',
      description: 'Building strong partnerships and contributing to the economic development of local communities.',
      color: 'bg-purple-500'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Excellence',
      description: 'Delivering exceptional customer service and maintaining the highest professional standards.',
      color: 'bg-red-500'
    },
    {
      icon: 'ri-global-line',
      title: 'Vision',
      description: 'Leading the transformation of West Africa\'s transportation landscape through strategic innovation.',
      color: 'bg-teal-500'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#F29F05]/10 text-[#F29F05] rounded-full text-sm font-semibold">
              Our Values
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1A33] mb-6">
            What Drives Us Forward
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our core values guide every decision we make and every solution we deliver, ensuring we stay true to our mission of transforming Ghana's mobility landscape.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-6 transform rotate-3 hover:rotate-0 transition-transform`}>
                <i className={`${value.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0B1A33] mb-4">
                {value.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gradient-to-r from-[#0B1A33] to-[#1E5AA8] rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F29F05]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              To accelerate Ghana's transition to sustainable transportation by providing innovative, reliable, and accessible electric and fuel-powered mobility solutions that empower communities and protect our environment for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
