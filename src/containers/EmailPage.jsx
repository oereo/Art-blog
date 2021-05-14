import React from 'react';
import Menu from "../components/Navbar";
import styled from "styled-components";

const StyledEmail = styled.div`
    text-align: center;
    float: left;
    margin: 220px 0 0 45%;
    z-index : -50;
    font-family: Apple Gothic;
    font-size: 20px;
`


function EmailPage() {
    return (
        <>
            <div>
                <Menu/>
            </div>
            <StyledEmail>
                lsoenoduoln@gmail.com
                <br/>
                kndahee@gmail.com
            </StyledEmail>
        </>
    );
}

export default EmailPage;