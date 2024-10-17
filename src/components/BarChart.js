import React from 'react';

const BarChart = ({ projects }) => {
  if (projects.length === 0) return <p>No projects to display</p>;

  // Find the project with the highest FTE
  const maxFte = Math.max(...projects.map(project => project.fte), 0);

  return (
    <div className="bar-chart-container">
      <h4>FTE Distribution (Max: {maxFte})</h4>
      <div className="bars">
        {projects.map((project, index) => {
          // Adjust each bar's width relative to the highest FTE
          const barWidth = (project.fte / maxFte) * 100 || 0; // Percentage width relative to the max FTE
          return (
            <div key={index} className="bar-wrapper">
              <div
                className="bar"
                style={{ width: `${barWidth}%`, backgroundColor: '#ccc' }}
              >
                <span className="bar-label">
                  {project.name}: {project.fte}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BarChart;
