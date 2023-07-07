
export const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "",
    },
  },
};

export const barChartLabels = [
  { month: "January", completed: 300, pending: 500 },
  { month: "February", completed: 200, pending: 300 },
  { month: "March", completed: 400, pending: 20 },
  { month: "April", completed: 200, pending: 200 },
  { month: "May", completed: 300, pending: 500 },
  { month: "June", completed: 300, pending: 500 },
  { month: "July", completed: 300, pending: 500 },
];

export const ticketData = {
  labels: barChartLabels.map((o) => o.month),
  datasets: [
    {
      label: "pending",
      data: barChartLabels.map((d) => d.pending),
      backgroundColor: "#fcbf19",
    },
    {
      label: "completed",
      data: barChartLabels.map((d) => d.completed),
      backgroundColor: "#8ce6c6",
    },
  ],
};

export const pieChartData = {
  labels: ["Voice service", "Data service", "SOS", "LOS"],
  datasets: [
    {
      label: "Tickets",
      data: [500, 800, 100, 1000],
      backgroundColor: ["#8ccdff", "#3e81b5", "#05daed", "#01BAEF"],
    },
  ],
};
