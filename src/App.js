import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [projectName, setProjectName] = useState('');
    const [fteRequired, setFteRequired] = useState('');
    const [projects, setProjects] = useState([]);
    const [resources, setResources] = useState(Array(3).fill({ name: '', color: '#000000', fte: '' }));

    const handleProjectSubmit = () => {
        if (projectName && fteRequired) {
            setProjects([...projects, projectName]);
            setProjectName('');
            setFteRequired('');
            alert(`Project '${projectName}' added successfully!`);
        } else {
            alert('Please enter both Project Name and Total FTE Required.');
        }
    };

    const handleResourceChange = (index, field, value) => {
        const updatedResources = [...resources];
        updatedResources[index] = { ...updatedResources[index], [field]: value };
        setResources(updatedResources);
    };

    return (
        <div className="dashboard">
            <div className="new-project-box">
                <h2>Create New Project</h2>
                <input
                    type="text"
                    placeholder="Project Name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Total FTE Required"
                    value={fteRequired}
                    onChange={(e) => setFteRequired(e.target.value)}
                />
                <button onClick={handleProjectSubmit}>Submit</button>
            </div>

            <div className="resource-box">
                {resources.map((resource, index) => (
                    <div key={index}>
                        <h3>Resource {index + 1}</h3>
                        <input
                            type="text"
                            placeholder="Resource Name"
                            value={resource.name}
                            onChange={(e) => handleResourceChange(index, 'name', e.target.value)}
                        />
                        <input
                            type="color"
                            value={resource.color}
                            onChange={(e) => handleResourceChange(index, 'color', e.target.value)}
                        />
                        <select
                            onChange={(e) => handleResourceChange(index, 'project', e.target.value)}
                        >
                            <option value="">Select Project</option>
                            {projects.map((project, idx) => (
                                <option key={idx} value={project}>{project}</option>
                            ))}
                        </select>
                        <input
                            type="number"
                            placeholder="FTE Value"
                            value={resource.fte}
                            onChange={(e) => handleResourceChange(index, 'fte', e.target.value)}
                        />
                    </div>
                ))}
                <button>Update</button>
            </div>

            <div className="large-box"></div>
        </div>
    );
};

export default App;