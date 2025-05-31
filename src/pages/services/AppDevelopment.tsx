
import ServiceLayout from '@/components/ServiceLayout';
import { Smartphone } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import analytics from '@/services/analytics';
import { useEffect } from 'react';

const AppDevelopment = () => {
  // SEO Configuration
  useSEO({
    title: 'Mobile App Development Services | iOS & Android Apps | Fivsys',
    description: 'Professional mobile app development services. Native iOS and Android apps, cross-platform solutions with AI integration. Custom mobile applications that deliver results.',
    keywords: ['mobile app development', 'iOS app development', 'Android app development', 'cross-platform apps', 'native apps', 'mobile AI integration'],
    ogTitle: 'Mobile App Development Services | Fivsys',
    ogDescription: 'Create powerful mobile applications with our expert development team. iOS, Android, and cross-platform solutions.',
    canonical: '/services/app-development'
  });
  // Analytics tracking
  useEffect(() => {
    analytics.trackPageView({
      page_path: '/services/app-development',
      page_title: 'App Development Service'
    });
    analytics.trackEvent({
      action: 'page_view',
      category: 'service',
      label: 'App Development'
    });
  }, []);

  return (
    <ServiceLayout
      title="App Development"
      description="Native and cross-platform mobile applications that deliver exceptional user experiences across all devices."
      icon={<Smartphone className="h-16 w-16 text-fivsys-red" />}
      features={[
        "Native iOS app development",
        "Native Android app development",
        "Cross-platform app development",
        "UI/UX design for mobile applications",
        "API development and integration",
        "App store submission and optimization",
        "Mobile app testing and quality assurance",
        "App analytics implementation",
        "Push notification systems",
        "In-app purchases and subscription models",
        "Secure authentication and data storage",
        "Ongoing maintenance and updates"
      ]}
      benefits={[
        {
          title: "Expanded Market Reach",
          description: "Reach users on their preferred devices and platforms, expanding your market and creating new revenue opportunities."
        },
        {
          title: "Enhanced User Engagement",
          description: "Create immersive, intuitive experiences that keep users engaged and encourage repeat usage."
        },
        {
          title: "Brand Loyalty",
          description: "Well-designed apps foster brand loyalty and establish your company as an innovator in your industry."
        },
        {
          title: "Streamlined Processes",
          description: "Automate and streamline business processes, increasing efficiency and reducing operational costs."
        },
        {
          title: "Direct Customer Communication",
          description: "Engage directly with customers through push notifications, in-app messaging, and personalized content."
        },
        {
          title: "Valuable Data Insights",
          description: "Gather valuable data on user behavior and preferences to inform business decisions and product improvements."
        }
      ]}
      processSteps={[
        {
          title: "Requirements Analysis",
          description: "We analyze your business requirements, target audience, and technical constraints to define the scope and features of your app."
        },
        {
          title: "UI/UX Design",
          description: "Our designers create wireframes and visual designs that ensure a seamless, intuitive user experience that aligns with your brand identity."
        },
        {
          title: "Development",
          description: "Our development team builds your app using the latest technologies and best practices, ensuring high performance and scalability."
        },
        {
          title: "Testing & Quality Assurance",
          description: "We conduct rigorous testing across multiple devices and scenarios to ensure your app is bug-free and provides a consistent experience."
        },
        {
          title: "Deployment",
          description: "We handle the submission process to app stores, ensuring compliance with all requirements and optimizing for discoverability."
        },
        {
          title: "Post-Launch Support",
          description: "We provide ongoing maintenance, updates, and optimization to ensure your app continues to perform well and meet evolving user needs."
        }
      ]}
      ctaText="Ready to create your mobile app?"
    />
  );
};

export default AppDevelopment;
