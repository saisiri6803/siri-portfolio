import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <p className="about__label">03 / About</p>

        <div className="about__content">
          <p className="about__headline">
            I build interfaces that are thoughtful, scalable, and built to last.
          </p>

          <p className="about__description">
            I'm a Software Engineer focused on frontend development, with
            professional experience building enterprise applications using
            React, TypeScript, and modern web technologies. I enjoy turning
            complex requirements and designs into accessible, responsive, and
            maintainable experiences. Alongside frontend development, I'm
            expanding my full-stack skills across APIs, backend development,
            and AI-driven applications.
          </p>
        </div>
      </div>
    </section>
  );
};