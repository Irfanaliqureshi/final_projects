import React from 'react';

// Define structure for a single service item
interface ServiceItemProps {
  iconClass: string; // Placeholder for icon (e.g., Flaticon or other library)
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ iconClass, title, description }) => {
  return (
    <div className="single-services mb-8 lg:mb-0 text-center px-4">
      <div className="features-icon mb-4">
        {/* TODO: Replace with actual icon component/SVG */}
        <span className={`${iconClass} text-5xl text-blue-600`}></span>
      </div>
      <div className="features-caption">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  // Placeholder data - replace with actual data later
  const services: ServiceItemProps[] = [
    {
      iconClass: 'flaticon-support', // Placeholder
      title: 'Personalized Guidance',
      description: 'AI-powered career and education suggestions tailored to your profile and goals.',
    },
    {
      iconClass: 'flaticon-briefcase', // Placeholder
      title: 'Job Matching',
      description: 'Connect with relevant job opportunities across Sindh based on your skills and interests.',
    },
    {
      iconClass: 'flaticon-learning', // Placeholder
      title: 'Skill Development',
      description: 'Access free learning paths and resources to acquire in-demand skills.',
    },
  ];

  return (
    <div className="services-area py-16 lg:py-24 bg-gray-50"> {/* Added padding and background */}
      <div className="container mx-auto px-4">
        {/* Section Title (Optional - Add if present in template) */}
        {/* <div className="flex justify-center mb-16">
          <div className="w-full lg:w-8/12 xl:w-7/12">
            <div className="section-tittle text-center">
              <span className="block text-blue-600 font-semibold mb-2">Our Services</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What We Offer</h2>
            </div>
          </div>
        </div> */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              iconClass={service.iconClass}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

