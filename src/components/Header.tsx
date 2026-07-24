"use strict";

"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

        {/* Let's Talk Button */}
        <div className="header-action">
          <a href="#contact" className="btn btn-primary">
            Let's Talk <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-toggle"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
