
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import WhoWeAreSection from './components/WhoWeAreSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseSection from './components/WhyChooseSection';
import CTASection from './components/CTASection';

const HomePage = () => {
  useEffect(() => {
    // Update document title and meta tags
    document.title = 'Ghana Electric Vehicles A75 Mobility - Sustainable Transportation Solutions';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A75 Electric & Fuel-Powered Mobility Ltd - Leading provider of electric and fuel-powered vehicles in Ghana. Importing, assembling, and distributing sustainable mobility solutions across West Africa with comprehensive charging infrastructure.');
    }
    
    // Add Schema.org JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "A75 Electric & Fuel-Powered Mobility Ltd",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}`,
      "logo": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/logo.png`,
      "description": "Leading provider of electric and fuel-powered vehicles in Ghana, specializing in importing, assembling, and distributing sustainable mobility solutions across West Africa.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Ghana",
        "addressRegion": "Greater Accra"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "areaServed": "GH"
      },
      "sameAs": [
        `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/about`,
        `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/services`,
        `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/vehicles`
      ]
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main>
        <header>
          <h1 className="sr-only">A75 Electric & Fuel-Powered Mobility Ltd</h1>
        </header>
        <HeroSection />
        <WhoWeAreSection />
        <ServicesSection />
        <WhyChooseSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
