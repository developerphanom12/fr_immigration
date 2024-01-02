import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = () => {
    const options = {
      series: [44, 55, 41],
      chart: {
        type: 'donut',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 350,
            },
            dataLabels: {
                enabled: false,
              },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  
    return <ReactApexChart options={options} series={options.series} type="donut" />;
  };
  
  export default DonutChart;