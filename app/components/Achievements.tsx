import { Diamond } from "../icons";
import SectionTitle from "./SectionTitle";

function Achievements({ achievements }: any) {
  return (
    <section>
      <SectionTitle title="Achievements" />
      {achievements.map((item: any, index: number) => (
        <div className="flex gap-2 mt-2" key={index}>
          <div>
            <Diamond color="rgb(149, 29, 196)" className="w-4 mt-1" />
          </div>
          <div className="flex-1">
            <h4 className="text-md text-secondary font-semibold">
              {item.title}
            </h4>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Achievements;
