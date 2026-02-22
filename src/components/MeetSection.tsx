"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  skills: string[];
  avatar: string;
};

const experiences = [
  { role: "Freelancer", company: "GreenLeaf Co.", period: "Currently" },
  { role: "Brand Designer", company: "UrbanFit Studio", period: "" },
  { role: "Package Designer", company: "GreenFit Studio", period: "2023-24" },
  { role: "Package Designer", company: "GreenFit Studio", period: "2022-23" },
];

const recentWorks = [
  { image: "/images/projects/robotoy/cover-01.jpg", title: "Robotoy Vision S" },
  { image: "/images/projects/circle/cover-01.jpg", title: "Circle App" },
  { image: "/images/projects/asset/cover-01.jpg", title: "Asset App" },
  { image: "/images/projects/robotoy/cover-01.jpg", title: "3D Concept" },
];

const springTransition = { type: "spring" as const, stiffness: 100, damping: 20 };

export const MeetSection = ({ title, description, skills, avatar }: Props) => {
  return (
    <section className="portfolite-section" style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
      {/* Main 2-col layout */}
      <div className="meet-section">
        {/* Left: Text content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <motion.h2
            className="display-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-subtle"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springTransition, delay: 0.1 }}
            style={{ fontSize: "14px", lineHeight: "1.7", maxWidth: "480px" }}
          >
            {description}
          </motion.p>

          {/* Skill Tags */}
          <motion.div
            style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </motion.div>

          {/* Experience Table */}
          <motion.table
            className="experience-table"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ marginTop: "16px" }}
          >
            <tbody>
              {experiences.map((exp, i) => (
                <tr key={i}>
                  <td>{exp.role}</td>
                  <td>{exp.company}</td>
                  <td>{exp.period}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>

        {/* Right: Avatar Image */}
        <motion.div
          style={{ display: "flex", justifyContent: "center" }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={springTransition}
        >
          <img
            src={avatar}
            alt="Profile"
            style={{
              width: "100%",
              maxWidth: "420px",
              borderRadius: "16px",
              objectFit: "cover",
              aspectRatio: "3/4",
              filter: "grayscale(100%)",
            }}
          />
        </motion.div>
      </div>

      {/* Recent Works Carousel */}
      <motion.div
        style={{ marginTop: "48px" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...springTransition, delay: 0.2 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
          <span style={{ fontSize: "14px", fontWeight: 500, color: "#fff" }}>Recent Works</span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "14px" }}>&#9675;</span>
        </div>

        <div className="recent-works-carousel">
          {recentWorks.map((work, i) => (
            <div key={i} className="recent-works-card">
              <img src={work.image} alt={work.title} loading="lazy" />
              <div className="project-overlay">
                <span className="project-overlay-btn" style={{ fontSize: "11px", padding: "6px 14px" }}>
                  View Casestudy {"\u2197"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
