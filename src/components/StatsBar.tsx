"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type StatItem = {
  value: string;
  label: string;
};

type Props = {
  stats: StatItem[];
};

export const StatsBar = ({ stats }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="stats-bar" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          className="stat-item"
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.15 }}
        >
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};
