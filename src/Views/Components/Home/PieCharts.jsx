import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { pieChartData } from "../../../Constants/chartData";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieCharts = () => {
  return (
    <div className="lg:col-span-4 col-span-12 text-[] min-h-[350px]  bg-white p-5 rounded-[20px]">
      <span className="text-[18px] font-[700]">Ticket Categories</span>
      <Pie data={pieChartData} height={130} />;
    </div>
  );
};

export default PieCharts;
