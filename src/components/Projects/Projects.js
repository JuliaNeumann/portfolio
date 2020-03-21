import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

import "./Projects.scss";

const data = require("./Projects.json");

class Projects extends React.Component {
  constructor(props) {
    super(props);

    const fullTechSet = new Set();
    this.fullProjectList = data.items
      .map(item => {
        item.technologies.forEach(tech => fullTechSet.add(tech));
        return Object.assign(item, { years: item.years.sort() });
      })
      .sort(
        // sort by latest year, then by first year
        (item1, item2) => {
          const lastYear1 = item1.years[item1.years.length - 1];
          const lastYear2 = item2.years[item2.years.length - 1];
          if (lastYear1 !== lastYear2) {
            return lastYear1 - lastYear2;
          }
          return item1.years[0] - item2.years[0];
        }
      );
    this.fullTechList = Array.from(fullTechSet).sort(function(tech1, tech2) {
      return tech1.toLowerCase().localeCompare(tech2.toLowerCase());
    });

    this.state = {
      filterTechs: []
    };

    this.toggleTechFilter = this.toggleTechFilter.bind(this);
  }

  toggleTechFilter(tech, isCurrentlyActive) {
    if (isCurrentlyActive) {
      this.setState(state => {
        return { filterTechs: state.filterTechs.filter(item => item !== tech) };
      });
    } else {
      this.setState(state => {
        return { filterTechs: [...state.filterTechs, tech] };
      });
    }
  }

  render() {
    const projectList = this.fullProjectList.filter(project => {
      if (this.state.filterTechs.length === 0) {
        return true;
      }
      for (const activeTech of this.state.filterTechs) {
        if (project.technologies.includes(activeTech)) {
          return true;
        }
      }
      return false;
    });
    const language = this.props.lang;
    const techFilterItems = [];
    this.fullTechList.forEach(tech => {
      const active = this.state.filterTechs.includes(tech);
      const tagClass =
        this.state.filterTechs.length === 0 || active
          ? "is-primary"
          : "is-light";
      techFilterItems.push(
        <li key={tech} className={`projects__tech-filter tag ${tagClass}`}>
          <button
            type="button"
            onClick={() => this.toggleTechFilter(tech, active)}
          >
            {tech}
          </button>
        </li>
      );
    });

    return (
      <div class="columns is-desktop">
        <div class="column is-one-fifth-desktop">
          <strong>{data.filters.headline[language]}</strong>
          <ol className="projects__tech-list">{techFilterItems}</ol>
        </div>
        <div class="column">
          <div className="columns is-multiline">
            {projectList.map(item => {
              return (
                <ProjectCard
                  key={item.headline.EN}
                  project={item}
                  category={data.categories[item.category]}
                  lang={language}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
