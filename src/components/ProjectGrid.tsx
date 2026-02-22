"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type ProjectMeta = {
  slug: string;
  title: string;
  image: string;
  tall?: boolean;
};

const projectData: ProjectMeta[] = [
  { slug: "robotoy-vision-s", title: "Robotoy Vision S", image: "/images/projects/robotoy/cover-01.jpg" },
  { slug: "circle-app", title: "Circle App", image: "/images/projects/circle/cover-01.jpg", tall: true },
  { slug: "asset-app", title: "Asset App", image: "/images/projects/asset/cover-01.jpg" },
  { slug: "robotoy-vision-s", title: "Industrial Concept", image: "/images/projects/robotoy/cover-01.jpg" },
  { slug: "circle-app", title: "Brand Package", image: "/images/projects/circle/cover-01.jpg", tall: true },
  { slug: "asset-app", title: "Product Render", image: "/images/projects/asset/cover-01.jpg" },
  { slug: "robotoy-vision-s", title: "3D Visualization", image: "/images/projects/robotoy/cover-01.jpg" },
  { slug: "circle-app", title: "UI Mockup", image: "/images/projects/circle/cover-01.jpg" },
  { slug: "asset-app", title: "App Interface", image: "/images/projects/asset/cover-01.jpg" },
];

export const ProjectGrid = ({ badge, viewLabel }: { badge: string; viewLabel: string }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section id="projects" className="portfolite-section" style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px 0" }}>
      <div className="project-grid">
        {projectData.map((project, i) => (
          <motion.a
            key={`${project.slug}-${i}`}
            href={`/work/${project.slug}`}
            className="project-card"
            style={{
              textDecoration: "none",
              height: project.tall ? "100%" : "240px",
              minHeight: project.tall ? "492px" : "240px",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
            />
            <div className="project-overlay">
              <span className="project-overlay-btn">
                View Casestudy {"\u2197"}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
