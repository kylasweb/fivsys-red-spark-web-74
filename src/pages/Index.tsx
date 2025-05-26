
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Globe, BarChart3, Share2, TrendingUp, ChevronRight, Zap, Brain, Cpu, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GeometricBackground from '@/components/GeometricBackground';

const services = [
    {
      title: "AI Web Development",
      description: "Next-generation websites powered by artificial intelligence, designed to convert visitors into customers with stunning visuals and seamless functionality.",
      icon: <Globe className="h-10 w-10 text-fivsys-red" />,
      link: "/services/web-development"
    },
    {
      title: "Intelligent App Development",
      description: "Smart mobile applications with AI integration that deliver exceptional user experiences across all devices and platforms.",
      icon: <Smartphone className="h-10 w-10 text-fivsys-red" />,
      link: "/services/app-development"
    },
    {
      title: "AI-Powered Web Apps",
      description: "Advanced web applications with machine learning capabilities, robust backend systems, and intelligent user interfaces.",
      icon: <Code className="h-10 w-10 text-fivsys-red" />,
      link: "/services/web-app-development"
    },
    {
      title: "AI-Driven Marketing",
      description: "Data-driven digital marketing strategies powered by AI algorithms that increase online visibility and drive measurable results.",
      icon: <BarChart3 className="h-10 w-10 text-fivsys-red" />,
      link: "/services/digital-marketing"
    },
    {
      title: "Smart Social Media",
      description: "AI-enhanced social media campaigns that build brand awareness and intelligently engage with your target audience.",
      icon: <Share2 className="h-10 w-10 text-fivsys-red" />,
      link: "/services/social-media-marketing"
    },
    {
      title: "AI Sales Strategy",
      description: "Intelligent sales strategies powered by AI analytics that convert leads into loyal customers and maximize revenue growth.",
      icon: <TrendingUp className="h-10 w-10 text-fivsys-red" />,
      link: "/services/sales-strategy"
    }
  ];

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <GeometricBackground />
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fivsys-red/20 via-fivsys-darkGray/30 to-black opacity-80" />
        
        {/* AI visual elements */}
        <div className="absolute top-20 left-10 opacity-10">
          <Brain className="w-40 h-40 text-fivsys-red animate-float" />
        </div>
        <div className="absolute top-32 right-10 opacity-15">
          <Cpu className="w-32 h-32 text-white animate-slow-drift" />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-20">
          <Zap className="w-20 h-20 text-fivsys-red animate-gentle-glow" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8 space-x-4">
              <div className="w-3 h-3 bg-fivsys-red rounded-full animate-pulse"></div>
              <span className="text-fivsys-red font-bold tracking-widest uppercase text-sm animate-slideInFromBottom border border-fivsys-red/30 px-4 py-2 rounded-full bg-fivsys-red/10">
                AI Excellence
              </span>
              <div className="w-3 h-3 bg-fivsys-red rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-slideInFromBottom leading-tight">
              <span className="bg-gradient-to-r from-white via-fivsys-red to-white bg-clip-text text-transparent">
                AI-Powered Digital
              </span>
              <br />
              <span className="text-white">
                Solutions for the <span className="text-fivsys-red animate-gentle-glow">Future</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-fivsys-silver mb-10 animate-slideInFromBottom delay-200 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence and strategic marketing services.
              <br />
              <span className="text-fivsys-red font-semibold">Experience the power of intelligent technology.</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 animate-slideInFromBottom delay-300">
              <Button asChild size="lg" className="bg-gradient-to-r from-fivsys-red to-fivsys-burgundy hover:from-fivsys-burgundy hover:to-fivsys-red animate-gentle-glow text-lg px-8 py-4 h-auto">
                <Link to="/contact" className="flex items-center space-x-3">
                  <Sparkles className="w-5 h-5" />
                  <span>Start Your AI Journey</span>
                  <Zap className="w-4 h-4 animate-pulse" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-fivsys-red/50 hover:bg-fivsys-red/10 hover:border-fivsys-red text-lg px-8 py-4 h-auto">
                <Link to="/services/web-development" className="flex items-center space-x-2">
                  <Brain className="w-5 h-5" />
                  <span>Explore AI Services</span>
                </Link>
              </Button>
            </div>
            
            {/* AI Excellence indicators */}
            <div className="flex items-center justify-center space-x-12 mt-12 animate-slideInFromBottom delay-400">
              <div className="flex items-center space-x-3 text-sm opacity-80">
                <Zap className="w-5 h-5 text-fivsys-red animate-pulse" />
                <span className="font-semibold">AI-Driven</span>
              </div>
              <div className="flex items-center space-x-3 text-sm opacity-80">
                <Brain className="w-5 h-5 text-fivsys-red animate-gentle-glow" />
                <span className="font-semibold">Intelligent</span>
              </div>
              <div className="flex items-center space-x-3 text-sm opacity-80">
                <Cpu className="w-5 h-5 text-fivsys-red animate-float" />
                <span className="font-semibold">Advanced</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Services Section */}
      <section className="py-24 bg-gradient-to-b from-black via-fivsys-darkGray/50 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-fivsys-red to-transparent"></div>
              <Sparkles className="w-6 h-6 text-fivsys-red animate-gentle-glow" />
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-fivsys-red to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slideInFromBottom">
              <span className="bg-gradient-to-r from-white to-fivsys-silver bg-clip-text text-transparent">
                AI-Powered Services
              </span>
            </h2>
            <p className="text-fivsys-silver max-w-3xl mx-auto animate-slideInFromBottom delay-100 text-lg leading-relaxed">
              Comprehensive artificial intelligence solutions designed to revolutionize your business 
              and help you thrive in the digital landscape of tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-fivsys-darkGray via-black to-fivsys-darkGray p-8 rounded-lg border-2 border-fivsys-silver/10 hover:border-fivsys-red/50 transition-all duration-500 group hover:transform hover:scale-105 hover-scale animate-slideInFromBottom relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-fivsys-red/5 via-transparent to-fivsys-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 group-hover:animate-gentle-glow transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-fivsys-red transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-fivsys-silver mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center text-fivsys-red group-hover:text-white transition-colors font-semibold"
                  >
                    Explore AI Solution 
                    <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Enhanced About Section */}
      <section className="py-24 bg-gradient-to-br from-black via-fivsys-darkGray/30 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInFromLeft">
              <div className="flex items-center space-x-3 mb-6">
                <Brain className="w-8 h-8 text-fivsys-red animate-gentle-glow" />
                <span className="text-fivsys-red font-semibold uppercase tracking-wider">AI Excellence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white to-fivsys-silver bg-clip-text text-transparent">
                  Transforming Ideas into 
                </span>
                <br />
                <span className="text-fivsys-red">Digital Reality</span>
              </h2>
              <p className="text-fivsys-silver mb-6 text-lg leading-relaxed">
                At fivsys, we harness the revolutionary power of artificial intelligence to create exceptional 
                digital experiences that drive unprecedented growth for businesses of all sizes.
              </p>
              <p className="text-fivsys-silver mb-8 text-lg leading-relaxed">
                Our team of AI specialists and creative technologists combines cutting-edge machine learning 
                with innovative design thinking to deliver solutions that don't just meet expectations—they redefine possibilities.
              </p>
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-fivsys-red animate-pulse" />
                  <span className="text-sm font-semibold">AI-Powered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Cpu className="w-5 h-5 text-fivsys-red" />
                  <span className="text-sm font-semibold">Future-Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-fivsys-red animate-gentle-glow" />
                  <span className="text-sm font-semibold">Innovative</span>
                </div>
              </div>
              <Button asChild className="bg-gradient-to-r from-fivsys-red to-fivsys-burgundy hover:from-fivsys-burgundy hover:to-fivsys-red animate-gentle-glow text-lg px-8 py-4 h-auto">
                <Link to="/about" className="flex items-center space-x-3">
                  <span>Discover Our Vision</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden border-2 border-fivsys-red/30 animate-slideInFromRight relative">
              <div className="relative aspect-video bg-gradient-to-tr from-fivsys-red/20 via-fivsys-darkGray/40 to-black flex items-center justify-center backdrop-blur-sm">
                {/* AI visual elements */}
                <div className="absolute top-4 left-4 opacity-30">
                  <Brain className="w-16 h-16 text-fivsys-red animate-float" />
                </div>
                <div className="absolute bottom-4 right-4 opacity-30">
                  <Cpu className="w-12 h-12 text-white animate-slow-drift" />
                </div>
                <div className="absolute top-1/2 left-1/4 opacity-20">
                  <Zap className="w-8 h-8 text-fivsys-red animate-pulse" />
                </div>
                
                <div className="text-center p-8 relative z-10">
                  <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-fivsys-red to-white bg-clip-text text-transparent">
                    Your Vision, Our AI Expertise
                  </div>
                  <p className="text-fivsys-silver text-lg">
                    Intelligent solutions for the digital age
                  </p>
                  <div className="flex items-center justify-center space-x-4 mt-6">
                    <div className="w-2 h-2 bg-fivsys-red rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-2 h-2 bg-fivsys-red rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-black via-fivsys-darkGray/20 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-fivsys-red/15 via-fivsys-darkGray/40 to-fivsys-red/15 border-2 border-fivsys-red/30 rounded-2xl p-12 text-center backdrop-blur-sm animate-slideInFromBottom relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-4 left-4 opacity-20">
              <Sparkles className="w-8 h-8 text-fivsys-red animate-gentle-glow" />
            </div>
            <div className="absolute bottom-4 right-4 opacity-20">
              <Brain className="w-10 h-10 text-white animate-float" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Zap className="w-6 h-6 text-fivsys-red animate-pulse" />
                <span className="text-fivsys-red font-semibold uppercase tracking-wider">Ready to Transform?</span>
                <Zap className="w-6 h-6 text-fivsys-red animate-pulse" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-fivsys-red to-white bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
              </h2>
              <p className="text-fivsys-silver max-w-3xl mx-auto mb-10 text-lg md:text-xl leading-relaxed">
                Let's collaborate to create revolutionary AI-powered solutions that drive exponential growth 
                and position your business at the forefront of digital innovation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button asChild size="lg" className="bg-gradient-to-r from-fivsys-red to-fivsys-burgundy hover:from-fivsys-burgundy hover:to-fivsys-red animate-gentle-glow text-lg px-10 py-4 h-auto">
                  <Link to="/contact" className="flex items-center space-x-3">
                    <Brain className="w-5 h-5" />
                    <span>Start AI Transformation</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-fivsys-red/50 hover:bg-fivsys-red/10 hover:border-fivsys-red text-lg px-10 py-4 h-auto">
                  <Link to="/services/web-development" className="flex items-center space-x-2">
                    <Cpu className="w-5 h-5" />
                    <span>Explore AI Services</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
