import React from 'react'
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['BTC', 'ETH', 'USD'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3],
            // color2 of CoinItem, DE opacity
            backgroundColor: [
                '#BCD9FFDE',
                '#FCF9D9DE',
                '#A7E6BADE'
            ],
            borderColor: [
                '#BCD9FFDE',
                '#FCF9D9DE',
                '#A7E6BADE'
            ],
            borderWidth: 1,
        },
    ],
};

export const PieChart: React.FC = () => {
    return <Doughnut data={data} />
}