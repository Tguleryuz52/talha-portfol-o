"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionBadge } from "./SectionBadge";

type FAQItem = {
  q: string;
  a: string;
};

type Props = {
  items: FAQItem[];
  badge: string;
  title: string;
};

const springTransition = { type: "spring" as const, stiffness: 100, damping: 20 };

export const FAQSection = ({ items, badge, title }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="portfolite-section" style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
      <div className="two-col-section">
        {/* Left: Image + Tags */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={springTransition}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <SectionBadge label={badge} />
          <h2 className="display-lg" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>Answers</h2>
          <p className="text-subtle" style={{ fontSize: "14px", lineHeight: "1.7" }}>
            Find answers to common questions about my design process, services etc...
          </p>

          <div style={{ borderRadius: "16px", overflow: "hidden", marginTop: "8px" }}>
            <img
              src="/images/projects/asset/cover-01.jpg"
              alt="FAQ"
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                filter: "grayscale(100%)",
              }}
            />
          </div>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <span className="skill-tag">Product Design</span>
            <span className="skill-tag">Brand Identity Design</span>
            <span className="skill-tag">Branding</span>
          </div>

          <a href="#contact" className="glass-btn" style={{ width: "fit-content", fontSize: "13px" }}>
            Book a Free Call
          </a>
        </motion.div>

        {/* Right: Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={springTransition}
        >
          {items.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className={`faq-icon ${openIndex === i ? "open" : ""}`}>+</span>
              </button>
              <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
