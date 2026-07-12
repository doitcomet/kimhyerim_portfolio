import React from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Mouse, Server, Gauge, ShieldCheck, Users } from "lucide-react";
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
          <p className="hero-copy">AI Cloud와 컨테이너 플랫폼을 위한<br />관측 가능하고 자동화된 인프라를 만듭니다.</p>
          <div className="hero-focus" aria-label="Target role keywords">
            <span>hCloud/HKS</span>
            <span>Container Platform</span>
            <span>Observability</span>
            <span>AIOps</span>
          </div>
          <p className="author">Portfolio by <strong>김혜림</strong></p>
        </section>

        <section className="intro" aria-label="About me">
          <div className="intro-heading"><span>ABOUT</span><h2>운영 중인 플랫폼을 멈추지 않고<br />함께 검증하며 고도화합니다.</h2></div>
          <p className="intro-copy">클라우드 엔지니어에게 가장 중요한 태도는 무중단 서비스에 대한 책임감이라고 생각합니다. 클라우드 인프라 운영, 컨테이너 관측성, 무중단 표준화, AI 기반 운영 자동화를 수행하며 장애를 보이게 만들고, 호환성 차이를 실측으로 검증하고, 고객사·유관부서·동료와 같은 기준으로 소통하는 방식을 배웠습니다.</p>
          <div className="intro-values"><div><Server size={20} /><strong>Platform</strong><span>무중단 표준화</span></div><div><Gauge size={20} /><strong>Observability</strong><span>지표·알림 기반 운영</span></div><div><ShieldCheck size={20} /><strong>Responsibility</strong><span>서비스 신뢰성</span></div><div><Users size={20} /><strong>Collaboration</strong><span>고객·유관부서 협업</span></div></div>
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
