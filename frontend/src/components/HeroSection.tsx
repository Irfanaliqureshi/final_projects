import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  // TODO: Implement slider functionality if multiple slides are needed.
  // For now, displaying the first slide content.
  return (
    <div className="slider-area bg-gray-100"> {/* Added a background color for visibility */}
      <div className="single-slider slider-height flex items-center py-20 lg:py-32"> {/* Adjusted padding */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            {/* Text Content */}
            <div className="hero__caption">
              {/* TODO: Add animations if required */}
              <span className="block text-blue-600 font-semibold mb-2">Popular Online Courses</span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">The New Way To Learn Properly With Us!</h1>
              {/* Hero Button */}
              <div className="hero__btn">
                {/* Refactored Link: Removed legacyBehavior and nested <a> */}
                <Link href="/courses" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded hover:bg-blue-700 transition duration-300">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Image Content (Hidden on smaller screens in original template) */}
            <div className="hidden lg:block justify-self-end">
              {/* TODO: Add animations if required */}
              <div className="hero-man">
                <Image 
                  src="/assets/img/hero/heroman.png" 
                  alt="Hero Image" 
                  width={500} // Adjust width as needed
                  height={500} // Adjust height as needed
                  priority // Prioritize loading for LCP
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

