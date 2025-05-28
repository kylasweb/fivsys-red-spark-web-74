
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Brain, Zap, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-fivsys-darkGray/30 to-black border-t border-fivsys-red/20 pt-16 pb-8 relative overflow-hidden">
      {/* AI Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4">
          <Brain className="w-16 h-16 text-fivsys-red animate-float" />
        </div>
        <div className="absolute bottom-4 right-4">
          <Zap className="w-12 h-12 text-fivsys-red animate-gentle-glow" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Enhanced Company & Logo */}
          <div>
            <Link to="/" className="flex items-center mb-6 group">
              <div className="w-10 h-10 bg-fivsys-red rounded-md flex items-center justify-center group-hover:animate-gentle-glow transition-all duration-300 mr-3">
                <div className="space-y-1">
                  <div className="w-6 h-1 bg-white rounded-full"></div>
                  <div className="w-4 h-1 bg-white rounded-full"></div>
                  <div className="w-5 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white group-hover:text-fivsys-red transition-colors duration-300">
                  fivsys
                </span>
                <Sparkles className="w-4 h-4 text-fivsys-red ml-1 animate-gentle-glow" />
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Revolutionary AI-powered development and intelligent marketing solutions designed to transform your business and accelerate growth in the digital era.
            </p>
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="w-4 h-4 text-fivsys-red" />
              <span className="text-sm text-fivsys-red font-semibold">AI Excellence</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-fivsys-red transition-all duration-300 hover:scale-110">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-fivsys-red transition-all duration-300 hover:scale-110">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-fivsys-red transition-all duration-300 hover:scale-110">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-fivsys-red transition-all duration-300 hover:scale-110">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Enhanced Services */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="w-5 h-5 text-fivsys-red animate-pulse" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">AI Services</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/services/web-development" className="text-gray-400 hover:text-fivsys-red transition-colors duration-300 flex items-center space-x-2 group">
                  <Brain className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>AI Web Development</span>
                </Link>
              </li>
              <li>
                <Link to="/services/app-development" className="text-gray-400 hover:text-fivsys-red transition-colors duration-300 flex items-center space-x-2 group">
                  <Zap className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>Smart App Development</span>
                </Link>
              </li>
              <li>
                <Link to="/services/web-app-development" className="text-gray-400 hover:text-fivsys-red transition-colors duration-300 flex items-center space-x-2 group">
                  <Brain className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>AI Web Applications</span>
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="text-gray-400 hover:text-fivsys-red transition-colors duration-300 flex items-center space-x-2 group">
                  <Zap className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>AI-Driven Marketing</span>
                </Link>
              </li>
              <li>
                <Link to="/services/social-media-marketing" className="text-gray-400 hover:text-fivsys-red transition-colors duration-300 flex items-center space-x-2 group">
                  <Brain className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>Smart Social Media</span>
                </Link>
              </li>
              <li>
                <Link to="/services/sales-strategy" className="text-gray-400 hover:text-fivsys-red transition-colors duration-300 flex items-center space-x-2 group">
                  <Zap className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>AI Sales Strategy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-5 h-5 text-fivsys-red animate-gentle-glow" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-fivsys-red transition-colors duration-300 flex items-center space-x-2 group">
                  <div className="w-1 h-1 bg-fivsys-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-fivsys-red transition-colors duration-300 flex items-center space-x-2 group">
                  <div className="w-1 h-1 bg-fivsys-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-fivsys-red transition-colors duration-300 flex items-center space-x-2 group">
                  <div className="w-1 h-1 bg-fivsys-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-fivsys-red transition-colors duration-300 flex items-center space-x-2 group">
                  <div className="w-1 h-1 bg-fivsys-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span>Terms of Service</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Enhanced Contact */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Brain className="w-5 h-5 text-fivsys-red animate-float" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Connect With Us</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <MapPin size={18} className="text-fivsys-red mr-3 mt-0.5 flex-shrink-0 group-hover:animate-gentle-glow transition-all duration-300" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  Goondhu -2, Behind Sreenidhi Regency<br />
                  Sri Ganesh PG Road, Kasavanhalli<br />
                  Sarjapura, Bangalore - 560035
                </span>
              </li>
              <li className="flex items-center group">
                <Phone size={18} className="text-fivsys-red mr-3 flex-shrink-0 group-hover:animate-gentle-glow transition-all duration-300" />
                <a href="tel:+916361866050" className="text-gray-400 hover:text-fivsys-red transition-colors duration-300">
                  +91 6361866050
                </a>
              </li>
              <li className="flex items-center group">
                <Mail size={18} className="text-fivsys-red mr-3 flex-shrink-0 group-hover:animate-gentle-glow transition-all duration-300" />
                <a href="mailto:info@fivsys.com" className="text-gray-400 hover:text-fivsys-red transition-colors duration-300">
                  info@fivsys.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-fivsys-red/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Fivsys. All rights reserved. Powered by AI Excellence.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Brain className="w-4 h-4 text-fivsys-red animate-pulse" />
              <span>Building the Future with AI</span>
              <Zap className="w-4 h-4 text-fivsys-red animate-gentle-glow" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
