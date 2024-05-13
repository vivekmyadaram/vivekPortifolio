import SectionTitle from "./SectionTitle";

function ProfessionalSummary({ professionalSummary }: any) {
  return (
    <section>
      <SectionTitle title="Professional Summary" />
      <ul className="mt-2 list-disc pl-5">
        {professionalSummary?.map((item: any, index: number) => (
          <li key={index} className="text-sm mb-2">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProfessionalSummary;
