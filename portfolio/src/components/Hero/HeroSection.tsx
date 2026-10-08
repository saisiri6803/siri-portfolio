import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "./HeroSection.scss";

export const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <section
      id="home"
      className="hero"
      onMouseMove={handleMouseMove}
    >
      <div
        className="hero__hover-image"
        aria-hidden="true"
        style={{
          "--mouse-x": `${mousePosition.x}px`,
          "--mouse-y": `${mousePosition.y}px`,
        } as React.CSSProperties}
      />

      <div className="hero__container">
        <div className="hero__visual">
          <div className="hero__circle" />

          <img
            src="/profile.png"
            alt="3D illustrated portrait of Sai Sirisha"
            className="hero__image"
          />
        </div>

        <div className="hero__content">
          <div className="hero__intro">
            <span
              className="hero__dot"
              aria-hidden="true"
            />

            <span className="hero__label">
              Software Developer
            </span>
          </div>

          <h1 className="hero__title">
            SAI
            <br />
            SIRISHA
          </h1>

          <div className="hero__description">
            <p>
              I'm a frontend developer focused on
              creating clean, accessible, and engaging
              digital experiences.
            </p>

            <a
              href="#work"
              className="hero__link"
            >
              Explore selected work
              <ArrowUpRight
                size={15}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};