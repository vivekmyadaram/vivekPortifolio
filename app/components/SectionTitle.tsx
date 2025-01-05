function SectionTitle({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-[16px] mb-2 text-[#000] font-sans border-secondary border-solid border-b-2">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;
