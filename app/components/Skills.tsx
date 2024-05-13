import SectionTitle from "./SectionTitle";

function Skills({ skills }: any) {
  return (
    <section>
      <SectionTitle title="Technical Skills" />
      <div className="flex gap-4 flex-wrap mt-3">
        {skills.map((item: any, index: number) => (
          <div
            className="text-xs border rounded px-2 py-1 font-semibold"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

Skills.Elaborated = function Elaborated({ skills }: any) {
  return (
    <section>
      <SectionTitle title="Technical Skills" />
      {skills?.map((item: any, index: number) => (
        <div key={index} className="mt-4">
          <h4 className="text-sm text-primary font-semibold mb-2">
            {item.label}
          </h4>
          <div className="flex gap-3 flex-wrap">
            {item.items.map((item: any, index: number) => (
              <div
                className="text-xs border rounded px-2 py-1 font-semibold"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
