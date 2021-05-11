import styled from "styled-components";
import firstImg from "../assets/images/_MG_0138.jpg";
import secondImg from "../assets/images/_MG_0134.jpg";
import thirdImg from "../assets/images/_MG_0251.jpg";
import fourthImg from "../assets/images/_MG_0215.jpg";
import fifthImg from "../assets/images/_MG_0388.jpg";
import sixthImg from "../assets/images/_MG_0416.jpg";
import seventhImg from "../assets/images/_MG_0425.jpg";
import eighthImg from "../assets/images/_MG_0346.jpg";
import ninthImg from "../assets/images/_MG_0084.JPG";
import tenthImg from "../assets/images/_MG_0130.jpg";
import elevenImg from "../assets/images/_MG_0134.jpg";
import twelveImg from "../assets/images/_MG_0375.jpg";
import thirteenImg from "../assets/images/_MG_0449.jpg";
import fourteenImg from "../assets/images/_MG_0533.JPG";
import footerImg from "../assets/images/1.jpg";


import Grid from '@material-ui/core/Grid';

import React from "react";

const ProjectDescription = styled.div`
    display: flex;
    font-size: 30px;
    width : 80%;
    margin: 50px 0 0 10%;
    font-family: Luminary KR;
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
                    src={firstImg} alt="im"/>
            </Grid>
            <Grid item xs={3}>
                <img
                    style={{
                        width: "100%",
                        height: "90%",
                        margin: "0 0 0 50px"
                    }}
                    src={secondImg} alt="im"/>
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
                    src={thirdImg} alt="im"/>
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
                    src={fourthImg} alt="im"/>
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
                    src={fifthImg} alt="im"/>
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
                        src={sixthImg} alt="im"/>
                </Grid>
                <Grid item xs={6}>
                    <img
                        style={{
                            width: "20vw",
                            height: "21vh",
                            margin: "15% 0 0 80%"
                        }}
                        src={seventhImg} alt="im"/>
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
                    src={eighthImg} alt="im"/>
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
                    src={ninthImg} alt="im"/>
            </Grid>
            <Grid item xs={4}>
                <img
                    style={{
                        width: "100%",
                        height: "90%",
                        margin: "0 0 0 10%"
                    }}
                    src={tenthImg} alt="im"/>
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
                        src={elevenImg} alt="im"/>
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
                    src={twelveImg} alt="im"/>
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
                    src={fourteenImg} alt="im"/>
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
                    src={thirteenImg} alt="im"/>
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
                    src={footerImg} alt="im"/>
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