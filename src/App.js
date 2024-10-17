import React, { useState } from 'react';
import './App.css';
import CreateNewProject from './components/CreateNewProject';
import ResourceFTEBox from './components/ResourceFTEBox';
import BarChart from './components/BarChart';

function App() {
  const [projects, setProjects] = useState([]);

  const addProject = (projectName, fte) => {
    setProjects([...projects, { projectName, fte }]);
  };

  return (
    <div className="App">
      <CreateNewProject addProject={addProject} />
      <div className="main-content">
        <div className="bar-chart">
          <BarChart />
        </div>
        <div className="resources">
          {[...Array(6)].map((_, index) => (
            <ResourceFTEBox key={index} projects={projects} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
