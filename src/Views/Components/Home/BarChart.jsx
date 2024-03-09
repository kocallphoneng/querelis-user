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
    <div className="lg:col-span-8 col-span-12 min-h-[350px] bg-white p-5 rounded-[20px] ">
      <span className="text-[18px] font-[700]">Tickets</span>
      <div className=" overflow-x-auto">
        <Bar
          height={140}
          options={barChartOptions}
          style={{ minHeight: "350px", minWidth: "500px", fontSize: '10px !important' }}
          data={ticketData}
        />
      </div>
    </div>
  );
};

export default BarChart;
