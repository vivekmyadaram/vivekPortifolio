import { Github, Linkedin, Location, Mail, Phone, Web } from "../icons";

const fullName = "VINAY KUMAR NAGILLA";

const designation = "Senior Software Engineer";

const summary = `Frontend heavy fullstack engineer with 4+ years of experience in developing and
        designing user-friendly interfaces for web applications, with a strong
        focus on creating seamless user experiences. I have a deep understanding
        of web fundamentals such as HTML, CSS, JavaScript, HTTP and am skilled
        in using various frontend frameworks such as React, Vue, and Angular.
        Passionate about learning and development with a desire to apply skills
        and eager to tackle more complex problems and continue to find ways to
        maximize user efficiency.`;

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "NextJS",
  "GIT",
  "NodeJS (Beginner)",
  "MongoDB (Beginner)",
  "MySQL(Beginner)",
  "AWS (Beginner)",
];

const skillsElaborated = [
  {
    label: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "Typescript",
      "ReactJS",
      "NextJS",
      "SolidJS",
      "VueJS",
    ],
  },
  {
    label: "Backend (Beginner)",
    items: ["NodeJS", "NestJS", "MongoDB", "MySQL"],
  },
  {
    label: "Softwares and Tools",
    items: [
      "Git",
      "GitHub",
      "Jira",
      "Contentful",
      "Optimizely",
      "VS Code",
      "Figma",
    ],
  },
  {
    label: "Cloud and DevOps (Beginner)",
    items: ["GitHub Actions", "AWS"],
  },
];

const education = [
  {
    title: "Bachelor of commerce",
    college: "Acharya Nagarjuna University",
    period: "2014 - 2018",
  },
];

const achievements = [
  {
    title: "Secured 2nd place in the hackathon",
    desc: "The hackathon was about developing User interface based on the requirements with the best possible UX.",
  },
];

const passions = [
  "Continuous learning and improvement in the tech",
  "Open-source development",
];

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
    company: "DAZN",
    roles: [
      {
        title: "Senior Software Enigineer",
        period: "06/2023 - Present",
        location: "Hyderabad",
        work: [
          "Collaborated on the development of the Catalogue Module for DAZN's sports streaming platform.",
          "Implemented A/B testing strategies using Optimizely to enhance user engagement and conversion rates",
          "Utilized microfrontend architecture principles to design and implement modular, scalable, and maintainable front-end components.",
          "Implemented internationalization (i18n) to provide multi-language support, enhancing the platform's accessibility to a global audience.",
          "Collaborated closely with cross-functional teams, including designers and backend engineers, to deliver seamless user experiences.",
          "Actively participated in Agile development processes, including daily stand-ups, sprint planning, and retrospectives.",
          "Participated in code reviews, ensuring code quality, adherence to coding standards, and best practices.",
        ],
      },
    ],
  },
  {
    company: "Janaspandana Software Solutions",
    roles: [
      {
        title: "Senior Frontend Developer",
        period: "03/2022 - 02/2023",
        location: "Hyderabad",
        work: [
          "Involved in the development of University Management System and Learning Management System (ULMS).",
          "Optimized these applications performance by implementing best practices for image compression, caching, and minification, resulting in increased page speed",
          "Improved these applicaitons accessibility by implementing best practices for color contrast, keyboard navigation, and screen reader compatibility for Learning Management System.",
          "Introduced and implemented a new frontend framework (NextJS) that improved the development process and reduced time-to-market for new features.",
          "Managed a team of 2 remote full-time employees",
        ],
      },
      {
        title: "Frontend Developer",
        period: "09/2019 - 02/2022",
        location: "Hyderabad",
        work: [
          "Successfully developed and launched several clients websites which are responsive across all devices and truly accessible. ",
          "Dealt directly with different clients to understand their needs and provide solutions that met their expectations. ",
          "Developed and designed the complete frontend and backend of a business management system, working independently from conception to delivery. Leveraged expertise in HTML, CSS, and JavaScript, as well as experience with frontend frameworks such as React, to create a user-friendly interface. And learnt and applied various backend technologies such as NestJS, NodeJS, MongoDB and MySQL.",
          "Integrated marketplace 3rd party modules into existing system such as OneDrive integration using Microsoft Graph and GoogleDrive integration using google APIs.",
          "Developed a very interesting feature called Form builder - this feature allows users to create custom forms easily, without needing to code them from scratch. It enables businesses or individuals to collect specific data from their customers efficiently.",
        ],
      },
    ],
  },
];

const headerItems = [
  {
    title: "vinaykanna367@gmail.com",
    icon: Mail,
  },
  {
    title: "9505335109",
    icon: Phone,
  },
  {
    title: "Hyderabad",
    icon: Location,
  },
  {
    title: "Github",
    icon: Github,
    link: "https://github.com/vinaykanna",
  },
  {
    title: "Website",
    icon: Web,
    link: "https://me.technologyexplorer.dev",
  },
  {
    title: "Linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/vinay-kumar-497911144/",
  },
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
  skillsElaborated,
};
