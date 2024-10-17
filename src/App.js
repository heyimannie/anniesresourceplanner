import React, { useState } from "react";
import "./App.css";
import CreateNewProject from "./components/CreateNewProject";
import { ResourceFTEBox } from "./components/ResourceFTEBox/ResourceFTEBox";
import BarChart from "./components/BarChart";

import {
  FluentProvider,
  webLightTheme,
  Button,
} from "@fluentui/react-components";

function App() {
  const [projects, setProjects] = useState([]);
  const [resources, setResources] = useState([
    { name: "test name", projects: [{ name: "test", fte: 1 }] },
  ]);

  const addProject = (name, fte) => {
    setProjects([...projects, { name, fte }]);
  };

  const addResource = () => {
    setResources([...resources, { name: "", projects: [] }]);
  };

  const updateResource = (index, name, projects) => {
    const updatedResources = [...resources];

    updatedResources[index] = { name, projects };
    console.log(updatedResources);
    setResources(updatedResources);
  };

  return (
    <FluentProvider theme={webLightTheme}>
      <div className="App">
        <h1>THIS IS A RESOURCE PLANNER</h1>
        <CreateNewProject addProject={addProject} />
        <div className="main-content">
          <div className="bar-chart">
            <BarChart projects={projects} />
          </div>
          <div className="resources">
            <h3>Resources</h3>
            <Button onClick={addResource}>Add new resource</Button>
            {resources.map((resource, index) => (
              <ResourceFTEBox
                key={index}
                projects={projects}
                resource={resource}
                updateResource={updateResource}
                resourceIndex={index}
              />
            ))}
          </div>
        </div>
      </div>
    </FluentProvider>
  );
}

export default App;
