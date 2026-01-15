
const CTASection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F29F05]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1E5AA8]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#F29F05]/10 text-[#F29F05] rounded-full text-sm font-semibold">
                Get Started Today
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1A33] mb-6 leading-tight">
              Transform Your
              <span className="text-[#1E5AA8] block">Mobility Operations</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to revolutionize your transportation needs? Our team of experts is standing by to help you design and implement the perfect mobility solution for your business.
            </p>

            {/* Service Highlights */}
            <div className="space-y-4 mb-8">
              {[
                'Free consultation and needs assessment',
                'Custom solution design and planning',
                'Professional implementation and support',
                'Ongoing maintenance and optimization'
              ].map((highlight, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-[#F29F05] rounded-full flex items-center justify-center mr-3">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Contact Options */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h4 className="font-bold text-[#0B1A33] mb-4">Contact Our Service Team</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="ri-phone-line text-[#F29F05] mr-3"></i>
                  <span className="text-gray-700">+233 503 336 665</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-mail-line text-[#F29F05] mr-3"></i>
                  <span className="text-gray-700">services@a75mobility.com</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-time-line text-[#F29F05] mr-3"></i>
                  <span className="text-gray-700">24/7 Support Available</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-[#F29F05] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e89004] transition-all transform hover:scale-105 text-center cursor-pointer whitespace-nowrap"
              >
                Get Started Today
              </a>
              <a 
                href="/vehicles"
                className="border-2 border-[#F29F05] text-[#F29F05] px-8 py-4 rounded-lg font-semibold hover:bg-[#F29F05] hover:text-white transition-all transform hover:scale-105 text-center cursor-pointer whitespace-nowrap"
              >
                Explore Vehicles
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20African%20service%20team%20in%20modern%20automotive%20facility%2C%20confident%20technicians%20and%20engineers%20working%20together%20in%20clean%20service%20environment%20with%20electric%20vehicles%20and%20advanced%20equipment&width=600&height=700&seq=service-team&orientation=portrait"
                alt="A75 Mobility Service Team"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A33]/20 to-transparent"></div>
            </div>
            
            {/* Floating Service Stats */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F29F05] mb-2">98%</div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1E5AA8] mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
