import { Github, Linkedin, Location, Mail, Phone } from "../icons";

const fullName = "MADHUKAR MOGUTHALA";

const designation = "System Engineer";

const summary = `Dedicated Senior System Engineer with 2.5 years of hands-on experience
        specializing in Clarity PPM, NSQL, XML, and GEL scripting within the
        dynamic environment of Infosys. Proficient in designing, configuring,
        and optimizing Clarity PPM solutions to drive project and portfolio
        management excellence. Adept at collaborating with cross-functional
        teams to deliver scalable and efficient solutions that enhance
        organizational performance.`;

const skills = [
  "HTML",
  "CSS",
  "MySQL(Beginner)",
  "ClarityPPM",
  "NSQL",
  "XML",
  "GelScripting",
  "Jasper Soft",
];

const education = [
  {
    title: "Bachelor of Technology (Mechanical)",
    college: "Jawaharlal Nehru Technological University Hyderabad",
    period: "2018 - 2021",
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
  "Optimizing processes and delivering impactful solutions",
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
    company: "Infosys",
    roles: [
      {
        title: "Senior System Enigineer",
        period: "11/2021 - Present",
        location: "Hyderabad",
        work: [
          "Implemented custom solutions using Clarity PPM, NSQL, XML, and Gel scripting to streamline project management processes.",
          "Developed and maintained NSQL queries and XML templates to extract and visualize critical project data for stakeholders.",
          "Automated repetitive tasks and improved efficiency by creating Gel scripts to enhance system functionality.",
          " Customized Clarity PPM workflows and configurations to align with specific project requirements and business needs.",
          "Enhanced reporting capabilities by designing and implementing custom reports and dashboards using Clarity PPM data.",
          "Played a key role in system upgrades and migrations, ensuring a smooth transition to newer versions of Clarity PPM.",
        ],
      },
    ],
  },
];

const headerItems = [
  {
    title: "8485883620",
    icon: Phone,
  },
  {
    title: "Hyderabad",
    icon: Location,
  },
  {
    title: "madhugoud2403@gmail.com",
    icon: Mail,
  },
  {
    title: "Linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/madhukar-moguthala-981200210/",
  },
];

export {
  fullName,
  skills,
  education,
  headerItems,
  designation,
  achievements,
  passions,
  languages,
  experience,
  summary,
};
