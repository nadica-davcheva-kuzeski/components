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

const HealthcareAffordabilityIndexChart = ({ blok }) => {
  const data = {
    labels: ["2021", "2022", "2023"],
    datasets: [
      {
        label: "Cost Desperate",
        backgroundColor: "#013455",
        borderWidth: 1,
        data: [12, 59, 5],
      },
      {
        label: "Cost Insecure",
        backgroundColor: "#007db1",
        borderWidth: 1,
        data: [12, 59, 5],
      },
      {
        label: "Cost Secure",
        backgroundColor: "#83c5e0",
        borderWidth: 1,
        data: [12, 59, 5],
      },
    ],
  };

  const config = {
    type: "bar",
    responsive: true,
    maintainAspectRatio: true,
    indexAxis: blok.direction,
    animation: false,
    plugins: {
      legend: {
        position: blok.legend_position,
      },
      title: {
        display: blok.display_title,
        text: blok.title,
      },
      tooltips: {
        displayColors: false,
        titleColor: "#fff",
      },
    },
    animation:
      blok.animation === true
        ? {
            duration: 1000,
            easing: "easeInExpo",
            delay: 30,
          }
        : false,
    scales: {
      x: {
        stacked: blok.display_stacked,
      },
      y: {
        stacked: blok.display_stacked,
        beginAtZero: blok.begin_at_zero,
      },
    }
  };

  return (
    <div className="text-center mt-8 mb-8">
      <Bar data={data} options={config} />
    </div>
  );
};

export default HealthcareAffordabilityIndexChart;
