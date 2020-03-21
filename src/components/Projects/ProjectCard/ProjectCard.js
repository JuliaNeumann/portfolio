import React from "react";

import "./ProjectCard.scss";

function ProjectCard(props) {
  const project = props.project;
  const language = props.lang;
  const time =
    project.years.length === 1
      ? project.years[0]
      : `${project.years[0]} - ${project.years[project.years.length - 1]}`;

  return (
    <div className="project-card column is-half">
      <article className="project-card__card card">
        <header className="project-card__header card-header">
          <h2 className="project-card__headline card-header-title title is-4">
            {project.headline[language]}
          </h2>
          <small className="project-card__sub-headline">
            <span className="project-card__category tag is-white">{props.category[language]}</span>
            {time}
          </small>
        </header>
        <div className="project-card__content card-content">
          {project.text[language]}
        </div>
        <footer className="card-footer">
          <div className="project-card__tech card-footer-item">
            <ul className="project-card__tech-list tags">
              {project.technologies.map(tech => {
                return (
                  <li key={tech} className="tag is-primary">
                    {tech}
                  </li>
                );
              })}
            </ul>
          </div>
          {project.link && (
            <div className="card-footer-item">
              <a
                href={project.link.url}
                className="project-card__link card-footer-item"
              >
                {project.link.text[language]}
              </a>
            </div>
          )}
        </footer>
      </article>
    </div>
  );
}

export default ProjectCard;
