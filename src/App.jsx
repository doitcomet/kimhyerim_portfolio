import React from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Mouse, Server, Gauge, ShieldCheck, Users } from "lucide-react";
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
              <p className="eyebrow">PLATFORM ENGINEERING / 2026</p>
              <h1>Cloud / ML Platform<br />Engineer</h1>
            </div>
          </div>
          <p className="hero-copy">대규모 서비스 운영 경험을 기반으로<br />AI가 안정적으로 실행될 수 있는 플랫폼을 만듭니다.</p>
          <div className="hero-focus" aria-label="Platform engineering keywords">
            <span>Kubernetes</span>
            <span>Observability</span>
            <span>Cloud Platform</span>
            <span>LLMOps / AIOps</span>
          </div>
          <p className="author">Portfolio by <strong>김혜림</strong></p>
        </section>

        <section className="intro" aria-label="About me">
          <div className="intro-heading"><span>ABOUT</span><h2>운영 문제를 발견하면<br />구조와 자동화로 해결합니다.</h2></div>
          <p className="intro-copy">대규모 AWS 프로덕션 환경을 운영하며 관측성 플랫폼 전환, Graviton 기반 비용 최적화, Kubernetes 운영, AI 기반 운영 자동화를 수행했습니다. 반복 작업을 줄이고 장애를 더 빨리 발견하며, 다른 팀이 인프라보다 본질적인 문제에 집중할 수 있는 플랫폼을 만드는 엔지니어를 지향합니다.</p>
          <div className="intro-values"><div><Server size={20} /><strong>Platform</strong><span>표준화와 운영 자동화</span></div><div><Gauge size={20} /><strong>Observability</strong><span>지표·알림 기반 운영</span></div><div><ShieldCheck size={20} /><strong>Reliability</strong><span>프로덕션 안정성</span></div><div><Users size={20} /><strong>Collaboration</strong><span>개발·운영팀 협업</span></div></div>
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
