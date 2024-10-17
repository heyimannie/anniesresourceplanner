import React, { useState } from 'react';

const ResourceFTEBox = ({ projects }) => {
  const [resourceName, setResourceName] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [color, setColor] = useState('#000000');
  const [fte, setFte] = useState(0);

  const handleUpdate = () => {
    console.log({ resourceName, selectedProject, color, fte });
  };

  const handleFteChange = (e) => {
    const value = parseFloat(e.target.value);
    if (value >= 0 && value <= 1) {
      setFte(value);
    }
  };

  return (
    <div className="resource-fte-box">
      <input
        type="text"
        placeholder="Resource Name"
        value={resourceName}
        onChange={(e) => setResourceName(e.target.value)}
      />
      <select
        value={selectedProject}
        onChange={(e) => setSelectedProject(e.target.value)}
      >
        <option value="">Select Project</option>
        {projects.map((project, index) => (
          <option key={index} value={project.projectName}>
            {project.projectName}
          </option>
        ))}
      </select>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <label htmlFor={`fte-${resourceName}`}>FTE</label
