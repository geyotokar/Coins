import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Exchange rate to USD',
        },
    },
    scales: {
        y: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
        },
        y1: {
            type: 'linear' as const,
            display: true,
            position: 'right' as const,
            grid: {
                drawOnChartArea: false,
            },
        },
    },
};


const thisDay = new Date()
// @ts-ignore
const today = Date.parse(thisDay)
const day = 86400000
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
const milliseconds = [today-6*day, today-5*day, today-4*day, today-3*day, today-2*day, today-day, today];
const dates = milliseconds.map(m => new Date(m))
//const requestDates = dates.map(d => d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear())
const labels = dates.map(d => '' + d.getDate() + ' ' + months[d.getMonth()] + '')


export const Chart: React.FC = () => {
//    const dispatch = useDispatch()
//    useEffect (() => {
//        dispatch(getBTCHistory(requestDates[0], 0))
//        dispatch(getBTCHistory(requestDates[1], 1))
//        dispatch(getBTCHistory(requestDates[2], 2))
//        dispatch(getBTCHistory(requestDates[3], 3))
//        dispatch(getBTCHistory(requestDates[4], 4))
//        dispatch(getBTCHistory(requestDates[5], 5))
//        dispatch(getBTCHistory(requestDates[6], 6))
//    }, [dispatch])
//    const historyBTCValues = useSelector((state: AppStateType) => state.historyBTCValues)

    const data = {
        labels,
        datasets: [
            {
                label: 'BTC',
                data: [15, 10, 26, 8, 0, 18, 6],//[historyBTCValues]
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                yAxisID: 'y',
            },
            {
                label: 'ETH',
                data: [6, 18, 0, 8, 26, 10, 15],
                borderColor: 'rgb(255, 206, 86)',
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
                yAxisID: 'y1',
            },
        ],
    }

    return <Line options={options} data={data}/>;
}