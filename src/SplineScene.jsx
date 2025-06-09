import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import './SplineScene.css';

const icons = [
  {
    img: "/Bulb.png",
    href: "/insurance",
    label: "Understand Insurance",
    info: "Learn what health insurance covers, including OPD and how it helps your family."
  },
  {
    img: "/brain.png",
    href: "/nudges",
    label: "Smart Nudges",
    info: "Get AI-driven reminders and suggestions based on your health needs."
  },
  {
    img: "/Upload.png",
    href: "/upload",
    label: "Upload Prescription",
    info: "Upload your doctor’s prescription to get personalized insurance suggestions."
  },
  {
    img: "/claim.png",
    href: "/claim",
    label: "Check Claim",
    info: "Check if your current insurance will cover the medical service or bill."
  },
  {
    img: "/language.png",
    href: "/vernacular",
    label: "Built for Bharat",
    info: "Get support in your language. Easy-to-use UI and local language explainers."
  },
  {
    img: "/login.png",
    href: "/login",
    label: "Login",
    info: "Access your personal dashboard to track your policies, nudges, and uploads."
  },
];

const SplineScene = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="scene-container">
      <Spline
        scene="https://prod.spline.design/m-0Rt9rnIdcWVRe0/scene.splinecode"
        className="spline-background"
      />
      <div className="icon-overlay">
        {icons.map((item, i) => {
          const angle = (i * 2 * Math.PI) / icons.length;
          const radius = 245;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          const isHovered = hoveredIndex === i;
          const baseTransform = `translate(${x}px, ${y}px)`;

          return (
            <a
              key={i}
              href={item.href}
              className={`icon-circle ${isHovered ? 'hovered' : ''}`}
              style={!isHovered ? { transform: baseTransform } : {}}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={item.img} alt={item.label} />
              <span className="icon-label">{item.label}</span>
              <div className="icon-tooltip">{item.info}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SplineScene;
