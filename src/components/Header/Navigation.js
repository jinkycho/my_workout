import React from 'react';
import styled from 'styled-components';

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
            width: 100%auto;
            margin-bottom: 2rem;
            border-bottom: 1px solid #ddd;
        }

        & .menu__record{
            width: 20%;
            padding-bottom: 0.5rem;
            color: #333;
            font-weight: bold;
            position: relative;
            text-align: center;
        }

        & .menu__record::after{
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            background: #333;
            position: absolute;
            bottom: 0;
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
                    <div className="menu__record">기록</div>
                </div>
            </StyeldNavigation>
        </div>
    )
}

export default Navigation
