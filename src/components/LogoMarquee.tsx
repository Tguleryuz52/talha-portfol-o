const brands = [
  { name: "Asterisk", icon: "\u25C6" },
  { name: "Eonks", icon: "\u25C6" },
  { name: "Opal", icon: "\u25C6" },
  { name: "Dune", icon: "\u25C6" },
  { name: "Oak", icon: "\u25C6" },
  { name: "Fusion 360", icon: "\u25C6" },
  { name: "Blender", icon: "\u25C6" },
  { name: "Figma", icon: "\u25C6" },
  { name: "React", icon: "\u25C6" },
  { name: "Node.js", icon: "\u25C6" },
];

export const LogoMarquee = () => {
  const items = [...brands, ...brands];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {items.map((brand, i) => (
          <div key={i} className="marquee-item">
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "10px" }}>{brand.icon}</span>
            {brand.name}
          </div>
        ))}
      </div>
    </div>
  );
};
