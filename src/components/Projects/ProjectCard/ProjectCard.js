import React from "react";
import { LocaleContext } from "../../../locale-context";

import "./ProjectCard.scss";

function ProjectCard(props) {
  const project = props.project;
  const time =
    project.years.length === 1
      ? project.years[0]
      : `${project.years[0]} - ${project.years[project.years.length - 1]}`;

  return (
    <LocaleContext.Consumer>
      {({locale}) => (
        <div className="project-card column is-half">
          <article className="project-card__card card">
            <header className="project-card__header card-header">
              <h2 className="project-card__headline card-header-title title is-4">
                {project.headline[locale]}
              </h2>
              <small className="project-card__sub-headline">
                <span className="project-card__category tag is-white">
                  {props.category[locale]}
                </span>
                {time}
              </small>
            </header>
            <div className="project-card__content card-content">
              {project.text[locale]}
            </div>
            <footer className="card-footer">
              <div className="project-card__tech card-footer-item">
                <ul className="project-card__tech-list tags">
                  {project.technologies.map(tech => {
                    return (
                      <li key={tech} className="tag is-info">
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
                    {project.link.text[locale]}
                  </a>
                </div>
              )}
            </footer>
          </article>
        </div>
      )}
    </LocaleContext.Consumer>
  );
}

export default ProjectCard;
