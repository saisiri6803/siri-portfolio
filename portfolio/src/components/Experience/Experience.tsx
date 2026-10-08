import React, { useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { EXPERIENCE } from "../../data/portfolioData";

import "./Experience.scss";

export const ExperienceSection: React.FC = () => {
  const [expandedExperiences, setExpandedExperiences] =
    useState<Set<string>>(new Set());

  const toggleResponsibilities = (company: string) => {
    setExpandedExperiences((current) => {
      const next = new Set(current);

      if (next.has(company)) {
        next.delete(company);
      } else {
        next.add(company);
      }

      return next;
    });
  };

  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <div className="experience__header">
          <div>
            <p className="experience__label">
              03 / Experience
            </p>

            <h2 className="experience__title">
              Where I've worked.
            </h2>
          </div>

          <span className="experience__year-range">
            2024—Present
          </span>
        </div>

        <div className="experience__timeline">
          {EXPERIENCE.map((item, index) => {
            const isExpanded = expandedExperiences.has(
              item.company
            );

            return (
              <article
                key={`${item.company}-${item.role}`}
                className={`experience-card ${
                  isExpanded
                    ? "experience-card--expanded"
                    : ""
                }`}
              >
                <div className="experience-card__timeline">
                  <div className="experience-card__dot">
                    <Briefcase size={14} />
                  </div>

                  {index < EXPERIENCE.length - 1 && (
                    <div className="experience-card__line" />
                  )}
                </div>

                <div className="experience-card__content">
                  <div className="experience-card__top">
                    <div>
                      <div className="experience-card__role-row">
                        <h3 className="experience-card__role">
                          {item.role}
                        </h3>

                        {item.current && (
                          <span className="experience-card__current">
                            Current
                          </span>
                        )}
                      </div>

                      <p className="experience-card__company">
                        {item.company}
                        <span> · {item.location}</span>
                      </p>
                    </div>

                    <span className="experience-card__duration">
                      {item.duration}
                    </span>
                  </div>

                  <p className="experience-card__description">
                    {item.description}
                  </p>

                  <ul className="experience-card__responsibilities">
                    {item.responsibilities.map(
                      (responsibility) => (
                        <li
                          key={responsibility}
                          className="experience-card__responsibility"
                        >
                          <ArrowUpRight
                            size={15}
                            strokeWidth={1.8}
                          />

                          <span>{responsibility}</span>
                        </li>
                      )
                    )}
                  </ul>

                  <button
                    type="button"
                    className="experience-card__expand"
                    onClick={() =>
                      toggleResponsibilities(item.company)
                    }
                    aria-expanded={isExpanded}
                  >
                    <span>
                      {isExpanded
                        ? "Show less"
                        : "View responsibilities"}
                    </span>

                    {isExpanded ? (
                      <ChevronUp size={15} />
                    ) : (
                      <ChevronDown size={15} />
                    )}
                  </button>

                  <div className="experience-card__technologies">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="experience-card__technology"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};