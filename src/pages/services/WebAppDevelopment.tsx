
import ServiceLayout from '@/components/ServiceLayout';
import { Code } from 'lucide-react';

const WebAppDevelopment = () => {
  return (
    <ServiceLayout
      title="Web App Development"
      description="Powerful, scalable web applications with robust backend systems and intuitive user interfaces."
      icon={<Code className="h-16 w-16 text-fivsys-red" />}
      features={[
        "Custom web application development",
        "Full-stack development services",
        "UI/UX design for web applications",
        "Progressive Web Apps (PWAs)",
        "API development and integration",
        "Database design and optimization",
        "Cloud-based solutions",
        "Real-time features and functionality",
        "Authentication and authorization systems",
        "Performance optimization",
        "Automated testing and deployment",
        "Ongoing maintenance and support"
      ]}
      benefits={[
        {
          title: "Business Process Automation",
          description: "Automate complex business processes to increase efficiency, reduce errors, and save time and resources."
        },
        {
          title: "Enhanced Collaboration",
          description: "Create platforms that facilitate collaboration among team members, partners, and customers."
        },
        {
          title: "Centralized Data Management",
          description: "Store and manage all your business data in one secure, accessible location for improved decision-making."
        },
        {
          title: "Scalability",
          description: "Build solutions that can easily scale as your business grows, without sacrificing performance."
        },
        {
          title: "Competitive Advantage",
          description: "Gain a competitive edge with custom solutions tailored to your unique business needs and challenges."
        },
        {
          title: "Cost Efficiency",
          description: "Reduce operational costs through streamlined processes, improved resource allocation, and reduced manual work."
        }
      ]}
      processSteps={[
        {
          title: "Discovery & Analysis",
          description: "We start by understanding your business processes, goals, and pain points to define the scope and requirements of your web application."
        },
        {
          title: "Planning & Architecture",
          description: "We design the technical architecture, select appropriate technologies, and create a detailed development plan with milestones and deliverables."
        },
        {
          title: "UI/UX Design",
          description: "Our designers create wireframes and visual designs that ensure an intuitive, efficient user experience that aligns with your brand."
        },
        {
          title: "Development",
          description: "Our development team builds your web application using agile methodologies, with regular updates and feedback integration."
        },
        {
          title: "Testing & Quality Assurance",
          description: "We conduct comprehensive testing to ensure your web application is secure, performs well, and functions correctly across all use cases."
        },
        {
          title: "Deployment & Training",
          description: "We deploy your web application to production and provide training to ensure your team can effectively use and manage the system."
        },
        {
          title: "Ongoing Support & Evolution",
          description: "We provide ongoing maintenance and continuously improve your web application based on user feedback and evolving business needs."
        }
      ]}
      ctaText="Ready to build a powerful web application?"
    />
  );
};

export default WebAppDevelopment;
