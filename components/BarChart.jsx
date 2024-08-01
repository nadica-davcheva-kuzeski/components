'use client';
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

const BarChart = ({ blok }) => {
  const data = {
    labels: ['Bus', 'Car', 'Train'],
    datasets: [
      {
        label:  'Transportation Type',
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [3, 5, 2],
      }
    ],
  };

  const options = {
    type: 'bar',
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: blok.legend_position || 'top',
      },
      title: {
        display: true,
        text: blok.chart_bar_label
      },
     
    },
    scales: {
      y: {
        beginAtZero: blok.begin_at_zero,
      },
    },
    tooltips: {
      displayColors: false,
    },
  };

  return (
    <div className="text-center mt-8 mb-8">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;