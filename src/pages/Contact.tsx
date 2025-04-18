import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

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
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-fivsys-red/10 to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-fivsys-silver mb-8">
              Ready to transform your digital presence? Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 bg-gradient-to-b from-black to-fivsys-darkGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <p className="text-fivsys-silver mb-8">
                Whether you have a question about our services, need a quote, or want to discuss a project, our team is ready to help you.
              </p>

              <div className="space-y-6">
                <Card className="bg-fivsys-darkGray border-fivsys-silver/10 p-6">
                  <div className="flex items-start">
                    <MapPin className="text-fivsys-red h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Visit Us</h3>
                      <p className="text-fivsys-silver">
                        123 Tech Park, Suite 456<br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-fivsys-darkGray border-fivsys-silver/10 p-6">
                  <div className="flex items-start">
                    <Phone className="text-fivsys-red h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Call Us</h3>
                      <p className="text-fivsys-silver">
                        <a href="tel:+11234567890" className="hover:text-fivsys-red transition-colors">
                          +1 (123) 456-7890
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-fivsys-darkGray border-fivsys-silver/10 p-6">
                  <div className="flex items-start">
                    <Mail className="text-fivsys-red h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Email Us</h3>
                      <p className="text-fivsys-silver">
                        <a href="mailto:info@fivsys.com" className="hover:text-fivsys-red transition-colors">
                          info@fivsys.com
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-fivsys-darkGray border-fivsys-silver/10 p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {formStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center rounded-full bg-green-100 p-2 mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-fivsys-silver mb-6">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                    <Button
                      type="button"
                      onClick={() => setFormStatus('idle')}
                      className="bg-fivsys-red hover:bg-fivsys-red/90"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-black/50 border-fivsys-silver/20 focus:border-fivsys-red"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
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
                          className="bg-black/50 border-fivsys-silver/20 focus:border-fivsys-red"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(123) 456-7890"
                          className="bg-black/50 border-fivsys-silver/20 focus:border-fivsys-red"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          required
                          className="bg-black/50 border-fivsys-silver/20 focus:border-fivsys-red"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        rows={5}
                        required
                        className="bg-black/50 border-fivsys-silver/20 focus:border-fivsys-red"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-fivsys-red hover:bg-fivsys-red/90 mt-2"
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? (
                        <div className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                )}
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
