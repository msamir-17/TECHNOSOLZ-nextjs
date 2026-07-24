"use strict";

"use client";

import { useState } from "react";
import { submitContactForm } from "../lib/firebase";
import { Phone, Mail, MapPin, Clock, Send, Check } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Mobile App Development",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const services = [
    "Mobile App Development",
    "Website Development",
    "E-commerce Solutions",
    "WhatsApp Automation",
    "Digital Marketing",
    "Custom Software Development",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", msg: "Please fill out all required fields (Name, Email, Message)." });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setStatus({ type: "success", msg: "Thank you! Your message has been sent successfully. We will get back to you soon!" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Mobile App Development",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus({ type: "error", msg: "Failed to send message. Please try again or email us directly." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        {/* Left Column: Contact Details */}
        <div className="contact-info-panel">
          <span className="section-title-tag">Contact Us</span>
          <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>Let's Create Something Amazing</h2>
          <p className="section-desc" style={{ marginBottom: "2rem" }}>
            Have a project in mind, need technical consultation, or want to automate your workflows? Send us a message and our team will get in touch with you.
          </p>

          <div className="contact-list">
            <div className="contact-item-box">
              <div className="contact-item-icon">
                <Phone size={20} />
              </div>
              <div className="contact-item-text">
                <span className="contact-item-label">Call Us</span>
                <a href="tel:+917558726131" className="contact-item-val">+91 75587 26131</a>
              </div>
            </div>

            <div className="contact-item-box">
              <div className="contact-item-icon">
                <Mail size={20} />
              </div>
              <div className="contact-item-text">
                <span className="contact-item-label">Email Us</span>
                <a href="mailto:hello@technosolz.com" className="contact-item-val">hello@technosolz.com</a>
              </div>
            </div>

            <div className="contact-item-box">
              <div className="contact-item-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-item-text">
                <span className="contact-item-label">Location</span>
                <span className="contact-item-val">Nallasopara East, Mumbai, India</span>
              </div>
            </div>

            <div className="contact-item-box">
              <div className="contact-item-icon">
                <Clock size={20} />
              </div>
              <div className="contact-item-text">
                <span className="contact-item-label">Working Hours</span>
                <span className="contact-item-val">Mon - Sat: 10:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-panel">
          <form onSubmit={handleSubmit} className="form-card">
            <h3 className="form-title">Send a Message</h3>
            
            <div className="form-group-row">
              <div className="form-field">
                <label className="form-label" htmlFor="contact-name">Name *</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-field">
                <label className="form-label" htmlFor="contact-email">Email *</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-field">
                <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="form-input"
                />
              </div>
              
              <div className="form-field">
                <label className="form-label" htmlFor="contact-service">Required Service</label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  {services.map((service, idx) => (
                    <option key={idx} value={service} style={{ backgroundColor: "#08132b", color: "#fff" }}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project or requirement..."
                className="form-input"
                required
              />
            </div>

            {status && (
              <div className={`form-status ${status.type === "success" ? "form-status-success" : "form-status-error"}`}>
                {status.msg}
              </div>
            )}

            <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
              {loading ? (
                <>Sending...</>
              ) : status?.type === "success" ? (
                <>Sent! <Check size={16} /></>
              ) : (
                <>Send Message <Send size={16} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
