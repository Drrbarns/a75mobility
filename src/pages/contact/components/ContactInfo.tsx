import { Link } from 'react-router-dom';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: 'ri-phone-line',
      title: 'Call Us',
      description: 'Speak directly with our mobility experts',
      info: '+233 503 336 665',
      action: 'Call Now',
      color: 'bg-green-500',
      href: 'tel:+233503336665',
      external: true
    },
    {
      icon: 'ri-mail-line',
      title: 'Email Us',
      description: 'Send us your questions and requirements',
      info: 'info@a75mobility.com',
      action: 'Send Email',
      color: 'bg-blue-500',
      href: 'mailto:info@a75mobility.com',
      external: true
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Visit Us',
      description: 'Come see our vehicles and meet our team',
      info: '62 Kwame Nkrumah Avenue, Adabraka',
      action: 'Get Directions',
      color: 'bg-[#F29F05]',
      href: 'https://www.google.com/maps/search/?api=1&query=62+Kwame+Nkrumah+Avenue,+Adabraka',
      external: true
    },
    {
      icon: 'ri-calendar-line',
      title: 'Schedule Meeting',
      description: 'Book a consultation with our experts',
      info: 'Available Mon-Sat',
      action: 'Book Now',
      color: 'bg-purple-500',
      href: '#contact-form',
      external: false
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#F29F05]/10 text-[#F29F05] rounded-full text-sm font-semibold">
              Contact Options
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1A33] mb-6">
            Multiple Ways to Connect
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the most convenient way to reach out to us. Our team is ready to assist you with all your mobility needs.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.title === 'Visit Us' ? '_blank' : undefined}
              rel={method.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center group block cursor-pointer"
            >
              <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <i className={`${method.icon} text-2xl text-white`}></i>
              </div>

              <h3 className="text-xl font-bold text-[#0B1A33] mb-3">
                {method.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {method.description}
              </p>

              <div className="text-lg font-semibold text-[#1E5AA8] mb-6">
                {method.info}
              </div>

              <span className="w-full bg-gray-100 text-[#0B1A33] py-3 rounded-lg font-semibold hover:bg-[#0B1A33] hover:text-white transition-colors cursor-pointer whitespace-nowrap block">
                {method.action}
              </span>
            </a>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-alarm-warning-line text-3xl text-white"></i>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-4">Emergency Support</h3>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-90 mb-6">
              Need immediate assistance with your vehicle? Our emergency support team is available 24/7 for urgent situations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+233503336665"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap inline-block"
              >
                Emergency Hotline: +233 503 336 665
              </a>
              <a
                href="tel:+233503336665"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all cursor-pointer whitespace-nowrap inline-block"
              >
                Roadside Assistance
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
