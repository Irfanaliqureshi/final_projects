import React from 'react';
import Link from 'next/link';

// Define the structure for a single category item
interface CategoryItemProps {
  iconClass: string; // Class for the Flaticon (or alternative icon system)
  title: string;
  description: string;
  link: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ iconClass, title, description, link }) => {
  return (
    <div className="single-cat mb-12 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="cat-icon mb-4">
        {/* TODO: Replace Flaticon with a suitable icon library (e.g., React Icons) or SVG */}
        <span className={`${iconClass} text-4xl text-blue-600`}></span> 
      </div>
      <div className="cat-cap">
        <h5 className="text-xl font-semibold mb-2">
          {/* Refactored Link: Removed legacyBehavior and nested <a> */}
          <Link href={link} className="text-gray-900 hover:text-blue-600">
            {title}
          </Link>
        </h5>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        {/* Refactored Link: Removed legacyBehavior and nested <a> */}
        <Link href={link} className="read-more1 text-blue-600 hover:underline font-medium text-sm">
          Read More &gt;
        </Link>
      </div>
    </div>
  );
};

const CategoriesSection: React.FC = () => {
  // Placeholder data - replace with actual data from backend/CMS later
  const categories: CategoryItemProps[] = [
    {
      iconClass: 'flaticon-web-design', // Placeholder class
      title: 'Web Design',
      description: 'Learn the fundamentals and advanced techniques of modern web design.',
      link: '/courses/web-design'
    },
    {
      iconClass: 'flaticon-education', // Placeholder class
      title: 'App Development',
      description: 'Build mobile applications for Android and iOS platforms.',
      link: '/courses/app-development'
    },
    {
      iconClass: 'flaticon-communications', // Placeholder class
      title: 'Video Editing',
      description: 'Master video editing software and techniques for various media.',
      link: '/courses/video-editing'
    },
    {
      iconClass: 'flaticon-computing', // Placeholder class
      title: 'Digital Marketing',
      description: 'Explore strategies for online marketing, SEO, and social media.',
      link: '/courses/digital-marketing'
    },
    {
      iconClass: 'flaticon-tools-and-utensils', // Placeholder class
      title: 'SEO Marketing',
      description: 'Deep dive into Search Engine Optimization to boost online visibility.',
      link: '/courses/seo-marketing'
    },
    {
      iconClass: 'flaticon-business', // Placeholder class
      title: 'Content Writing',
      description: 'Develop skills in creating engaging and effective written content.',
      link: '/courses/content-writing'
    },
  ];

  return (
    <div className="categories-area section-padding30 py-16 lg:py-24 bg-gray-50"> {/* Added padding and background */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <div className="w-full lg:w-8/12 xl:w-7/12">
            {/* Section Title */}
            <div className="section-tittle text-center">
              <span className="block text-blue-600 font-semibold mb-2">Popular Online Courses</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Let&apos;s Browse All Categories</h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              iconClass={category.iconClass}
              title={category.title}
              description={category.description}
              link={category.link}
            />
          ))}
        </div>
        {/* Section Button */}
        <div className="flex justify-center mt-12">
          {/* Refactored Link: Removed legacyBehavior and nested <a> */}
          <Link href="/courses" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded hover:bg-blue-700 transition duration-300">
            Find More Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;

