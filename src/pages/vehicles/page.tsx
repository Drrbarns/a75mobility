
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import VehicleCategories from './components/VehicleCategories';
import FeaturedVehicles from './components/FeaturedVehicles';
import SpecsComparison from './components/SpecsComparison';
import CTASection from './components/CTASection';

const VehiclesPage = () => {
  useEffect(() => {
    // Update document title and meta tags
    document.title = 'Electric Vehicles Ghana A75 Mobility - EV Fleet West Africa';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Explore A75 Mobility\'s comprehensive fleet of electric and fuel-powered vehicles in Ghana. From commercial trucks to passenger cars, discover sustainable transportation solutions for West Africa.');
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'electric vehicles Ghana, EV fleet West Africa, commercial electric trucks, passenger electric cars, vehicle specifications Ghana, sustainable transport fleet');
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/vehicles`);
    
    // Add Schema.org JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Electric Vehicles Ghana A75 Mobility - EV Fleet West Africa",
      "description": "Explore A75 Mobility's comprehensive fleet of electric and fuel-powered vehicles in Ghana. From commercial trucks to passenger cars, discover sustainable transportation solutions for West Africa.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/vehicles`,
      "mainEntity": {
        "@type": "ItemList",
        "name": "A75 Mobility Vehicle Fleet",
        "description": "Comprehensive collection of electric and fuel-powered vehicles available in Ghana and West Africa",
        "numberOfItems": "50+"
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
          <h1 className="sr-only">A75 Mobility Vehicle Fleet</h1>
        </header>
        <HeroSection />
        <VehicleCategories />
        <FeaturedVehicles />
        <SpecsComparison />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default VehiclesPage;
