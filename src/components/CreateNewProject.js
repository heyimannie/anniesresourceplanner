import React, { useState } from "react";
import { Input, Button } from "@fluentui/react-components";

const CreateNewProject = ({ addProject }) => {
  const [projectName, setProjectName] = useState("");
  const [reqFte, setReqFte] = useState(0.0);

  return (
    <div className="create-new-project">
      <h3>Create New Project</h3>
      <Input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Required Total FTE"
        value={reqFte}
        onChange={(e) => setReqFte(e.target.valueAsNumber)}
      />
      <Button type="submit" onClick={() => addProject(projectName, reqFte)}>
        Submit
      </Button>
    </div>
  );
};

export default CreateNewProject;
