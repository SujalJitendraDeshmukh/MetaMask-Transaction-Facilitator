import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchData } from './fetch';
export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'ETH Price Chart',
      },
    },
  };
export const EthereumChart = () => {
  const [chartData, setChartData] = useState({});
    useEffect(() => {
    fetchData().then(data => {
      setChartData(data);
    });
  }, []);



  return (
    <div>
      <Line
        options={options}
        data={chartData}
      />
    </div>
  );
};

