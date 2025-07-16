import { AirplayIcon, NotepadText } from "lucide-react";
import images from "./images";
import data from "./data";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  cyrus,
  durchex,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  healthcare,
  jobit,
  tripguide,
  threejs,
  solidity,
  Anchor,
  Rust1,
  React_Native,
  tokenswap,
  communityhub,
  aiImage,
  icomarketplace,
  frontenddesign,
  aptos,
  move,
  sui,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  // {
  //   name: "CSS 3 and Tailwind CSS",
  //   icon: css,
  // },
  {
    name: "CSS 3 and Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  // {
  //   name: "Anchor",
  //   icon: Anchor,
  // },
  {
    name: "Rust and Anchor",
    icon: Rust1,
  },
  {
    name: "Move",
    icon: move,
  },
  {
    name: "React JS and Next JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },

  {
    name: "Node JS & Express JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },

  {
    name: "Sui Framework ",
    icon: sui,
  },
  {
    name: "Aptos Framework ",
    icon: aptos,
  },
  {
    name: "React Native",
    icon: React_Native,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];
const Mobiletechnologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3 ",
    icon: css,
  },
  {
    name: " Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  {
    name: "Rust",
    icon: Rust1,
  },
  {
    name: "Move",
    icon: move,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },

  // {
  //   name: "Next JS",
  //   icon: redux,
  // },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Anchor",
    icon: Anchor,
  },
  {
    name: "Sui Framework ",
    icon: sui,
  },
  {
    name: "Aptos Framework ",
    icon: aptos,
  },
  {
    name: "React Native",
    icon: React_Native,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Lead Full-Stack Blockchain Developer",
    company_name: "TetherZone",
    icon: durchex,
    iconBg: "#10182F",
    date: "April 2025 – July 2025",
    points: [
      "Leading the development of a semi-decentralized platform for selling USDT in exchange for KRW, combining centralized oversight with decentralized transparency.",
      "Implemented multilingual support (Korean/English), increasing regional accessibility and expanding the user base by 40%.",
      "Collaborated with product and compliance teams to build a secure, regulation-friendly transaction flow.",
      "Reduced frontend page load time by 35% via optimized components and efficient API architecture.",
      "Contributed across both frontend (React) and backend (Node.js, MongoDB) systems to ensure seamless performance and scalability.",
    ],
  },

  {
    title: "Blockchain Developer",
    company_name: "Durchex Ltd",
    icon: durchex,
    iconBg: "#383E56",
    date: "October 2024 - December 2024",
    points: [
      "Developed and deployed secure, efficient smart contracts for an NFT marketplace, ensuring seamless functionality and high reliability. ",

      "Collaborated closely with the frontend team to integrate blockchain functionality, enhancing user experience and platform efficiency.",

      "Optimized gas fees and transaction flows, resulting in reduced costs and faster processing for marketplace users. ",
    ],
  },
  {
    title: "Web3 Community Moderation",
    company_name: "Cyrus Community",
    icon: cyrus,
    iconBg: "#383E56",
    date: "August 2024 - December 2024",
    points: [
      "Engaged with members to address queries, resolve issues, and foster a positive environment, ensuring high member satisfaction.",
      " Monitored discussions to enforce community guidelines, maintaining a safe and respectful space for participants. ",
      "Gathered and analyzed community feedback, delivering actionable insights to the project team for product enhancements. ",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Freelancing",
    icon: starbucks,
    iconBg: "#383E56",
    date: "january 2024",
    points: [
      "Developed a responsive web app with robust server-side functionality, resulting in improved user interaction and a significant increase in revenue.",
      "Leveraged effective SEO strategies to drive organic traffic, contributing to a 25% revenue growth.",
      "Designed and implemented database schemas to ensure data integrity and optimize performance, resulting in increased lead capture and potential client engagement.",
      "Successfully reduced project delivery time by 20% while adhering to budget and timeline constraints.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company_name: "Tech-Contract",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Jan 2023 -  August 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Engineered a user-friendly web application, leading to a 20% enhancement in user experience and a 35% increase in consumer satisfaction.",
      "Managed both frontend and backend technologies effectively, resulting in a minimum of 50% cost saving for the organization",
      "Seamlessly integrated back-end APIs, optimized database schemas, and streamlined query processes, resulting in a 20% improvement in data storage and retrieval efficiency.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  // {
  //   title: "Full-Stack Web Developer",
  //   company_name: "Freelancing",
  //   icon: creator,
  //   iconBg: "#383E56",
  //   date: "Nov. 2023",
  //   points: [
  //     "Expanded application functionality and optimized code performance, achieving a notable 35% speed increase in software operation.",
  //     "Engineered an efficient database management system, enhancing data retrieval time by an impressive 25%.",
  //     "Seamlessly integrated with Restful APIs,",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Health_Care_App",
    description:
      "A HealthCare Management System. A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: healthcare,
    source_code_link: "https://github.com/enochdev2/healthcare_management_app",
    liveDemo: "https://healthcare-management-app.vercel.app/",
  },

  {
    name: "CommunityHub",
    description:
      "This project emerged from the need for a centralized platform where individuals can easily connect and engage within niche communities. Existing social media platforms often fail to meet the diverse needs of these groups. I envisioned a solution that fosters meaningful interactions and allows users to create and manage their own communities.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: communityhub,
    source_code_link: "https://github.com/enochdev2/trend",
    liveDemo: "https://communityhub-full-stack.vercel.app/",
  },

  {
    name: "ICO_MARKETPLACE",
    description:
      "The ICO Marketplace is a decentralized platform on the Ethereum blockchain for buying and selling ICO tokens. It enables project creators to launch and promote their ICOs, while investors can securely purchase and manage tokens. Leveraging blockchain technology, it offers a transparent, efficient, and secure environment for ICO participation, connecting innovative projects with investors",
    // description:
    //   "Dapp_Event is a decentralized application (DApp) built on the Ethereum blockchain that facilitates the creation, management, and participation in events through the issuance of non-fungible tokens (NFTs). The core idea is to provide a platform where event organizers can create and manage events while attendees can purchase tickets represented as NFTs.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: icomarketplace,
    source_code_link: "https://github.com/enochdev2/ICO_MARKETPLACE",
    liveDemo: "https://ico-marketplace-enoch.vercel.app/",
  },

  {
    name: "Token-Swap Marketplace",
    description:
      "The CustomDex contract is a decentralized exchange (DEX) built on the Ethereum blockchain. It facilitates token swaps between users, supporting both custom tokens and Ether. This smart contract enables seamless and secure peer-to-peer transactions, enhancing the flexibility and functionality of token exchanges within the Ethereum ecosystem.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tokenswap,
    source_code_link: "https://github.com/enochdev2/Token_Swap_Marketplace",
    liveDemo: "https://token-swap-marketplace.vercel.app/",
  },

  {
    name: "Brainwave",
    description:
      "In this project, I showcased my frontend skills by delivering a visually stunning and user-friendly design. My focus on modern UI/UX principles ensured an engaging experience with seamless interactions and polished aesthetics, demonstrating my ability to create elegant and effective interfaces. This project showcases my proficiency in crafting visually appealing designs.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: frontenddesign,
    source_code_link: "https://github.com/enochdev2/DEVENOCH",
    liveDemo: "https://devenoch.vercel.app/",
  },

  {
    name: "AI_IMAGE_APP",
    description:
      "In the AI Image Management App, I integrated advanced editing features into a user-friendly interface. Key functionalities include Image Restore, Generative Fill, Object Remove, Object Recolor, and Background Remove. This project highlights my ability to build a sophisticated app that enables users to easily enhance and transform their images",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MONGODB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: aiImage,
    source_code_link: "https://github.com/enochdev2/AI_Image_Tools",
    liveDemo: "https://ai-image-management-app.vercel.app/",
  },
];

export {
  services,
  technologies,
  Mobiletechnologies,
  images,
  data,
  experiences,
  testimonials,
  projects,
};
