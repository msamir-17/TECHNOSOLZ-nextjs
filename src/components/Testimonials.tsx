"use strict";

"use client";

import { useState } from "react";
import { Star, MessageSquareQuote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Amit Sharma",
      role: "Founder, DailyBachat",
      quote: "Technosolz delivered our app exactly how we imagined. Great communication, on-time delivery and excellent support throughout the project.",
      avatarInitials: "AS",
      rating: 5,
    },
    {
      name: "Riya Patel",
      role: "Marketing Head, Nezal Herbocare",
      quote: "Amazing team! They built our website with great UI/UX and helped us rank on Google as well.",
      avatarInitials: "RP",
      rating: 5,
    },
    {
      name: "Imran Khan",
      role: "Director, Serwex",
      quote: "The WhatsApp automation solution by Technosolz saved us so much time and improved our lead management.",
      avatarInitials: "IK",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* Testimonials Header */}
        <div className="testimonials-header">
          <div>
            <span className="section-title-tag">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-desc">
              We take pride in delivering solutions that our clients love and businesses trust.
            </p>
          </div>
        </div>

        {/* Testimonials List */}
        <div className="testimonials-slider-container">
          <div className="testimonials-grid">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="testimonial-card"
                style={{
                  opacity: activeIndex === index || activeIndex === 0 ? 1 : 0.4,
                  transform: activeIndex === index ? "scale(1.02)" : "scale(1)",
                }}
              >
                {/* Quote Icon & Rating Stars */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <MessageSquareQuote size={32} className="quote-icon" />
                  <div style={{ display: "flex", gap: "2px" }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#FFD700" color="#FFD700" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="testimonial-quote">“{item.quote}”</p>

                {/* Author Information */}
                <div className="testimonial-author-wrapper">
                  <div className="author-avatar">{item.avatarInitials}</div>
                  <div className="author-info">
                    <span className="author-name">{item.name}</span>
                    <span className="author-role">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Navigation Dots */}
          <div className="slider-dots">
            {/* Show dot to select Amit, Riya, Imran, or Show All (0) */}
            <button
              onClick={() => setActiveIndex(0)}
              className={`slider-dot ${activeIndex === 0 ? "active" : ""}`}
              aria-label="Show All Testimonials"
            />
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`slider-dot ${activeIndex === idx ? "active" : ""}`}
                aria-label={`Show Testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
