import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

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


const Header = () => (
    <Wrapper>
        www.frauimbad.com
    </Wrapper>
);

export default Header;