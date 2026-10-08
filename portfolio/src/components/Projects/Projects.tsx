import React, { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Code2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { PROJECTS } from "../../data/portfolioData";

export const ProjectsSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(
    new Set()
  );

  const sortedProjects = useMemo(() => {
    return [...PROJECTS].sort(
      (a, b) =>
        Number(Boolean(b.featured)) -
        Number(Boolean(a.featured))
    );
  }, []);

  const visibleProjects = expanded
    ? sortedProjects
    : sortedProjects.slice(0, 3);

  const toggleCardDescription = (title: string) => {
    setExpandedCards((current) => {
      const next = new Set(current);

      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }

      return next;
    });
  };

  return (
    <section id="work" className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <div>
            <p className="projects__label">
              Selected work
            </p>

            <h2 className="projects__title">
              Things I make.
            </h2>
          </div>

          <span className="projects__year-range">
            2024—2026
          </span>
        </div>

        <div className="projects__grid">
          {visibleProjects.map((project, index) => {
            const isCardExpanded = expandedCards.has(
              project.title
            );

            return (
              <article
                key={project.title}
                className={`project-card ${
                  isCardExpanded
                    ? "project-card--expanded"
                    : ""
                }`}
              >
                <div className="project-card__top">
                  <div className="project-card__meta">
                    <span className="project-card__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {project.featured && (
                      <span className="project-card__featured">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="project-card__links">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live demo of ${project.title}`}
                        className="project-card__icon-link"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}

                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="project-card__icon-link"
                      >
                        <Code2 size={17} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-card__content">
                  {project.category && (
                    <span className="project-card__category">
                      {project.category}
                    </span>
                  )}

                  <h3 className="project-card__title">
                    {project.title}
                  </h3>

                  <p className="project-card__tech">
                    {project.tech}
                  </p>

                  <p className="project-card__description">
                    {project.description}
                  </p>
                </div>

                {/* Only visible on smaller screens */}
                <button
                  type="button"
                  className="project-card__expand"
                  onClick={() =>
                    toggleCardDescription(project.title)
                  }
                  aria-expanded={isCardExpanded}
                >
                  <span>
                    {isCardExpanded
                      ? "Show less"
                      : "Read more"}
                  </span>

                  {isCardExpanded ? (
                    <ChevronUp size={15} />
                  ) : (
                    <ChevronDown size={15} />
                  )}
                </button>
              </article>
            );
          })}
        </div>
        {sortedProjects.length > 3 && (
  <div className="projects__toggle">
    <button
      type="button"
      onClick={() => setExpanded((value) => !value)}
      className="projects__toggle-button"
    >
      {expanded
        ? "↑ Show Less Projects"
        : "↓ Show More Projects"}
    </button>
  </div>
)}
      </div>
    </section>
  );
};