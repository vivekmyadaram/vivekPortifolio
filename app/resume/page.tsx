import Education from "../components/Education";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Languages from "../components/Languages";
import Skills from "../components/Skills";
import Summary from "../components/Summary";
import Passions from "./../components/Passions";
import {
  designation,
  education,
  experience,
  fullName,
  headerItems,
  skillsElaborated,
  summary,
  passions,
  languages,
} from "./config";

function Resume() {
  return (
    <section className="w-[1000px] font-sans m-auto border shadow-lg wrapper">
      <Header
        headerItems={headerItems}
        fullName={fullName}
        designation={designation}
      />
      <div className="px-6 pt-2">
        <Summary summary={summary} />
      </div>
      <div className="flex p-6 pt-4 gap-10">
        <div className="w-[60%] flex flex-col gap-6">
          <Experience experience={experience} />
        </div>
        <div className="w-[40%] flex flex-col gap-10">
          <Skills.Elaborated skills={skillsElaborated} />
          <Education education={education} />
          <Passions passions={passions} />
          <Languages languages={languages} />
        </div>
      </div>
    </section>
  );
}

export default Resume;
