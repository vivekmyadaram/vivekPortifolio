import { Calendar } from "../icons";
import SectionTitle from "./SectionTitle";

function Education({ education }: any) {
  return (
    <section>
      <SectionTitle title="Education" />
      {education?.map((item: any, index: number) => (
        <div className="mt-2 mb-4" key={index}>
          <h3 className="text-[14px] text-secondary">{item?.title}</h3>
          <h4 className="text-sm text-[#444444] mt-1">{item?.college}</h4>
          {item?.grade && (
            <p className="text-sm mt-2 text-[#444444]">{item?.grade}</p>
          )}
          <div className="flex gap-2 items-center mt-2">
            <Calendar color="black" className="w-4" />
            <span className="text-sm text-[#444444]">{item?.period}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Education;
