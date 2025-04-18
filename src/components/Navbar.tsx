
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

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
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand name */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">
                <span className="text-fivsys-red">fiv</span>sys
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <div className="relative group">
                <button className="text-gray-300 hover:text-white transition-colors flex items-center">
                  Services
                </button>
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-fivsys-black border border-fivsys-silver/20 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="py-1 rounded-md bg-black">
                    <Link to="/services/web-development" className="block px-4 py-2 text-sm text-gray-300 hover:bg-fivsys-red hover:text-white">
                      Web Development
                    </Link>
                    <Link to="/services/app-development" className="block px-4 py-2 text-sm text-gray-300 hover:bg-fivsys-red hover:text-white">
                      App Development
                    </Link>
                    <Link to="/services/web-app-development" className="block px-4 py-2 text-sm text-gray-300 hover:bg-fivsys-red hover:text-white">
                      Web App Development
                    </Link>
                    <Link to="/services/digital-marketing" className="block px-4 py-2 text-sm text-gray-300 hover:bg-fivsys-red hover:text-white">
                      Digital Marketing
                    </Link>
                    <Link to="/services/social-media-marketing" className="block px-4 py-2 text-sm text-gray-300 hover:bg-fivsys-red hover:text-white">
                      Social Media Marketing
                    </Link>
                    <Link to="/services/sales-strategy" className="block px-4 py-2 text-sm text-gray-300 hover:bg-fivsys-red hover:text-white">
                      Sales Strategy
                    </Link>
                  </div>
                </div>
              </div>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Button
                asChild
                variant="default" 
                className="bg-fivsys-red hover:bg-fivsys-red/90 text-white ml-4"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-fivsys-red/20 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md">
            <Link 
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-fivsys-red/20"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <div className="space-y-0.5 pl-3 mt-1 border-l border-fivsys-silver/20">
              <Link 
                to="/services/web-development"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-fivsys-red/20 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Web Development
              </Link>
              <Link 
                to="/services/app-development"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-fivsys-red/20 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                App Development
              </Link>
              <Link 
                to="/services/web-app-development"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-fivsys-red/20 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Web App Development
              </Link>
              <Link 
                to="/services/digital-marketing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-fivsys-red/20 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Digital Marketing
              </Link>
              <Link 
                to="/services/social-media-marketing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-fivsys-red/20 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Social Media Marketing
              </Link>
              <Link 
                to="/services/sales-strategy"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-fivsys-red/20 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Sales Strategy
              </Link>
            </div>
            <Link 
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-fivsys-red/20"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-fivsys-red/20"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button 
              asChild
              variant="default" 
              className="w-full mt-2 bg-fivsys-red hover:bg-fivsys-red/90"
            >
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
