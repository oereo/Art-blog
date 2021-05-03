import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png'

const Wrapper = styled.div`
    /* 레이아웃 */
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    top: 0px;
    z-index: 5;

    /* 색상 */
    background: #dddddd;
    color: black;
    border-bottom: 1px solid black;

    /* 폰트 */
    font-size: 1.5rem;
`;

const StyledLogo = styled.span`
    display: flex;
    height: 30px;
    width: 30px;
    margin-right:3px;
`


const Header = () => (
    <Wrapper>
        <StyledLogo>
            <img src={logo} alt="logo"/>
        </StyledLogo>
        www.frauimbad.com
    </Wrapper>
);

export default Header;