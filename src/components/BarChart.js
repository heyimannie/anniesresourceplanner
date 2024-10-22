import React from "react";
import { Card, Button, Label } from "@fluentui/react-components";
import { DeleteRegular } from "@fluentui/react-icons";

const BarChart = ({ projects, resources }) => {
  if (projects.length === 0) return <Card>No projects to display</Card>;
  const projectsFixed = {};
  for (const project of projects) {
    projectsFixed[project.name] = { fteReuired: project.fte, fteCommitted: 0 };
  }
  for (const resource of resources) {
    for (const project of resource.projects) {
      if (project.name && projectsFixed[project.name] && project.fte) {
        projectsFixed[project.name].fteCommitted =
          projectsFixed[project.name].fteCommitted + project.fte;
      }
    }
  }
  // Find the project with the highest FTE
  const maxFte = Math.max(...projects.map((project) => project.fte), 0);

  return (
    <Card>
      <h3>FTE Distribution (Max: {maxFte})</h3>
      <div className="bars">
        {projects.map((project, index) => {
          // Adjust each bar's width relative to the highest FTE
          const barWidth = (project.fte / maxFte) * 100 || 0; // Percentage width relative to the max FTE
          const fillPercent =
            (projectsFixed[project.name].fteCommitted / project.fte) * 100;
          return (
            <div key={index} className="bar-wrapper">
              <div
                className="bar"
                style={{
                  width: `${barWidth}%`,
                  backgroundImage: `linear-gradient(90deg, #107c10 ${fillPercent}%, #3d3d3d
                    ${fillPercent}%)`,
                }}
              >
                <Label>{project.name}</Label>
                <Label>
                  {projectsFixed[project.name].fteCommitted}
                  {" / "}
                  {project.fte}
                </Label>
              </div>
              <Button style={{ marginLeft: "10px" }}>
                <DeleteRegular />
              </Button>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default BarChart;
