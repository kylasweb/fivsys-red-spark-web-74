import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Globe, BarChart3, Share2, TrendingUp, ChevronRight, Zap, Brain, Cpu, Sparkles, Star, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GeometricBackground from '@/components/GeometricBackground';
import OptimizedImage from '@/components/OptimizedImage';
import ErrorBoundary from '@/components/ErrorBoundary';
import { useSEO } from '@/hooks/useSEO';
import analytics from '@/services/analytics';
import { useEffect } from 'react';

const services = [
  {
    title: "AI Web Development",
    description: "Enterprise-grade websites powered by artificial intelligence with advanced user experience and conversion optimization.",
    icon: <Globe className="h-8 w-8 text-fivsys-red" />,
    link: "/services/web-development",
    features: ["AI-Powered Design", "Smart Analytics", "Auto-Optimization"]
  },
  {
    title: "Intelligent App Development",
    description: "Cross-platform mobile applications with machine learning integration and intelligent user interfaces.",
    icon: <Smartphone className="h-8 w-8 text-fivsys-red" />,
    link: "/services/app-development",
    features: ["ML Integration", "Cross-Platform", "Smart UI/UX"]
  },
  {
    title: "AI-Powered Web Apps",
    description: "Scalable web applications with advanced backend systems and intelligent automation capabilities.",
    icon: <Code className="h-8 w-8 text-fivsys-red" />,
    link: "/services/web-app-development",
    features: ["AI Automation", "Scalable Architecture", "Smart Backend"]
  },
  {
    title: "AI-Driven Marketing",
    description: "Data-driven digital marketing strategies with predictive analytics and automated campaign optimization.",
    icon: <BarChart3 className="h-8 w-8 text-fivsys-red" />,
    link: "/services/digital-marketing",
    features: ["Predictive Analytics", "Auto-Optimization", "ROI Tracking"]
  },
  {
    title: "Smart Social Media",
    description: "AI-enhanced social media management with intelligent content creation and audience targeting.",
    icon: <Share2 className="h-8 w-8 text-fivsys-red" />,
    link: "/services/social-media-marketing",
    features: ["AI Content", "Smart Targeting", "Engagement Analytics"]
  },
  {
    title: "AI Sales Strategy",
    description: "Intelligent sales automation with predictive lead scoring and conversion optimization systems.",
    icon: <TrendingUp className="h-8 w-8 text-fivsys-red" />,
    link: "/services/sales-strategy",
    features: ["Lead Scoring", "Sales Automation", "Conversion AI"]
  }
];

const stats = [
  { number: "500+", label: "Projects Delivered", icon: <Award className="h-6 w-6" /> },
  { number: "98%", label: "Client Satisfaction", icon: <Star className="h-6 w-6" /> },
  { number: "150+", label: "Global Clients", icon: <Users className="h-6 w-6" /> },
  { number: "24/7", label: "AI Support", icon: <Clock className="h-6 w-6" /> }
];

