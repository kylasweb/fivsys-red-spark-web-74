
import ServiceLayout from '@/components/ServiceLayout';
import { TrendingUp } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import analytics from '@/services/analytics';
import { useEffect } from 'react';

const SalesStrategy = () => {
  // SEO Configuration
  useSEO({
    title: 'AI Sales Strategy Services | Intelligent Sales Automation | Fivsys',
    description: 'Professional sales strategy services with AI integration. Sales automation, lead scoring, CRM optimization, and conversion strategies that drive revenue growth.',
    keywords: ['sales strategy', 'AI sales automation', 'lead scoring', 'sales optimization', 'CRM integration', 'sales funnel optimization', 'conversion strategy'],
    ogTitle: 'AI Sales Strategy Services | Fivsys',
    ogDescription: 'Transform your sales performance with intelligent automation and data-driven strategies. AI-powered sales solutions.',
    canonical: '/services/sales-strategy'
  });

  // Analytics tracking
  useEffect(() => {
    analytics.trackPageView({
      page_path: '/services/sales-strategy',
      page_title: 'Sales Strategy Service'
    });
    analytics.trackEvent({
      action: 'page_view',
      category: 'service',
      label: 'Sales Strategy'
    });
  }, []);

  return (
    <ServiceLayout
      title="Sales Strategy"
      description="Comprehensive sales strategies that convert leads into loyal customers and maximize revenue growth."
      icon={<TrendingUp className="h-16 w-16 text-fivsys-red" />}
      features={[
        "Sales Process Development",
        "Sales Funnel Optimization",
        "CRM Implementation and Optimization",
        "Sales Team Training and Coaching",
        "Lead Generation Strategies",
        "Lead Qualification Frameworks",
        "Sales and Marketing Alignment",
        "Sales Analytics and Reporting",
        "Pricing Strategy",
        "Sales Forecasting",
        "Customer Retention Strategies",
        "Sales Automation Implementation"
      ]}
      benefits={[
        {
          title: "Increased Revenue Growth",
          description: "Implement proven strategies that increase conversion rates, average deal size, and overall revenue performance."
        },
        {
          title: "Shortened Sales Cycles",
          description: "Streamline your sales process to reduce time-to-close and increase efficiency across your sales operation."
        },
        {
          title: "Higher Conversion Rates",
          description: "Optimize each stage of your sales funnel to convert more prospects into customers at every opportunity."
        },
        {
          title: "Improved Lead Quality",
          description: "Focus your sales efforts on high-quality leads with greater purchase intent and shorter closing timelines."
        },
        {
          title: "Enhanced Customer Relationships",
          description: "Build stronger, more valuable customer relationships that lead to increased loyalty and lifetime value."
        },
        {
          title: "Data-Driven Decision Making",
          description: "Leverage sales analytics to make informed decisions about resource allocation, targeting, and strategy adjustments."
        }
      ]}
      processSteps={[
        {
          title: "Sales Assessment",
          description: "We analyze your current sales processes, team performance, CRM usage, and results to identify strengths, weaknesses, and opportunities."
        },
        {
          title: "Strategy Development",
          description: "We create a customized sales strategy aligned with your business goals, market position, and customer journey."
        },
        {
          title: "Process Implementation",
          description: "We help implement new sales methodologies, tools, and processes designed to increase efficiency and results."
        },
        {
          title: "Team Training",
          description: "We provide training and coaching to ensure your sales team has the skills, knowledge, and techniques to execute the strategy effectively."
        },
        {
          title: "Technology Integration",
          description: "We help select, implement, and optimize sales technologies and CRM systems to support your sales strategy and improve efficiency."
        },
        {
          title: "Performance Monitoring",
          description: "We establish key performance indicators and reporting frameworks to track progress and make data-driven adjustments."
        },
        {
          title: "Continuous Optimization",
          description: "We provide ongoing support and recommendations to refine your sales strategy based on results, feedback, and changing market conditions."
        }
      ]}
      ctaText="Ready to transform your sales performance?"
    />
  );
};

export default SalesStrategy;
