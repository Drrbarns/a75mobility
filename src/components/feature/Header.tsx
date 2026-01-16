
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="cursor-pointer">
              <img
                src="/logo.png"
                alt="A75 Electric Mobility Ltd - Sustainable Transportation Solutions Ghana"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#0B1A33] hover:text-[#1E5AA8] transition-colors cursor-pointer whitespace-nowrap">
              Home
            </Link>
            <Link to="/about" className="text-[#0B1A33] hover:text-[#1E5AA8] transition-colors cursor-pointer whitespace-nowrap">
              About
            </Link>
            <Link to="/vehicles" className="text-[#0B1A33] hover:text-[#1E5AA8] transition-colors cursor-pointer whitespace-nowrap">
              Vehicles
            </Link>
            <Link to="/services" className="text-[#0B1A33] hover:text-[#1E5AA8] transition-colors cursor-pointer whitespace-nowrap">
              Services
            </Link>
            <Link to="/contact" className="text-[#0B1A33] hover:text-[#1E5AA8] transition-colors cursor-pointer whitespace-nowrap">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className="hidden md:block bg-[#F29F05] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e89004] transition-colors cursor-pointer whitespace-nowrap"
            >
              Partner With Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#0B1A33] cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg py-4 px-6 flex flex-col space-y-4 animate-fade-in-down">
          <Link
            to="/"
            className="text-[#0B1A33] hover:text-[#1E5AA8] font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#0B1A33] hover:text-[#1E5AA8] font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/vehicles"
            className="text-[#0B1A33] hover:text-[#1E5AA8] font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Vehicles
          </Link>
          <Link
            to="/services"
            className="text-[#0B1A33] hover:text-[#1E5AA8] font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-[#0B1A33] hover:text-[#1E5AA8] font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="bg-[#F29F05] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e89004] text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Partner With Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;