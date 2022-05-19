import React from 'react'
import '../styles/style.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

const Portfolio: React.FC = React.memo(() => {
    return <div>
        <div>любые данные</div>
        <div>прибавить или отнять некоторую сумму</div>
        <div>оценка портфеля в долларах: задиспатчить курс, сложить</div>

        <div className='b c'>BTC Bitcoin</div>
        <div className='b c'>ETH Ether</div>
        <div className='b c'>USD US Dollar</div>
        <div className='pie-container'><Pie data={data} /></div>
    </div>
})

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

export default Portfolio