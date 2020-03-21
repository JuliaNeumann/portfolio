import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

import "./Projects.scss";

const data = require("./Projects.json");

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.fullProjectList = data.items
      .map(item => Object.assign(item, { years: item.years.sort() }))
      .sort(
        // sort by latest year
        (item1, item2) => {
          const lastYear1 = item1.years[item1.years.length - 1];
          const lastYear2 = item2.years[item2.years.length - 1];
          if (lastYear1 !== lastYear2) {
            return lastYear1 - lastYear2;
          }
          return item1.years[0] - item2.years[0];
        }
      );

    this.state = {
      filterTechs: [],
      projectList: this.fullProjectList
    };

    this.toggleTechFilter = this.toggleTechFilter.bind(this);
  }

  toggleTechFilter() {}

  render() {
    return (
      <div>
        <div class="columns is-multiline">
          {this.state.projectList.map(item => {
            return (
              <ProjectCard
                key={item.headline.EN}
                project={item}
                category={data.categories[item.category]}
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
