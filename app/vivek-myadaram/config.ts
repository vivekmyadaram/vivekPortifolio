import { Github, Linkedin, Location, Mail, Phone, Web } from "../icons";

const fullName = "Vivek Myadaram";

const designation = "Senior Software Engineer";

const summary = `Frontend engineer with 4+ years of experience in developing and
        designing user-friendly interfaces for web applications, with a strong
        focus on creating seamless user experiences. I have a deep understanding
        of web fundamentals such as HTML, CSS, JavaScript, HTTP and am skilled
        in using various frontend frameworks such as React.
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

const education = [
  {
    title: "Bachelor of Technology (IT).",
    college: "JNTUH UNIVERSITY, JAGTIAL, Telangana",
    period: "2013 - 2017",
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
    company: "SAGEIT PRIVATE LIMITED(Client:Cognizant)",
    roles: [
      {
        title: "Senior Software Enigineer",
        period: "Aug/2023 - Present",
        location: "Hyderabad",
        work: [
          "Extensively worked in Design User interface as well as implementing the business logic.",
          "Designing User Interface screens with CSS to work on.",
          "Improve the performance to load with lazy loading images, Memoization, Virtual DOM techniques.",
          "Implemented internationalization (i18n) to provide multi-language support, enhancing the platform's accessibility to a global audience.",
          "Collaborated closely with cross-functional teams, including designers and backend engineers, to deliver seamless user experiences.",
          "Actively participated in Agile development processes, including daily stand-ups, sprint planning, and retrospectives.",
          "Participated in code reviews, ensuring code quality, adherence to coding standards, and best practices.",
          "Coordinated with the testing team for fixing bugs.",
        ],
      },
    ],
  },
  {
    company: "Shreyan IT Solutions",
    roles: [
      {
        title: "Frontend Developer",
        period: "Nov 2020 - Aug 2023",
        location: "Hyderabad",
        work: [
          "Developing and implementing user interface components using React.js.",
          "Implementing user authentication and authorization mechanisms, such as JWT (JSON Web Tokens) or OAuth",
          "Used Material-UI and Bootstrap CSS frameworks to create attractive and user-friendly web applications",
          "Debugging and fixing defects reported by the QA team or end-users.",
        ],
      },
      {
        title: "Development Support",
        period: "July 2019 - Nov 2020",
        location: "Hyderabad",
        work: [
          "Involved in the development of University Management System.",
          "Debugging and fixing defects reported by the QA team or end-users.",
          "Developing and implementing user interface components using React.js",
          "Implementing user authentication and authorization mechanisms, such as JWT (JSON Web Tokens) or OAuth",
        ],
      },
    ],
  },
];

const headerItems = [
  {
    title: "vivekvishwakarma0719@gmail.com",
    icon: Mail,
  },
  {
    title: "7989347456",
    icon: Phone,
  },
  {
    title: "Hyderabad",
    icon: Location,
  },
  {
    title: "Github",
    icon: Github,
    link: "https://github.com/vivekmyadaram",
  },
  {
    title: "Website",
    icon: Web,
    link: "vivekmyadaram.netlify.app",
  },
  {
    title: "Linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com",
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
};
