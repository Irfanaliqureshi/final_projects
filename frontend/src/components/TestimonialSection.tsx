import React from 'react';
import Image from 'next/image';

// Define structure for a single testimonial
interface TestimonialItemProps {
  imgSrc: string;
  name: string;
  role: string;
  text: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ imgSrc, name, role, text }) => {
  return (
    <div className="single-testimonial text-center px-4">
      <div className="testimonial-founder flex justify-center items-center mb-4">
        <div className="founder-img mr-4">
          <Image src={imgSrc} alt={name} width={80} height={80} className="rounded-full" />
        </div>
        <div className="founder-text text-left">
          <span className="block font-semibold text-gray-900">{name}</span>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <div className="testimonial-caption">
        <p className="text-gray-700 italic">&quot;{text}&quot;</p>
      </div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  // Placeholder data - replace with actual data later
  const testimonials: TestimonialItemProps[] = [
    {
      imgSrc: '/assets/img/gallery/founder-img.png', // Placeholder image
      name: 'Ahmed Khan',
      role: 'Student, Karachi',
      text: 'This platform provided clear guidance on choosing my university major. The AI suggestions were surprisingly accurate and helpful!',
    },
    {
      imgSrc: '/assets/img/gallery/founder-img.png', // Placeholder image
      name: 'Fatima Ali',
      role: 'Job Seeker, Hyderabad',
      text: 'I found relevant job openings specific to my city much faster here than on other portals. The skill development resources are great too.',
    },
    {
      imgSrc: '/assets/img/gallery/founder-img.png', // Placeholder image
      name: 'Bilal Shah',
      role: 'Freelancer, Sukkur',
      text: 'The legal toolkit and earning guidance sections are invaluable for someone starting out like me. Highly recommended!',
    },
  ];

  // TODO: Implement carousel functionality (e.g., using react-slick or swiper)
  // For now, displaying the first testimonial statically or mapping through them without carousel.

  return (
    // TODO: Add background image if needed
    <div className="testimonial-area py-16 lg:py-24 bg-white"> {/* Added padding */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <div className="w-full lg:w-8/12 xl:w-7/12">
            {/* Section Title */}
            <div className="section-tittle text-center">
              <span className="block text-blue-600 font-semibold mb-2">Testimonials</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What Our Users Say</h2>
            </div>
          </div>
        </div>
        {/* Testimonial Content - Placeholder for Carousel */}
        <div className="testimonial-active">
          {/* Displaying first testimonial as placeholder */}
          {testimonials.length > 0 && (
            <TestimonialItem
              imgSrc={testimonials[0].imgSrc}
              name={testimonials[0].name}
              role={testimonials[0].role}
              text={testimonials[0].text}
            />
          )}
          {/* Ideally, map through items within a carousel component */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialItem key={index} {...testimonial} />
            ))}
          </div> */} 
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

