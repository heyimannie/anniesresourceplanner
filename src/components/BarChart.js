import React from "react";
import { Card, Button, Label } from "@fluentui/react-components";
import { DeleteRegular } from "@fluentui/react-icons";

const BarChart = ({ projects, resources, deleteProject }) => {
  if (projects.length === 0) return <Card>No projects to display</Card>;
  const projectsFixed = {};
  for (const project of projects) {
    projectsFixed[project.name] = {
      fteCommitted: 0,
      colorFTEPair: [],
    };
  }
  for (const resource of resources) {
    for (const project of resource.projects) {
      if (project.name && projectsFixed[project.name] && project.fte) {
        projectsFixed[project.name].colorFTEPair.push({
          color: resource.color,
          fte: project.fte,
        });
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
          let gradientString = "";
          let total = 0;

          projectsFixed[project.name].colorFTEPair.map((pair) => {
            const sectionPercent = (pair.fte / project.fte) * 100;
            gradientString += `${pair.color} ${total}% ${
              total + sectionPercent
            }%, `;
            total += sectionPercent;
          });
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
                  backgroundImage: `linear-gradient(90deg, ${gradientString}#3d3d3d
                    ${fillPercent}% 100%)`,
                }}
              >
                <Label>{project.name}</Label>
                <Label>
                  {projectsFixed[project.name].fteCommitted}
                  {" / "}
                  {project.fte}
                </Label>
              </div>
              <Button
                style={{ marginLeft: "10px" }}
                onClick={() => deleteProject(project.name)}
              >
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
