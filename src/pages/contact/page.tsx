
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';
import LocationSection from './components/LocationSection';
import ContactInfo from './components/ContactInfo';

const ContactPage = () => {
  useEffect(() => {
    // Update document title and meta tags
    document.title = 'Contact A75 Mobility Ghana - Electric Vehicle Partnership Inquiries';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Contact A75 Electric & Fuel-Powered Mobility Ltd in Ghana. Get in touch for electric vehicle partnerships, charging infrastructure projects, and sustainable transportation solutions across West Africa.');
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'contact A75 mobility Ghana, electric vehicle partnerships, EV charging projects, sustainable transport inquiries, West Africa mobility contact, vehicle assembly partnerships');
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/contact`);
    
    // Add Schema.org JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact A75 Mobility Ghana - Electric Vehicle Partnership Inquiries",
      "description": "Contact A75 Electric & Fuel-Powered Mobility Ltd in Ghana. Get in touch for electric vehicle partnerships, charging infrastructure projects, and sustainable transportation solutions across West Africa.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/contact`,
      "mainEntity": {
        "@type": "Organization",
        "name": "A75 Electric & Fuel-Powered Mobility Ltd",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "Ghana",
          "addressRegion": "Greater Accra"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "areaServed": "GH"
        }
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
          <h1 className="sr-only">Contact A75 Electric & Fuel-Powered Mobility Ltd</h1>
        </header>
        <HeroSection />
        <ContactInfo />
        <ContactForm />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
