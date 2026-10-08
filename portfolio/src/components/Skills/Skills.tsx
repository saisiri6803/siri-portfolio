import React from "react";

import { SKILLS } from "../../data/portfolioData";

import "./Skills.scss";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <div className="skills__header">
          <div>
            <p className="skills__label">Skills</p>

            <h2 className="skills__title">
              What I work with.
            </h2>
          </div>

          <span className="skills__year-range">
            2020—Present
          </span>
        </div>

        <div className="skills__grid">
          {SKILLS.map((skill) => (
            <article
              key={skill.title}
              className="skill-card"
            >
              <div className="skill-card__content">
                <h3 className="skill-card__title">
                  {skill.title}
                </h3>

                <ul className="skill-card__list">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="skill-card__item"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};