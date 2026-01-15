
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="cursor-pointer">
              <img 
                src="https://static.readdy.ai/image/8e94e1476ded2dfd78d904370fe1b75f/2d03cd848508ad7f9450a728efdf925a.png" 
                alt="A75 Electric Mobility Ltd - Sustainable Transportation Solutions Ghana"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-[#0B1A33] hover:text-[#1E5AA8] transition-colors cursor-pointer whitespace-nowrap">
              Home
            </a>
            <a href="/about" className="text-[#0B1A33] hover:text-[#1E5AA8] transition-colors cursor-pointer whitespace-nowrap">
              About
            </a>
            <a href="/vehicles" className="text-[#0B1A33] hover:text-[#1E5AA8] transition-colors cursor-pointer whitespace-nowrap">
              Vehicles
            </a>
            <a href="/services" className="text-[#0B1A33] hover:text-[#1E5AA8] transition-colors cursor-pointer whitespace-nowrap">
              Services
            </a>
            <a href="/contact" className="text-[#0B1A33] hover:text-[#1E5AA8] transition-colors cursor-pointer whitespace-nowrap">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a 
              href="/contact"
              className="hidden md:block bg-[#F29F05] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e89004] transition-colors cursor-pointer whitespace-nowrap"
            >
              Partner With Us
            </a>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-[#0B1A33] cursor-pointer">
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;