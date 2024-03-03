
export const fetchData = async () => {
  return fetch('https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=ETH&market=USD&interval=5min&apikey=demo')
    .then(response => response.json())
    .then(data => {
      if(data)
      {
      const dates = Object.keys(data['Time Series Crypto (5min)']);
      const prices =[];
      for (let date of dates) {
        prices.push(data['Time Series Crypto (5min)'][date]['4. close']);
      }
      console.log(prices);
      console.log(dates);
      return {
        labels: dates,
        datasets: {
          label: 'ETH Price (USD)',
          data: prices,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
      };}
    });

};