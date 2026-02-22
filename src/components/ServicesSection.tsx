"use client";

import { motion } from "framer-motion";
import { SectionBadge } from "./SectionBadge";

type ServiceItem = {
  name: string;
  description: string;
};

type Props = {
  services: ServiceItem[];
  badge: string;
  title: string;
};

const serviceIcons = ["\u25CF", "\u25C6", "\u25A0", "\u25CB"];

const tags = [
  "Slide Decks", "Copywriting", "Brand Graphics", "Brand Migration",
  "Package Design", "Branding", "Slide Decks", "Copywriting",
  "Optimization", "Brand Landing Pages", "Social Media", "Icons",
  "Brand Visibility", "Brand Integration", "Optimization", "Newsletter",
];

const springTransition = { type: "spring" as const, stiffness: 100, damping: 20 };

export const ServicesSection = ({ services, badge, title }: Props) => {
  const topServices = services.slice(0, 4);

  return (
    <section id="services" className="portfolite-section" style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
      {/* Header: 2-col */}
      <div className="two-col-section" style={{ marginBottom: "48px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springTransition}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <SectionBadge label={badge} />
          <h2 className="display-lg">{title}</h2>
          <p className="text-subtle" style={{ fontSize: "14px", lineHeight: "1.7", maxWidth: "460px" }}>
            Helping businesses standout with brand identity packaging that captivates and converts effectively.
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {services.map((s) => (
              <span key={s.name} className="skill-tag">{s.name}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
            <a href="#contact" className="glass-btn glass-btn-primary" style={{ fontSize: "13px" }}>Book a Free Call</a>
            <a href="#projects" className="glass-btn" style={{ fontSize: "13px" }}>See Projects</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={springTransition}
          style={{ borderRadius: "16px", overflow: "hidden" }}
        >
          <img
            src="/images/projects/asset/cover-01.jpg"
            alt="Services"
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              filter: "grayscale(100%)",
              borderRadius: "16px",
            }}
          />
        </motion.div>
      </div>

      {/* Services Grid - 2x2 */}
      <motion.div
        className="services-grid"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...springTransition, delay: 0.1 }}
      >
        {topServices.map((service, i) => (
          <div key={i} className="services-grid-item">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="service-icon">{serviceIcons[i] || "\u25CF"}</span>
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#fff" }}>
                {service.name}
              </h3>
            </div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: "1.6" }}>
              {service.description}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Tags Marquee */}
      <div style={{ marginTop: "32px" }}>
        <div className="marquee-wrapper">
          <div className="tags-marquee">
            {[...tags, ...tags].map((tag, i) => (
              <span key={i} className="tag-pill">
                <span className="tag-dot" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
