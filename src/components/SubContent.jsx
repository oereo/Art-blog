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
import elevenImg from "../assets/images/_MG_0357.jpg";
import twelveImg from "../assets/images/_MG_0375.jpg";
import thirteenImg from "../assets/images/_MG_0449.jpg";
import fourteenImg from "../assets/images/_MG_0533.JPG";
import footerImg from "../assets/images/1.jpg";
import antImg from "../assets/images/개미.jpg";


import Grid from '@material-ui/core/Grid';

import React from "react";
import {Link} from 'react-router-dom';

const ProjectDescription = styled.div`
    display: flex;
    font-size: 30px;
    margin: 50px 5% 0 5%;
    font-family: Courier New;
    line-height:160%;
`

const SubContent = () => (
    <>
        <ProjectDescription>
            A room of one's own indicates one's mind. <br/>
            Have you ever heard of the voice of objects when you slide into
            someone else's personal space? <br/>
            The space and the object are organically formed that become a gate to the
            world of cohabitant, having a role of interface.<br/><br/>
            Chamber Project enable us to open the gate of rooms of
            imaginary ones regardless of space and time, through the 3D version. The chamber signifies '-sil' which
            means a room for specific purpose, '-sil' which means a room in terms of cardiac things at once. Each
            chamber is drawing its breath as chambers of heart do. Unlike the room of reality, we would spend our time
            more innerly and clandestinely in the virtual 3D space.
        </ProjectDescription>

        <Grid container spacing={3} style={{margin: "100px 0 0 0", display: "flex"}}>
            <Grid item xs={12} style={{margin: "20% 0 0 0"}}>
                <br/>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12} style={{margin: "0 0 0 5%"}}>
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        margin: "0 0 0 0",
                        objectFit: "fill"
                    }}
                    src={firstImg} alt="im"/>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        margin: "0 0 0 20px",
                        objectFit: "fill"
                    }}
                    src={secondImg} alt="im"/>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12} direction="column"
                // align="left"
                  style={{
                      // display: "flex",
                      padding: "45% 0 0 0",
                      margin: "0 0 0 40px",
                  }}>
                {"<"}Fog{">"}<br/>
                Dahee Kwon, Cloud oil on canvas, 2021
            </Grid>
            <Grid item xs={12} style={{margin: "40% 0 0 0"}}>
                <br/>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>

            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12} style={{padding: "17% 0 0 0"}}>
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"contain"


                    }}
                    src={thirdImg} alt="im"/>
                <div style={{textAlign: "center", margin:"-3% 0 0 0"}}>
                    {"<"}Circle{">"}<br/>
                    book, written on paper, 2021
                </div>

            </Grid>
            <Grid item lg={3} xs={4}>
                <img
                    style={{
                        width: "130%",
                        height: "130%",
                        margin: "0 0 0 10%",
                        objectFit:"contain"
                    }}
                    src={fourthImg} alt="im"/>
            </Grid>
            <Grid item xs={12} style={{margin: "40% 0 0 0"}}>
                <br/>
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item lg={5} xs={5}>
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        margin: "0% 0 0 0"
                    }}
                    src={fifthImg} alt="im"/>
                {"<"}Untitled{">"}<br/>
                towel, hair, glue, 2021

            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item lg={5} xs={5} style={{padding: "0 0 0 0"}}>
                <Grid item lg={6} xs={6} style={{padding: "0 0 0 0"}}>
                    <img
                        style={{
                            width: "120%",
                            height: "120%",
                            margin: "-20% 0 0 15%",
                            padding: "-10% 0 0 0 "
                        }}
                        src={sixthImg} alt="im"/>
                </Grid>
                <Grid item lg={6} xs={6}>
                    <img
                        style={{
                            width: "100%",
                            height: "100%",
                            margin: "0 0 0 60%",
                            padding: "80% 0 0 0"
                        }}
                        src={seventhImg} alt="im"/>
                </Grid>
            </Grid>
            <Grid item mg={12} lg={12} style={{margin: "40% 0 0 0"}}>
                <br/>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item lg={5} xs={5}>
                <img
                    style={{
                        width: "110%",
                        height: "110%",
                        margin: "0 0 0 0"
                    }}
                    src={eighthImg} alt="im"/>
                <div style={{textAlign: "center", margin: "0 0 0 10%"}}>
                    {"<"}Untitled{">"}<br/>
                    box, printed photo, stocking, yarn, 2021
                </div>
            </Grid>
            <Grid item xs={12} style={{margin: "60% 0 0 0"}}>
                <br/>
            </Grid>
            <Grid item xs={4} style={{padding:"0 0 0 0", margin:"0 0 0 5%"}}>
                <img
                    style={{
                        width: "90%",
                        height: "90%",
                        margin: "0 0 0 0"
                    }}
                    src={ninthImg} alt="im"/>
            </Grid>
            <Grid item xs={4} style={{padding:"0 0 0 0"}}>
                <img
                    style={{
                        width: "90%",
                        height: "90%",
                        margin: "0 0 0 0%"
                    }}
                    src={tenthImg} alt="im"/>
            </Grid>
            <Grid item xs={3} style={{padding:"14% 0 0 0"}}>
                <Grid item xs={12}>
                    <div style={{textAlign: "left"}}>
                        {"<"}Becoming{">"}<br/>
                        Ceramic, 2021
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <img
                        style={{
                            width: "90%",
                            height: "90%",
                            margin: "5% 0 0 0"
                        }}
                        src={elevenImg} alt="im"/>
                </Grid>
            </Grid>
            <Grid item xs={12} style={{margin: "40% 0 0 0"}}>

            </Grid>
            <Grid item lg={1}>

            </Grid>
            <Grid item xs={5} style={{padding:"0 0 0 0"}}>
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        margin: "0% 0 0 0%",
                        objectFit:"fill"
                    }}
                    src={twelveImg} alt="im"/>
            </Grid>
            <Grid item xs={5}  style={{padding:"0 0 0 0"}}>
                <div style={{textAlign: "right", margin: "0% 0 0 0%", padding:"142% 15% 0 0"}}>
                    {"<"}초심자의 마음 Beginners's mindset{">"}<br/>
                    written on paper, 2021
                </div>
            </Grid>
            <Grid item xs={12} style={{margin: "40% 0 0 0"}}>

            </Grid>
            <Grid item xs={2}>

            </Grid>
            <Grid item xs={3} style={{padding:"0 0 0 0"}}>
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        margin: "0 0 0 0",
                        objectFit:"contain "
                    }}
                    src={fourteenImg} alt="im"/>
                <div style={{textAlign: "left", margin: "0% 0 0 25%"}}>
                    {"<"}기지개 Stretching{">"}<br/>
                    clay, acrylic, 2021
                </div>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={4} style={{padding:"0 10% 0 0"}}>
            </Grid>

            <Grid item xs={6} style={{margin:"8% 0 0 8%", padding:"0 0 0 0"}}>
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        margin: "-40% 0 0 5%",
                        objectFit:"contain "

                    }}
                    src={thirteenImg} alt="im"/>
            </Grid>
            <Grid item xs={6}
                  display="flex"
                  justify="center">
                <div style={{textAlign: "right", margin: "-50% 0% 0 0%"}}>
                    {"<"}더미 Dummy{">"}<br/>
                    mixed material, 2021
                </div>
            </Grid>
            <Grid item xs={12} style={{margin: "30% 0 0 0"}}>

            </Grid>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={4} style={{textAlign:"center"}}>
                <img
                    style={{
                        width: "70%",
                        height: "100%",
                        margin: "0 0 0 0",

                    }}
                    src={footerImg} alt="im"/>
            </Grid>
            <Grid item xs={4}>

            </Grid>
        </Grid>
        <ProjectDescription>
            Nest of a hummingbird is consist of cotton, moss and web, differentiated from any other nests. These
            enigmatic materials make them more flexible and infrangible. She is captivated by that distinctive identity.
            A gleam of the nest of hummingbird looks like an amethyst in her eyes. <br/><br/>
            Every night, she observes the body of
            her own covered with tiny water drops in the tub. Close her eyes, Imagine a white circle. What can we see
            inside the circle? She opens her eyes again, stares her body. The Blue body.
            <br/><br/>
            A Private Bond.<br/>
            Dream flows from the outside of sleep.
        </ProjectDescription>
        <Grid container spacing={3} style={{margin: "100px 0 0 0"}}>
            <Grid item xs={7} style={{margin: "10% 0 0 0"}}>
                <br/>
            </Grid>
            <Grid item lg={4} xs={4} style={{margin: "10% 0 0 0"}}>
                <Link to="/email">
                    <img
                        style={{
                            width: "70%",
                            height: "100%",
                            margin: "0"
                        }}
                        src={antImg} alt="im"/></Link>
            </Grid>
        </Grid>
    </>

);

export default SubContent;