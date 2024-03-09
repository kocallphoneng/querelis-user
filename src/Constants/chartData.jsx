export const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        // This more specific font property overrides the global property
        font: {
          size: 12,
        },
      },
    },
    title: {
      display: false,
      text: "",
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 10,
          family: "vazir",
        },
      },
    },
    y: {
      ticks: {
        font: {
          size: 10,
          family: "vazir",
        },
      },
    },
    xAxes: [
      {
        fontSize: 10,
      },
    ],
  },
};

export const barChartLabels = [
  { month: "Jan", completed: 300, pending: 500 },
  { month: "Feb", completed: 200, pending: 300 },
  { month: "Mar", completed: 400, pending: 20 },
  { month: "Apr", completed: 200, pending: 200 },
  { month: "May", completed: 300, pending: 500 },
  { month: "Jun", completed: 300, pending: 500 },
  { month: "Jul", completed: 300, pending: 500 },
];

export const ticketData = {
  labels: barChartLabels.map((o) => o.month),
  datasets: [
    {
      label: "Escalated",
      data: barChartLabels.map((d) => d.pending),
      backgroundColor: "#ff5874ec",

    },
    {
      label: "Resolved",
      data: barChartLabels.map((d) => d.completed),
      backgroundColor: "#89fc89",
      
    },
  ],
};

export const pieChartData = {
  labels: ["Call service", "Data service", "Coverage", "SMS"],
  datasets: [
    {
      label: "Tickets",
      data: [500, 800, 100, 1000],
      backgroundColor: ["#ff2d5041", "#80008080", "#37f037", "#2bf3f379"],
    },
  ],
};
