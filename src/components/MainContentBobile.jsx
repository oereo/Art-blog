import React from "react";
import styled from "styled-components";

const MainTitle = styled.div`
    display: flex;
    font-size: 36px;
    margin: -16px 0 0 20px;
    font-family: Luminary KR;
    padding-top:40px;
`

const SubTitle = styled.div`
    display: flex;
    font-size: 24px;
    margin: 0px 0px 20px 20px;
    font-family: Bodoni;
`

const ModelDescription = styled.div`
    font-size : 12px;
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    font-family: Apple Gothic;
`

const SketchFab = styled.div`
    margin: 0 0 0 0;
    -moz-transform: scale(0.5, 0.5);
`

const MainContentMobile = () => (
    <>
        <MainTitle>
            Chamber Project
        </MainTitle>
        <SubTitle>
            #001 Humming Bird
        </SubTitle>
        <SketchFab>
            <iframe title="Chamber" width="100%" height="500px" frameBorder="0" allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking
                    execution-while-out-of-viewport execution-while-not-rendered web-share loading="eager"
                    src="https://sketchfab.com/models/652c512b427e4fa0a3865c994c7ea94a/embed?autospin=0&autostart=1&preload=1&ui_theme=dark&ui_hint=2&amp;&max_texture_size=8192"></iframe>
        </SketchFab>
        <ModelDescription>
            to rotate camera: click+drag or one finger drag<br/>
            to zoom: two finger drag or pinch<br/>
            to pan: shift+drag or two finger drag<br/>
        </ModelDescription>
    </>
);

export default MainContentMobile;