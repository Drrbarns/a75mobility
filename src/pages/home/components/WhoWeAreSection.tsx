import { Link } from 'react-router-dom';

const WhoWeAreSection = () => {
  // ...
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side ... */}
          <div className="order-2 lg:order-1 relative">
            {/* ... */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=Futuristic%20electric%20vehicle%20assembly%20line%20with%20advanced%20robotics%20and%20AI%20technology%2C%20sleek%20modern%20electric%20cars%20being%20assembled%20by%20precision%20robots%2C%20clean%20high-tech%20manufacturing%20facility%20with%20blue%20LED%20lighting%20and%20sustainable%20production&width=700&height=500&seq=futuristic-assembly&orientation=landscape"
                alt="Advanced EV Assembly and Innovation"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1A33]/20 to-transparent"></div>
            </div>
            {/* ... */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-xl p-6 border border-[#C9CED8]/30">
              {/* ... */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#F29F05]/10 rounded-lg flex items-center justify-center">
                  <i className="ri-trophy-line text-2xl text-[#F29F05]"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0B1A33]">5+</div>
                  <div className="text-sm text-[#2C3440]">Years Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-[#1E5AA8]/10 text-[#1E5AA8] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <i className="ri-lightbulb-line"></i>
                <span>Innovation Leader</span>
              </div>

              <h3 className="text-5xl font-bold text-[#0B1A33] mb-6 leading-tight">
                Powering Mobility Through
                <span className="text-[#1E5AA8]"> Innovation</span>
              </h3>

              <p className="text-lg text-[#2C3440] leading-relaxed">
                As a leading subsidiary of A75 Enterprise Group Ltd, we're transforming Africa's mobility landscape through strategic partnerships with international manufacturers and cutting-edge vehicle assembly capabilities. Our comprehensive approach ensures reliable, efficient, and sustainable transportation solutions tailored for Ghanaian terrain.
              </p>
            </div>

            {/* Enhanced Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'ri-lightbulb-line', label: 'Innovation', color: 'bg-blue-50 text-[#1E5AA8]' },
                { icon: 'ri-award-line', label: 'Quality', color: 'bg-orange-50 text-[#F29F05]' },
                { icon: 'ri-leaf-line', label: 'Sustainability', color: 'bg-green-50 text-green-600' },
                { icon: 'ri-shield-check-line', label: 'Integrity', color: 'bg-purple-50 text-purple-600' }
              ].map((value, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-xl bg-white border border-[#C9CED8]/20 hover:shadow-md transition-all">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${value.color}`}>
                    <i className={`${value.icon} text-lg`}></i>
                  </div>
                  <span className="text-[#2C3440] font-semibold">{value.label}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-[#F29F05] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e89004] transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                <span>Learn More About Us</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
              <div className="flex items-center space-x-2 text-[#2C3440]">
                <div className="w-2 h-2 bg-[#F29F05] rounded-full animate-pulse"></div>
                <span className="text-sm">Trusted by 500+ clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
