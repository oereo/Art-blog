import styled from "styled-components";
import firstImage from "../assets/images/_MG_0138.jpg";
import secondImage from "../assets/images/_MG_0134.jpg";
import thirdImage from "../assets/images/_MG_0251.jpg";
import fourthImage from "../assets/images/_MG_0215.jpg";
import fifthImage from "../assets/images/_MG_0388.jpg";
import sixthImage from "../assets/images/_MG_0416.jpg";
import seventhImage from "../assets/images/_MG_0425.jpg";
import eighthImage from "../assets/images/_MG_0346.jpg";
import ninthImage from "../assets/images/_MG_0084.JPG";
import tenthImage from "../assets/images/_MG_0130.jpg";
import elevenImage from "../assets/images/_MG_0134.jpg";
import twelveImage from "../assets/images/_MG_0375.jpg";
import thirteenImage from "../assets/images/_MG_0449.jpg";
import fourteenImage from "../assets/images/_MG_0533.JPG";
import footerImage from "../assets/images/1.jpg";


import Grid from '@material-ui/core/Grid';

import React from "react";

const ProjectDescription = styled.div`
    display: flex;
    font-size: 30px;
    width : 80%;
    margin: 50px 0 0 10%;
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
    <>
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

        <Grid container spacing={3} style={{margin: "100px 0 0 0"}}>
            <Grid item xs={12} style={{margin: "10% 0 0 0"}}>
                <br/>
            </Grid>
            <Grid item xs={3}>
                <img
                    style={{
                        width: "100%",
                        height: "90%",
                        margin: "0 0 0 50px"
                    }}
                    src={firstImage} alt="image"/>
            </Grid>
            <Grid item xs={3}>
                <img
                    style={{
                        width: "100%",
                        height: "90%",
                        margin: "0 0 0 50px"
                    }}
                    src={secondImage} alt="image"/>
            </Grid>
            <Grid item xs={3} sm={3} direction="column"
                  align="left"
                  style={{display: "flex", justifyContent: "flex-end", padding: "0 0 5% 0", margin: "0 0 0 50px"}}>
                (Fog)<br/>
                Dahee Kwon, Cloud oil on canvas, 2021
            </Grid>
            <Grid item xs={12} style={{margin: "10% 0 0 0"}}>
                <br/>
            </Grid>
            <Grid item xs={3}>

            </Grid>
            <Grid item xs={3}>
                <img
                    style={{
                        width: "100%",
                        height: "70%",
                        margin: "20% 0 0 0"
                    }}
                    src={thirdImage} alt="image"/>
                <div style={{textAlign: "center"}}>
                    (Circle)<br/>
                    book, written on paper, 2021
                </div>

            </Grid>
            <Grid item xs={4}>
                <img
                    style={{
                        width: "100%",
                        height: "90%",
                        margin: "0 0 0 0"
                    }}
                    src={fourthImage} alt="image"/>
            </Grid>
            <Grid item xs={12} style={{margin: "10% 0 0 0"}}>
                <br/>
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={4}>
                <img
                    style={{
                        width: "40vw",
                        height: "80vh",
                        margin: "20% 0 0 0"
                    }}
                    src={fifthImage} alt="image"/>
                (Untitled)<br/>
                towel, hair, glue, 2021

            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={5}>
                <Grid item xs={6}>
                    <img
                        style={{
                            width: "20vw",
                            height: "65vh",
                            margin: "0 0 0 20%"
                        }}
                        src={sixthImage} alt="image"/>
                </Grid>
                <Grid item xs={6}>
                    <img
                        style={{
                            width: "20vw",
                            height: "21vh",
                            margin: "15% 0 0 80%"
                        }}
                        src={seventhImage} alt="image"/>
                </Grid>
            </Grid>
            <Grid item xs={12} style={{margin: "10% 0 0 0"}}>
                <br/>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={5}>
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        margin: "0 0 0 10%"
                    }}
                    src={eighthImage} alt="image"/>
                <div style={{textAlign: "center", margin: "0 0 0 10%"}}>
                    (Untitled)<br/>
                    box, printed photo, stocking, yarn, 2021
                </div>
            </Grid>
            <Grid item xs={12} style={{margin: "20% 0 0 0"}}>
                <br/>
            </Grid>
            <Grid item xs={4}>
                <img
                    style={{
                        width: "100%",
                        height: "90%",
                        margin: "0 0 0 50px"
                    }}
                    src={ninthImage} alt="image"/>
            </Grid>
            <Grid item xs={4}>
                <img
                    style={{
                        width: "100%",
                        height: "90%",
                        margin: "0 0 0 10%"
                    }}
                    src={tenthImage} alt="image"/>
            </Grid>
            <Grid item xs={3}>
                <Grid item xs={12}>
                    <div style={{textAlign: "left", margin: "90% 0 0 15%"}}>
                        (Becoming)<br/>
                        Ceramic, 2021
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <img
                        style={{
                            width: "20vw",
                            height: "40vh",
                            margin: "7% 0 0 15%"
                        }}
                        src={elevenImage} alt="image"/>
                </Grid>
            </Grid>
            <Grid item xs={12} style={{margin: "20% 0 0 0"}}>

            </Grid>
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={5}>
                <img
                    style={{
                        width: "100%",
                        height: "90%",
                        margin: "7% 0 0 10%"
                    }}
                    src={twelveImage} alt="image"/>
            </Grid>
            <Grid item xs={5}>
                <div style={{textAlign: "right", margin: "140% 0 0 10%"}}>
                    (초심자의 마음 Beginners's mindset)<br/>
                    written on paper, 2021
                </div>
            </Grid>
            <Grid item xs={12} style={{margin: "20% 0 0 0"}}>

            </Grid>
            <Grid item xs={2}>

            </Grid>
            <Grid item xs={3}>
                <img
                    style={{
                        width: "110%",
                        height: "90%",
                        margin: "7% 0 0 10%"
                    }}
                    src={fourteenImage} alt="image"/>
                <div style={{textAlign: "left", margin: "0% 0 0 10%"}}>
                    (기지개 Stretching)<br/>
                    clay, acrylic, 2021
                </div>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={5}>
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={4}>
                <img
                    style={{
                        width: "120%",
                        height: "100%",
                        margin: "-40% 0 0 10%"
                    }}
                    src={thirteenImage} alt="image"/>
            </Grid>
            <Grid item xs={6}
                  display="flex"
                  justify="center">
                <div style={{textAlign: "right", margin: "-36% -10% 0 0%"}}>
                    (더미 Dummy)<br/>
                    mixed material, 2021
                </div>
            </Grid>
            <Grid item xs={12} style={{margin: "10% 0 0 0"}}>

            </Grid>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={4}>
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        margin: "0"
                    }}
                    src={footerImage} alt="image"/>
            </Grid>
            <Grid item xs={4}>

            </Grid>
        </Grid>
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
        <Grid container spacing={3} style={{margin: "100px 0 0 0"}}>
            <Grid item xs={12} style={{margin: "10% 0 0 0"}}>
                <br/>
            </Grid>
        </Grid>
    </>

);

export default SubContent;