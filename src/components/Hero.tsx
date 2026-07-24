"use strict";

"use client";

import { ArrowRight, MessageSquare, Briefcase, Users, Award, Code, CheckCircle } from "lucide-react";

export default function Hero() {
  const technologies = [
    { name: "Flutter", icon: "📱" },
    { name: "Dart", icon: "🎯" },
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "dj" },
    { name: "FastAPI", icon: "⚡" },
    { name: "Firebase", icon: "🔥" },
    { name: "Docker", icon: "🐳" },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        {/* Left Column: Content */}
        <div className="hero-content">
          <div className="hero-tag">
            <span className="hero-tag-dot"></span>
            We Build Digital Solutions
          </div>
          
          <h1 className="hero-title">
            Transforming Ideas<br />
            Into <span>Digital</span> Reality
          </h1>
          
          <p className="hero-desc">
            We build powerful mobile apps, websites and digital solutions that help businesses grow, automate and succeed in the digital world.
          </p>
          
          <div className="hero-actions">
            <a href="#portfolio" className="btn btn-primary">
              Explore Our Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Us <MessageSquare size={16} />
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="hero-stat-item">
              <div className="hero-stat-icon">
                <Briefcase size={20} />
              </div>
              <div className="hero-stat-info">
                <span className="hero-stat-num">50+</span>
                <span className="hero-stat-label">Projects Completed</span>
              </div>
            </div>
            
            <div className="hero-stat-item">
              <div className="hero-stat-icon">
                <Users size={20} />
              </div>
              <div className="hero-stat-info">
                <span className="hero-stat-num">30+</span>
                <span className="hero-stat-label">Happy Clients</span>
              </div>
            </div>
            
            <div className="hero-stat-item">
              <div className="hero-stat-icon">
                <Award size={20} />
              </div>
              <div className="hero-stat-info">
                <span className="hero-stat-num">3+</span>
                <span className="hero-stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Mockups */}
        <div className="hero-graphics">
          <div className="glowing-orb-1 animate-pulse-glow"></div>
          
          {/* Laptop Mockup */}
          <div className="laptop-wrapper animate-float">
            <div className="laptop-body">
              {/* Dashboard Content */}
              <div className="dashboard-screen">
                <div className="dashboard-topbar">
                  <div className="dash-logo-box">
                    <div className="dash-logo-dot"></div>
                    <span className="dash-logo-text">TECHNOSOLZ</span>
                  </div>
                  <div className="dash-user-pill">Hello, Admin 👋</div>
                </div>
                
                <div className="dashboard-main">
                  {/* Dashboard Sidebar */}
                  <div className="dashboard-sidebar">
                    <div className="sidebar-icon-placeholder active"></div>
                    <div className="sidebar-icon-placeholder"></div>
                    <div className="sidebar-icon-placeholder"></div>
                    <div className="sidebar-icon-placeholder"></div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="dashboard-content">
                    <div className="dash-welcome">Welcome back!</div>
                    
                    {/* Stat Cards */}
                    <div className="dash-stats-grid">
                      <div className="dash-stat-card">
                        <span className="dash-card-label">Total Users</span>
                        <div className="dash-card-value">12,540</div>
                      </div>
                      <div className="dash-stat-card">
                        <span className="dash-card-label">Total Revenue</span>
                        <div className="dash-card-value">₹ 28,540</div>
                      </div>
                      <div className="dash-stat-card">
                        <span className="dash-card-label">Orders</span>
                        <div className="dash-card-value">1,246</div>
                      </div>
                      <div className="dash-stat-card">
                        <span className="dash-card-label">Growth</span>
                        <div className="dash-card-value" style={{ color: "#10b981" }}>+18.6%</div>
                      </div>
                    </div>
                    
                    {/* Graphs Row */}
                    <div className="dashboard-data-row">
                      {/* Line Chart */}
                      <div className="dash-chart-card">
                        <span className="dash-card-title">Overview</span>
                        <div className="dash-chart-placeholder">
                          <svg className="dash-chart-svg" viewBox="0 0 100 40" preserveAspectRatio="none">
                            <path
                              d="M0,35 Q15,25 30,30 T60,15 T90,5 L100,5"
                              fill="none"
                              stroke="#005eff"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M0,35 Q15,25 30,30 T60,15 T90,5 L100,5 L100,40 L0,40 Z"
                              fill="url(#chart-grad)"
                              opacity="0.15"
                            />
                            <defs>
                              <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#005eff" />
                                <stop offset="100%" stopColor="transparent" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Pie Chart */}
                      <div className="dash-pie-card">
                        <span className="dash-card-title">Top Categories</span>
                        <div className="dash-pie-placeholder">
                          <div className="dash-pie-chart-circle"></div>
                          <div className="dash-pie-legends">
                            <div className="dash-pie-legend-item">
                              <span className="legend-dot" style={{ backgroundColor: "var(--color-primary)" }}></span>
                              <span>Mobile</span>
                            </div>
                            <div className="dash-pie-legend-item">
                              <span className="legend-dot" style={{ backgroundColor: "var(--color-accent)" }}></span>
                              <span>Web</span>
                            </div>
                            <div className="dash-pie-legend-item">
                              <span className="legend-dot" style={{ backgroundColor: "#e2e8f0" }}></span>
                              <span>Custom</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="laptop-keyboard-base">
              <div className="laptop-keyboard-notch"></div>
            </div>
          </div>

          {/* Smartphone Mockup */}
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="phone-header">
                <span className="phone-app-title">DailyBachat</span>
                <span style={{ fontSize: "0.45rem", color: "var(--text-muted)" }}>9:41</span>
              </div>
              
              <div className="phone-card">
                <span className="phone-card-label">Balance</span>
                <span className="phone-card-val">₹ 12,540</span>
                <div className="phone-card-row">
                  <div>
                    <span className="phone-card-label" style={{ fontSize: "0.35rem" }}>Income</span>
                    <div style={{ color: "#10b981", fontWeight: 700, fontSize: "0.55rem" }}>₹ 18,000</div>
                  </div>
                  <div>
                    <span className="phone-card-label" style={{ fontSize: "0.35rem" }}>Expense</span>
                    <div style={{ color: "#ef4444", fontWeight: 700, fontSize: "0.55rem" }}>₹ 5,460</div>
                  </div>
                </div>
              </div>
              
              <div className="phone-tx-history">
                <span className="phone-tx-header">Recent Transactions</span>
                
                <div className="phone-tx-item">
                  <div className="phone-tx-info">
                    <span className="phone-tx-name">Food & Drinks</span>
                    <span className="phone-tx-cat">Grocery</span>
                  </div>
                  <span className="phone-tx-amt negative">- ₹ 250</span>
                </div>
                
                <div className="phone-tx-item">
                  <div className="phone-tx-info">
                    <span className="phone-tx-name">Shopping</span>
                    <span className="phone-tx-cat">LifeStyle</span>
                  </div>
                  <span className="phone-tx-amt negative">- ₹ 1,200</span>
                </div>
                
                <div className="phone-tx-item">
                  <div className="phone-tx-info">
                    <span className="phone-tx-name">Salary</span>
                    <span className="phone-tx-cat">Credit</span>
                  </div>
                  <span className="phone-tx-amt positive">+ ₹ 18,000</span>
                </div>
              </div>
              
              <div className="phone-nav-bar">
                <span className="phone-nav-item-dot active"></span>
                <span className="phone-nav-item-dot"></span>
                <span className="phone-nav-item-dot"></span>
                <span className="phone-nav-item-dot"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Technology Ticker */}
      <div className="tech-ticker-section">
        <div className="container tech-ticker-container">
          <div className="tech-ticker-title">Technologies We Use</div>
          <div className="tech-ticker-wrapper">
            <div className="tech-ticker-track">
              {/* Render twice for infinite loop */}
              {[...technologies, ...technologies, ...technologies].map((tech, idx) => (
                <div key={`${tech.name}-${idx}`} className="tech-ticker-item">
                  <div className="tech-ticker-icon-box">{tech.icon}</div>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
