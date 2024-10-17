import React, { useState } from 'react';

const CreateNewProject = ({ addProject }) => {
  const [projectName, setProjectName] = useState('');
  const [reqFte, setReqFte] = useState(0.0);

  return (
    <div className="create-new-project">
      <h3>Create New Project</h3>
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Required Total FTE"
          value={reqFte}
          onChange={(e) => setReqFte(e.target.valueAsNumber)}
        />
        <button type="submit" onClick={() => addProject(projectName, reqFte)}>Submit</button>
    </div>
  );
};

export default CreateNewProject;
