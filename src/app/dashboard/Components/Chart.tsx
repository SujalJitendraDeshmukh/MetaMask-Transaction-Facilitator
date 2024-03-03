import { ChartOptions } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchData } from "./data";
import 'chartjs-adapter-date-fns';
import { TimeScale,Chart,LinearScale,PointElement,LineElement,CategoryScale} from 'chart.js';
import 'chartjs-adapter-date-fns';
Chart.register(TimeScale,LinearScale,PointElement,LineElement,CategoryScale);

// Rest of your code here



const PriceChart = ({ data }: { data: any }) => {
    const chartOptions: ChartOptions<'line'> = {
          responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'ETH Price (USD) over Time',
    },
  },
    };

    return <Line data={data} options={chartOptions} />;
};


export default PriceChart;
