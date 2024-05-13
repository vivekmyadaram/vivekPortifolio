import SectionTitle from "./SectionTitle";

function Languages({ languages }: any) {
  return (
    <section>
      <SectionTitle title="Languages" />
      {languages.map((item: any, index: number) => (
        <div
          className={`flex gap-2 mt-2 items-center justify-between ${
            index !== languages.length - 1
              ? "border-b border-dashed border-gray-300 pb-2 "
              : ""
          }`}
          key={index}
        >
          <div>
            <h4 className="text-md text-secondary font-semibold flex-1">
              {item.title}
            </h4>
            <h1 className="text-xs">{item.proficiency}</h1>
          </div>
          <div className="flex gap-1">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full ${
                    index < item.points ? "bg-primary" : "bg-gray-300"
                  }`}
                ></div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Languages;
