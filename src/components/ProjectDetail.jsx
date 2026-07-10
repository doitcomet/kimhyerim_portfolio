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
        <Link className="back-link" to="/"><ArrowLeft size={17} /> All Projects</Link>

        <header className="detail-hero">
          <div>
            <p className="detail-kicker">PROJECT {project.number} / {project.status}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
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
            <div><h2>Architecture</h2><p>실제 아키텍처 이미지를 이 영역에 교체할 수 있습니다.</p></div>
          </div>
          <figure className="architecture-frame">
            {project.architectureImage ? (
              <img src={project.architectureImage} alt={`${project.title} architecture`} />
            ) : (
              <div className="architecture-placeholder"><ImageIcon size={34} /><strong>Architecture image</strong><code>public/assets/architectures/{project.slug}.png</code></div>
            )}
          </figure>
        </section>

        <section className="detail-grid">
          <div className="detail-panel">
            <span className="panel-number">02</span>
            <h2>Background</h2>
            <p>{project.background}</p>
          </div>
          <div className="detail-panel">
            <span className="panel-number">03</span>
            <h2>What I did</h2>
            <ul>{project.actions.map((action) => <li key={action}>{action}</li>)}</ul>
          </div>
          <div className="detail-panel detail-panel--wide">
            <span className="panel-number">04</span>
            <h2>Impact</h2>
            <div className="impact-list">
              {project.impacts.map((impact) => <div key={impact.label}><strong>{impact.value}</strong><span>{impact.label}</span></div>)}
            </div>
          </div>
        </section>

        <footer className="detail-footer">
          <Link to="/">Back to portfolio</Link>
          <span><ExternalLink size={15} /> Architecture and metrics can be updated later.</span>
        </footer>
      </article>
    </MacFrame>
  );
}
