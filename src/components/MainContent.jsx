import logo from "../assets/images/logo.png";
import React from "react";
import styled from "styled-components";

const MainTitle = styled.div`
    display: flex;
    font-size: 60px;
    margin:50px 0 0 50px;
    font-family: Luminary KR;
`

const SubTitle = styled.div`
    display: flex;
    font-size: 30px;
    margin: 0px 0px 20px 50px;
    font-family: Luminary KR;
`

const MainContent = () => (
    <>
        <MainTitle>
            Chamber Project
        </MainTitle>
        <SubTitle>
            #001 Humming Bird
        </SubTitle>
        <div className="sketchfab-embed-wrapper">
                <iframe title="Chamber" width="100%" height="500px" frameBorder="0" allowFullScreen
                        mozallowfullscreen="true"
                        webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking
                        execution-while-out-of-viewport execution-while-not-rendered web-share loading="eager"
                        src="https://sketchfab.com/models/652c512b427e4fa0a3865c994c7ea94a/embed?autospin=0&autostart=1&preload=1&ui_theme=dark"></iframe>
            </div>
    </>
);

export default MainContent;