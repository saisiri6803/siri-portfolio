import React from "react";
import { ArrowUpRight } from "lucide-react";

import { EDUCATION } from "../../data/portfolioData";

import "./Education.scss";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="education">
      <div className="education__container">
        <div className="education__header">
          <div>
            <p className="education__label">Education</p>

            <h2 className="education__title">
              Where I learned.
            </h2>
          </div>

          <span className="education__year-range">
            2017—2024
          </span>
        </div>

        <div className="education__list">
          {EDUCATION.map((item, index) => (
            <article
              key={item.institution}
              className="education-card"
            >
              <div className="education-card__top">
                <span className="education-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="education-card__duration">
                  {item.duration}
                </span>
              </div>

              <div className="education-card__body">
                <div className="education-card__marker" />

                <div className="education-card__content">
                  <h3 className="education-card__degree">
                    {item.degree}
                  </h3>

                  <p className="education-card__institution">
                    {item.institution}
                  </p>

                  <ul className="education-card__achievements">
                    {item.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="education-card__achievement"
                      >
                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.8}
                        />

                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};