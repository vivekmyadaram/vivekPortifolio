import { Diamond } from "../icons";
import SectionTitle from "./SectionTitle";

function Passions({ passions }: any) {
  return (
    <section>
      <SectionTitle title="Passions" />
      {passions.map((item: any, index: number) => (
        <div className="flex gap-2 mt-2" key={index}>
          <div>
            <Diamond color="rgb(38, 37, 39)" className="w-3 mt-1" />
          </div>
          <h4 className="text-xs text-[#333333]  flex-1">{item}</h4>
        </div>
      ))}
    </section>
  );
}

export default Passions;
