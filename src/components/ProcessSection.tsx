"use client";

import { motion } from "framer-motion";
import { SectionBadge } from "./SectionBadge";

type ProcessStep = {
  num: number;
  title: string;
  description: string;
};

type Props = {
  steps: ProcessStep[];
  badge: string;
  title: string;
};

const icons = ["\u25CE", "\u2630", "\u2605"];

const springTransition = { type: "spring" as const, stiffness: 100, damping: 20 };

export const ProcessSection = ({ steps, badge, title }: Props) => {
  return (
    <section className="portfolite-section" style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
      <div className="two-col-section">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={springTransition}
          style={{ borderRadius: "16px", overflow: "hidden", height: "100%", minHeight: "400px" }}
        >
          <img
            src="/images/projects/robotoy/cover-01.jpg"
            alt="Process"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "grayscale(100%)",
            }}
          />
        </motion.div>

        {/* Right: Process Steps */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={springTransition}
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          <SectionBadge label={badge} />
          <h2 className="display-lg">{title}</h2>
          <p className="text-subtle" style={{ fontSize: "14px", lineHeight: "1.7" }}>
            crafting bold visuals that inspire and elevate brands with thought process.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="#contact" className="glass-btn glass-btn-primary" style={{ fontSize: "13px" }}>Book a Free Call</a>
            <a href="#projects" className="glass-btn" style={{ fontSize: "13px" }}>See Projects</a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="process-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...springTransition, delay: i * 0.1 }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div className="process-icon">{icons[i] || "\u25CF"}</div>
                    <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#fff" }}>{step.title}</h3>
                  </div>
                  <span className="process-number">{step.num}</span>
                </div>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: "1.6", paddingLeft: "44px" }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
