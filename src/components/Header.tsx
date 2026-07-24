"use strict";

"use client";

import { useState, useEffect } from "react";
import { useTheme, ThemeMode } from "../context/ThemeContext";
import { ArrowRight, Menu, X, Sun, Moon, Sparkles } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="container header-container">
        {/* Logo */}
        <a href="#home" className="logo-wrapper">
          <div className="logo-symbol">TS</div>
          <div className="logo-text-wrapper">
            <span className="logo-title">TECHNOSOLZ</span>
            <span className="logo-subtitle">SOLUTIONS THAT SCALE</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions: Toggle & Let's Talk CTA */}
        <div className="header-actions-wrapper">
          {/* Three-State Toggle segmented controller */}
          <div className="theme-toggle-group" title="Select Theme Mode">
            <button
              onClick={() => setTheme("mixed")}
              className={`theme-toggle-btn ${theme === "mixed" ? "active" : ""}`}
              aria-label="Mixed Mode"
              type="button"
            >
              <Sparkles size={14} />
            </button>
            <button
              onClick={() => setTheme("light")}
              className={`theme-toggle-btn ${theme === "light" ? "active" : ""}`}
              aria-label="Light Mode"
              type="button"
            >
              <Sun size={14} />
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`theme-toggle-btn ${theme === "dark" ? "active" : ""}`}
              aria-label="Dark Mode"
              type="button"
            >
              <Moon size={14} />
            </button>
          </div>

          <a href="#contact" className="btn btn-primary" style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}>
            Let's Talk <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile menu and toggle controls wrapper */}
        <div className="header-actions-mobile">
          {/* Smaller version for mobile viewports */}
          <div className="theme-toggle-group">
            <button
              onClick={() => setTheme("mixed")}
              className={`theme-toggle-btn ${theme === "mixed" ? "active" : ""}`}
              aria-label="Mixed Mode"
              type="button"
            >
              <Sparkles size={12} />
            </button>
            <button
              onClick={() => setTheme("light")}
              className={`theme-toggle-btn ${theme === "light" ? "active" : ""}`}
              aria-label="Light Mode"
              type="button"
            >
              <Sun size={12} />
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`theme-toggle-btn ${theme === "dark" ? "active" : ""}`}
              aria-label="Dark Mode"
              type="button"
            >
              <Moon size={12} />
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-toggle"
            aria-label="Toggle Menu"
            type="button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-drawer ${isOpen ? "drawer-open" : ""}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="mobile-nav-link"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn btn-primary mobile-cta"
          >
            Let's Talk <ArrowRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
