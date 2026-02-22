export const SectionBadge = ({ label }: { label: string }) => {
  return (
    <div className="section-badge">
      <span className="dot">{"\u25CF"}</span>
      <span>{label}</span>
    </div>
  );
};
