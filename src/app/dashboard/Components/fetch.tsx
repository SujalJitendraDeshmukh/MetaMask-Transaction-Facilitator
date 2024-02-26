
export const fetchData = () => {
  return fetch('https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=ETH&market=USD&interval=5min&apikey=demo')
    .then(response => response.json())
    .then(data => {
      const dates = Object.keys(data['Time Series Crypto (5min)']);
      const prices = dates.map(date => data['Time Series Crypto (5min)'][date]['1. open']);
      return {
        labels: dates,
        datasets: [{
          label: 'ETH Price (USD)',
          data: prices,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }]
      };
    });
};