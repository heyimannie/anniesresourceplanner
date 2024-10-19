import React, { useState } from "react";
import { ProjectInput } from "./ProjectInputs";
import { Input, Button, Card } from "@fluentui/react-components";

export const ResourceFTEBox = ({
  projects,
  resource,
  updateResource,
  resourceIndex,
}) => {
  const [resourceProjects, setResourceProjects] = useState(resource.projects);

  const updateResourceProjects = (projectIndex, name, fte) => {
    const updatedProjects = [...resourceProjects];

    updatedProjects[projectIndex] = { name, fte };

    setResourceProjects(updatedProjects);
    updateResource(
      resourceIndex,
      resource.name,
      resource.color,
      updatedProjects
    );
  };
  return (
    <Card style={{ padding: "5px" }}>
      <div style={{ display: "flex", "justify-content": "space-between" }}>
        <div>
          <Input
            type="color"
            value={resource.color}
            onChange={(e) =>
              updateResource(
                resourceIndex,
                resource.name,
                e.target.value,
                projects
              )
            }
          />
          <Input
            type="text"
            placeholder="Resource Name"
            value={resource.name}
            onChange={(e) => {
              updateResource(
                resourceIndex,
                e.target.value,
                resource.color,
                projects
              );
            }}
            style={{ marginLeft: "10px", width: "270px" }}
          />
        </div>
        <Button
          onClick={() => {
            setResourceProjects([...resourceProjects, { fte: 0 }]);
          }}
          style={{ marginLeft: "10px" }}
        >
          Add project
        </Button>
      </div>
      {resourceProjects.map((project, index) => (
        <ProjectInput
          project={project}
          projects={projects}
          key={index}
          index={index}
          updateResourceProjects={updateResourceProjects}
        />
      ))}
    </Card>
  );
};
