import React from "react";
import { Input, Dropdown, Option, useId } from "@fluentui/react-components";

export const ProjectInput = ({
  project,
  projects,
  updateResourceProjects,
  index,
}) => {
  const dropdownId = useId("dropdown-default");
  const options = [
    "Cat",
    "Caterpillar",
    "Corgi",
    "Chupacabra",
    "Dog",
    "Ferret",
    "Fish",
    "Fox",
    "Hamster",
    "Snake",
  ];

  return (
    <div className="resource-fte-inputs">
      <Dropdown
        aria-labelledby={dropdownId}
        placeholder="Select a project"
        onOptionSelect={(e, y) => {
          updateResourceProjects(index, y.optionValue, project.fte);
        }}
      >
        {projects.map((option) => (
          <Option key={option.name}>{option.name}</Option>
        ))}
      </Dropdown>

      <Input
        type="number"
        placeholder="Proposed FTE"
        value={project.fte}
        onChange={(e) => {
          updateResourceProjects(index, project.name, e.target.value);
        }}
      />
    </div>
  );
};
