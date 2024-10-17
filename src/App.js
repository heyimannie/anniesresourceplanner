import React, { useState } from 'react';
import './App.css';
import CreateNewProject from './components/CreateNewProject';
import {ResourceFTEBox} from './components/ResourceFTEBox/ResourceFTEBox';
import BarChart from './components/BarChart';

function App() {

  const [data, setData] = useState({
    projects: [
   
    ],
    resources: [{name: 'Resource Name', projects: [{name: 'test'}]}, {name: 'Resource Name', projects: [{name: 'test'}]}]
  });

  const addProject = (projectName, fte) => {
    console.log('adding project')
    setData({...data, projects: [...data.projects, {name: projectName, fte}]})
  };

  return (
    <div className="App">
      <h1>THIS IS A RESOURCE PLANNER</h1>
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
