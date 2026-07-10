import React from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Mouse, Server, Gauge, ShieldCheck } from "lucide-react";
import { Routes, Route } from "react-router-dom";
import ProjectFolder from "./components/ProjectFolder";
import ProjectDetail from "./components/ProjectDetail";
import MacFrame from "./components/MacFrame";
import { projects } from "./data/projects";

function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });
  let lastSection = "";

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <MacFrame>
        <section className="hero">
          <div className="hero-title-wrap">
            <div className="hero-text">
              <p className="eyebrow">PORTFOLIO / 2026</p>
              <h1>Cloud Infrastructure<br />Engineer</h1>
            </div>
            <motion.img src="/assets/boards/board1.png" alt="Hyundai AutoEver vintage board" className="hero-board" initial={{ opacity: 0, scale: 0.72, rotate: 22, y: 30 }} animate={{ opacity: 1, scale: 1, rotate: 10, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} whileHover={{ rotate: 7, scale: 1.03 }} />
          </div>
          <p className="hero-copy">Building scalable, reliable,<br />and secure cloud infrastructure.</p>
          <p className="author">Portfolio by <strong>HYERIM KIM</strong></p>
        </section>

        <section className="intro" aria-label="About me">
          <div className="intro-heading"><span>ABOUT</span><h2>운영 안정성과 자동화를 중심으로<br />클라우드 문제를 해결합니다.</h2></div>
          <p className="intro-copy">AWS 기반 인프라 운영, 모니터링, 비용 최적화와 AI 기반 이상 탐지 프로젝트를 수행해 온 Cloud Engineer입니다. 장애를 빠르게 감지하고 반복 작업을 자동화하며, 확장 가능한 운영 구조를 만드는 데 집중합니다.</p>
          <div className="intro-values"><div><Server size={20} /><strong>Scalable</strong><span>확장 가능한 설계</span></div><div><Gauge size={20} /><strong>Observable</strong><span>지표 기반 운영</span></div><div><ShieldCheck size={20} /><strong>Reliable</strong><span>안정성과 보안</span></div></div>
        </section>

        <section className="project-list" aria-label="Cloud projects">
          {projects.map((project, index) => {
            const showSection = project.section !== lastSection;
            lastSection = project.section;
            return (
              <React.Fragment key={project.number}>
                {showSection && <div className="project-section-title"><span>{project.section}</span></div>}
                <ProjectFolder project={project} index={index} />
              </React.Fragment>
            );
          })}
        </section>
        <footer className="footer"><Mouse size={22} strokeWidth={1.5} /><span>Scroll to explore</span><span className="footer-arrow">⌄</span></footer>
      </MacFrame>
    </>
  );
}

export default function App() {
  return <Routes><Route path="/" element={<Home />} /><Route path="/projects/:slug" element={<ProjectDetail />} /></Routes>;
}
