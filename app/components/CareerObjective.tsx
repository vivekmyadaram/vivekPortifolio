import SectionTitle from "./SectionTitle";

function CareerObjective({ careerObjective }: any) {
  return (
    <section>
      <SectionTitle title="Career Objective" />
      <p className="text-sm mt-3">{careerObjective}</p>
    </section>
  );
}

export default CareerObjective;
