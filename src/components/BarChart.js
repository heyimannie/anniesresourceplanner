import React from 'react';

const BarChart = (projects) => {
  let total = 0
  projects.projects.map((project) => {total += project.fte})
  return <div className="bar-chart-placeholder">Total FTE: {total}</div>;
};

export default BarChart;
