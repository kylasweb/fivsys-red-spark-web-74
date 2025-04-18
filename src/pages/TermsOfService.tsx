
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Header Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-fivsys-red/10 to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-fivsys-silver">
              Last Updated: April 18, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-gradient-to-b from-black to-fivsys-darkGray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-fivsys-silver">
              Welcome to fivsys. These Terms of Service ("Terms") govern your access to and use of the fivsys website and services. Please read these Terms carefully before using our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-fivsys-silver">
              By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Services</h2>
            <p className="text-fivsys-silver">
              fivsys provides AI-powered development and marketing services, including website development, app development, web app development, digital marketing, social media marketing, and sales strategy services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">User Accounts</h2>
            <p className="text-fivsys-silver">
              Some features of our services may require you to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Intellectual Property</h2>
            <p className="text-fivsys-silver">
              All content, features, and functionality available through our services, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are owned by fivsys or its licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">User Content</h2>
            <p className="text-fivsys-silver">
              You retain ownership of any content you submit, post, or display on or through our services. By submitting, posting, or displaying content on or through our services, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Limitations of Liability</h2>
            <p className="text-fivsys-silver">
              In no event shall fivsys, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Indemnification</h2>
            <p className="text-fivsys-silver">
              You agree to defend, indemnify, and hold harmless fivsys and its licensors and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>
            <p className="text-fivsys-silver">
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to Terms</h2>
            <p className="text-fivsys-silver">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p className="text-fivsys-silver">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-fivsys-silver mt-2">
              <Link to="/contact" className="text-fivsys-red hover:underline">Contact Us</Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
