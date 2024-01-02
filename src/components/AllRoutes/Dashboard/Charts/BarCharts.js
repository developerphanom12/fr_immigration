import React from "react";
import ReactApexChart from "react-apexcharts";

const BarCharts = () => {
  const options = {
    series: [
      {
        name: " Last Year",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "This Year",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
     
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "65%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "Total Applications",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={options.series}
      type="bar"
      height={350}
    />
  );
};

export default BarCharts;
