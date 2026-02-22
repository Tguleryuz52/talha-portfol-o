"use client";

import { SectionBadge } from "./SectionBadge";

type ServiceItem = {
  name: string;
  description: string;
};

type Props = {
  services: ServiceItem[];
  badge: string;
};

export const ServiceCarousel = ({ services, badge }: Props) => {
  const items = [...services, ...services];

  return (
    <section className="portfolite-section" style={{ overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", marginBottom: "48px" }}>
        <SectionBadge label={badge} />
        <h2 className="display-lg" style={{ marginTop: "16px" }}>
          {badge === "Hizmetlerimiz" ? "Neler Yapıyorum" : "What I Do"}
        </h2>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track" style={{ gap: "16px", animationDuration: "40s" }}>
          {items.map((service, i) => (
            <div key={i} className="service-card">
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#fff" }}>{service.name}</h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: "1.6" }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
