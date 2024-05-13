import { Calendar } from "../icons";
import SectionTitle from "./SectionTitle";

function Education({ education }: any) {
  return (
    <section>
      <SectionTitle title="Education" />
      {education?.map((item: any, index: number) => (
        <div className="mt-2 mb-4" key={index}>
          <h3 className="text-lg text-secondary font-semibold">
            {item?.title}
          </h3>
          <h4 className="text-sm text-primary mt-1 font-semibold">
            {item?.college}
          </h4>
          {item?.grade && (
            <p className="text-sm text-gray-600 mt-2 font-semibold">
              {item?.grade}
            </p>
          )}
          <div className="flex gap-2 items-center mt-2">
            <Calendar color="black" className="w-4" />
            <span className="text-sm">{item?.period}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Education;
