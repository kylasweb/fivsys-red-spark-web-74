import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap, Brain } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-fivsys-red/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo with new design */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              {/* Logo icon inspired by the uploaded image */}
              <div className="relative">
                <div className="w-10 h-10 bg-fivsys-red rounded-md flex items-center justify-center group-hover:animate-gentle-glow transition-all duration-300">
                  <div className="space-y-1">
                    <div className="w-6 h-1 bg-white rounded-full"></div>
                    <div className="w-4 h-1 bg-white rounded-full"></div>
                    <div className="w-5 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Brain className="w-2 h-2 text-fivsys-red m-0.5" />
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white group-hover:text-fivsys-red transition-colors duration-300">
                  fivsys
                </span>
                <Zap className="w-4 h-4 text-fivsys-red ml-1 animate-pulse" />
              </div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-fivsys-red transition-colors duration-300 relative group">
                Home
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-fivsys-red group-hover:w-full transition-all duration-300"></div>
              </Link>
              <div className="relative group">
                <button className="text-gray-300 hover:text-fivsys-red transition-colors duration-300 flex items-center relative">
                  Services
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-fivsys-red group-hover:w-full transition-all duration-300"></div>
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-lg shadow-xl bg-black/95 border border-fivsys-red/30 backdrop-blur-md invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2 rounded-lg">
                    <Link to="/services/web-development" className="block px-4 py-3 text-sm text-gray-300 hover:bg-fivsys-red/20 hover:text-white transition-colors duration-300 border-l-2 border-transparent hover:border-fivsys-red">
                      <div className="flex items-center space-x-2">
                        <Brain className="w-4 h-4" />
                        <span>AI Web Development</span>
                      </div>
                    </Link>
                    <Link to="/services/app-development" className="block px-4 py-3 text-sm text-gray-300 hover:bg-fivsys-red/20 hover:text-white transition-colors duration-300 border-l-2 border-transparent hover:border-fivsys-red">
                      <div className="flex items-center space-x-2">
                        <Zap className="w-4 h-4" />
                        <span>Smart App Development</span>
                      </div>
                    </Link>
                    <Link to="/services/web-app-development" className="block px-4 py-3 text-sm text-gray-300 hover:bg-fivsys-red/20 hover:text-white transition-colors duration-300 border-l-2 border-transparent hover:border-fivsys-red">
                      <div className="flex items-center space-x-2">
                        <Brain className="w-4 h-4" />
                        <span>AI Web Applications</span>
                      </div>
                    </Link>
                    <Link to="/services/digital-marketing" className="block px-4 py-3 text-sm text-gray-300 hover:bg-fivsys-red/20 hover:text-white transition-colors duration-300 border-l-2 border-transparent hover:border-fivsys-red">
                      <div className="flex items-center space-x-2">
                        <Zap className="w-4 h-4" />
                        <span>AI-Driven Marketing</span>
                      </div>
                    </Link>
                    <Link to="/services/social-media-marketing" className="block px-4 py-3 text-sm text-gray-300 hover:bg-fivsys-red/20 hover:text-white transition-colors duration-300 border-l-2 border-transparent hover:border-fivsys-red">
                      <div className="flex items-center space-x-2">
                        <Brain className="w-4 h-4" />
                        <span>Smart Social Media</span>
                      </div>
                    </Link>
                    <Link to="/services/sales-strategy" className="block px-4 py-3 text-sm text-gray-300 hover:bg-fivsys-red/20 hover:text-white transition-colors duration-300 border-l-2 border-transparent hover:border-fivsys-red">
                      <div className="flex items-center space-x-2">
                        <Zap className="w-4 h-4" />
                        <span>AI Sales Strategy</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <Link to="/about" className="text-gray-300 hover:text-fivsys-red transition-colors duration-300 relative group">
                About
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-fivsys-red group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-fivsys-red transition-colors duration-300 relative group">
                Contact
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-fivsys-red group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Button
                asChild
                variant="default" 
                className="bg-gradient-to-r from-fivsys-red to-fivsys-burgundy hover:from-fivsys-burgundy hover:to-fivsys-red text-white ml-4 animate-gentle-glow"
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <Brain className="w-4 h-4" />
                  <span>Get Started</span>
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-fivsys-red/20 focus:outline-none transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/98 backdrop-blur-md border-t border-fivsys-red/20">
            <Link 
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-fivsys-red/20 hover:text-fivsys-red transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <div className="space-y-0.5 pl-3 mt-1 border-l border-fivsys-red/30">
              <Link 
                to="/services/web-development"
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-fivsys-red/20 hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                <Brain className="w-4 h-4" />
                <span>AI Web Development</span>
              </Link>
              <Link 
                to="/services/app-development"
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-fivsys-red/20 hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                <Zap className="w-4 h-4" />
                <span>Smart App Development</span>
              </Link>
              <Link 
                to="/services/web-app-development"
                className="block px-4 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-fivsys-red/20 hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Web App Development
              </Link>
              <Link 
                to="/services/digital-marketing"
                className="block px-4 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-fivsys-red/20 hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Digital Marketing
              </Link>
              <Link 
                to="/services/social-media-marketing"
                className="block px-4 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-fivsys-red/20 hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Social Media Marketing
              </Link>
              <Link 
                to="/services/sales-strategy"
                className="block px-4 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-fivsys-red/20 hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Sales Strategy
              </Link>
            </div>
            <Link 
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-fivsys-red/20 hover:text-fivsys-red transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-fivsys-red/20 hover:text-fivsys-red transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button 
              asChild
              variant="default" 
              className="w-full mt-2 bg-gradient-to-r from-fivsys-red to-fivsys-burgundy hover:from-fivsys-burgundy hover:to-fivsys-red animate-gentle-glow"
            >
              <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center space-x-2">
                <Brain className="w-4 h-4" />
                <span>Get Started</span>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
