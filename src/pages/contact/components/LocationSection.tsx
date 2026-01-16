
const LocationSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#F29F05]/10 text-[#F29F05] rounded-full text-sm font-semibold">
              Our Location
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1A33] mb-6">
            Visit Our Showroom
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience our vehicles firsthand at our modern showroom in the heart of Accra. See the latest electric and fuel-powered vehicles up close.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Map */}
          <div className="relative">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8267739058!2d-0.20594842503!3d5.603717094434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0x72f7c8b1b1b1b1b1!2sKwame%20Nkrumah%20Ave%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="A75 Mobility Location"
              ></iframe>
            </div>

            {/* Location Badge */}
            <div className="absolute top-4 left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#F29F05] rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-map-pin-line text-white"></i>
                </div>
                <div>
                  <div className="font-semibold text-[#0B1A33] text-sm">A75 Mobility</div>
                  <div className="text-xs text-gray-600">Showroom & Office</div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-[#0B1A33] mb-6">
                Showroom Details
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#F29F05]/10 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <i className="ri-map-pin-line text-[#F29F05] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B1A33] mb-1">Address</h4>
                    <p className="text-gray-600">Adabraka. Accra Ghana</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#F29F05]/10 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <i className="ri-time-line text-[#F29F05] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B1A33] mb-1">Opening Hours</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#F29F05]/10 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <i className="ri-car-line text-[#F29F05] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B1A33] mb-1">Parking</h4>
                    <p className="text-gray-600">Free customer parking available</p>
                    <p className="text-gray-600">EV charging stations on-site</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#F29F05]/10 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <i className="ri-service-line text-[#F29F05] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B1A33] mb-1">Services Available</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>• Vehicle viewing and test drives</p>
                      <p>• Sales consultation</p>
                      <p>• Financing assistance</p>
                      <p>• After-sales support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-gradient-to-r from-[#0B1A33] to-[#1E5AA8] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Getting Here</h3>
              <p className="mb-6 opacity-90">
                Located in the heart of Accra, our showroom is easily accessible by public transport and private vehicle. We're just minutes away from major landmarks.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <i className="ri-bus-line text-[#F29F05] mr-3"></i>
                  <span>Multiple trotro routes available</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-taxi-line text-[#F29F05] mr-3"></i>
                  <span>Uber and Bolt pickup point</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-walk-line text-[#F29F05] mr-3"></i>
                  <span>5 minutes walk from Kwame Nkrumah Circle</span>
                </div>
              </div>

              <button className="bg-[#F29F05] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e89004] transition-colors cursor-pointer whitespace-nowrap">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
