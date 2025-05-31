import { useEffect } from 'react';

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  canonical?: string;
  robots?: string;
  schema?: Record<string, any>;
}

const defaultSEO: SEOData = {
  title: 'Fivsys - AI-Powered Digital Solutions & Web Development',
  description: 'Transform your business with Fivsys\' cutting-edge AI solutions, custom web development, and digital innovation. Expert team delivering enterprise-grade technology solutions.',
  keywords: [
    'AI solutions',
    'web development',
    'digital transformation',
    'machine learning',
    'enterprise software',
    'custom development',
    'technology consulting',
    'Fivsys',
    'artificial intelligence',
    'business automation'
  ],
  author: 'Fivsys Team',
  ogType: 'website',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterSite: '@fivsys',
  robots: 'index, follow',
};

export const useSEO = (seoData: Partial<SEOData> = {}) => {
  useEffect(() => {
    const mergedSEO = { ...defaultSEO, ...seoData };
    
    // Update document title
    if (mergedSEO.title) {
      document.title = mergedSEO.title;
    }

    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, useProperty = false) => {
      if (!content) return;
      
      const attribute = useProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (meta) {
        meta.content = content;
      } else {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    // Update basic meta tags
    updateMetaTag('description', mergedSEO.description || '');
    updateMetaTag('keywords', mergedSEO.keywords?.join(', ') || '');
    updateMetaTag('author', mergedSEO.author || '');
    updateMetaTag('robots', mergedSEO.robots || '');

    // Update Open Graph tags
    updateMetaTag('og:title', mergedSEO.ogTitle || mergedSEO.title || '', true);
    updateMetaTag('og:description', mergedSEO.ogDescription || mergedSEO.description || '', true);
    updateMetaTag('og:image', mergedSEO.ogImage || '', true);
    updateMetaTag('og:url', mergedSEO.ogUrl || window.location.href, true);
    updateMetaTag('og:type', mergedSEO.ogType || '', true);
    updateMetaTag('og:site_name', 'Fivsys', true);

    // Update Twitter tags
    updateMetaTag('twitter:card', mergedSEO.twitterCard || '');
    updateMetaTag('twitter:site', mergedSEO.twitterSite || '');
    updateMetaTag('twitter:creator', mergedSEO.twitterCreator || '');
    updateMetaTag('twitter:title', mergedSEO.ogTitle || mergedSEO.title || '');
    updateMetaTag('twitter:description', mergedSEO.ogDescription || mergedSEO.description || '');
    updateMetaTag('twitter:image', mergedSEO.ogImage || '');

    // Update canonical URL
    if (mergedSEO.canonical) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (canonical) {
        canonical.href = mergedSEO.canonical;
      } else {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        canonical.href = mergedSEO.canonical;
        document.head.appendChild(canonical);
      }
    }

    // Add JSON-LD schema if provided
    if (mergedSEO.schema) {
      const schemaId = 'schema-json-ld';
      let schemaScript = document.getElementById(schemaId);
      
      if (schemaScript) {
        schemaScript.textContent = JSON.stringify(mergedSEO.schema);
      } else {
        schemaScript = document.createElement('script');
        schemaScript.id = schemaId;
        schemaScript.type = 'application/ld+json';
        schemaScript.textContent = JSON.stringify(mergedSEO.schema);
        document.head.appendChild(schemaScript);
      }
    }

    // Add viewport meta tag if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }

    // Add charset meta tag if not present
    if (!document.querySelector('meta[charset]')) {
      const charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }

  }, [seoData]);
};

// Predefined SEO configurations for different pages
export const SEOConfigs = {
  home: {
    title: 'Fivsys - AI-Powered Digital Solutions & Web Development',
    description: 'Transform your business with Fivsys\' cutting-edge AI solutions, custom web development, and digital innovation. Expert team delivering enterprise-grade technology solutions.',
    ogUrl: import.meta.env.VITE_APP_URL || 'https://fivsys.com',
    canonical: import.meta.env.VITE_APP_URL || 'https://fivsys.com',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Fivsys',
      description: 'AI-Powered Digital Solutions & Web Development',
      url: import.meta.env.VITE_APP_URL || 'https://fivsys.com',
      logo: `${import.meta.env.VITE_APP_URL || 'https://fivsys.com'}/logo.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-6361866050',
        contactType: 'Customer Service',
        email: 'info@fivsys.com'
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Goondhu -2, Behind Sreenidhi Regency, Sri Ganesh PG Road',
        addressLocality: 'Kasavanhalli, Sarjapura',
        addressRegion: 'Karnataka',
        postalCode: '560035',
        addressCountry: 'IN'
      }
    }
  },
  
  about: {
    title: 'About Fivsys - Leading AI & Web Development Company',
    description: 'Learn about Fivsys\' mission to deliver innovative AI solutions and web development services. Meet our expert team and discover our approach to digital transformation.',
    canonical: `${import.meta.env.VITE_APP_URL || 'https://fivsys.com'}/about`,
  },
  
  contact: {
    title: 'Contact Fivsys - Get Your AI Project Started Today',
    description: 'Ready to transform your business with AI? Contact Fivsys for custom web development, AI solutions, and digital innovation. Free consultation available.',
    canonical: `${import.meta.env.VITE_APP_URL || 'https://fivsys.com'}/contact`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Fivsys',
      description: 'Get in touch with Fivsys for AI solutions and web development services',
      url: `${import.meta.env.VITE_APP_URL || 'https://fivsys.com'}/contact`
    }
  },
  
  services: {
    'ai-web-development': {
      title: 'AI Web Development Services - Custom AI-Powered Websites | Fivsys',
      description: 'Create intelligent, AI-powered websites with Fivsys. Custom web development with machine learning integration, chatbots, and intelligent user experiences.',
      keywords: ['AI web development', 'machine learning websites', 'intelligent web apps', 'AI integration'],
    },
    
    'custom-web-development': {
      title: 'Custom Web Development Services - Tailored Solutions | Fivsys',
      description: 'Professional custom web development services by Fivsys. Responsive, scalable, and user-friendly websites tailored to your business needs.',
      keywords: ['custom web development', 'responsive websites', 'web applications', 'full-stack development'],
    },
    
    'ai-chatbot-development': {
      title: 'AI Chatbot Development - Intelligent Customer Support | Fivsys',
      description: 'Enhance customer engagement with AI-powered chatbots. Custom chatbot development for websites, apps, and customer support automation.',
      keywords: ['AI chatbots', 'customer support automation', 'conversational AI', 'chatbot development'],
    }
  }
};

export default useSEO;
