import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

import "./Projects.scss";

const data = require("./Projects.json");

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = { filterTechs: [] };

    this.toggleTechFilter = this.toggleTechFilter.bind(this);
  }

  toggleTechFilter() {}

  render() {
    return (
      <div>
        <div class="columns is-multiline">
          {data.items.map(item => {
            return (
              <ProjectCard
                key={item.headline.EN}
                project={item}
                lang={this.props.lang}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
