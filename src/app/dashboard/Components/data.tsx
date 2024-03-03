export const fetchData = async () => {
  return fetch(`https://api.polygon.io/v2/aggs/ticker/X:ETHUSD/range/1/day/2022-01-01/2024-03-01?apiKey=fTMcLyYP8TUpFsT5bJ37nhr8E4k0aWWZ`)
    .then(response => response.json())
    .then(data => {
      if(data)
      {
      console.log(data);
      const prices = data.results.map((price: any) => price.c);
      // const dates = data.data.prices.map((price: any) => price.time);
      const dates = data.results.map((time: any) =>
      {
        const date = new Date(time.t);
        return date.toLocaleDateString();
      });
      //1709459990 convert this into date
      // const date = new Date(1709459990 * 1000);
      // console.log(date.toLocaleDateString());

      return {
        labels: dates,
        datasets: [{
          label: 'ETH Price (USD)',
          data: prices,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
      ]
      };}
    });

};