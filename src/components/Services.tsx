"use strict";

import { Smartphone, Globe, ShoppingCart, MessageSquare, BarChart3, Code, ArrowRight } from "lucide-react";

export default function Services() {
  const serviceItems = [
    {
      title: "Mobile App Development",
      desc: "High performance mobile apps for Android & iOS using Flutter and modern technologies.",
      icon: Smartphone,
      link: "#contact",
    },
    {
      title: "Website Development",
      desc: "Responsive, fast and SEO friendly websites that represent your brand and convert users.",
      icon: Globe,
      link: "#contact",
    },
    {
      title: "E-commerce Solutions",
      desc: "Secure and scalable e-commerce platforms to grow your online store and reach global customers.",
      icon: ShoppingCart,
      link: "#contact",
    },
    {
      title: "WhatsApp Automation",
      desc: "Automate replies, lead generation, transactional notifications and customer support with WhatsApp.",
      icon: MessageSquare,
      link: "#contact",
    },
    {
      title: "Digital Marketing",
      desc: "Boost visibility, generate qualified leads and grow your brand equity with smart digital marketing.",
      icon: BarChart3,
      link: "#contact",
    },
    {
      title: "Custom Software Development",
      desc: "Tailored software solutions engineered to automate operations and drive efficiency inside your business.",
      icon: Code,
      link: "#contact",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Services Section Header */}
        <div className="services-header">
          <div>
            <span className="section-title-tag">What We Do</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-desc">
              We provide end-to-end digital solutions to help startups, SMEs and enterprises grow and scale in the digital era.
            </p>
          </div>
          <a href="#contact" className="btn btn-secondary" style={{ marginBottom: "2.5rem" }}>
            View All Services <ArrowRight size={16} />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid services-grid">
          {serviceItems.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="glass-card">
                <div className="service-card-icon-box">
                  <Icon size={24} />
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
                <a href={service.link} className="service-card-link">
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
