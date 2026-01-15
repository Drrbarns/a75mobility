
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
                Ready to Drive?
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1A33] mb-6 leading-tight">
              Experience the Future
              <span className="text-[#1E5AA8] block">of Mobility</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Don't just read about our vehicles – experience them firsthand. Schedule a test drive today and discover why A75 Mobility is Ghana's preferred choice for sustainable transportation.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                'Free test drive at your convenience',
                'Expert consultation on vehicle selection',
                'Flexible financing options available',
                'Comprehensive warranty coverage'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-[#F29F05] rounded-full flex items-center justify-center mr-3">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h4 className="font-bold text-[#0B1A33] mb-4">Contact Our Sales Team</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="ri-phone-line text-[#F29F05] mr-3"></i>
                  <span className="text-gray-700">+233 503 336 665</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-mail-line text-[#F29F05] mr-3"></i>
                  <span className="text-gray-700">sales@a75mobility.com</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-map-pin-line text-[#F29F05] mr-3"></i>
                  <span className="text-gray-700">62 Kwame Nkrumah Avenue, Adabraka. Accra Ghana</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-[#F29F05] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e89004] transition-all transform hover:scale-105 text-center cursor-pointer whitespace-nowrap"
              >
                Request Partnership
              </a>
              <a 
                href="/services"
                className="border-2 border-[#F29F05] text-[#F29F05] px-8 py-4 rounded-lg font-semibold hover:bg-[#F29F05] hover:text-white transition-all transform hover:scale-105 text-center cursor-pointer whitespace-nowrap"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Happy%20African%20family%20standing%20next%20to%20their%20new%20electric%20car%20in%20Ghana%2C%20smiling%20customers%20with%20modern%20EV%20in%20contemporary%20dealership%20setting%2C%20professional%20automotive%20photography%20with%20bright%20lighting&width=600&height=700&seq=happy-customers&orientation=portrait"
                alt="Happy A75 Mobility Customers"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A33]/20 to-transparent"></div>
            </div>
            
            {/* Floating Testimonial */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 max-w-sm">
              <div className="flex items-center mb-3">
                <div className="flex text-[#F29F05]">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0 Rating</span>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                "Excellent service and amazing vehicles. The electric car has transformed my daily commute!"
              </p>
              <div className="text-sm font-semibold text-[#0B1A33]">
                - Kwame A., Accra
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
