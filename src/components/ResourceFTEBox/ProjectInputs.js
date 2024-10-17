import React, { useState } from 'react';

export const ProjectInput = ({ project, projects }) => {
  return (
    <div className="resource-fte-box">
      <select
        value={project.name}
        onChange={(e) => project.name = e.target.value}
      >
        <option value="">Select Project</option>
        {projects.map((project, index) => (
          <option key={index} value={project.name}>
            {project.name}
          </option>
        ))}
      </select>
      
      <input
        type="number"
        placeholder="Proposed FTE"
        value={1}
        onChange={(e) => {}}
      />
      </div>
  )}
