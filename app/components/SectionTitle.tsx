function SectionTitle({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-xl mb-2 text-secondary font-semibold border-secondary border-solid border-b-4">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;
