import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navigation() {

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

        & .menu a{
            display: block;
            text-decoration: none;
            color: #ddd;
            padding: 1rem 1rem 0.5rem;
            position: relative;
        }

        & .menu a:focus{
            font-weight: bold;
            color: #333;
            font-weight: bold;
            text-align: center;
        }

        & .menu a:focus::after{
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
                    <div className="menu__record"><Link to="/">기록</Link></div>
                    <div className="menu__video"><Link to="/videos">운동영상</Link></div>
                </div>
            </StyeldNavigation>
        </div>
    )
}

export default Navigation
