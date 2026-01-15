
const StorySection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#F29F05]/10 text-[#F29F05] rounded-full text-sm font-semibold">
                Our Journey
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1A33] mb-8 leading-tight">
              Building Tomorrow's
              <span className="text-[#1E5AA8] block">Transportation Today</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded as a subsidiary of A75 Enterprise Group Ltd, A75 Mobility emerged from a vision to revolutionize Ghana's transportation sector through sustainable and innovative mobility solutions.
              </p>
              
              <p>
                Our journey began with a simple yet powerful belief: that every Ghanaian deserves access to reliable, efficient, and environmentally conscious transportation options. Today, we stand at the forefront of the electric vehicle revolution in West Africa.
              </p>
              
              <p>
                From importing cutting-edge electric vehicles to establishing local assembly operations, we're not just bringing technology to Ghana – we're building the infrastructure and expertise that will power our nation's sustainable future.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-12 space-y-6">
              {[
                { year: '2023', title: 'Company Founded', desc: 'Established as part of A75 Enterprise Group' },
                { year: '2024', title: 'First EV Imports', desc: 'Brought first electric vehicles to Ghana' },
                { year: '2024', title: 'Assembly Operations', desc: 'Launched local vehicle assembly facility' },
                { year: '2025', title: 'Expansion Plans', desc: 'Scaling operations across West Africa' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-[#F29F05] rounded-full flex items-center justify-center text-white font-bold">
                    {item.year}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0B1A33] mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="/vehicles"
              className="inline-flex items-center space-x-2 bg-[#F29F05] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e89004] transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              <span>Explore Our Vehicles</span>
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=African%20business%20leaders%20and%20engineers%20in%20modern%20office%20discussing%20electric%20vehicle%20plans%20with%20Ghana%20map%20and%20sustainable%20transportation%20charts%2C%20professional%20corporate%20environment%20with%20natural%20lighting%20and%20contemporary%20design&width=600&height=800&seq=story-image&orientation=portrait"
                alt="A75 Mobility Leadership Team"
                className="w-full h-[600px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A33]/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F29F05] mb-2">500+</div>
                <div className="text-sm text-gray-600">Vehicles Imported</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1E5AA8] mb-2">50+</div>
                <div className="text-sm text-gray-600">Local Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
