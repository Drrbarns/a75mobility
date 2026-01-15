
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import ProcessSection from './components/ProcessSection';
import SupportSection from './components/SupportSection';
import CTASection from './components/CTASection';

const ServicesPage = () => {
  useEffect(() => {
    // Update document title and meta tags
    document.title = 'EV Services Ghana A75 Mobility - Charging Infrastructure West Africa';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Comprehensive electric vehicle services in Ghana by A75 Mobility. EV charging infrastructure, vehicle assembly, maintenance, and sustainable transportation solutions across West Africa.');
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'EV charging infrastructure Ghana, electric vehicle services, vehicle assembly Ghana, EV maintenance West Africa, sustainable transport services, charging station installation');
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/services`);
    
    // Add Schema.org JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "EV Services Ghana A75 Mobility - Charging Infrastructure West Africa",
      "description": "Comprehensive electric vehicle services in Ghana by A75 Mobility. EV charging infrastructure, vehicle assembly, maintenance, and sustainable transportation solutions across West Africa.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/services`,
      "provider": {
        "@type": "Organization",
        "name": "A75 Electric & Fuel-Powered Mobility Ltd",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "Ghana",
          "addressRegion": "Greater Accra"
        }
      },
      "serviceType": "Electric Vehicle Services",
      "areaServed": {
        "@type": "Country",
        "name": "Ghana"
      }
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
      if (metaDescription && metaDescription.parentNode) {
        document.head.removeChild(metaDescription);
      }
      if (metaKeywords && metaKeywords.parentNode) {
        document.head.removeChild(metaKeywords);
      }
      if (canonical && canonical.parentNode) {
        document.head.removeChild(canonical);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <header>
          <h1 className="sr-only">A75 Mobility Electric Vehicle Services</h1>
        </header>
        <HeroSection />
        <ServicesGrid />
        <ProcessSection />
        <SupportSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
