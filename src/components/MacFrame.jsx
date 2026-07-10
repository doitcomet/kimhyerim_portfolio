import React from "react";
import { Search, ListFilter, MoreHorizontal } from "lucide-react";

export default function MacFrame({ children, title = "Hyerim Portfolio", compact = false }) {
  return (
    <main className={`mac-window ${compact ? "mac-window--detail" : ""}`}>
      <header className="mac-toolbar">
        <div className="traffic-lights" aria-label="macOS window controls">
          <span className="traffic traffic--red" />
          <span className="traffic traffic--yellow" />
          <span className="traffic traffic--green" />
        </div>
        <span className="window-title">{title}</span>
        <nav className="toolbar-actions" aria-label="portfolio controls">
          <button type="button" aria-label="Search"><Search size={20} strokeWidth={1.8} /></button>
          <button type="button" aria-label="Project view"><ListFilter size={20} strokeWidth={1.8} /></button>
          <button type="button" aria-label="More"><MoreHorizontal size={21} strokeWidth={1.8} /></button>
        </nav>
      </header>
      {children}
    </main>
  );
}
