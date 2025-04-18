
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-fivsys-silver/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company & Logo */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">
                <span className="text-fivsys-red">fiv</span>sys
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              AI-powered development and marketing solutions to help your business grow and succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-fivsys-red transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-fivsys-red transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-fivsys-red transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-fivsys-red transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/web-development" className="text-gray-400 hover:text-fivsys-red transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/app-development" className="text-gray-400 hover:text-fivsys-red transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/services/web-app-development" className="text-gray-400 hover:text-fivsys-red transition-colors">
                  Web App Development
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="text-gray-400 hover:text-fivsys-red transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/social-media-marketing" className="text-gray-400 hover:text-fivsys-red transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/sales-strategy" className="text-gray-400 hover:text-fivsys-red transition-colors">
                  Sales Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-fivsys-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-fivsys-red transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-fivsys-red transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-fivsys-red transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={18} className="text-fivsys-red mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Tech Park, Suite 456<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-fivsys-red mr-2 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-fivsys-red transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-fivsys-red mr-2 flex-shrink-0" />
                <a href="mailto:info@fivsys.com" className="text-gray-400 hover:text-fivsys-red transition-colors">
                  info@fivsys.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-fivsys-silver/10">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Fivsys. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
