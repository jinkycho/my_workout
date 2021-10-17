import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { set } from 'mongoose';


function Navigation(match) {

    const StyeldNavigation = styled.nav`
        & .member{
            display: flex;
            justify-content: space-between ;
            margin-bottom: 2rem;
        }

        & .member__message{
            font-size: 14px;
        }

        & .menu{
            width: 100%;
            margin-bottom: 2rem;
            border-bottom: 1px solid #ddd;
            display: flex;
        }

        & .menu button{
            border: none;
            background: #fff;
            font-size: 1rem;
            padding: 0;
        }

        & .menu a{
            display: block;
            text-decoration: none;
            color: #ddd;
            padding: 1rem 1rem 0.5rem;
            position: relative;
        }

        & .menu button.active a{
            font-weight: bold;
            color: #333;
            font-weight: bold;
            text-align: center;
        }

        & .menu button.active a::after{
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            background: #333;
            position: absolute;
            bottom: 0;
            left: 0;
        }

    `;

    const StyledButton = styled.button`
        display: block;
        width: 100px;
        line-height: 32px;
        padding: 0 5%;
        border: 1px solid #333;
        border-radius: 20px;
        color: #333;
        background: #fff;
        font-weight: bold;
        cursor: pointer;
        margin: auto;
    `;

    const [recordActive, setRecordActive] = useState(true);
    const [videoActive, setVideoActive] = useState(false);

    let params = useHistory();
    
    useEffect(() => {
        if(params.location.pathname==="/videos"){
            setVideoActive(true);
            setRecordActive(false);
        }
    }, []);
    
    const isActive = (active) => {
        if(active === 'record'){
            setRecordActive(true);
            setVideoActive(false);
        }

        if(active === 'video'){
            setVideoActive(true);
            setRecordActive(false);
        }
    }
    return (
        <div>
            <StyeldNavigation className="navigation">
                <div className="member">
                    <div className="member__message"> 
                        회원님, <br/> 운동을 기록하세요.
                    </div>
                    <div className="memeber__button">
                        {/* <StyledButton>로그아웃</StyledButton> */}
                    </div>
                </div>
                <div className="menu">
                    <button className={recordActive? 'active': ''} onClick={() => isActive('record')}><Link to="/">기록</Link></button>
                    <button className={videoActive? 'active': ''} onClick={() => isActive('video')}><Link to="/videos">운동영상</Link></button>
                </div>
            </StyeldNavigation>
        </div>
    )
}

export default Navigation
