
import { Link } from 'react-router-dom';

const CTASection = () => {
  const contactActions = [
    {
      icon: 'ri-phone-line',
      title: 'Call Us',
      info: '+233 503 336 665',
      action: 'Call Now',
      href: 'tel:+233503336665',
      external: true
    },
    {
      icon: 'ri-mail-line',
      title: 'Email Us',
      info: 'info@a75mobility.com',
      action: 'Send Email',
      href: 'mailto:info@a75mobility.com',
      external: true
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Visit Us',
      info: 'Adabraka. Accra Ghana',
      action: 'Get Directions',
      href: 'https://www.google.com/maps/search/?api=1&query=Adabraka.+Accra+Ghana',
      external: true
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#1E5AA8]/5 to-[#F29F05]/5 rounded-full blur-3xl"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#1E5AA8]/20 rounded-2xl rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#F29F05]/10 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-[#F29F05]/30 rotate-45"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#1E5AA8]/10 text-[#1E5AA8] px-6 py-3 rounded-full text-sm font-medium mb-8">
            <i className="ri-rocket-line"></i>
            <span>Ready to Start?</span>
          </div>

          <h3 className="text-6xl font-bold text-[#0B1A33] mb-8 leading-tight">
            Let's Drive the
            <span className="text-[#1E5AA8]"> Future</span>,
            <span className="text-[#F29F05]"> Together</span>
          </h3>

          <p className="text-xl text-[#2C3440] mb-12 leading-relaxed max-w-4xl mx-auto">
            Partner with us for reliable, efficient, and sustainable mobility solutions across Ghana and West Africa.
            Join the revolution in African transportation technology.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-[#F29F05] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e89004] transition-all transform hover:scale-105 text-center cursor-pointer whitespace-nowrap"
          >
            Start Partnership
          </Link>
          <Link
            to="/vehicles"
            className="border-2 border-[#F29F05] text-[#F29F05] px-8 py-4 rounded-lg font-semibold hover:bg-[#F29F05] hover:text-white transition-all transform hover:scale-105 text-center cursor-pointer whitespace-nowrap"
          >
            View Our Fleet
          </Link>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          {contactActions.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.title === 'Visit Us' ? '_blank' : undefined}
              rel={contact.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
              className="group bg-white rounded-2xl p-6 shadow-lg border border-[#C9CED8]/20 hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer block"
            >
              <div className="w-12 h-12 bg-[#1E5AA8]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#F29F05]/10 transition-colors mx-auto">
                <i className={`${contact.icon} text-2xl text-[#1E5AA8] group-hover:text-[#F29F05] transition-colors`}></i>
              </div>

              <h4 className="text-lg font-bold text-[#0B1A33] mb-2">{contact.title}</h4>
              <p className="text-[#2C3440] mb-4">{contact.info}</p>

              <div className="flex items-center justify-center text-[#1E5AA8] font-medium group-hover:text-[#F29F05] transition-colors">
                <span className="text-sm">{contact.action}</span>
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-[#C9CED8]/30">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-[#2C3440]/60">
            <div className="flex items-center space-x-2 mb-4">
              <i className="ri-shield-check-line text-green-500"></i>
              <span className="text-sm">Trusted by 500+ clients</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="ri-award-line text-[#F29F05]"></i>
              <span className="text-sm">5+ years of excellence</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="ri-customer-service-2-line text-[#1E5AA8]"></i>
              <span className="text-sm">24/7 customer support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
