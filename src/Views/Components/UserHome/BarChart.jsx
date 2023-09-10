import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { barChartOptions, ticketData } from "../../../Constants/chartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  return (
    <div className="col-span-8 h-[350px] bg-white p-5 rounded-md">
      <span className="text-[18px] font-[700]">Task Summary</span>
      <Bar height={140} options={barChartOptions} data={ticketData} />;
    </div>
  );
};

export default BarChart;
