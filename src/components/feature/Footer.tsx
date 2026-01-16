
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0B1A33] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F59E0B] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="bg-white/10 p-2 rounded-lg inline-block mb-4 backdrop-blur-sm">
              <img
                src="/logo.png"
                alt="A75 Electric & Fuel-Powered Mobility Ltd - Ghana Electric Vehicle Company Logo"
                className="h-12"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of <strong>electric and fuel-powered vehicles in Ghana</strong>, specializing in sustainable mobility solutions across West Africa.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#F29F05]/20 rounded-lg flex items-center justify-center">
                  <i className="ri-phone-line text-[#F29F05]"></i>
                </div>
                <span className="text-[#C9CED8]">+233 503 336 665</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#F29F05]/20 rounded-lg flex items-center justify-center">
                  <i className="ri-mail-line text-[#F29F05]"></i>
                </div>
                <span className="text-[#C9CED8]">info@a75mobility.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#F29F05]/20 rounded-lg flex items-center justify-center">
                  <i className="ri-map-pin-line text-[#F29F05]"></i>
                </div>
                <span className="text-[#C9CED8]">62 Kwame Nkrumah Avenue, Adabraka. Accra Ghana</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Our Vehicles', href: '/vehicles' },
                { label: 'Services', href: '/services' },
                { label: 'Contact', href: '/contact' }
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-[#C9CED8] hover:text-[#F29F05] hover:translate-x-2 transition-all cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Our Services</h4>
            <div className="space-y-3">
              {[
                'Vehicle Import',
                'EV Assembly',
                'Battery Distribution',
                'Charging Infrastructure',
                'Fleet Management'
              ].map((service, index) => (
                <Link key={index} to="/services" className="block text-[#C9CED8] text-sm hover:text-[#F29F05] transition-colors">
                  {service}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                { icon: 'ri-linkedin-fill', href: '#' },
                { icon: 'ri-facebook-fill', href: '#' },
                { icon: 'ri-tiktok-fill', href: '#' },
                { icon: 'ri-instagram-fill', href: '#' },
                { icon: 'ri-twitter-x-fill', href: '#' },
                { icon: 'ri-youtube-fill', href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-white/5 hover:bg-[#F29F05] rounded-xl flex items-center justify-center text-[#F29F05] hover:text-white transition-all transform hover:scale-110 cursor-pointer"
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-[#C9CED8] text-sm mb-2">
                © 2024 A75 Electric & Fuel-Powered Mobility Ltd. All rights reserved.
              </p>
              <p className="text-[#C9CED8]/70 text-xs">
                A proud subsidiary of A75 Enterprise Group Ltd — Driven by Diversity. United by Vision.
              </p>
            </div>
          </div>

          {/* Bottom Link */}
          <div className="text-center mt-8 pt-6 border-t border-white/5">
            <a
              href="https://doctorbarns.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[#C9CED8]/60 hover:text-[#F29F05] text-xs transition-colors cursor-pointer"
            >
              <i className="ri-global-line"></i>
              <span>Powered by Doctor Barns Tech</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
