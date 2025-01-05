import SectionTitle from "./SectionTitle";

function Summary({ summary }: any) {
  return (
    <section>
      <SectionTitle title="Professional Summary" />
      <p className="text-[12px] font-sans mt-3">{summary}</p>
    </section>
  );
}

export default Summary;
