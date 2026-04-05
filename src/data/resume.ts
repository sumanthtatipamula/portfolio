export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  /** Optional logo under /public, e.g. /logos/servicenow.svg */
  logo?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  gallery: { src: string; alt: string }[];
  links?: ProjectLink[];
}

/** Canonical site URL for metadata, sitemap, and JSON-LD */
export const siteUrl = "https://sumanthtatipamula.com";

export interface PersonalInfo {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  /** E.164 for tel: links */
  phoneDial: string;
  location: string;
  github: string;
}

export const personalInfo: PersonalInfo = {
  name: "Sumanth Tatipamula",
  tagline: "I build things for the web.",
  bio: "A passionate developer who loves turning complex problems into simple, elegant interfaces. Currently shaping UX components at ServiceNow.",
  email: "sumanthtatipamula999@gmail.com",
  phone: "(+91) 8978686277",
  phoneDial: "+918978686277",
  location: "Hyderabad, India",
  github: "sumanthtatipamula",
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "ServiceNow",
    period: "2023 – Present",
    logo: "/logos/servicenow.svg",
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
    logo: "/logos/oracle.svg",
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
    logo: "/logos/amazon.svg",
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
  "Node js",
  "JS",
  "TS",
  "Java",
  "Python",
  "MongoDB",
  "SQL",
  "AWS",
  "Azure",
  "Git",
  "Lit",
  "Tailwind",
  "Next js",
];

export const highlights: string[] = [
  "3× Llama Award winner at ServiceNow — recognized for consistent high-impact contributions",
  "TrailBlazer Award recipient at Oracle for going above and beyond in 2022",
  "1st place in the RealPage Android Development Hackathon",
  "Active member of the Google Developer Student Club during college",
];

export interface CredlyBadge {
  title: string;
  issuer: string;
  issued?: string;
  expires?: string;
  image?: string;
  badgeUrl?: string;
}

export const credlyProfileUrl =
  "https://www.credly.com/users/sumanth-tatipamula.2622/badges";

export const credlyBadges: CredlyBadge[] = [
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    expires: "Jun 29, 2028",
    image: "/certifications/github-foundations.png",
  },
  {
    title: "AWS Cloud Quest: Cloud Practitioner — Trained",
    issuer: "Amazon Web Services Training and Certification",
    issued: "Feb 18, 2024",
    image: "/certifications/aws-cloud-quest-cloud-practitioner.png",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    issued: "Mar 25, 2021",
    image: "/certifications/azure-ai-fundamentals.png",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services Training and Certification",
    expires: "Feb 18, 2027",
    image: "/certifications/aws-certified-cloud-practitioner.png",
  },
];

export const additionalCertifications: string[] = [
  "Database Management Systems — IIT Kharagpur",
  "Real Time Operating Systems — IIT Kharagpur",
  "Data Structures & Algorithms — IIT Madras",
];

export const projects: Project[] = [
  {
    id: "exam-ace",
    title: "Exam Ace",
    tagline: "Competitive exam prep, in one calm app",
    description:
      "Keeps competitive-exam prep in one place: syllabus, topics, notes, daily tasks with streaks, mock tests and real attempts with trends, and a calendar of real activity. Account sync, themes, reminders, no third-party ads—an independent app, not affiliated with any exam body.",
    highlights: [
      "Weekly home with a ribbon-style progress view—built for motivation and consistency, not generic checklists",
      "Mock tests and exams with trends; subjects organized by chapters with clear progress",
      "Google and email sign-in, theme modes, reminders—no ads",
    ],
    stack: ["Mobile", "EdTech", "Product UI", "Auth", "Habits & analytics"],
    gallery: [
      { src: "/projects/exam-ace/06.png", alt: "Exam Ace exams list" },
      { src: "/projects/exam-ace/07.png", alt: "Exam Ace profile and settings" },
      { src: "/projects/exam-ace/08.png", alt: "Exam Ace home ribbon visualization" },
      { src: "/projects/exam-ace/09.png", alt: "Exam Ace mock tests with filters" },
      { src: "/projects/exam-ace/10.png", alt: "Exam Ace subject analytics" },
      { src: "/projects/exam-ace/11.png", alt: "Exam Ace exams tracking" },
      { src: "/projects/exam-ace/12.png", alt: "Exam Ace profile appearance" },
    ],
  },
];
