import React, { useState } from "react";
import { ProjectInput } from "./ProjectInputs";
import { Input, Button } from "@fluentui/react-components";

export const ResourceFTEBox = ({
  projects,
  resource,
  updateResource,
  resourceIndex,
}) => {
  const [color, setColor] = useState("#000000");
  const [resourceProjects, setResourceProjects] = useState(resource.projects);

  const updateResourceProjects = (projectIndex, name, fte) => {
    const updatedProjects = [...resourceProjects];

    updatedProjects[projectIndex] = { name, fte };

    console.log("updatedProjects", updatedProjects);
    setResourceProjects(updatedProjects);
    updateResource(resourceIndex, resource.name, updatedProjects);
  };
  console.log(resource);
  return (
    <div className="resource-fte-box">
      <Input
        type="text"
        placeholder="Resource Name"
        value={resource.name}
        onChange={(e) => {
          updateResource(resourceIndex, e.target.value, projects);
        }}
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <Button
        onClick={() => {
          setResourceProjects([...resourceProjects, {}]);
        }}
      >
        Add project
      </Button>
      {resourceProjects.map((project, index) => (
        <ProjectInput
          project={project}
          projects={projects}
          key={index}
          index={index}
          updateResourceProjects={updateResourceProjects}
        />
      ))}
    </div>
  );
};
