
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import './SalesChart.scss';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  datasets: [
    {
      label: 'Sales',
      data: [3000, 4000, 3200, 5000, 4200, 6100, 4800, 5300],
      borderColor: '#4a6cf7',
      backgroundColor: 'rgba(74, 108, 247, 0.1)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#4a6cf7',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        color: '#6b7280',
      },
    },
    x: {
      ticks: {
        color: '#6b7280',
      },
    },
  },
};

const SalesChart = () => {
  return (
    <div className="sales-chart">
      <h3>Sales Overview</h3>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesChart;
