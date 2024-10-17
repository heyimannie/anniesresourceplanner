import React, { useState } from 'react';

const CreateNewProject = ({ addProject }) => {
  const [projectName, setProjectName] = useState('');
  const [fte, setFte] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectName && fte > 0) {
      addProject(projectName, fte);
      setProjectName('');
      setFte(0);
    }
  };

  return (
    <div className="create-new-project">
      <h3>Create New Project</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <input
          type="number"
          placeholder="FTE"
          value={fte}
          onChange={(e) => setFte(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateNewProject;
