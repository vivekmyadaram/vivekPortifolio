import Achievements from "../components/Achievements";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Languages from "../components/Languages";
import Passions from "../components/Passions";
import Skills from "../components/Skills";
import Summary from "../components/Summary";
import {
  achievements,
  designation,
  education,
  experience,
  fullName,
  headerItems,
  languages,
  passions,
  skills,
  summary,
} from "./config";

function Resume() {
  return (
    <section className="w-[1000px] m-auto border shadow-lg wrapper">
      <Header
        headerItems={headerItems}
        fullName={fullName}
        designation={designation}
      />
      <div className="px-6 pt-2">
        <Summary summary={summary} />
      </div>
      <div className="flex p-6 pt-4 gap-10">
        <div className="w-[100%] flex flex-col gap-6">
          <Skills skills={skills} />
          <Experience experience={experience} />
          <Education education={education} />
        </div>
      </div>
    </section>
  );
}

export default Resume;
