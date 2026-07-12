import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import StackLogo from "./StackLogo";

function seededRandom(seed) {
  return function random() {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function ProjectFolder({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const folderY = useTransform(scrollYProgress, [0, 0.28, 1], [90, 0, -18]);
  const folderScale = useTransform(scrollYProgress, [0, 0.28, 0.9], [0.9, 1, 0.98]);
  const folderRotate = useTransform(scrollYProgress, [0, 0.45, 1], [index % 2 === 0 ? 4 : -4, 0, index % 2 === 0 ? -1.5 : 1.5]);
  const folderOpacity = useTransform(scrollYProgress, [0, 0.18], [0, 1]);
  const carY = useTransform(scrollYProgress, [0, 0.42, 1], [14, 0, -10]);
  const carX = useTransform(scrollYProgress, [0, 0.42, 1], [index % 2 === 0 ? 16 : -16, 0, index % 2 === 0 ? -10 : 10]);
  const carRotate = useTransform(scrollYProgress, [0, 0.42, 1], [index % 2 === 0 ? -1.2 : 1.2, 0, index % 2 === 0 ? 0.7 : -0.7]);
  const carOpacity = useTransform(scrollYProgress, [0, 0.16], [0, 1]);

  const carFloat = useMemo(() => {
    const random = seededRandom(index * 97 + 13);
    const driftX = 7 + random() * 11;
    const driftY = 5 + random() * 9;
    const spin = 1.1 + random() * 2.4;
    const duration = 4.6 + random() * 3.8;
    const delay = random() * 1.6;
    return {
      x: [0, driftX, -driftX * 0.5, 0],
      y: [0, -driftY, driftY * 0.4, 0],
      rotate: [0, spin, -spin * 0.5, 0],
      duration,
      delay
    };
  }, [index]);

  return (
    <motion.article ref={ref} className={`project-row ${index % 2 ? "project-row--left" : ""}`} initial={{ opacity: 0, y: 85 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
      <div className="project-visual">
        <motion.div className="car-layer" style={{ y: carY, x: carX, rotate: carRotate, opacity: carOpacity }}>
          <motion.div
            className="car-float"
            animate={{ x: carFloat.x, y: carFloat.y, rotate: carFloat.rotate }}
            transition={{ duration: carFloat.duration, delay: carFloat.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={project.carImage} alt={project.carAlt} onError={(event) => { event.currentTarget.style.opacity = 0; }} />
            <span className="car-caption">{project.carName}.{project.carYear}</span>
          </motion.div>
        </motion.div>

        <Link className="folder-link" to={`/projects/${project.slug}`} aria-label={`${project.title} 프로젝트 자세히 보기`}>
          <motion.span
            className="folder-guide"
            style={{ y: folderY, opacity: folderOpacity }}
          >
            <strong>폴더 클릭</strong>
            <span>상세 내용과 아키텍처 보기</span>
            <ArrowUpRight size={14} strokeWidth={2} />
          </motion.span>
          <motion.div
            className="folder"
            style={{ y: folderY, scale: folderScale, rotate: folderRotate, opacity: folderOpacity }}
            whileHover={{ y: -7, rotateX: 2, rotateY: index % 2 ? -2 : 2 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <div className="folder-back">
              <div className="folder-tab" />
              <span className="project-number">{project.number}</span>
              <div className="folder-heading"><h2>{project.title}</h2><p>{project.subtitle}</p></div>
            </div>
            <div className="folder-pocket">{project.stacks.map((stack, stackIndex) => <StackLogo key={`${project.number}-${stack.name}`} stack={stack} index={stackIndex} />)}</div>
          </motion.div>
        </Link>
      </div>
      <div className="project-label">
        <span className="status-dot" style={{ backgroundColor: project.accent }} />
        <span>{project.status}</span>
        <span className="open-hint">상세 보기</span>
      </div>
      <div className="project-quickfacts" aria-label={`${project.title} 핵심 지표`}>
        {project.impacts.map((impact) => (
          <span key={impact.label}>
            <strong>{impact.value}</strong>
            <em>{impact.label}</em>
          </span>
        ))}
      </div>
    </motion.article>
  );
}
