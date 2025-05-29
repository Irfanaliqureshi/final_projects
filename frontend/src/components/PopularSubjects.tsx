import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define structure for a single subject card
interface SubjectCardProps {
  imgSrc: string;
  category: string;
  title: string;
  price: string;
  link: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ imgSrc, category, title, price, link }) => {
  return (
    <div className="single-topic relative mb-8 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="topic-img">
        <Image src={imgSrc} alt={title} width={400} height={250} className="w-full object-cover" />
        <div className="topic-content-box absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="topic-content flex justify-between items-center">
            {/* Refactored Link: Removed nested <a> tag */}
            <h3 className="text-white">
              <Link href={link} className="hover:underline">
                {category}
              </Link>
            </h3>
            <span className="text-white font-semibold bg-blue-600 px-2 py-1 rounded text-sm">{price}</span>
          </div>
        </div>
      </div>
      <div className="topic-caption p-4">
        <h4 className="text-lg font-semibold mb-2">
          {/* Refactored Link: Removed nested <a> tag */}
          <Link href={link} className="text-gray-900 hover:text-blue-600">
            {title}
          </Link>
        </h4>
        {/* Optional: Add rating or other details here */}
      </div>
    </div>
  );
};

const PopularSubjects: React.FC = () => {
  // Placeholder data - replace with actual data later
  const subjects: SubjectCardProps[] = [
    {
      imgSrc: '/assets/img/gallery/topic1.png', // Use paths relative to /public
      category: 'Programing',
      title: 'Basic Computer Programming',
      price: '$20',
      link: '/courses/programming/basic-computer'
    },
    {
      imgSrc: '/assets/img/gallery/topic2.png',
      category: 'Programing',
      title: 'Web Development',
      price: '$25',
      link: '/courses/programming/web-development'
    },
    {
      imgSrc: '/assets/img/gallery/topic3.png',
      category: 'Programing',
      title: 'Basic Fundamentals for Software Engineering',
      price: '$30',
      link: '/courses/programming/software-engineering-fundamentals'
    },
    {
      imgSrc: '/assets/img/gallery/topic4.png',
      category: 'Design',
      title: 'UI/UX Design Principles',
      price: '$25',
      link: '/courses/design/ui-ux-principles'
    },
    {
      imgSrc: '/assets/img/gallery/topic5.png',
      category: 'Design',
      title: 'Graphic Design Essentials',
      price: '$20',
      link: '/courses/design/graphic-design-essentials'
    },
    {
      imgSrc: '/assets/img/gallery/topic6.png',
      category: 'Marketing',
      title: 'Digital Marketing Strategy',
      price: '$35',
      link: '/courses/marketing/digital-strategy'
    },
  ];

  return (
    <div className="popular-subjects-area section-padding30 py-16 lg:py-24"> {/* Added padding */}
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex justify-center mb-16">
          <div className="w-full lg:w-8/12 xl:w-7/12">
            <div className="section-tittle text-center">
              <span className="block text-blue-600 font-semibold mb-2">Explore Top Subjects</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Explore Top Subjects</h2>
            </div>
          </div>
        </div>
        {/* Subject Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <SubjectCard
              key={index}
              imgSrc={subject.imgSrc}
              category={subject.category}
              title={subject.title}
              price={subject.price}
              link={subject.link}
            />
          ))}
        </div>
        {/* View More Button */}
        <div className="flex justify-center mt-12">
          {/* Refactored Link: Removed nested <a> tag and applied styles directly */}
          <Link href="/courses" className="inline-block border border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded hover:bg-blue-600 hover:text-white transition duration-300">
            View More Subjects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularSubjects;

