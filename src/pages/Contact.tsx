import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Send, Check, Zap, Cpu, Brain, Sparkles, Shield, Rocket, Target, Globe, Code2, Bot } from 'lucide-react';
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

      {/* Enhanced AI Brand Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fivsys-red/25 via-black to-fivsys-burgundy/15 opacity-95" />
        
        {/* AI Brand Visual Elements */}
        <div className="absolute top-16 left-8 opacity-15">
          <div className="relative">
            <Brain className="w-40 h-40 text-fivsys-red animate-float" />
            <div className="absolute inset-0 bg-fivsys-red/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
        <div className="absolute top-32 right-12 opacity-20">
          <div className="relative">
            <Bot className="w-32 h-32 text-white animate-slow-drift" />
            <div className="absolute inset-0 bg-white/10 rounded-full blur-lg animate-gentle-glow"></div>
          </div>
        </div>
        <div className="absolute bottom-24 left-1/4 opacity-25">
          <Rocket className="w-20 h-20 text-fivsys-red animate-gentle-glow" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            {/* Professional Brand Header */}
            <div className="flex items-center justify-center mb-8 space-x-6">
              <div className="flex items-center space-x-2 bg-fivsys-red/10 border border-fivsys-red/30 px-6 py-3 rounded-full backdrop-blur-sm">
                <Shield className="w-5 h-5 text-fivsys-red animate-gentle-glow" />
                <span className="text-fivsys-red font-bold tracking-wider uppercase text-sm">Enterprise AI Solutions</span>
                <Sparkles className="w-5 h-5 text-fivsys-red animate-pulse" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-10 animate-slideInFromBottom leading-tight">
              <span className="bg-gradient-to-r from-white via-fivsys-red via-white to-fivsys-red bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="text-fivsys-red relative">
                Business Vision
                <div className="absolute -inset-1 bg-fivsys-red/20 blur-xl animate-gentle-glow"></div>
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-fivsys-silver mb-12 animate-slideInFromBottom delay-200 max-w-4xl mx-auto leading-relaxed font-light">
              Partner with AI innovation leaders to accelerate your digital transformation.
              <br />
              <span className="text-fivsys-red font-semibold bg-gradient-to-r from-fivsys-red to-fivsys-burgundy bg-clip-text text-transparent">
                Experience enterprise-grade excellence.
              </span>
            </p>
            
            {/* Business Value Propositions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-slideInFromBottom delay-300">
              <div className="bg-gradient-to-br from-fivsys-red/10 to-transparent border border-fivsys-red/20 rounded-lg p-6 backdrop-blur-sm hover:border-fivsys-red/40 transition-all duration-300">
                <Target className="w-8 h-8 text-fivsys-red mx-auto mb-3 animate-gentle-glow" />
                <div className="text-sm font-semibold text-white">Precision</div>
                <div className="text-xs text-fivsys-silver mt-1">AI-Driven Results</div>
              </div>
              <div className="bg-gradient-to-br from-fivsys-red/10 to-transparent border border-fivsys-red/20 rounded-lg p-6 backdrop-blur-sm hover:border-fivsys-red/40 transition-all duration-300">
                <Rocket className="w-8 h-8 text-fivsys-red mx-auto mb-3 animate-float" />
                <div className="text-sm font-semibold text-white">Innovation</div>
                <div className="text-xs text-fivsys-silver mt-1">Future-Ready</div>
              </div>
              <div className="bg-gradient-to-br from-fivsys-red/10 to-transparent border border-fivsys-red/20 rounded-lg p-6 backdrop-blur-sm hover:border-fivsys-red/40 transition-all duration-300">
                <Globe className="w-8 h-8 text-fivsys-red mx-auto mb-3 animate-slow-drift" />
                <div className="text-sm font-semibold text-white">Scale</div>
                <div className="text-xs text-fivsys-silver mt-1">Global Reach</div>
              </div>
              <div className="bg-gradient-to-br from-fivsys-red/10 to-transparent border border-fivsys-red/20 rounded-lg p-6 backdrop-blur-sm hover:border-fivsys-red/40 transition-all duration-300">
                <Shield className="w-8 h-8 text-fivsys-red mx-auto mb-3 animate-gentle-glow" />
                <div className="text-sm font-semibold text-white">Security</div>
                <div className="text-xs text-fivsys-silver mt-1">Enterprise-Grade</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Professional Contact Section */}
      <section className="py-24 bg-gradient-to-b from-black via-fivsys-darkGray/20 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Enhanced Business Contact Information */}
            <div className="space-y-10">
              <div className="animate-slideInFromLeft">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-1 bg-gradient-to-r from-fivsys-red via-white to-fivsys-red animate-gentle-glow"></div>
                  <Brain className="w-8 h-8 text-fivsys-red animate-gentle-glow" />
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-fivsys-silver bg-clip-text text-transparent">
                    Connect with Excellence
                  </h2>
                </div>
                <p className="text-fivsys-silver text-xl mb-10 leading-relaxed font-light">
                  Join industry leaders who trust our AI-powered solutions to drive measurable business growth. 
                  Our enterprise team is ready to architect your digital future.
                </p>
              </div>

              {/* Premium Contact Cards */}
              <div className="space-y-8 animate-slideInFromLeft delay-200">
                <Card className="bg-gradient-to-r from-fivsys-darkGray via-black to-fivsys-darkGray border-2 border-fivsys-red/30 p-8 hover:border-fivsys-red/60 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-fivsys-red/5 via-transparent to-fivsys-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex items-center">
                    <div className="p-4 bg-gradient-to-br from-fivsys-red/20 to-fivsys-burgundy/20 rounded-xl mr-6 group-hover:bg-fivsys-red/30 transition-all duration-300 backdrop-blur-sm border border-fivsys-red/20">
                      <MapPin className="text-fivsys-red h-8 w-8 animate-gentle-glow" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-3 text-2xl text-white group-hover:text-fivsys-red transition-colors">Global Innovation Hub</h3>
                      <p className="text-fivsys-silver leading-relaxed text-lg">
                        Goondhu -2, Behind Sreenidhi Regency<br />
                        Sri Ganesh PG Road, Kasavanhalli<br />
                        Sarjapura, Bangalore - 560035<br />
                        <span className="text-fivsys-red font-semibold">India's Silicon Valley</span>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-gradient-to-r from-fivsys-darkGray via-black to-fivsys-darkGray border-2 border-fivsys-red/30 p-8 hover:border-fivsys-red/60 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-fivsys-red/5 via-transparent to-fivsys-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex items-center">
                    <div className="p-4 bg-gradient-to-br from-fivsys-red/20 to-fivsys-burgundy/20 rounded-xl mr-6 group-hover:bg-fivsys-red/30 transition-all duration-300 backdrop-blur-sm border border-fivsys-red/20">
                      <Phone className="text-fivsys-red h-8 w-8 animate-gentle-glow" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-3 text-2xl text-white group-hover:text-fivsys-red transition-colors">Enterprise Hotline</h3>
                      <p className="text-fivsys-silver text-lg">
                        <a href="tel:+916361866050" className="hover:text-fivsys-red transition-colors text-2xl font-semibold">
                          +91 6361866050
                        </a>
                        <br />
                        <span className="text-sm text-fivsys-silver/80">24/7 Business Support</span>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-gradient-to-r from-fivsys-darkGray via-black to-fivsys-darkGray border-2 border-fivsys-red/30 p-8 hover:border-fivsys-red/60 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-fivsys-red/5 via-transparent to-fivsys-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex items-center">
                    <div className="p-4 bg-gradient-to-br from-fivsys-red/20 to-fivsys-burgundy/20 rounded-xl mr-6 group-hover:bg-fivsys-red/30 transition-all duration-300 backdrop-blur-sm border border-fivsys-red/20">
                      <Mail className="text-fivsys-red h-8 w-8 animate-gentle-glow" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-3 text-2xl text-white group-hover:text-fivsys-red transition-colors">Strategic Partnerships</h3>
                      <p className="text-fivsys-silver text-lg">
                        <a href="mailto:info@fivsys.com" className="hover:text-fivsys-red transition-colors text-2xl font-semibold">
                          info@fivsys.com
                        </a>
                        <br />
                        <span className="text-sm text-fivsys-silver/80">Enterprise Solutions</span>
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Enhanced Business Excellence Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 animate-slideInFromLeft delay-300">
                <div className="text-center p-6 bg-gradient-to-br from-fivsys-red/10 to-transparent rounded-xl border border-fivsys-red/30 hover:border-fivsys-red/60 transition-all duration-300 backdrop-blur-sm">
                  <Zap className="w-12 h-12 text-fivsys-red mx-auto mb-4 animate-gentle-glow" />
                  <div className="text-lg font-bold text-white">AI-Powered</div>
                  <div className="text-sm text-fivsys-silver mt-2">Next-Gen Technology</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-fivsys-red/10 to-transparent rounded-xl border border-fivsys-red/30 hover:border-fivsys-red/60 transition-all duration-300 backdrop-blur-sm">
                  <Code2 className="w-12 h-12 text-fivsys-red mx-auto mb-4 animate-float" />
                  <div className="text-lg font-bold text-white">Enterprise</div>
                  <div className="text-sm text-fivsys-silver mt-2">Mission-Critical</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-fivsys-red/10 to-transparent rounded-xl border border-fivsys-red/30 hover:border-fivsys-red/60 transition-all duration-300 backdrop-blur-sm md:col-span-1 col-span-2">
                  <Cpu className="w-12 h-12 text-fivsys-red mx-auto mb-4 animate-slow-drift" />
                  <div className="text-lg font-bold text-white">Advanced</div>
                  <div className="text-sm text-fivsys-silver mt-2">Future-Ready Solutions</div>
                </div>
              </div>
            </div>

            {/* Enhanced Professional Contact Form */}
            <div className="animate-slideInFromRight">
              <Card className="bg-gradient-to-br from-fivsys-darkGray via-black to-fivsys-darkGray border-3 border-fivsys-red/40 p-10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                {/* Premium animated border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-fivsys-red/20 via-transparent via-fivsys-red/10 to-fivsys-red/20 animate-pulse opacity-60"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fivsys-red to-transparent animate-gentle-glow"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-10">
                    <div className="p-3 bg-gradient-to-br from-fivsys-red/20 to-fivsys-burgundy/20 rounded-lg border border-fivsys-red/30">
                      <Rocket className="w-8 h-8 text-fivsys-red animate-gentle-glow" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-fivsys-red to-white bg-clip-text text-transparent">
                        Start Your AI Transformation
                      </h2>
                      <p className="text-fivsys-silver text-lg mt-2">Enterprise consultation & strategic planning</p>
                    </div>
                  </div>
                  
                  {formStatus === 'success' ? (
                    <div className="text-center py-16">
                      <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-500/20 via-fivsys-red/20 to-green-500/20 p-6 mb-8 border-2 border-green-500/40 backdrop-blur-sm">
                        <Check className="h-16 w-16 text-green-400 animate-gentle-glow" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-fivsys-silver bg-clip-text text-transparent">
                        Enterprise Connection Established!
                      </h3>
                      <p className="text-fivsys-silver mb-10 text-xl leading-relaxed">
                        Your strategic consultation request has been received. Our AI solutions team will connect with you within 24 hours.
                      </p>
                      <Button
                        type="button"
                        onClick={() => setFormStatus('idle')}
                        className="bg-gradient-to-r from-fivsys-red to-fivsys-burgundy hover:from-fivsys-burgundy hover:to-fivsys-red transition-all duration-300 animate-gentle-glow text-lg px-8 py-4 h-auto"
                      >
                        <Sparkles className="w-5 h-5 mr-2" />
                        Schedule Another Consultation
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
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
                        className="w-full bg-gradient-to-r from-fivsys-red via-fivsys-burgundy to-fivsys-red hover:from-fivsys-burgundy hover:via-fivsys-red hover:to-fivsys-burgundy transition-all duration-500 h-16 text-xl font-bold animate-gentle-glow border border-fivsys-red/30 backdrop-blur-sm"
                        disabled={formStatus === 'submitting'}
                      >
                        {formStatus === 'submitting' ? (
                          <div className="flex items-center">
                            <div className="animate-spin -ml-1 mr-4 h-8 w-8 border-4 border-white border-t-transparent rounded-full"></div>
                            <span>Initiating Enterprise Connection...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center space-x-4">
                            <Rocket className="h-6 w-6 animate-float" />
                            <span>Launch Strategic Partnership</span>
                            <Brain className="h-6 w-6 animate-gentle-glow" />
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
