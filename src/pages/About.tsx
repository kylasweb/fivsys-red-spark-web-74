import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Users, Lightbulb, Target, Award, ArrowRight } from 'lucide-react';
import OrigamiBackground from '@/components/OrigamiBackground';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-10 w-10 text-fivsys-red" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges."
    },
    {
      icon: <Users className="h-10 w-10 text-fivsys-red" />,
      title: "Collaboration",
      description: "We work closely with our clients to ensure their vision is realized in every project."
    },
    {
      icon: <Award className="h-10 w-10 text-fivsys-red" />,
      title: "Excellence",
      description: "We are committed to delivering the highest quality work that exceeds expectations."
    },
    {
      icon: <Target className="h-10 w-10 text-fivsys-red" />,
      title: "Results-Driven",
      description: "We focus on creating solutions that drive measurable growth and success."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-fivsys-red/10 to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Fivsys</h1>
            <p className="text-xl text-fivsys-silver mb-8">
              Innovative AI-powered solutions to help businesses thrive in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-b from-black to-fivsys-darkGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-fivsys-silver mb-6">
                Founded with a vision to bridge the gap between cutting-edge technology and business growth, Fivsys has evolved into a comprehensive digital solutions provider.
              </p>
              <p className="text-fivsys-silver mb-6">
                Our journey began with a simple idea: to harness the power of artificial intelligence to create websites and applications that not only look stunning but also drive measurable results for businesses of all sizes.
              </p>
              <p className="text-fivsys-silver">
                Today, we have expanded our services to include a full spectrum of digital solutions, from web and app development to digital marketing and sales strategy, all powered by the latest AI technologies.
              </p>
            </div>
            <div className="relative">
              {/* Origami Phoenix Design */}
              <div className="relative aspect-square rounded-2xl border border-fivsys-red/30 bg-gradient-to-br from-fivsys-darkGray/50 to-black overflow-hidden">
                <OrigamiBackground />
                <div className="relative z-10 h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    {/* Origami Phoenix Shape */}
                    <div className="relative mb-6">
                      <div className="w-40 h-40 mx-auto relative">
                        {/* Phoenix Body */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-16 h-20 bg-gradient-to-br from-fivsys-red to-fivsys-darkRed rounded-full transform rotate-12 shadow-2xl"></div>
                          <div className="absolute inset-2 bg-gradient-to-tl from-fivsys-darkGray to-black rounded-full"></div>
                        </div>
                        
                        {/* Phoenix Head */}
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                          <div className="w-8 h-10 bg-gradient-to-br from-fivsys-red to-fivsys-darkRed rounded-full transform -rotate-12"></div>
                          <div className="absolute top-1 left-1 w-6 h-8 bg-gradient-to-tl from-fivsys-darkGray to-black rounded-full"></div>
                          {/* Beak */}
                          <div className="absolute -top-1 left-3 w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-fivsys-red"></div>
                        </div>
                        
                        {/* Phoenix Wings */}
                        <div className="absolute top-8 -left-6 transform -rotate-45">
                          <div className="w-12 h-16 bg-gradient-to-br from-fivsys-red/80 to-fivsys-darkRed/60 rounded-full"></div>
                          <div className="absolute inset-1 bg-gradient-to-tl from-fivsys-darkGray/50 to-transparent rounded-full"></div>
                        </div>
                        <div className="absolute top-8 -right-6 transform rotate-45">
                          <div className="w-12 h-16 bg-gradient-to-bl from-fivsys-red/80 to-fivsys-darkRed/60 rounded-full"></div>
                          <div className="absolute inset-1 bg-gradient-to-tr from-fivsys-darkGray/50 to-transparent rounded-full"></div>
                        </div>
                        
                        {/* Phoenix Tail Feathers */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6">
                          <div className="w-3 h-12 bg-gradient-to-b from-fivsys-red to-fivsys-darkRed rounded-full transform rotate-12"></div>
                          <div className="absolute -left-2 top-2 w-2 h-10 bg-gradient-to-b from-fivsys-red/70 to-fivsys-darkRed/70 rounded-full transform -rotate-12"></div>
                          <div className="absolute -right-2 top-2 w-2 h-10 bg-gradient-to-b from-fivsys-red/70 to-fivsys-darkRed/70 rounded-full transform rotate-30"></div>
                        </div>
                        
                        {/* Glowing core */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-4 h-4 bg-fivsys-red rounded-full animate-pulse shadow-lg shadow-fivsys-red/50"></div>
                        </div>
                      </div>
                      
                      {/* Floating flame elements */}
                      <div className="absolute -top-6 -right-2 w-4 h-4 bg-fivsys-red rounded-full opacity-60 animate-float"></div>
                      <div className="absolute -bottom-2 -left-6 w-3 h-3 bg-fivsys-red rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute top-2 -left-8 w-2 h-2 bg-fivsys-red rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
                      <div className="absolute -top-2 right-4 w-2 h-2 bg-fivsys-red rounded-full opacity-50 animate-float" style={{ animationDelay: '1.5s' }}></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Rising from Innovation</h3>
                    <p className="text-fivsys-silver">Transforming ideas into digital excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-fivsys-silver max-w-2xl mx-auto">
              The core principles that guide our work and define our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-fivsys-darkGray p-8 rounded-lg border border-fivsys-silver/10 hover:border-fivsys-red/30 transition-all duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-fivsys-silver">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-fivsys-darkGray to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Fivsys</h2>
            <p className="text-fivsys-silver max-w-2xl mx-auto">
              We offer a unique combination of expertise, innovation, and results-driven solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden border border-fivsys-silver/10">
              <div className="relative aspect-video bg-gradient-to-tr from-fivsys-darkGray to-fivsys-red/30 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-2xl font-bold mb-2">Excellence in Every Pixel</div>
                  <p className="text-fivsys-silver">Committed to quality and innovation</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-fivsys-red h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">AI-Powered Solutions</h3>
                    <p className="text-fivsys-silver">We leverage cutting-edge AI technologies to create smarter, more efficient digital solutions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-fivsys-red h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">End-to-End Services</h3>
                    <p className="text-fivsys-silver">From development to marketing, we provide comprehensive solutions to all your digital needs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-fivsys-red h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Client-Centric Approach</h3>
                    <p className="text-fivsys-silver">We prioritize your goals and vision, ensuring that every solution is tailored to your specific needs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-fivsys-red h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Proven Results</h3>
                    <p className="text-fivsys-silver">Our track record demonstrates our ability to deliver solutions that drive growth and success.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fivsys-darkGray to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-fivsys-red/10 to-fivsys-darkGray border border-fivsys-silver/10 rounded-lg p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Digital Journey?</h2>
            <p className="text-fivsys-silver max-w-2xl mx-auto mb-8">
              Let's collaborate to create innovative solutions that drive growth and success for your business.
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

export default About;
