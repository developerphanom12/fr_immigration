import React from 'react';
import ReactApexChart from 'react-apexcharts';

class DonutChart extends React.Component {
  constructor(props) {
    super(props);

    const seriesData = [props?.data?.approved, props?.data?.totalApplications, props?.data?.pending];
    
    this.state = {
      series: seriesData,
      options: {
        chart: {
          type: 'donut',  
        },
      
        labels: ["Approved", "Total Applications", "Pending"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 350,
                type: 'donut', 
              },
              dataLabels: {
                enabled: false,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
        />
      </div>
    );
  }
}

export default DonutChart;
