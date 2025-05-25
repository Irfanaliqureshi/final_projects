import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection: React.FC = () => {
  return (
    <div className="about-area-1 py-16 lg:py-24 bg-white"> {/* Added padding */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="about-img relative">
            <Image 
              src="/assets/img/gallery/about1.png" 
              alt="About Us Image 1" 
              width={550} 
              height={450} 
              className="rounded-lg shadow-lg"
            />
            {/* Optional: Add the small overlay image if needed */}
            {/* <Image 
              src="/assets/img/gallery/about2.png" 
              alt="About Us Image 2" 
              width={200} 
              height={200} 
              className="absolute bottom-[-50px] right-[-50px] rounded-lg shadow-md hidden md:block"
            /> */}
          </div>

          {/* Text Content Section */}
          <div className="about-caption">
            <div className="section-tittle mb-6">
              <span className="block text-blue-600 font-semibold mb-2">About Our Platform</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Building a Brighter Future for Sindh's Youth</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Our mission is to empower the students and job seekers of Sindh with personalized AI-driven guidance for education, careers, and skill development. We aim to bridge the information gap and provide accessible resources for everyone.
            </p>
            <p className="text-gray-600 mb-8">
              Leveraging cutting-edge AI and local insights, we offer tailored recommendations, connect users with opportunities, and foster a supportive community for growth and success.
            </p>
            <Link href="/about" legacyBehavior>
              <a className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded hover:bg-blue-700 transition duration-300">Learn More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

