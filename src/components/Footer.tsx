"use strict";

"use client";

import { useState } from "react";
import { subscribeNewsletter } from "../lib/firebase";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Check,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatus(null);

    try {
      const result = await subscribeNewsletter(email);
      if (result.success) {
        setStatus({ type: "success", msg: "Subscribed!" });
        setEmail("");
      } else {
        throw new Error("Subscription failed");
      }
    } catch (err) {
      console.error("Newsletter error:", err);
      setStatus({ type: "error", msg: "Failed" });
    } finally {
      setLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <a href="#home" className="logo-wrapper">
              <div className="logo-symbol">TS</div>
              <div className="logo-text-wrapper">
                <span className="logo-title">TECHNOSOLZ</span>
                <span className="logo-subtitle">SOLUTIONS THAT SCALE</span>
              </div>
            </a>
            <p className="footer-brand-desc">
              We build digital solutions that help businesses grow, automate and succeed in the digital world.
            </p>
            <div className="footer-social-icons">
              <a href="#" className="social-icon-btn" aria-label="Facebook">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Instagram">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="LinkedIn">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Twitter">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="YouTube">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.52 3.545 12 3.545 12 3.545s-7.52 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.868.507 9.388.507 9.388.507s7.52 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#home">Home</a></li>
              <li className="footer-link-item"><a href="#about">About Us</a></li>
              <li className="footer-link-item"><a href="#services">Services</a></li>
              <li className="footer-link-item"><a href="#portfolio">Portfolio</a></li>
              <li className="footer-link-item"><a href="#blog">Blog</a></li>
              <li className="footer-link-item"><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h3 className="footer-col-title">Services</h3>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#services">Mobile App Development</a></li>
              <li className="footer-link-item"><a href="#services">Website Development</a></li>
              <li className="footer-link-item"><a href="#services">E-commerce Solutions</a></li>
              <li className="footer-link-item"><a href="#services">WhatsApp Automation</a></li>
              <li className="footer-link-item"><a href="#services">Digital Marketing</a></li>
              <li className="footer-link-item"><a href="#services">Custom Software Development</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter Column */}
          <div className="footer-col" style={{ gap: "2rem" }}>
            <div className="footer-contact-info">
              <h3 className="footer-col-title">Contact Us</h3>
              <div className="footer-contact-item" style={{ marginTop: "0.5rem" }}>
                <Phone size={14} className="footer-contact-icon" />
                <span className="footer-contact-text">+91 75587 26131</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={14} className="footer-contact-icon" />
                <span className="footer-contact-text">hello@technosolz.com</span>
              </div>
              <div className="footer-contact-item">
                <MapPin size={14} className="footer-contact-icon" />
                <span className="footer-contact-text">Nallasopara East, Mumbai, India</span>
              </div>
              <div className="footer-contact-item">
                <Clock size={14} className="footer-contact-icon" />
                <span className="footer-contact-text">Mon - Sat: 10:00 AM - 7:00 PM</span>
              </div>
            </div>

            <div className="footer-newsletter">
              <h3 className="footer-col-title" style={{ paddingBottom: "0.25rem" }}>Newsletter</h3>
              <p className="footer-newsletter-desc">Subscribe to get latest updates and our new projects.</p>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="btn btn-primary newsletter-btn" disabled={loading} style={{ borderRadius: "8px", padding: "0.6rem 1rem" }}>
                  {loading ? (
                    "..."
                  ) : status?.type === "success" ? (
                    <Check size={14} />
                  ) : (
                    <Send size={14} />
                  )}
                </button>
              </form>
              {status && (
                <span style={{
                  fontSize: "0.75rem",
                  color: status.type === "success" ? "#10b981" : "#ef4444",
                  marginTop: "-0.5rem",
                  fontWeight: 600
                }}>
                  {status.msg}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <span className="footer-copyright">
            &copy; {currentYear} Technosolz. All Rights Reserved.
          </span>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
