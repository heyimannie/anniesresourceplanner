import React, { useState } from 'react';
import './App.css';
import CreateNewProject from './components/CreateNewProject';
import {ResourceFTEBox} from './components/ResourceFTEBox/ResourceFTEBox';
import BarChart from './components/BarChart';

function App() {

  <h1>THIS IS A RESOURCE PLANNER</h1>

  const [data, setData] = useState({
    projects: [
      {
        name: 'project 1', fte: 0.0
      },
      {
        name: 'project B', fte: 0.0
      }
    ],
    resources: [{name: 'Resource Name', projects: [{name: 'test'}]}, {name: 'Resource Name', projects: [{name: 'test'}]}]
  });

  const addProject = (projectName, fte) => {
    console.log('adding project')
    setData({...data, projects: [...data.projects, {name: projectName, fte}]})
  };

  return (
    <div className="App">
      <CreateNewProject addProject={addProject} />
      <div className="main-content">
        <div className="bar-chart">
          <BarChart projects={data.projects} />
        </div>
        <div className="resources">
          {data.resources.map((resource, index) => (
            <ResourceFTEBox key={index} projects={data.projects} resource={resource}/>
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
