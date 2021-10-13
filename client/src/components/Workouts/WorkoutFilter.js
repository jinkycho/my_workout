import React from 'react'
import styled from 'styled-components'

function WorkoutFilter(props) {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    const StyledWorkoutFilter = styled.div`
        position: absolute;
        right: 0;
        top: 0;

        & select{
            padding: 0 10px;
            height: 27px;
        }
    `;

    return (
        <StyledWorkoutFilter className='workout-filter'>
            <div className="workout-filter__control">
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>
            </div>
        </StyledWorkoutFilter>
    )
}

export default WorkoutFilter
