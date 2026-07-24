"use strict";

import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "DailyBachat - Expense Tracker",
      category: "Mobile App (Android)",
      type: "phone",
      color: "from-[#005eff] to-[#00c6ff]",
      mockupData: {
        title: "DailyBachat",
        accent: "#00c6ff",
        items: ["Food", "Transport", "Shopping"],
      },
    },
    {
      title: "Serwex - Service Provider App",
      category: "Mobile App",
      type: "phone",
      color: "from-[#7928CA] to-[#FF0080]",
      mockupData: {
        title: "Serwex Pro",
        accent: "#FF0080",
        items: ["AC Repair", "Cleaning", "Plumbing"],
      },
    },
    {
      title: "Instapeels - Website",
      category: "Website Development",
      type: "laptop",
      color: "from-[#fcb045] to-[#fd1d1d]",
      mockupData: {
        title: "Instapeels",
        accent: "#fd1d1d",
      },
    },
    {
      title: "Nezal Herbocare - Website",
      category: "Website Development",
      type: "laptop",
      color: "from-[#11998e] to-[#38ef7d]",
      mockupData: {
        title: "Nezal Organic",
        accent: "#38ef7d",
      },
    },
    {
      title: "Eventpreneur - Community App",
      category: "Mobile App",
      type: "phone",
      color: "from-[#FF416C] to-[#FF4B2B]",
      mockupData: {
        title: "Eventpreneur",
        accent: "#FF4B2B",
        items: ["Conferences", "Webinars", "Meetups"],
      },
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        {/* Portfolio Header */}
        <div className="portfolio-header">
          <div>
            <span className="section-title-tag">Our Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-desc">
              We take pride in building scalable mobile apps and high-performance websites. Here are some of our recent creations.
            </p>
          </div>
          <a href="#contact" className="btn btn-secondary" style={{ marginBottom: "2.5rem" }}>
            View Full Portfolio <ArrowRight size={16} />
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-box">
                {/* Decorative colored glow behind mockup */}
                <div className={`absolute w-32 h-32 rounded-full bg-gradient-to-br ${project.color} opacity-20 filter blur-xl`}></div>
                
                {project.type === "phone" ? (
                  /* Mini Phone Screen */
                  <div className="project-phone-screen">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.15rem" }}>
                      <span style={{ fontSize: "0.4rem", fontWeight: "bold", color: "#fff" }}>{project.mockupData.title}</span>
                      <span style={{ fontSize: "0.35rem", color: "var(--text-dark-muted)" }}>9:41</span>
                    </div>
                    <div style={{ height: "40px", borderRadius: "6px", background: `linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))`, border: "1px solid rgba(255,255,255,0.05)", padding: "0.2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <span style={{ fontSize: "0.3rem", color: "var(--text-dark-muted)" }}>Active Users</span>
                      <span style={{ fontSize: "0.55rem", fontWeight: "bold", color: project.mockupData.accent || "#fff" }}>4.8k</span>
                    </div>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                      <span style={{ fontSize: "0.35rem", fontWeight: 600, color: "#fff" }}>Recent Items</span>
                      {project.mockupData.items?.map((item, idx) => (
                        <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(255,255,255,0.02)", padding: "0.15rem 0.25rem", borderRadius: "4px", fontSize: "0.35rem" }}>
                          <span>{item}</span>
                          <span style={{ color: project.mockupData.accent }}>✔</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Mini Laptop Screen */
                  <div className="project-laptop-screen">
                    <div style={{ height: "12px", background: "#0f172a", display: "flex", alignItems: "center", gap: "0.2rem", padding: "0 0.4rem" }}>
                      <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#ef4444" }}></span>
                      <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#eab308" }}></span>
                      <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#22c55e" }}></span>
                      <span style={{ fontSize: "0.35rem", color: "var(--text-dark-muted)", marginLeft: "0.5rem" }}>{project.mockupData.title}</span>
                    </div>
                    <div style={{ padding: "0.4rem", display: "flex", flexDirection: "column", gap: "0.3rem", height: "100%" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "0.5rem", fontWeight: "bold", color: "#fff" }}>Digital Platform</span>
                        <span style={{ fontSize: "0.35rem", color: "var(--text-dark-muted)" }}>Menu ▼</span>
                      </div>
                      <div style={{ flex: 1, background: "rgba(255,255,255,0.02)", border: "1px dashed rgba(255,255,255,0.1)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: "0.4rem", color: project.mockupData.accent }}>Web Design Live</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="project-card-info">
                <h3 className="project-card-title">{project.title}</h3>
                <span className="project-card-cat">{project.category}</span>
                <a href="#contact" className="project-card-action">
                  View Case Study <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
