
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Globe, BarChart3, Share2, TrendingUp, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OrigamiBackground from '@/components/OrigamiBackground';

const Index = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom AI-powered websites designed to convert visitors into customers, with stunning visuals and seamless functionality.",
      icon: <Globe className="h-10 w-10 text-fivsys-red" />,
      link: "/services/web-development"
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      icon: <Smartphone className="h-10 w-10 text-fivsys-red" />,
      link: "/services/app-development"
    },
    {
      title: "Web App Development",
      description: "Powerful, scalable web applications with robust backend systems and intuitive user interfaces.",
      icon: <Code className="h-10 w-10 text-fivsys-red" />,
      link: "/services/web-app-development"
    },
    {
      title: "Digital Marketing",
      description: "Data-driven digital marketing strategies that increase your online visibility and drive measurable results.",
      icon: <BarChart3 className="h-10 w-10 text-fivsys-red" />,
      link: "/services/digital-marketing"
    },
    {
      title: "Social Media Marketing",
      description: "Strategic social media campaigns that build brand awareness and engage with your target audience.",
      icon: <Share2 className="h-10 w-10 text-fivsys-red" />,
      link: "/services/social-media-marketing"
    },
    {
      title: "Sales Strategy",
      description: "Comprehensive sales strategies that convert leads into loyal customers and maximize revenue growth.",
      icon: <TrendingUp className="h-10 w-10 text-fivsys-red" />,
      link: "/services/sales-strategy"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <OrigamiBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-fivsys-red/10 to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI-Powered Digital Solutions for the Future
            </h1>
            <p className="text-xl text-fivsys-silver mb-8">
              Transform your business with cutting-edge development and strategic marketing services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-fivsys-red hover:bg-fivsys-red/90">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-fivsys-silver hover:bg-fivsys-silver/10">
                <Link to="/services/web-development">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-fivsys-darkGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-fivsys-silver max-w-2xl mx-auto">
              Comprehensive solutions to help your business thrive in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-fivsys-darkGray p-8 rounded-lg border border-fivsys-silver/10 hover:border-fivsys-red/30 transition-all duration-300 group"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-fivsys-silver mb-5">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-fivsys-red group-hover:text-white transition-colors"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Ideas into Digital Reality</h2>
              <p className="text-fivsys-silver mb-6">
                At fivsys, we leverage the power of AI to create exceptional digital experiences that drive growth for businesses of all sizes.
              </p>
              <p className="text-fivsys-silver mb-8">
                Our team of experts combines technical expertise with creative thinking to deliver solutions that exceed expectations and achieve measurable results.
              </p>
              <Button asChild className="bg-fivsys-red hover:bg-fivsys-red/90">
                <Link to="/about">About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden border border-fivsys-silver/10">
              <div className="relative aspect-video bg-gradient-to-tr from-fivsys-darkGray to-fivsys-red/30 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-2xl font-bold mb-2">Your Vision, Our Expertise</div>
                  <p className="text-fivsys-silver">AI-powered solutions for the digital age</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fivsys-darkGray to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-fivsys-red/10 to-fivsys-darkGray border border-fivsys-silver/10 rounded-lg p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-fivsys-silver max-w-2xl mx-auto mb-8">
              Let's collaborate to create innovative solutions that drive growth and success for your business.
            </p>
            <Button asChild size="lg" className="bg-fivsys-red hover:bg-fivsys-red/90">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
