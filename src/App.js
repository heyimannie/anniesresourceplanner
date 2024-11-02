import React, { useState } from "react";
import "./App.css";
import CreateNewProject from "./components/CreateNewProject";
import { ResourceFTEBox } from "./components/ResourceFTEBox/ResourceFTEBox";
import BarChart from "./components/BarChart";

import {
  FluentProvider,
  teamsDarkTheme,
  Button,
  Card,
} from "@fluentui/react-components";

function App() {
  const randomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const [projects, setProjects] = useState([]);
  const [resources, setResources] = useState([]);

  const addProject = (name, fte) => {
    setProjects([...projects, { name, fte }]);
  };

  const deleteProject = (name) => {
    const updatedProjects = projects.filter((project) => project.name !== name);
    setProjects(updatedProjects);
  };

  const addResource = () => {
    setResources([
      ...resources,
      {
        name: "",
        color: randomColor(),
        projects: [],
      },
    ]);
  };

  const updateResource = (index, name, color, projects) => {
    const updatedResources = [...resources];

    updatedResources[index] = { name, color, projects };
    setResources(updatedResources);
  };

  return (
    <FluentProvider theme={teamsDarkTheme}>
      <div className="App">
        <h1>THIS IS A RESOURCE PLANNER</h1>
        <CreateNewProject addProject={addProject} />
        <div className="main-content">
          <div className="bar-chart">
            <BarChart
              projects={projects}
              resources={resources}
              deleteProject={deleteProject}
            />
          </div>
          <Card style={{ minWidth: "35%" }}>
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
          </Card>
        </div>
      </div>
    </FluentProvider>
  );
}

export default App;
