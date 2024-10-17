import React from 'react';

const BarChart = ({ projects }) => {
  let total = projects.reduce((sum, project) => sum + project.fte, 0);

  return (
    <div className="bar-chart-container">
      <h4>Total FTE Required (All Projects): {total}</h4>
      <div className="bars">
        {projects.map((project, index) => {
          const barWidth = (project.fte / total) * 100 || 0; // Calculate width as a percentage
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
