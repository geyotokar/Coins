import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";
import {Pie} from "react-chartjs-2";
import React from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['BTC', 'ETH', 'USD'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1,
        },
    ],
};

export const PieChart: React.FC = () => {
    return <Pie data={data} />
}