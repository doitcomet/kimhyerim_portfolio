import React from "react";
import { ArrowLeft, ExternalLink, Image as ImageIcon } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import MacFrame from "./MacFrame";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <MacFrame title="Project not found" compact>
        <section className="not-found">
          <h1>Project not found</h1>
          <Link to="/">포트폴리오로 돌아가기</Link>
        </section>
      </MacFrame>
    );
  }

  return (
    <MacFrame title={`${project.number} · ${project.title}`} compact>
      <article className="detail-page">
        <Link className="back-link" to="/"><ArrowLeft size={17} /> 전체 프로젝트</Link>

        <header className="detail-hero">
          <div>
            <p className="detail-kicker">프로젝트 {project.number} / {project.status}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <p className="security-note">{project.securityNote}</p>
          </div>
          <div className="detail-stack-list" aria-label="Technology stack">
            {project.stacks.map((stack) => (
              <span className="detail-stack-chip" key={stack.name}>
                <img src={stack.image} alt="" onError={(event) => { event.currentTarget.style.display = "none"; }} />
                {stack.name}
              </span>
            ))}
          </div>
        </header>

        <section className="detail-section">
          <div className="section-heading">
            <span>01</span>
            <div><h2>참고용 아키텍처</h2><p>보안 기밀 유지를 위해 공개 가능한 수준으로 재구성한 구조입니다.</p></div>
          </div>
          <figure className="architecture-frame">
            {project.architectureImage ? (
              <img src={project.architectureImage} alt={`${project.title} architecture`} />
            ) : (
              <div className="architecture-placeholder"><ImageIcon size={34} /><strong>참고용 아키텍처</strong><code>public/assets/architectures/{project.slug}.png</code></div>
            )}
          </figure>
        </section>

        <section className="detail-grid">
          <div className="detail-panel">
            <span className="panel-number">02</span>
            <h2>프로젝트 배경</h2>
            <p>{project.background}</p>
          </div>
          <div className="detail-panel">
            <span className="panel-number">03</span>
            <h2>수행한 역할</h2>
            <ul>{project.actions.map((action) => <li key={action}>{action}</li>)}</ul>
          </div>
          <div className="detail-panel detail-panel--wide">
            <span className="panel-number">04</span>
            <h2>배운 점</h2>
            <p>{project.lessons}</p>
          </div>
          <div className="detail-panel detail-panel--wide">
            <span className="panel-number">05</span>
            <h2>결과</h2>
            <div className="impact-list">
              {project.impacts.map((impact) => <div key={impact.label}><strong>{impact.value}</strong><span>{impact.label}</span></div>)}
            </div>
          </div>
        </section>

        <footer className="detail-footer">
          <Link to="/">포트폴리오로 돌아가기</Link>
          <span><ExternalLink size={15} /> 보안 기밀 유지를 위해 일부 구성과 식별자는 일반화했습니다.</span>
        </footer>
      </article>
    </MacFrame>
  );
}
