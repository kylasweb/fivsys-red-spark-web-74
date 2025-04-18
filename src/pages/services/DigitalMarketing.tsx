
import ServiceLayout from '@/components/ServiceLayout';
import { BarChart3 } from 'lucide-react';

const DigitalMarketing = () => {
  return (
    <ServiceLayout
      title="Digital Marketing"
      description="Data-driven digital marketing strategies that increase your online visibility and drive measurable results."
      icon={<BarChart3 className="h-16 w-16 text-fivsys-red" />}
      features={[
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) Advertising",
        "Content Marketing",
        "Email Marketing",
        "Conversion Rate Optimization (CRO)",
        "Marketing Automation",
        "Analytics and Performance Tracking",
        "Display Advertising",
        "Remarketing Campaigns",
        "Landing Page Optimization",
        "Competitor Analysis",
        "Comprehensive Digital Strategy"
      ]}
      benefits={[
        {
          title: "Increased Online Visibility",
          description: "Improve your search rankings and online presence to reach more potential customers at the moment they're looking for your products or services."
        },
        {
          title: "Higher Conversion Rates",
          description: "Optimize your digital assets and campaigns to convert more visitors into leads, subscribers, and customers."
        },
        {
          title: "Better ROI on Marketing Spend",
          description: "Allocate your marketing budget more effectively with data-driven insights and targeted campaigns that deliver measurable results."
        },
        {
          title: "Enhanced Brand Reputation",
          description: "Build trust and credibility through consistent, high-quality content and positive online interactions with your audience."
        },
        {
          title: "Valuable Customer Insights",
          description: "Gain deep insights into customer behavior, preferences, and needs to inform product development and business strategy."
        },
        {
          title: "Competitive Advantage",
          description: "Stay ahead of competitors with innovative marketing strategies and continuous optimization based on performance data."
        }
      ]}
      processSteps={[
        {
          title: "Audit & Analysis",
          description: "We analyze your current digital presence, marketing efforts, competitors, and target audience to identify opportunities and challenges."
        },
        {
          title: "Strategy Development",
          description: "We create a comprehensive digital marketing strategy tailored to your business goals, target audience, and competitive landscape."
        },
        {
          title: "Campaign Creation",
          description: "Our team develops targeted campaigns across appropriate channels, including compelling content, creative assets, and clear calls to action."
        },
        {
          title: "Implementation & Execution",
          description: "We deploy campaigns and optimize your digital properties to ensure maximum performance and conversion potential."
        },
        {
          title: "Monitoring & Optimization",
          description: "We continuously monitor campaign performance, making data-driven adjustments to improve results and ROI."
        },
        {
          title: "Reporting & Analysis",
          description: "We provide regular, detailed reports on key performance indicators, insights, and recommendations for ongoing improvement."
        }
      ]}
      ctaText="Ready to boost your digital marketing results?"
    />
  );
};

export default DigitalMarketing;
