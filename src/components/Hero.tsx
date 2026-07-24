"use strict";

"use client";

import { ArrowRight, MessageSquare, Briefcase, Users, Award } from "lucide-react";

export default function Hero() {
  const technologies = [
    {
      name: "Flutter",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M14.3 2.1L5 11.4l2.9 2.9 9.3-9.3z" fill="#02569B" />
          <path d="M14.3 21.9l-5.7-5.7 2.9-2.9 8.5 8.6z" fill="#0175C2" />
          <path d="M8.6 16.2L14.3 10.5h5.7L14.3 16.2z" fill="#13B9FD" />
        </svg>
      ),
    },
    {
      name: "Dart",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zm-1-4.5c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" fill="#00b0ff" />
        </svg>
      ),
    },
    {
      name: "Python",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.25.18c.9 0 1.66.71 1.66 1.6v2.24h-3.32c-.92 0-1.66.72-1.66 1.6v1.12h3.32v1.12c0 .92-.74 1.66-1.66 1.66h-1.66v1.12c0 .92.74 1.66 1.66 1.66h4.98c.92 0 1.66-.74 1.66-1.66V4.62c0-.92-.74-1.66-1.66-1.66h-1.66V1.78c0-.9-.76-1.6-1.66-1.6H9.27c-.9 0-1.66.7-1.66 1.6v2.24h3.32c.92 0 1.66.72 1.66 1.6V6.7h-3.32V5.58c0-.92-.74-1.66-1.66-1.66H5.95c-.92 0-1.66.74-1.66 1.66v4.42c0 .92.74 1.66 1.66 1.66h1.66v1.12c0 .9.76 1.6 1.66 1.6h4.98c.9 0 1.66-.7 1.66-1.6v-2.24h-3.32c-.92 0-1.66-.72-1.66-1.6V9.46h3.32V8.34c0-.92.74-1.66 1.66-1.66h1.66V5.58c0-.92-.74-1.66-1.66-1.66h-4.98c-.92 0-1.66.74-1.66 1.66v4.42c0 .92.74 1.66 1.66 1.66h1.66v1.12c0 .9.76 1.6 1.66 1.6H9.27c-.9 0-1.66-.7-1.66-1.6v-2.24h3.32c.92 0 1.66-.72 1.66-1.6V3.5c0-.92-.74-1.66-1.66-1.66H9.27c-.92 0-1.66.74-1.66 1.66v1.12H4.29c-.92 0-1.66.74-1.66 1.66V12.18c0 .92.74 1.66 1.66 1.66h4.98c.92 0 1.66-.74 1.66-1.66v-1.12h-3.32c-.92 0-1.66-.72-1.66-1.6V8.34h3.32V7.22c0-.92.74-1.66 1.66-1.66h4.98c.92 0 1.66.74 1.66 1.66v4.42c0 .92-.74 1.66-1.66 1.66h-1.66v1.12c0 .9-.76 1.6-1.66 1.6H9.27c-.9 0-1.66-.7-1.66-1.6v-2.24H4.29c-.92 0-1.66-.72-1.66-1.6V15.5c0-.92.74-1.66 1.66-1.66h1.66v-1.12H9.27c-.92 0-1.66-.74-1.66-1.66V6.7h4.98c.92 0 1.66.74 1.66 1.66v1.12h3.32c.92 0 1.66.72 1.66 1.6v3c0 .6-.4 1-1 1z" fill="#3776AB" />
        </svg>
      ),
    },
    {
      name: "Django",
      icon: (
        <span style={{ fontWeight: 800, color: "#092e20", fontSize: "0.85rem" }}>dj</span>
      ),
    },
    {
      name: "FastAPI",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 14h9v8l10-12h-9V2z" fill="#009688" />
        </svg>
      ),
    },
    {
      name: "Firebase",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M18.8 19.9L12.5 3.3c-.2-.6-.9-.6-1.1 0l-2 5.2-3.8-7.2c-.3-.5-1-.5-1.2 0l-3.3 18.6c-.1.5.2 1 .7 1.1.2 0 .3 0 .5-.1l6.7-3.8 6.7 3.8c.4.2.9.1 1.1-.3.1-.1.1-.3.1-.5l-.8-2.3z" fill="#FFA611" />
          <path d="M18.8 19.9l-.8-2.3-5.5-10.4c-.3-.6-1.1-.6-1.4 0l-2.6 4.9 10.3 7.8z" fill="#F47C06" />
          <path d="M12.5 19.9L3.1 14.5l9.4 5.4z" fill="#F6820C" />
        </svg>
      ),
    },
    {
      name: "Docker",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.983 11.078h2.119v2.09h-2.119zm-2.52 0h2.118v2.09h-2.118zm-2.508 0h2.119v2.09H8.955zm-2.52 0h2.119v2.09H6.435zM8.955 8.57h2.119v2.09h-2.119zm-2.52 0h2.119v2.09H6.435zm2.52-2.507h2.119v2.09h-2.119zm-5.028 5.015h2.119v2.09H3.927zm8.016-5.015h2.118v2.09h-2.118zm5.54 2.507c.05.025.102.051.158.076.634.28 1.432.327 1.836-.188.082-.102.164-.265.18-.344.04-.195.043-.4.043-.604 0-1.637-1.32-2.97-2.94-2.97-.24 0-.472.03-.697.085-.164.04-.33.097-.473.18-.11.066-.21.144-.298.243-.165.195-.24.444-.24.697 0 1.25.795 2.524 2.435 2.825zm-2.008-5.32c-.08-.052-.16-.098-.242-.14-.082-.04-.176-.082-.266-.113A3.682 3.682 0 0 0 13.983 2.5v6.07h2.119V4.026c0-.528-.423-1.078-2.119-1.284zm-3.532 9.642c0 2.656-2.165 4.815-4.832 4.815a4.832 4.832 0 0 1-4.832-4.815c0-2.656 2.165-4.814 4.832-4.814 2.667 0 4.832 2.158 4.832 4.814z" fill="#0db7ed" />
        </svg>
      ),
    },
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
              Contact Us
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

        {/* Right Column: Visual Mockups & Technologies Ticker */}
        <div className="hero-graphics">
          <div className="glowing-orb-1 animate-pulse-glow"></div>
          
          {/* Overlapping Mockups Wrapper */}
          <div className="mockups-container animate-float">
            {/* Laptop Mockup */}
            <div className="laptop-wrapper">
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
                                fill="url(#chart-grad-2)"
                                opacity="0.15"
                              />
                              <defs>
                                <linearGradient id="chart-grad-2" x1="0" y1="0" x2="0" y2="1">
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

            {/* Smartphone Mockup - Positioned on the Left overlapping bezel */}
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-header">
                  <span className="phone-app-title">DailyBachat</span>
                  <span style={{ fontSize: "0.45rem", color: "#94a3b8" }}>9:41</span>
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
          
          {/* Capsule Technologies Ticker Pill Banner aligned directly under the mockups */}
          <div className="tech-ticker-pill">
            <div className="tech-ticker-title">Technologies We Use</div>
            <div className="tech-ticker-divider"></div>
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
      </div>
    </section>
  );
}
