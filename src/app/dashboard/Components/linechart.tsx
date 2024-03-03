import React from 'react';
import { ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { fetchData } from "./data";
import PriceChart from "./Chart";
const chartOptions: ChartOptions<'line'> = {
scales: {
    x: {
        type: 'time',
        time: {
          parser: 'yyyy-mm-dd',
          unit: 'day',
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
class YourComponent extends React.Component {
  state = {
    chartData: null
  };
  async componentDidMount() {
    // Fetch the chart data here. This is just a placeholder.
    const data = await fetchData();
    this.setState({ chartData: data });
  }

  render() {
    const { chartData } = this.state;

    // Don't render the PriceChart component until the data is fetched.
    if (!chartData) {
      return null;
    }

    return <PriceChart data={chartData}/>;
  }
}

export default YourComponent;