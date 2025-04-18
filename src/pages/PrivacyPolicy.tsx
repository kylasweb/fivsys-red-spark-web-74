
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Header Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-fivsys-red/10 to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
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
              At fivsys, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            <p className="text-fivsys-silver">
              We may collect personal information that you voluntarily provide to us when you express interest in obtaining information about us or our products and services, when you participate in activities on our website, or otherwise when you contact us.
            </p>
            <p className="text-fivsys-silver mt-4">
              The personal information we collect may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-fivsys-silver">
              <li>Name and contact information</li>
              <li>Business information</li>
              <li>Payment information</li>
              <li>Content of communications</li>
              <li>Information you choose to share</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-fivsys-silver">
              We use personal information collected via our website for a variety of business purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-fivsys-silver">
              <li>To provide and maintain our services</li>
              <li>To process transactions</li>
              <li>To respond to inquiries and offer support</li>
              <li>To send administrative information</li>
              <li>To send marketing and promotional communications</li>
              <li>To improve our website and services</li>
              <li>To protect our services</li>
              <li>To respond to legal requests and prevent harm</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Cookies and Web Beacons</h2>
            <p className="text-fivsys-silver">
              We may use cookies, web beacons, tracking pixels, and other tracking technologies on our website to help customize the website and improve your experience. By using the website, you agree to the use of cookies.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Websites</h2>
            <p className="text-fivsys-silver">
              Our website may contain links to third-party websites and applications. We are not responsible for the privacy practices or the content of these third-party sites.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Security of Your Information</h2>
            <p className="text-fivsys-silver">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-fivsys-silver">
              We may update this Privacy Policy from time to time in our discretion. When we do, we will revise the updated date at the top of this page. We encourage you to periodically review this Privacy Policy to stay informed of updates.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p className="text-fivsys-silver">
              If you have questions or concerns about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
