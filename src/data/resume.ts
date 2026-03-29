export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  github: string;
}

export const personalInfo: PersonalInfo = {
  name: "Sumanth Tatipamula",
  tagline: "I build things for the web.",
  bio: "A passionate developer who loves turning complex problems into simple, elegant interfaces. Currently shaping UX components at ServiceNow.",
  email: "sumanthtatipamula123@gmail.com",
  phone: "(+91) 7981662597",
  location: "Hyderabad, India",
  github: "sumanthtatipamula",
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "ServiceNow",
    period: "2023 – Present",
    description:
      "Building the next generation of UX components that power enterprise workflows for millions of users worldwide.",
    highlights: [
      "Shipped infinite scroll in gallery view — dramatically improving how users browse large datasets",
      "Built keyboard-driven navigation for quick forms, making record traversal feel instant and intuitive",
      "Designed a real-time list calculations engine that surfaces aggregate insights without leaving the page",
      "Introduced live-list updates so users see data changes as they happen, no refresh needed",
    ],
  },
  {
    role: "Platform Engineer",
    company: "Oracle",
    period: "2020 – 2023",
    description:
      "Worked across the full stack — from backend data pipelines to polished front-end experiences inside Oracle's platform ecosystem.",
    highlights: [
      "Architected backend map-reduce scripts that handle bulk data operations at scale",
      "Built interactive front-end pages with SuiteScript, Oracle's internal JavaScript framework",
      "Developed a React-based single-page app using Oracle's UIF framework from the ground up",
      "Owned product metrics instrumentation across all team projects",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Amazon",
    period: "Jan – Jul 2020",
    description:
      "Dove into Amazon's logistics world — building notification systems and automating cloud infrastructure.",
    highlights: [
      "Built a shipper notification service that alerts pickup start times, improving logistics coordination",
      "Set up end-to-end CI/CD pipelines for seamless multi-stage deployments",
      "Automated AWS resource provisioning with CloudFormation, cutting manual setup time significantly",
      "Established shared coding standards that unified code quality across the team",
    ],
  },
  {
    role: "Backend Developer",
    company: "Coral Innovations",
    period: "Jan – Mar 2019",
    description:
      "My first taste of professional development — building a data analytics dashboard from scratch.",
    highlights: [
      "Designed and shipped a full-stack dashboard with MongoDB + Node.js to visualize mobile app data",
      "Managed cloud deployments and database architecture on Heroku",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "B.E. in Computer Science",
    institution: "Vasavi College of Engineering",
    period: "2016 – 2020",
    score: "9.15 CGPA",
  },
  {
    degree: "Intermediate (12th)",
    institution: "Narayana Junior College",
    period: "2014 – 2016",
    score: "97.4%",
  },
  {
    degree: "Secondary (10th)",
    institution: "Narayana E-Techno School",
    period: "2014",
    score: "9.5 CGPA",
  },
];

export const skills: string[] = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Java",
  "C/C++",
  "SQL",
  "HTML",
  "CSS",
  "Git",
  "AWS",
  "Bootstrap",
];

export const highlights: string[] = [
  "3× Llama Award winner at ServiceNow — recognized for consistent high-impact contributions",
  "TrailBlazer Award recipient at Oracle for going above and beyond in 2022",
  "1st place in the RealPage Android Development Hackathon",
  "Active member of the Google Developer Student Club during college",
  "Runner-up at the CSI Telangana State Level Tech Quiz",
];

export const certifications: string[] = [
  "AWS Certified Cloud Practitioner",
  "Microsoft Azure AI Fundamentals (AI-900)",
  "Database Management Systems — IIT Kharagpur",
  "Real Time Operating Systems — IIT Kharagpur",
  "Data Structures & Algorithms — IIT Madras",
  "Front-End Frameworks: Bootstrap 4 — Coursera",
  "React Development — Coursera",
];
