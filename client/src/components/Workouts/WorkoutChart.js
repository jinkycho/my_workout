import React from 'react'
import Chart from '../Chart/Chart'

function WorkoutChart(props) {
    const chartDataPoints = [
        {label: 'Jan', value : 0},
        {label: 'Feb', value : 0},
        {label: 'Mar', value : 0},
        {label: 'Apr', value : 0},
        {label: 'May', value : 0},
        {label: 'Jun', value : 0},
        {label: 'Jul', value : 0},
        {label: 'Aug', value : 0},
        {label: 'Sep', value : 0},
        {label: 'Oct', value : 0},
        {label: 'Nov', value : 0},
        {label: 'Dec', value : 0},
    ];

    for(const workout of props.workout){
        const workoutTime = workout.time;

        //운동시간 -> 시간/분을 분리
        let hourSlice = workoutTime.slice(0, 2);
        let timeSlice = workoutTime.slice(3);

        //시간 * 60 + 분을 계산해서 차트 값 구하기
        let timeCal = parseInt(hourSlice) * 60 + parseInt(timeSlice);

        //운동 날짜의 Month를 chartDataPoints 키 값으로 사용하여 차트 값 넣기
        const workoutMonth = workout.date.getMonth(); // Starting at 0(Jan)
        chartDataPoints[workoutMonth].value += timeCal;
    }

    return (
        <div>
            <Chart dataPoints={chartDataPoints}/>
        </div>
    )
}

export default WorkoutChart
