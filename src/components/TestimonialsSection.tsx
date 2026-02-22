"use client";

import { motion } from "framer-motion";
import { SectionBadge } from "./SectionBadge";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

type Props = {
  testimonials: Testimonial[];
  badge: string;
  title: string;
};

const springTransition = { type: "spring" as const, stiffness: 100, damping: 20 };

export const TestimonialsSection = ({ testimonials, badge, title }: Props) => {
  return (
    <section id="testimonials" className="portfolite-section" style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
      {/* Header: 2-col */}
      <div className="two-col-section" style={{ marginBottom: "48px" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={springTransition}
          style={{ borderRadius: "16px", overflow: "hidden" }}
        >
          <img
            src="/images/projects/circle/cover-01.jpg"
            alt="Client Reviews"
            style={{
              width: "100%",
              height: "320px",
              objectFit: "cover",
              filter: "grayscale(100%)",
              borderRadius: "16px",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springTransition}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <SectionBadge label={badge} />
          <h2 className="display-lg">{title}</h2>
          <p className="text-subtle" style={{ fontSize: "14px", lineHeight: "1.7" }}>
            Real feedback from clients who trusted my design expertise to elevate their brands successfully.
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            <a href="#contact" className="glass-btn glass-btn-primary" style={{ fontSize: "13px" }}>Book a Free Call</a>
            <a href="#services" className="glass-btn" style={{ fontSize: "13px" }}>See Services</a>
          </div>
        </motion.div>
      </div>

      {/* Testimonial Cards - 3 column */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springTransition, delay: i * 0.1 }}
          >
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            </div>
            <p className="testimonial-quote">"{t.quote}"</p>
            <div className="testimonial-stars" style={{ marginTop: "auto" }}>
              <span>{t.rating}.0</span>
              {" "}
              {Array.from({ length: t.rating }, (_, j) => (
                <span key={j}>{"\u2605"}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonial-card { min-width: 100%; }
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
