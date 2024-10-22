import React from "react";
import {
  Input,
  Button,
  Dropdown,
  Option,
  useId,
} from "@fluentui/react-components";
import { DeleteRegular } from "@fluentui/react-icons";

export const ProjectInput = ({
  project,
  projects,
  updateResourceProjects,
  index,
}) => {
  const dropdownId = useId("dropdown-default");

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
        placeholder="FTE"
        value={project.fte}
        onChange={(e) => {
          if (e.target.valueAsNumber >= 0 || isNaN(e.target.valueAsNumber)) {
            updateResourceProjects(index, project.name, e.target.valueAsNumber);
          }
        }}
        style={{ width: "60px", marginLeft: "5px" }}
      />
      <Button style={{ marginLeft: "10px" }}>
        <DeleteRegular />
      </Button>
    </div>
  );
};
