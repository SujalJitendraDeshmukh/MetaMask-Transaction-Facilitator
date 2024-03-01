import { PieChart,Pie,Tooltip } from "recharts";

const data = [{
    name:'Ethereum',value:4000
},
{
    name:'Bitcoin',value:3000
},
{
    name:'Ripple',value:2000
},
{
    name:'Litecoin',value:2780
},
{
    name:'Dash',value:1890
}
];
export const Piechart = () => {
return (
    <div className="App">
        <PieChart width={400} height={400}>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
            <Tooltip />
        </PieChart>
        </div>
);
};
