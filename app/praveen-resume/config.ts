import { Github, Linkedin, Location, Mail, Phone, Web } from "../icons";

const fullName = "PRAVEEN REDDY NAGILLA";

const designation = "Digital Engineer";

const summary = `Seeking a position as software Developer with zeal to learn and grow with the company where my skills and abilities in the information technology industry can be utilized to their best to improve and success of the organization.`;

const careerObjective = `Seeking a position as software Developer with zeal to learn and grow with the company where my skills and abilities in the information technology industry can be utilized to their best to improve and success of the organization.`;

const skills = [
  "Core Java",
  "Spring Boot",
  "Hibernate / JPA",
  "Rest API",
  "Spring MVC",
  "SQL",
  "MySQL",
  "Git",
  "Load Runner",
  "Postman",
  "Maven",
  "Microservices",
  "JUnit",
];

const education = [
  {
    title: "Master of Computer Applications",
    college: "Telangana University",
    period: "2018 - 2021",
    grade: "CGPA: 8.2",
  },
  {
    title: "Bachelor of Science(Computers)",
    college: "Pratibha Degree College",
    period: "2015 - 2018",
    grade: "CGPA: 8.2",
  },
];

const achievements = [
  {
    title: "Recieved a DNA Award from my company",
    desc: "Me and my team recieved the award for the contribution to the company.",
  },
];

const passions = ["Continuous learning and improvement in the tech"];

const languages = [
  {
    title: "Telugu",
    points: 5,
    proficiency: "Native",
  },
  {
    title: "English",
    points: 4,
    proficiency: "Proficient",
  },
  {
    title: "Hindi",
    points: 3,
    proficiency: "Intermediate",
  },
];

const experience = [
  {
    company: "Sonata Software Limited",
    roles: [
      {
        title: "Digital Enigineer",
        period: "10/2021 - Present",
        location: "Hyderabad",
        projects: [
          {
            title: "Sales and PnL Dashboards in SigniFi Project",
            description:
              'Signifi is a pharmaceutical project. Mainly I have worked on two main modules – Sales and PnL (Profit and Loss). In Sales, there are four easy dashboards, each looking at different sales details. Just hit "Go," and you get instant, up-to-date information from the database, giving you the latest insights into pharmaceutical sales.',
            tech: "Java, Spring Boot, Hibernate, Git, JPA, SonarQube.",
            responsibilities: [
              "Developed robust REST APIs using Java and Spring Boot for the Signify project.",
              "Led the design and coding efforts to improve user experience.",
              "Analysed data and code to troubleshoot issues and find areas for improvement.",
              "Created custom logging and error-handling systems for better debugging.",
              "Ensured smooth integration of backend components and provided ongoing support for Signify.",
            ],
          },
        ],
      },
    ],
  },
];

const headerItems = [
  {
    title: "praveenreddynagilla1996@gmail.com",
    icon: Mail,
  },
  {
    title: "9381131674",
    icon: Phone,
  },
  {
    title: "Hyderabad",
    icon: Location,
  },
  {
    title: "Github",
    icon: Github,
    link: "https://github.com/praveenreddynagilla",
  },
  {
    title: "Linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/praveen-reddy-nagilla-7b135b20b/",
  },
];

const professionalSummary = [
  "Overall, 2+ years of professional experience in software development in Information technology industry. ",
  "Experience of working in a service-oriented architecture and web-based development.",
  "Strong knowledge of core java concepts like OOPs, Collections",
  "Strong working knowledge of Core Java, Spring Boot, Hibernate, Microservices",
  "Strong working knowledge of developing REST API based web services",
  "Strong implementation knowledge of Core Java.",
  "Good knowledge on Multithreading",
  "Hands on experience in using Web servers like Tomcat server.",
  "Hands on experience in using Load Runner Tool for Performance Testing.",
  "Ability to quickly learn new technologies.",
  "I have solved 100+ DSA Problems on online problem solving platforms.",
];

export {
  fullName,
  summary,
  skills,
  education,
  headerItems,
  designation,
  achievements,
  passions,
  languages,
  experience,
  careerObjective,
  professionalSummary,
};
