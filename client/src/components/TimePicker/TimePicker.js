import React, { useState, useRef } from 'react'
import styled from 'styled-components';

function TimePicker(props) {
    
    const [clickedHour, setClickedHour] = useState('');
    const [clickedMinutes, setClickedMinutes] = useState('');

    const StyledTimePicker = styled.div`
        display: flex;
        height: 100px;
        margin: 1rem 0;

        & .TimePicker__time{
            align-self: center;
            letter-spacing: 2px;
            font-weight: bold;
        }

        & .TimePicker__hour,
        & .TimePicker__minute{
            display: flex;
            flex-direction: column;
            overflow-y: scroll;
            list-style: none;
            --ms-overflow-style: none;
            position: relative;
        }

        & .TimePicker__hour::-webkit-scrollbar,
        & .TimePicker__minute::-webkit-scrollbar{
            display: none;
        }

        & .TimePicker__hour > li{
        }

        & button{
            border: none;
            cursor: pointer;
            background: #fff;
            font-size: 16px;
            color: #d2d2d2;

        }

        & .clicked{
            color : #333;
            font-weight: bold;
        }
    `;

    const hourEl = useRef(null);


    const hourClickHandler = (hour, e) => {
        e.preventDefault();
        setClickedHour(hour);
    }

    const minuteClickHandler = (minutes, e) =>{
        e.preventDefault();

        if(clickedHour === ''){
            alert('운동 시간을 먼저 선택해주세요.');
            return;
        }

        if(clickedHour === 0 && minutes === 0){
            alert('운동 시간은 0시간 0분이 될 수 없습니다.');
            return;
        }


        setClickedMinutes(minutes);

        let settingHour = clickedHour < 10 ? '0' + clickedHour : clickedHour;
        let settingMinutes = minutes < 10 ? '0' + minutes : minutes;

        if(settingHour && settingMinutes){
            props.onTimeHandler(settingHour + ':' + settingMinutes);  
        }
    } 

    return (
        <StyledTimePicker>
            <p className="TimePicker__time">
                {clickedHour}시간 {clickedMinutes}분
            </p>

            <ul className="TimePicker__hour">
                {[...Array(12)].map((v,hour) =>
                    <li key={hour}>
                        <button
                            onClick={(e) => hourClickHandler(hour, e)} 
                            className={clickedHour === hour ? 'clicked' : ''}
                            ref={hourEl}>
                            {hour}시간
                        </button>
                    </li>
                )}    
            </ul>
            
            <ul className="TimePicker__minute">
                {[...Array(60)].map((v,minutes) => 
                    <li key={minutes}>
                        <button
                            onClick={(e) => minuteClickHandler(minutes, e)}
                            className={clickedMinutes === minutes ? 'clicked': ''}>
                            {minutes}분
                        </button>
                    </li> 
                )}
            </ul>
        </StyledTimePicker>
    )
}

export default TimePicker
