
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Send, Check, Zap, Cpu, Brain } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import GeometricBackground from '@/components/GeometricBackground';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          to_email: 'teamfivsys@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
    } catch (error) {
      setFormStatus('error');
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <GeometricBackground />
      <Navbar />

      {/* Enhanced Hero Section with AI Theme */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fivsys-red/20 via-black to-fivsys-burgundy/10 opacity-90" />
        
        {/* AI-powered visual elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Brain className="w-32 h-32 text-fivsys-red animate-float" />
        </div>
        <div className="absolute top-40 right-10 opacity-15">
          <Cpu className="w-24 h-24 text-white animate-slow-drift" />
        </div>
        <div className="absolute bottom-20 left-1/3 opacity-25">
          <Zap className="w-16 h-16 text-fivsys-red animate-gentle-glow" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6 space-x-4">
              <div className="w-2 h-2 bg-fivsys-red rounded-full animate-pulse"></div>
              <span className="text-fivsys-red font-semibold tracking-wider uppercase text-sm animate-slideInFromBottom">
                AI-Powered Excellence
              </span>
              <div className="w-2 h-2 bg-fivsys-red rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-slideInFromBottom">
              <span className="bg-gradient-to-r from-white via-fivsys-red to-white bg-clip-text text-transparent">
                Connect with the Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-fivsys-silver mb-8 animate-slideInFromBottom delay-200 max-w-3xl mx-auto leading-relaxed">
              Experience next-generation digital solutions powered by cutting-edge AI technology. 
              <span className="text-fivsys-red font-semibold"> Transform your vision into reality.</span>
            </p>
            <div className="flex items-center justify-center space-x-8 animate-slideInFromBottom delay-300">
              <div className="flex items-center space-x-2 text-sm opacity-80">
                <Zap className="w-4 h-4 text-fivsys-red" />
                <span>AI-Driven</span>
              </div>
              <div className="flex items-center space-x-2 text-sm opacity-80">
                <Brain className="w-4 h-4 text-fivsys-red" />
                <span>Intelligent</span>
              </div>
              <div className="flex items-center space-x-2 text-sm opacity-80">
                <Cpu className="w-4 h-4 text-fivsys-red" />
                <span>Advanced</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 bg-gradient-to-b from-black via-fivsys-darkGray/30 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Enhanced Contact Information */}
            <div className="space-y-8">
              <div className="animate-slideInFromLeft">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-1 bg-gradient-to-r from-fivsys-red to-white"></div>
                  <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
                </div>
                <p className="text-fivsys-silver text-lg mb-8 leading-relaxed">
                  Ready to leverage the power of AI for your business? Our team of experts is standing by to 
                  transform your digital presence with cutting-edge solutions.
                </p>
              </div>

              <div className="space-y-6 animate-slideInFromLeft delay-200">
                <Card className="bg-gradient-to-r from-fivsys-darkGray via-black to-fivsys-darkGray border border-fivsys-red/20 p-6 hover:border-fivsys-red/40 transition-all duration-300 group">
                  <div className="flex items-start">
                    <div className="p-3 bg-fivsys-red/10 rounded-lg mr-4 group-hover:bg-fivsys-red/20 transition-colors">
                      <MapPin className="text-fivsys-red h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-lg">Innovation Hub</h3>
                      <p className="text-fivsys-silver leading-relaxed">
                        Goondhu -2, Behind Sreenidhi Regency<br />
                        Sri Ganesh PG Road, Kasavanhalli<br />
                        Sarjapura, Bangalore - 560035
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-gradient-to-r from-fivsys-darkGray via-black to-fivsys-darkGray border border-fivsys-red/20 p-6 hover:border-fivsys-red/40 transition-all duration-300 group">
                  <div className="flex items-start">
                    <div className="p-3 bg-fivsys-red/10 rounded-lg mr-4 group-hover:bg-fivsys-red/20 transition-colors">
                      <Phone className="text-fivsys-red h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-lg">Direct Line</h3>
                      <p className="text-fivsys-silver">
                        <a href="tel:+916361866050" className="hover:text-fivsys-red transition-colors text-lg">
                          +91 6361866050
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-gradient-to-r from-fivsys-darkGray via-black to-fivsys-darkGray border border-fivsys-red/20 p-6 hover:border-fivsys-red/40 transition-all duration-300 group">
                  <div className="flex items-start">
                    <div className="p-3 bg-fivsys-red/10 rounded-lg mr-4 group-hover:bg-fivsys-red/20 transition-colors">
                      <Mail className="text-fivsys-red h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-lg">Digital Gateway</h3>
                      <p className="text-fivsys-silver">
                        <a href="mailto:info@fivsys.com" className="hover:text-fivsys-red transition-colors text-lg">
                          info@fivsys.com
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* AI Excellence indicators */}
              <div className="grid grid-cols-3 gap-4 pt-8 animate-slideInFromLeft delay-300">
                <div className="text-center p-4 bg-fivsys-red/5 rounded-lg border border-fivsys-red/20">
                  <Zap className="w-8 h-8 text-fivsys-red mx-auto mb-2 animate-gentle-glow" />
                  <div className="text-sm font-semibold">AI-Powered</div>
                </div>
                <div className="text-center p-4 bg-fivsys-red/5 rounded-lg border border-fivsys-red/20">
                  <Brain className="w-8 h-8 text-fivsys-red mx-auto mb-2 animate-gentle-glow" />
                  <div className="text-sm font-semibold">Intelligent</div>
                </div>
                <div className="text-center p-4 bg-fivsys-red/5 rounded-lg border border-fivsys-red/20">
                  <Cpu className="w-8 h-8 text-fivsys-red mx-auto mb-2 animate-gentle-glow" />
                  <div className="text-sm font-semibold">Advanced</div>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="animate-slideInFromRight">
              <Card className="bg-gradient-to-br from-fivsys-darkGray via-black to-fivsys-darkGray border-2 border-fivsys-red/30 p-8 shadow-2xl relative overflow-hidden">
                {/* Animated border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-fivsys-red/20 via-transparent to-fivsys-red/20 animate-pulse opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-8">
                    <Zap className="w-6 h-6 text-fivsys-red animate-gentle-glow" />
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-fivsys-silver bg-clip-text text-transparent">
                      Launch Your AI Journey
                    </h2>
                  </div>
                  
                  {formStatus === 'success' ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-500/20 to-fivsys-red/20 p-4 mb-6 border border-green-500/30">
                        <Check className="h-12 w-12 text-green-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-fivsys-silver bg-clip-text text-transparent">
                        Mission Accomplished!
                      </h3>
                      <p className="text-fivsys-silver mb-8 text-lg">
                        Your message has been received. Our AI-powered team will respond shortly.
                      </p>
                      <Button
                        type="button"
                        onClick={() => setFormStatus('idle')}
                        className="bg-gradient-to-r from-fivsys-red to-fivsys-burgundy hover:from-fivsys-burgundy hover:to-fivsys-red transition-all duration-300 animate-gentle-glow"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                          <label htmlFor="name" className="block text-sm font-semibold mb-2 text-fivsys-silver group-focus-within:text-fivsys-red transition-colors">
                            Your Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className="bg-black/50 border-fivsys-silver/30 focus:border-fivsys-red focus:ring-fivsys-red/20 transition-all duration-300 h-12"
                          />
                        </div>
                        <div className="group">
                          <label htmlFor="email" className="block text-sm font-semibold mb-2 text-fivsys-silver group-focus-within:text-fivsys-red transition-colors">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className="bg-black/50 border-fivsys-silver/30 focus:border-fivsys-red focus:ring-fivsys-red/20 transition-all duration-300 h-12"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                          <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-fivsys-silver group-focus-within:text-fivsys-red transition-colors">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(123) 456-7890"
                            className="bg-black/50 border-fivsys-silver/30 focus:border-fivsys-red focus:ring-fivsys-red/20 transition-all duration-300 h-12"
                          />
                        </div>
                        <div className="group">
                          <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-fivsys-silver group-focus-within:text-fivsys-red transition-colors">
                            Project Type
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="AI Web Development"
                            required
                            className="bg-black/50 border-fivsys-silver/30 focus:border-fivsys-red focus:ring-fivsys-red/20 transition-all duration-300 h-12"
                          />
                        </div>
                      </div>
                      <div className="group">
                        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-fivsys-silver group-focus-within:text-fivsys-red transition-colors">
                          Your Vision
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe your AI-powered project requirements..."
                          rows={6}
                          required
                          className="bg-black/50 border-fivsys-silver/30 focus:border-fivsys-red focus:ring-fivsys-red/20 transition-all duration-300 resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-fivsys-red to-fivsys-burgundy hover:from-fivsys-burgundy hover:to-fivsys-red transition-all duration-300 h-14 text-lg font-semibold animate-gentle-glow"
                        disabled={formStatus === 'submitting'}
                      >
                        {formStatus === 'submitting' ? (
                          <div className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center space-x-3">
                            <Send className="h-5 w-5" />
                            <span>Launch Project</span>
                            <Zap className="h-4 w-4 animate-pulse" />
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
