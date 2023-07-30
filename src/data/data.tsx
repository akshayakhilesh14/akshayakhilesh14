import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import porfolioImage13 from '../images/portfolio/portfolio-13.jpg';
import porfolioImage14 from '../images/portfolio/portfolio-14.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Personal Website of Akshay Akhileshwaran',
  description: "Student Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Akshay`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Hi, I'm Akshay, an aspiring <strong className="text-stone-100">Data Scientist and Machine Learning</strong>, Currently a senior in  <strong className="text-stone-100">GEMS Modern Academy, </strong> I have always been passionate about coding, public speaking, and playing basketball. 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I try to find a balance <strong className="text-stone-100">between relaxation, recreation, and personal growth, </strong>,
        ensuring that my free time enriches your life and helps me feel more fulfilled. I enjoy <strong className="text-stone-100">reading, playing sports, or </strong>{' '}
        <strong className="text-stone-100">engaging in volunteering work and charitable activities.</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `My journey into the world of data science and machine learning began at an early age and I am captivated by the endless possibilities and the power to solve complex problems using technology and Artificial Intelligence.This has led me to explore and master various programming languages and frameworks.
  As a natural communicator, I discovered my love for public speaking. I actively sought opportunities to share my knowledge and ideas with others, whether it was presenting a project in front of my classmates or participating in debate competitions.
  I have always desired to make a positive impact in the world, and through my curiosity and eagerness, I have undertaken many opportunities to apply my skills and contribute to solving complex problems.
  As I embark on the next phase of my academic journey, I'm looking for chances to work together with people who are interested in data science and machine learning, just like me.`,
  aboutItems: [
    {label: 'Location', text: 'Dubai, United Arab Emirates', Icon: MapIcon},
    {label: 'Age', text: '17', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: ': Artificial Intelligence, Computer Science, Data Science, Machine Learning, Game Design, Football, Basketball, Tennis.', Icon: SparklesIcon},
    {label: 'Study', text: 'GEMS Modern Academy', Icon: AcademicCapIcon},
    {label: 'Internships', text: 'ESOL Education LLC, Al Habtoor Group', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 8,
      },
      {
        name: 'Tamil',
        level: 8,
      },
      {
        name: 'French',
        level: 7,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'Javascript, HTML and CSS',
        level: 8.5,
      },
      {
        name: 'Python',
        level: 7.75,
      },
      {
        name: 'Scratch',
        level: 9,
      },
    ],
  },
  {
    name: 'Interests',
    skills: [
      {
        name: 'Artificial Intelligence',
        level: 10,
      },
      {
        name: 'Data Science',
        level: 10,
      },
      {
        name: 'Machine Learning',
        level: 10,
      },
      {
        name: 'Game Design',
        level: 10,
      },
    ],
  },
  {
    name: 'Sports',
    skills: [
      {
        name: 'Soccer',
        level: 10,
      },
      {
        name: 'Basketball',
        level: 10,
      },
      {
        name: 'Tennis',
        level: 10,
      },
      {
        name: 'Cricket',
        level: 10,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'The Protean Rover',
    description: 'Innovation Mela',
    url: 'https://akshayakhilesh14.wixsite.com/the-protean-rover',
    image: porfolioImage1,
  },
  {
    title: 'The Farmadrone',
    description: 'Project Prism',
    url: 'https://akshayakhilesh14.wixsite.com/thefarmadrone',
    image: porfolioImage2,
  },
  {
    title: 'IT and Hackathon Club',
    description: 'Launched the very first IT and Hackathon Club at my school, GEMS Modern Academy',
    url: 'https://akshayakhilesh14.wixsite.com/it-hackathon',
    image: porfolioImage3,
  },
  {
    title: 'Veritas AI',
    description: 'Part of the AI Scholars Team',
    url: 'https://akshayakhilesh14.wixsite.com/akshay-veritasai',
    image: porfolioImage4,
  },
  {
    title: 'STREAM Competition ',
    description: 'Created a Rube Goldberg Machine using sustainable material.',
    url: 'https://akshayakhilesh14.wixsite.com/streamcompetition',
    image: porfolioImage5,
  },
  {
    title: 'Academic Honors',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/myacademichonors',
    image: porfolioImage6,
  },
  {
    title: 'Model United Nation(MUN)',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/mun-debating',
    image: porfolioImage7,
  },
  {
    title: 'My Cultural Diversity',
    description: 'Celebrating diverse festivals!',
    url: 'https://akshayakhilesh14.wixsite.com/culturaldiversity',
    image: porfolioImage8,
  },
  {
    title: 'My Journalism Experience',
    description: 'Inquisitive storyteller with the power of my pen.',
    url: 'https://akshayakhilesh14.wixsite.com/journalism',
    image: porfolioImage9,
  },
  {
    title: 'Community Service',
    description: 'Empowering hearts, building stronger communities',
    url: 'https://akshayakhilesh14.wixsite.com/communityservice',
    image: porfolioImage10,
  },
  {
    title: 'Internship Endeavors',
    description: 'Interned with ESOL Education LLC and Al Habtoor Group',
    url: 'https://akshayakhilesh14.wixsite.com/internship-esol',
    image: porfolioImage11,
  },
  {
    title: 'Game Development Club',
    description: 'Pioneered our first ever Game Development Club',
    url: 'https://akshayakhilesh14.wixsite.com/gamedevclub',
    image: porfolioImage12,
  },
  {
    title: 'HOPE Amel Drive',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/communityservice',
    image: porfolioImage13,
  },
  {
    title: 'The Tehseen Scholar Intervention Program (TSIP)',
    description: '',
    url: 'https://akshayakhilesh14.wixsite.com/mentoring',
    image: porfolioImage14,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2022 - April 2024',
    location: 'GEMS Modern Academy',
    title: 'High School Diploma - Grades 11 and 12',
    content: <p>Activities and societies: Head Editor for Natsukashii, the Weekly School Newsletter. Was the Person of Duty (POD) of the School Academic Council. Was part of Core Team of RS Council. Selected for PISA Research Inquiry Leader of IT, Hackathon Club.Represented my school at MUN Conferences. Participant of CodeX Hackathon(Web Development Challenge). Represented my House,'Cygnus' in Inter-House Debate. Part of sports school team: Soccer, Tennis, Basketball, Cricket for 2 years. Participated in Innovation Mela, STREAM, Project Prism. Secured KS Varkey Scholarship. Activities and societies: Head Editor for Natsukashii,Weekly School Newsletter. Person of Duty(POD) of Academic Council. Part of Core Team of RS Council. Selected for the ACER PISA Research Inquiry, Leader of IT, Hackathon Club. Represented my school at MUN Conferences. Participant of CodeX Hackathon (Web Development Challenge). Represented my House 'Cygnus' in Inter-House Debate. Part of sports school team: Soccer, Tennis, Basketball, Cricket for 2 years. Participated in Innovation Mela, STREAM, Project Prism. Secured KS Varkey Scholarship. </p>,
  },
  {
    date: 'April 2020 - April 2022',
    location: 'GEMS Modern Academy',
    title: 'High School Diploma - Grades 9 and 10',
    content: <p>Involves study of Mathematics, Computers, Social Studies, Science, English, French. Head Editor for Freshman Chronicles, the Weekly School Newsletter
    Participant of CodeX Hackathon (Web Development Challenge)
    Attended an ISME Management and Entrepreneurship Boot Camp. Was a Radio Jockey (RJ) at Modern Mania, a school-wide event. Represented my House 'Cygnus' in Inter-House Debates. Mentor in the Tahseen's Scholar Intervention Program Council to increase performances of students by 10% in average. Part of school sports teams: Soccer, Tennis, Basketball, Cricket for the 2 years. 
    Grade 10: 98.8%(#6 All India Rank and #4 Middle East Rank)
    
    Received a final certificate in July 2022 Indian Certificate of Secondary Examination, and received final percentages in the subjects:
    
    Mathematics: 100%,
    Computer Applications: 100%,
    Social Studies: 99%,
    Science: 98%,
    English: 97%, and
    French: 90%
    
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2022 - August 2022',
    location: 'ESOL Education LLC',
    title: 'Software Engineer Intern',
    content: (
      <p>
        Interned under the Information Technology Network and Support Engineers sector. Set up a WIFI network, learned troubleshooting, set up access points and SSID. Solved a problem by projecting and accessing the information of school provided devices onto the smart BenQ boards through touch screen using the feature ‘InstaShare’. 

Installed an MDM of Dunecrest, the Mosyle Apple MDM onto each school device. Learnt how to implement an antivirus on all school systems and learnt the dangers of different malware for a software.

Configured and was responsible in the programming of the CISCO 5500 series which dynamically configured various ports throughout the school based on the device type detected on the specific port.

Learned more about the iOS software and helped set up devices on Mac mini software and configured various Apple Devices for educational purposes for staff and students.
      </p>
    ),
  },
  {
    date: 'July 2023 - August 2023',
    location: 'Al Habtoor Group',
    title: 'Software Engineer Intern',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Ms. Swarna Bharathan, Head of the Computer Department',
      text: 'As a teacher of computer science at GEMS Modern Academy – Dubai, I have had the pleasure of teaching and mentoring Akshay for the past 2 years. He is an exceptional student who possesses remarkable quantitative skills, unwavering determination, and a true passion for exploring the realms of the subject further. Akshay is the recipient of the prestigious KS Varkey scholarship, which recognizes students who demonstrate outstanding academic performance, by attaining an aggregate percentage of 98.8% in the ICSE Grade 10 Examination. He also received the Azeem Scholar award, which celebrates exceptional individuals who have demonstrated exemplary dedication to their studies and personal growth.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Mr. MF Salim, Head of the Mathematics Department',
      text: 'Akshay displays a stand-out work ethic. He approaches each challenge positively, takes criticism constructively and demonstrates an unyielding desire to improve. As he excels in his own coursework, many students look up to him and seek his help with Math, and Akshay approaches this with genuine empathy.  He spends a considerable amount of his time mentoring numerous students across various grades. This has helped him develop his confidence and leadership abilities as well. ',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Ms. Aarti Seth, Assistant Supervisor of the Senior School',
      text: 'Akshay has demonstrated an unparalleled passion for writing and journalism throughout his high school years. As one of the head editors of our school newsletter and magazine, namely The Freshman Chronicles and The Natsukashii, Akshay showcased his exceptional creativity, editorial expertise, and dedication to producing high-quality content. He highlighted student activities and initiatives through articles, poems, artworks, and digital media and curated all articles on the newsletter along with the editorial board. His meticulous attention to detail, his ability to articulate complex ideas, and his keen editorial judgment have significantly contributed to the success and reputation of these publications.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Welcome to my personal website! I am thrilled that you have stopped by. If you would like to get in touch with me, I would love to hear from you.',
  items: [
    {
      type: ContactType.Email,
      text: 'Akshay14806@gmail.com',
      href: 'mailto:Akshay14806@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Dubai, United Arab Emirates',
      href: 'https://goo.gl/maps/uWoo6dGodB3Jb7Mn6',
    },
    {
      type: ContactType.Instagram,
      text: '@becauseiambatman07',
      href: 'https://instagram.com/becauseiambatman07?igshid=OGQ5ZDc2ODk2ZA==',
    },
    {
      type: ContactType.Github,
      text: 'akshayakhilesh14',
      href: 'https://github.com/akshayakhilesh14',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/akshayakhilesh14'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/22273387/akshay-akhileshwaran'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/akshayakhileshwaran/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://instagram.com/becauseiambatman07?igshid=OGQ5ZDc2ODk2ZA=='},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/AkshayA14806'},
];
