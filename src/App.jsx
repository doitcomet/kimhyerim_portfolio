import React from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Mouse, Server, Gauge, ShieldCheck } from "lucide-react";
import { Routes, Route } from "react-router-dom";
import ProjectFolder from "./components/ProjectFolder";
import ProjectDetail from "./components/ProjectDetail";
import MacFrame from "./components/MacFrame";
import { assetPath, projects } from "./data/projects";

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
              <p className="eyebrow">PLATFORM ENGINEERING / 2026</p>
              <h1>Cloud/AI Infrastructure<br />Engineer</h1>
            </div>
            <motion.img src={assetPath("assets/boards/board1.png")} alt="Hyundai AutoEver vintage board" className="hero-board" initial={{ opacity: 0, scale: 0.72, rotate: 22, y: 30 }} animate={{ opacity: 1, scale: 1, rotate: 10, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} whileHover={{ rotate: 7, scale: 1.03 }} />
          </div>
          <p className="hero-copy">Building observable, automated platforms<br />for AI Cloud and container operations.</p>
          <p className="author">Portfolio by <strong>김혜림</strong></p>
        </section>

        <section className="intro" aria-label="About me">
          <div className="intro-heading"><span>ABOUT</span><h2>운영 중인 플랫폼을 멈추지 않고<br />표준화와 자동화로 고도화합니다.</h2></div>
          <p className="intro-copy">클라우드 인프라 운영, 컨테이너 관측성, 무중단 표준화, AI 기반 운영 자동화를 수행해 온 Cloud/AI Infrastructure Engineer입니다. hCloud/HKS와 같은 공장형 플랫폼에서 필요한 것은 화려한 기능보다 장애를 보이게 만들고, 호환성 차이를 실측으로 검증하며, 반복 운영 판단을 안전하게 자동화하는 역량이라고 생각합니다.</p>
          <div className="intro-values"><div><Server size={20} /><strong>Platform</strong><span>무중단 표준화</span></div><div><Gauge size={20} /><strong>Observability</strong><span>지표·알림 기반 운영</span></div><div><ShieldCheck size={20} /><strong>AI Ops</strong><span>결정론+LLM 자동화</span></div></div>
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
