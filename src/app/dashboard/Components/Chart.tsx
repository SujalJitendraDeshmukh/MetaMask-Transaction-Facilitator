import { ChartOptions } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchData } from "./data";
// const Chart = () => {


//   return <PriceChart data={chartData} />;
// };
// interface ChartData {
//   labels: string[];
//   datasets: {
//     label: string;
//     data: number[];
//     borderColor: string;
//     backgroundColor: string;
//   }[];
// }



const PriceChart = ({ data }: { data: {}}) => {
    const chartOptions: ChartOptions<'line'> = {
        scales: {
            x: {
                type: 'time',
                time: {
                  parser: 'YYYY-MM-DD HH:mm:ss',
                  tooltipFormat: 'll HH:mm',
                  unit: 'minute',
                  displayFormats: {
                    'minute': 'HH:mm'
                  },
                },
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Price (USD)'
                }
            }
        }
    };

    return <Line data={data} options={chartOptions} />;
};


export default PriceChart;
