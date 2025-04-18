
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

interface ServiceLayoutProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  benefits: Array<{
    title: string;
    description: string;
  }>;
  processSteps: Array<{
    title: string;
    description: string;
  }>;
  ctaText?: string;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  description,
  icon,
  features,
  benefits,
  processSteps,
  ctaText = "Ready to transform your business?"
}) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-fivsys-red/10 to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              {icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-fivsys-silver mb-8">
              {description}
            </p>
            <Button asChild size="lg" className="bg-fivsys-red hover:bg-fivsys-red/90">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-fivsys-darkGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-fivsys-silver max-w-2xl mx-auto">
              Our comprehensive {title.toLowerCase()} services include everything you need for success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Check className="text-fivsys-red h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits</h2>
            <p className="text-fivsys-silver max-w-2xl mx-auto">
              How our {title.toLowerCase()} services can transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-fivsys-darkGray p-8 rounded-lg border border-fivsys-silver/10 hover:border-fivsys-red/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-fivsys-silver">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-fivsys-darkGray to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-fivsys-silver max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful outcomes.
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row items-start gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-fivsys-red flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-fivsys-silver">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fivsys-darkGray to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-fivsys-red/10 to-fivsys-darkGray border border-fivsys-silver/10 rounded-lg p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{ctaText}</h2>
            <p className="text-fivsys-silver max-w-2xl mx-auto mb-8">
              Let's collaborate to create innovative {title.toLowerCase()} solutions that drive growth and success for your business.
            </p>
            <Button asChild size="lg" className="bg-fivsys-red hover:bg-fivsys-red/90">
              <Link to="/contact">Contact Us Today <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceLayout;
