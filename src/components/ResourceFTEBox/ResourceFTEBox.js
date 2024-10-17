import React, { useState } from 'react';
import {ProjectInput} from './ProjectInputs'

export const ResourceFTEBox = ({ projects, resource }) => {
  const [color, setColor] = useState('#000000');

  return (
    <div className="resource-fte-box">
      <input
        type="text"
        placeholder="Resource Name"
        value={resource.name}
        onChange={(e) => {resource.name = e.target.value}}
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <ProjectInput project={resource.projects[0]} projects={projects}></ProjectInput>
      </div>
  )}
