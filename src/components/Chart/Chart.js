import React from 'react'
import ChartBar from './ChartBar'
import Card from '../UI/Card';
import './Chart.css';

function Chart(props) {
    console.log(props.dataPoints)
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <Card className="chart">
            {props.dataPoints.map(dataPoint => 
                <ChartBar 
                key = {dataPoint.label} 
                value={dataPoint.value} 
                maxValue={totalMaximum}
                label = {dataPoint.label} 
                />)}
        </Card>
    )
}

export default Chart
