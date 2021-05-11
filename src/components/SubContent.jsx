import styled from "styled-components";
import firstImage from "../assets/images/_MG_0138.jpg";
import secondImage from "../assets/images/_MG_0134.jpg";
import thirdImage from "../assets/images/_MG_0251.jpg";
import fourthImage from "../assets/images/_MG_0215.jpg";
import Grid from '@material-ui/core/Grid';

import React from "react";

const ProjectDescription = styled.div`
    display: flex;
    font-size: 30px;
    margin: 50px 0 0 50px;
    font-family: Luminary KR;
`

const ProjectContent = styled.div`
    font-size : 20px;
    font-family: Luminary KR;
`

const ImageDescription = styled.div`
    font-family : Luminary KR;
    font-size: 12px;
    margin : 0 0 0 10px;
    width : 19%;
    float : right;
    vertical-align : bottom;
    padding : 50% 9% 0 0;
`
const ThirdImageDescription = styled.div`
    font-family : Luminary KR;
    font-size: 12px;
    margin : 0 0 0 20px;
    width : 20%;
    float : left;
    vertical-align : bottom;
    padding : 50% 9% 0 0;
`
const FirstLine = styled.div`
    margin:40px 0 100px 0;
    display: block;
    float : left;
`
const SecondLine = styled.div`
    width : 100%;
    width : 100%;
    margin:40px 0 100px 0;
    display: inline;
    float : right;
    text-align : left;
`

const SubContent = () => (
    <div style = {{backgroundColor : "gray;"}}>
        <ProjectDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make
            a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
            versions
            of Lorem Ipsum.
        </ProjectDescription>
        <ProjectContent>
            <FirstLine>
                <img
                    style={{
                        width: "30%",
                        height: "60%",
                        margin: "100px 0 0 50px"
                    }}
                    src={firstImage} alt="image"/>
                <img
                    style={{
                        width: "30%",
                        height: "60%",
                        margin: "100px 0 0 50px"
                    }}
                    src={secondImage} alt="image"/>
                <ImageDescription>
                    (Fog)<br/>
                    Dahee Kwon, Cloud oil on canvas, 2021
                </ImageDescription>
            </FirstLine>
            <SecondLine>
                <img
                    style={{
                        width: "25%",
                        height: "60%",
                        margin: "100px 0 0 300px"
                    }}
                    src={thirdImage} alt="image"/>
                <ThirdImageDescription>
                    (Fog)<br/>
                    Dahee Kwon, Cloud oil on canvas, 2021
                </ThirdImageDescription>
                <img
                    style={{
                        width: "30%",
                        height: "70%",
                        margin: "100px 0 0 0px"
                    }}
                    src={fourthImage} alt="image"/>

            </SecondLine>
        </ProjectContent>
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <img
                    style={{
                        width: "100%",
                        height: "80%",
                        margin: "50px"
                    }}
                    src={firstImage} alt="image"/>
         </Grid>
          <Grid item xs={3}>

d          </Grid>
          <Grid item xs={6}>
a          </Grid>
          <Grid item xs={3}>
f          </Grid>

        </Grid>
    </div>

);

export default SubContent;