const Index = () => {
  // SEO Configuration
  useSEO({
    title: 'Fivsys - AI-Powered Digital Solutions & Enterprise Web Development',
    description: 'Transform your business with Fivsys\' cutting-edge AI solutions, custom web development, and digital innovation. Expert team delivering enterprise-grade technology solutions.',
    keywords: ['AI solutions', 'web development', 'digital transformation', 'machine learning', 'enterprise software', 'custom development', 'technology consulting', 'Fivsys'],
    ogTitle: 'Fivsys - AI-Powered Digital Solutions',
    ogDescription: 'Leading AI solutions and web development company. Transform your business with intelligent technology.',
    canonical: '/'
  });
  // Analytics tracking
  useEffect(() => {
    analytics.trackPageView({
      page_path: '/',
      page_title: 'Homepage'
    });
    
    // Track scroll depth for homepage engagement
    const handleScroll = () => {
      const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > 0 && scrollDepth % 25 === 0) {
        analytics.trackEvent({
          action: 'scroll_depth',
          category: 'engagement',
          label: `${scrollDepth}%`,
          value: scrollDepth
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServiceClick = (serviceName: string, serviceLink: string) => {
    analytics.trackEvent({
      action: 'service_card_click',
      category: 'navigation',
      label: serviceName
    });
    analytics.trackEvent({
      action: 'service_interest',
      category: 'engagement',
      label: serviceName
    });
  };

  const handleCTAClick = (ctaType: string) => {
    analytics.trackEvent({
      action: 'cta_click',
      category: 'conversion',
      label: ctaType
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <GeometricBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-fivsys-red/30 bg-fivsys-red/10 backdrop-blur-sm mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-fivsys-red rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-fivsys-red">AI EXCELLENCE</span>
              </div>
              <div className="w-px h-4 bg-fivsys-red/30"></div>
              <span className="text-sm text-gray-300">Powered by Advanced Intelligence</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white mb-2">Future-Ready</span>
              <span className="block bg-gradient-to-r from-fivsys-red via-white to-fivsys-red bg-clip-text text-transparent">
                AI Solutions
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with enterprise-grade artificial intelligence.
              <span className="block mt-2 text-fivsys-red font-semibold">
                Experience the power of intelligent automation.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">              <Button asChild size="lg" className="bg-fivsys-red hover:bg-fivsys-darkRed text-white px-8 py-4 h-auto text-lg font-semibold">
                <Link 
                  to="/contact" 
                  className="flex items-center gap-3"
                  onClick={() => handleCTAClick('Hero - Start AI Journey')}
                >
                  <Brain className="w-5 h-5" />
                  <span>Start Your AI Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white/20 hover:border-fivsys-red hover:bg-fivsys-red/10 px-8 py-4 h-auto text-lg font-semibold">
                <Link 
                  to="/services/web-development" 
                  className="flex items-center gap-2"
                  onClick={() => handleCTAClick('Hero - Explore Services')}
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Explore Services</span>
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2 rounded-lg bg-fivsys-red/20 text-fivsys-red">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-fivsys-darkGray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/30 bg-fivsys-red/10 mb-6">
              <Cpu className="w-4 h-4 text-fivsys-red" />
              <span className="text-sm font-semibold text-fivsys-red">AI-POWERED SERVICES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Intelligent Solutions for </span>
              <span className="text-fivsys-red">Modern Business</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-driven services designed to accelerate growth and optimize performance across all business verticals.
            </p>
          </div>          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-to-br from-fivsys-darkGray/50 to-black border-white/10 hover:border-fivsys-red/50 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-fivsys-red/20 group-hover:bg-fivsys-red/30 transition-colors">
                      {service.icon}
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-fivsys-red group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-fivsys-red transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-fivsys-red rounded-full"></div>
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center gap-2 text-fivsys-red hover:text-white font-semibold transition-colors group"
                    onClick={() => handleServiceClick(service.title, service.link)}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-black to-fivsys-darkGray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/30 bg-fivsys-red/10 mb-6">
                <Brain className="w-4 h-4 text-fivsys-red" />
                <span className="text-sm font-semibold text-fivsys-red">ABOUT FIVSYS</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                <span className="text-white">Pioneering the </span>
                <span className="text-fivsys-red">AI Revolution</span>
              </h2>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                At Fivsys, we combine cutting-edge artificial intelligence with exceptional design thinking to create digital experiences that drive unprecedented business growth.
              </p>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our team of AI specialists and creative technologists delivers enterprise-grade solutions that don't just meet expectations—they redefine what's possible in the digital landscape.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 rounded-lg border border-white/10">
                  <Zap className="w-6 h-6 text-fivsys-red mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">AI-Powered</div>
                </div>
                <div className="text-center p-4 rounded-lg border border-white/10">
                  <Cpu className="w-6 h-6 text-fivsys-red mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">Enterprise-Grade</div>
                </div>
                <div className="text-center p-4 rounded-lg border border-white/10">
                  <Sparkles className="w-6 h-6 text-fivsys-red mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">Future-Ready</div>
                </div>
              </div>              <Button asChild className="bg-fivsys-red hover:bg-fivsys-darkRed text-white px-8 py-4 h-auto text-lg font-semibold">
                <Link 
                  to="/about" 
                  className="flex items-center gap-3"
                  onClick={() => handleCTAClick('About - Discover Story')}
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl border border-white/20 bg-gradient-to-br from-fivsys-red/20 to-fivsys-darkGray/40 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-fivsys-red/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-12 h-12 text-fivsys-red" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-fivsys-red rounded-full flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">AI Excellence</h3>
                  <p className="text-gray-300">Transforming ideas into intelligent solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black via-fivsys-darkGray/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-fivsys-red/10 to-fivsys-darkGray/20 border-fivsys-red/30 backdrop-blur-sm">
            <CardContent className="text-center p-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/30 bg-fivsys-red/20 mb-6">
                <Zap className="w-4 h-4 text-fivsys-red" />
                <span className="text-sm font-semibold text-fivsys-red">READY TO TRANSFORM?</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-white">Let's Build the </span>
                <span className="text-fivsys-red">Future Together</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Partner with us to create revolutionary AI-powered solutions that drive exponential growth and position your business at the forefront of digital innovation.
              </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-fivsys-red hover:bg-fivsys-darkRed text-white px-10 py-4 h-auto text-lg font-semibold">
                  <Link 
                    to="/contact" 
                    className="flex items-center gap-3"
                    onClick={() => handleCTAClick('CTA - Start Project')}
                  >
                    <Brain className="w-5 h-5" />
                    <span>Start Your Project</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-white/20 hover:border-fivsys-red hover:bg-fivsys-red/10 px-10 py-4 h-auto text-lg font-semibold">
                  <Link 
                    to="/services/web-development" 
                    className="flex items-center gap-2"
                    onClick={() => handleCTAClick('CTA - View Services')}
                  >
                    <Cpu className="w-5 h-5" />
                    <span>View Services</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
