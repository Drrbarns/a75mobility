
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import ValuesSection from './components/ValuesSection';
import StatsSection from './components/StatsSection';

const AboutPage = () => {
  useEffect(() => {
    // Update document title and meta tags
    document.title = 'About A75 Mobility Ghana - Electric Vehicle Leaders West Africa';

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Learn about A75 Electric & Fuel-Powered Mobility Ltd - Ghana\'s leading electric vehicle company. Our mission, values, and commitment to sustainable transportation solutions across West Africa.');

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'about A75 mobility, electric vehicle company Ghana, sustainable transportation leaders, West Africa mobility solutions, EV innovation Ghana');

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/about`);

    // Add Schema.org JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About A75 Mobility Ghana - Electric Vehicle Leaders West Africa",
      "description": "Learn about A75 Electric & Fuel-Powered Mobility Ltd - Ghana's leading electric vehicle company. Our mission, values, and commitment to sustainable transportation solutions across West Africa.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/about`,
      "mainEntity": {
        "@type": "Organization",
        "name": "A75 Electric & Fuel-Powered Mobility Ltd",
        "foundingDate": "2020",
        "description": "Leading provider of electric and fuel-powered vehicles in Ghana, specializing in sustainable mobility solutions across West Africa.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "Ghana",
          "addressRegion": "Greater Accra"
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
          <h1 className="sr-only">About A75 Electric & Fuel-Powered Mobility Ltd</h1>
        </header>
        <HeroSection />
        <StorySection />
        <ValuesSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
