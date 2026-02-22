"use client";

import { motion } from "framer-motion";
import { SmokeBackground } from "./SmokeBackground";
import { person } from "@/resources";

type Props = {
  title: string;
  subtitle: string;
  buttonLabel: string;
};

const springTransition = { type: "spring" as const, stiffness: 100, damping: 20 };

export const CTASection = ({ title, subtitle, buttonLabel }: Props) => {
  return (
    <section id="contact" style={{ width: "100%" }}>
      <div className="cta-section">
        <SmokeBackground />
        <motion.div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            maxWidth: "600px",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springTransition}
        >
          <div className="available-badge">
            <span className="available-dot" />
            Available For Work
          </div>

          <h2
            className="display-md"
            style={{ textAlign: "center", lineHeight: "1.3" }}
          >
            <span className="strikethrough">Curious about what we can create together?</span>
            {" "}Let's bring something extraordinary to life!
          </h2>

          <a href={`mailto:${person.email}`} className="glass-btn glass-btn-primary" style={{ fontSize: "13px" }}>
            {buttonLabel}
          </a>

          {/* Social Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginTop: "24px" }}>
            <a
              href="https://www.behance.net/talhagleryz"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              B{"\u0113"}
            </a>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
            <a
              href="https://github.com/Talha5228"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
            <a
              href="https://www.linkedin.com/in/talha-g%C3%BClery%C3%BCz-920422309/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              &#9675;
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
