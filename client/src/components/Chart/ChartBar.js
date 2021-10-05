import React from 'react'
import styled from 'styled-components';

function ChartBar(props) {
    let barFillHeight = '0%';

    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value / 1800) * 100) + '%';
    }

    const ChartBar = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        & .chart-bar__inner{
            height: 100%;
            width: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }

        & .chart-bar__fill{
            background-color: #F77A7A;
            width: 100%;
            height: ${barFillHeight};
            transition: all 0.3s ease-out;
        }

        & .chart-bar__label{
            font-weight: bold;
            font-size: 0.5rem;
            text-align: center;
        }
    `;
    return (
            <ChartBar>
                <div className="chart-bar__inner">
                    <div className="chart-bar__fill"></div>
                    <div className="chart-bar__label">{props.label}</div>
                </div>
            </ChartBar>
    )
}

export default ChartBar
