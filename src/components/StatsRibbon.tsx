"use strict";

import { Briefcase, Smile, Award, CheckCircle, Headphones } from "lucide-react";

export default function StatsRibbon() {
  const statItems = [
    { num: "50+", label: "Projects Completed", icon: Briefcase },
    { num: "30+", label: "Happy Clients", icon: Smile },
    { num: "3+", label: "Years Experience", icon: Award },
    { num: "100%", label: "Client Satisfaction", icon: CheckCircle },
    { num: "24/7", label: "Support", icon: Headphones },
  ];

  return (
    <div className="stats-panel-wrapper">
      <div className="container">
        <div className="stats-panel">
          {statItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="panel-stat-item">
                <div className="panel-stat-icon">
                  <Icon size={24} />
                </div>
                <span className="panel-stat-num">{item.num}</span>
                <span className="panel-stat-label">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
