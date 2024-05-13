import Achievements from "../components/Achievements";
import CareerObjective from "../components/CareerObjective";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Languages from "../components/Languages";
import Passions from "../components/Passions";
import ProfessionalSummary from "../components/ProfessionalSummary";
import Skills from "../components/Skills";
import {
  achievements,
  careerObjective,
  designation,
  education,
  experience,
  fullName,
  headerItems,
  languages,
  passions,
  professionalSummary,
  skills,
} from "./config";

function PraveenResume() {
  return (
    <section className="w-[1000px] m-auto border shadow-lg wrapper">
      <Header
        headerItems={headerItems}
        fullName={fullName}
        designation={designation}
      />
      <div className="px-6 pt-2">
        <CareerObjective careerObjective={careerObjective} />
      </div>
      <div className="flex p-6 pt-4 gap-10">
        <div className="w-[60%] flex flex-col gap-6">
          <ProfessionalSummary professionalSummary={professionalSummary} />
          <Experience experience={experience} />
        </div>
        <div className="w-[40%] flex flex-col gap-10">
          <Skills skills={skills} />
          <Achievements achievements={achievements} />
          <Passions passions={passions} />
          <Languages languages={languages} />
          <Education education={education} />
        </div>
      </div>
    </section>
  );
}

export default PraveenResume;
