import React, {useState} from 'react'
import styled from 'styled-components';

function TimePicker(props) {
    
    const [clickedHour, setClickedHour] = useState('');
    const [clickedMinutes, setClickedMinutes] = useState('');

    const StyledTimePicker = styled.div`
        display: flex;
        height: 100px;
        margin: 1rem 0;

        & .TimePicker__hour,
        & .TimePicker__minute{
            display: flex;
            flex-direction: column;
            overflow-y: scroll;
        }

        & .TimePicker__hour,
        & .TimePicker__minute::-webkit-scrollbar-thumb{
            
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

    const hourClickHandler = (hour) => {
        setClickedHour(hour);
    }

    const minuteClickHandler = (minutes) =>{
        setClickedMinutes(minutes);

        if(clickedHour !== ''){
            let settingHour = clickedHour < 10 ? '0' + clickedHour : clickedHour;
            let settingMinutes = minutes < 10 ? '0' + minutes : minutes;
            props.onTimeHandler(settingHour + ':' + settingMinutes);
        }
    } 

    return (
        <StyledTimePicker>
            <div className="TimePicker__hour">
                {[...Array(12)].map((v,hour) => 
                    <button
                        key={hour}
                        onClick={() => hourClickHandler(hour)} 
                        className={clickedHour === hour ? 'clicked' : ''}>
                        {hour}시간
                    </button>)}
            </div>
            
            <div className="TimePicker__minute">
                {[...Array(60)].map((v,minutes) => 
                    <button
                        key={minutes}
                        onClick={() => minuteClickHandler(minutes)}
                        className={clickedMinutes === minutes ? 'clicked': ''}>
                        {minutes}분
                    </button>)}
            </div>
        </StyledTimePicker>
    )
}

export default TimePicker
