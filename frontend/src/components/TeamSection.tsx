import React from 'react';
import Image from 'next/image';

// Define structure for a single team member (instructor)
interface TeamMemberProps {
  imgSrc: string;
  name: string;
  title: string;
  // Removed unused socialLinks prop
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ imgSrc, name, title }) => { // Removed unused socialLinks parameter
  return (
    <div className="single-team mb-8 text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="team-img mb-4 relative overflow-hidden rounded-full w-32 h-32 mx-auto">
        <Image src={imgSrc} alt={name} layout="fill" objectFit="cover" />
        {/* Social Icons Overlay (Optional - Add if needed based on template) */}
      </div>
      <div className="team-caption">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  // Placeholder data - replace with actual instructor data later
  const instructors: TeamMemberProps[] = [
    {
      imgSrc: '/assets/img/gallery/team1.png', // Placeholder
      name: 'Dr. Aisha Rahman',
      title: 'Career Counseling Expert',
    },
    {
      imgSrc: '/assets/img/gallery/team2.png', // Placeholder
      name: 'Mr. Zeeshan Ahmed',
      title: 'Software Development Lead',
    },
    {
      imgSrc: '/assets/img/gallery/team3.png', // Placeholder
      name: 'Ms. Sana Javed',
      title: 'Digital Marketing Guru',
    },
    {
      imgSrc: '/assets/img/gallery/team4.png', // Placeholder
      name: 'Prof. Khalid Mehmood',
      title: 'Educational Advisor',
    },
  ];

  return (
    <div className="team-area section-padding30 py-16 lg:py-24 bg-gray-50"> {/* Added padding and background */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <div className="w-full lg:w-8/12 xl:w-7/12">
            {/* Section Title */}
            <div className="section-tittle text-center">
              <span className="block text-blue-600 font-semibold mb-2">Expert Instructors</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Meet Our Team</h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <TeamMemberCard
              key={index}
              imgSrc={instructor.imgSrc}
              name={instructor.name}
              title={instructor.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

