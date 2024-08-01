import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./prDe";
const Project = () => {

  return (
    <div>
      {ProjectDetail.map((item, i) => {
        <ProjectCard
          key={i}
          title={item.name}
          description={item.description}
        />
      })}
    </div>
  );
};

export default Project;
