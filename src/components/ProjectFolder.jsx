import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import StackLogo from "./StackLogo";

export default function ProjectFolder({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const folderY = useTransform(scrollYProgress, [0, 0.28, 1], [90, 0, -18]);
  const folderScale = useTransform(scrollYProgress, [0, 0.28, 0.9], [0.9, 1, 0.98]);
  const folderRotate = useTransform(scrollYProgress, [0, 0.45, 1], [index % 2 === 0 ? 4 : -4, 0, index % 2 === 0 ? -1.5 : 1.5]);
  const folderOpacity = useTransform(scrollYProgress, [0, 0.18], [0, 1]);
  const carY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -45]);
  const carX = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 === 0 ? 55 : -55, 0, index % 2 === 0 ? -20 : 20]);
  const carRotate = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 === 0 ? 2 : -2, 0, index % 2 === 0 ? -1 : 1]);

  return (
    <motion.article ref={ref} className={`project-row ${index % 2 ? "project-row--left" : ""}`} initial={{ opacity: 0, y: 85 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
      <div className="project-visual">
        <motion.div className="car-layer" style={{ y: carY, x: carX, rotate: carRotate }}>
          <img src={project.carImage} alt={project.carAlt} onError={(event) => { event.currentTarget.style.opacity = 0; }} />
        </motion.div>

        <Link className="folder-link" to={`/projects/${project.slug}`} aria-label={`${project.title} 프로젝트 자세히 보기`}>
          <motion.div
            className="folder"
            style={{ y: folderY, scale: folderScale, rotate: folderRotate, opacity: folderOpacity }}
            whileHover={{ y: -7, rotateX: 2, rotateY: index % 2 ? -2 : 2 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <div className="folder-back"><div className="folder-tab" /><div className="folder-heading"><span className="project-number">{project.number}</span><h2>{project.title}</h2><p>{project.subtitle}</p></div></div>
            <div className="folder-pocket">{project.stacks.map((stack, stackIndex) => <StackLogo key={`${project.number}-${stack.name}`} stack={stack} index={stackIndex} />)}</div>
          </motion.div>
        </Link>
      </div>
      <div className="project-label"><span className="status-dot" style={{ backgroundColor: project.accent }} /><span>{project.status}</span><span className="open-hint">Open folder ↗</span></div>
    </motion.article>
  );
}
