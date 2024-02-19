import React from 'react';
import { Line } from 'react-chartjs-2';

function ChartComponent({ data }) {
  // Create a data object for Chart.js using the fetched data
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        label: 'Sample Data',
        data: data.map(item => item.value),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="text-box">
      <h1>Chart</h1>
      <p>
        <Line data={chartData} />
      </p>
    </div>
  );
}

export default ChartComponent;
