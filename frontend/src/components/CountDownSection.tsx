import React from 'react';

// Define structure for a single counter item
interface CounterItemProps {
  iconSvg?: React.ReactNode; // Optional SVG icon node
  iconPlaceholderClass?: string; // Placeholder if no SVG
  count: string | number;
  label: string;
}

const CounterItem: React.FC<CounterItemProps> = ({ iconSvg, iconPlaceholderClass, count, label }) => {
  return (
    <div className="single-counter text-center mb-8 lg:mb-0">
      {/* TODO: Replace placeholder with actual SVG or icon component */}
      <div className="mb-4 h-16 w-16 mx-auto flex items-center justify-center bg-blue-100 rounded-full">
        {iconSvg ? iconSvg : <span className={`text-3xl text-blue-600 ${iconPlaceholderClass}`}>?</span>}
      </div>
      <span className="counter block text-4xl font-bold text-blue-600">{count}</span>
      <p className="text-gray-600 mt-1">{label}</p>
    </div>
  );
};

const CountDownSection: React.FC = () => {
  // Placeholder data - replace with actual data later
  const counters: CounterItemProps[] = [
    {
      // Placeholder icon class - replace with actual icon/SVG
      iconPlaceholderClass: 'fas fa-user-graduate', // Example Font Awesome class
      count: '1,200+',
      label: 'Students Enrolled'
    },
    {
      iconPlaceholderClass: 'fas fa-book-open', // Example Font Awesome class
      count: '50+',
      label: 'Courses Available'
    },
    {
      iconPlaceholderClass: 'fas fa-chalkboard-teacher', // Example Font Awesome class
      count: '30+',
      label: 'Expert Instructors'
    },
    {
      iconPlaceholderClass: 'fas fa-globe', // Example Font Awesome class
      count: '10+',
      label: 'Countries Reached'
    },
  ];

  return (
    // TODO: Add the background image if needed using Tailwind's bg-image utilities or inline style
    <div className="count-down-area py-16 lg:py-24 bg-gray-100"> {/* Using gray background as placeholder */}
      <div className="container mx-auto px-4">
        <div className="count-down-wrapper">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {counters.map((item, index) => (
              <CounterItem
                key={index}
                iconPlaceholderClass={item.iconPlaceholderClass}
                count={item.count}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownSection;

