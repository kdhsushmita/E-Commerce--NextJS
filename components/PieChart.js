import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);

const PieChart = ({ data }) => {
    const generateColors = (count) => {
        const colors = [];
        for (let i = 0; i < count; i++) {
            colors.push(getRandomColor());
        }
        return colors;
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const chartData = {
        labels: data.map(item => `${item.label}: ${item.data}`),
        datasets: [{
            data: data.map(item => item.data),
            backgroundColor: generateColors(data.length)
        }],
    };

    return (
        <div style={{ width: '300px', height: '300px' }}>
            <Pie data={chartData} />
        </div>
    );
};

export default PieChart;
