"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
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

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const StackedBarChart = ({ blok }) => {
  const data = {
    labels: ["<  1","1 - 2","3 - 4","5 - 9","10 - 14","15 - 19","20 - 24","25 - 29","> - 29"],
    datasets: [
      {
        label: "Employee",
        backgroundColor: "#caf270",
        data: [12, 59, 5, 56, 58, 12, 59, 87, 45],
      },
      {
        label: "Engineer",
        backgroundColor: "#45c490",
        data: [12, 59, 5, 56, 58, 12, 59, 85, 23],
      },
      {
        label: "Government",
        backgroundColor: "#008d93",
        data: [12, 59, 5, 56, 58, 12, 59, 65, 51],
      },
      {
        label: "Political parties",
        backgroundColor: "#2e5468",
        data: [12, 59, 5, 56, 58, 12, 59, 12, 74],
      },
    ],
  };

  const config = {
    responsive: true,
    tooltips: {
      displayColors: true,
      callbacks: {
        mode: "x",
      },
    },
    scales: {
      xAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
          type: "linear",
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: "bottom" },
  };

  return (
    <div className="text-center mt-8 mb-8">
      <Bar data={data} options={config} />
    </div>
  );
};

export default StackedBarChart;
