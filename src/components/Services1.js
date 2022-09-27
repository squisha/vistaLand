import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import LOGO2020 from "../images/LOGO2020.png";
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import Divider from '@material-ui/core/Divider';

import InputForm from "./Form/index";

import db from '../images/db.png'
import charts from '../images/charts.png'
import dashboard from '../images/dashboard.png'
import software from '../images/software.png'
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import Demos from "./Demos";
import {Tabs} from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import {ParallaxLayer} from "react-spring/addons";
import Paper from "@material-ui/core/Paper";
import safe from "../images/safe.png";
import networking from "../images/networking.png";
import pie from "../images/pie.png";
import target from '../images/target.png'
import explore from '../images/explore.png'
import stock from '../images/stock.png'
import develope from '../images/develope.png'
import { useState, useEffect, useRef} from "react";
import Particless from "./Particles";


const breakpoints = createBreakpoints({});


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://vistalore.com/">
                Vistalore
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    headerContent: {
        backgroundColor: "black",
        height: "12%",
        color: "white",
        paddingBottom:theme.spacing(8),
        [breakpoints.up("sm")]: {
            height: '15%',
            paddingBottom: theme.spacing(8)
        },
        [breakpoints.up("md")]: {
            height: '18%',
            paddingBottom: theme.spacing(6)
        },
        [breakpoints.up("lg")]: {
            height: '22%',
            paddingBottom: theme.spacing(8)
        },
        [breakpoints.up("xl")]: {
            height: '25%',
            paddingBottom: theme.spacing(10)
        }
    },
    partical: {
        position:"absolute",
        top: "8.5%",
        left: 0,
        zIndex:0,
        width: "100%",
        height: "20%",
        overflow: "hidden",
        [breakpoints.up("sm")]: {
            height: '30%',
        },
        [breakpoints.up("md")]: {
            height: '26%',
        },
        [breakpoints.up("lg")]: {
            height: '36%',
        },
        [breakpoints.up("xl")]: {
            height: '40%',
        }
    },
    banner: {
        backgroundColor: 'rgba(0, 1, 88,0.9)',
        flexGrow: 1,
        maxWidth: '100%',
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        textAlign: "center",
        alignItems: 'center',
        background: 'linear-gradient(45deg, #000000 30%, #7f80ff 95%)',
        color: 'white',
    },
    cardMedia: {
        paddingTop: '26.25%', // 16:9
        width: '25%',
        margin: "10px auto",
        [breakpoints.up("sm")]: {
            paddingTop: '26.25%', // 16:9
            width: '25%',
            margin: "10px auto",
        },
        [breakpoints.up("md")]: {
            paddingTop: '46.25%', // 16:9
            width: '45%',
            margin: "10px auto",
        },
        [breakpoints.up("lg")]: {
            paddingTop: '56.25%', // 16:9
            width: '55%',
            margin: "10px auto",
        }
    },
    cardMedia1: {
        paddingTop: '26.25%', // 16:9
        width: '25%',
        margin: "10px auto",
        [breakpoints.up("sm")]: {
            paddingTop: '21.25%', // 16:9
            width: '20%',
            margin: "10px auto",
        },
        [breakpoints.up("md")]: {
            paddingTop: '31.25%', // 16:9
            width: '30%',
            margin: "10px auto",
        },
        [breakpoints.up("lg")]: {
            paddingTop: '36.25%', // 16:9
            width: '35%',
            margin: "10px auto",
        }
    },
    cardContent: {
        flexGrow: 1,
    },
    whitefont: {
        color:"white",
    },
    blackfont: {
        color:"black"
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    logo: {
        width: '100%',
        height: '40%',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    software: {
        width: '100%',
        height: '40%',
        maxWidth: '65%',
        maxHeight: '50%',
    },
    overlay: {
        zIndex:0,
        position: 'relative',
        margin: "10px auto",
        marginTop:"0px",
        background: "rgba(0,0,0, 0.8)",
        width: "95%",
        paddingTop: '3%',
        height:"15%",
        [breakpoints.up("sm")]: {
            paddingTop: '7%',
            width: '85%',
            height:"17%",
        },
        [breakpoints.up("md")]: {
            paddingTop: '3%',
            width: '80%',
            height:"20%",
        },
        [breakpoints.up("lg")]: {
            paddingTop: '7%',
            width: '75%',
            height:"22%",
        },
        [breakpoints.up("xl")]: {
            paddingTop: '5%',
            width: '70%',
            height:"25%",
        }
    },
    tab:{
        color:'black'
    },
    root: {
        flexGrow: 1
    }
}));



function a11yProps(index) {
    return {
        id: `tabs-${index}`,
        "aria-controls": `tabs-${index}`
    };
}




export default function Serv(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    useEffect(() => {
        function onScroll() {
            let pos = window.pageYOffset;
            let hi = window.innerHeight;
            let p=pos/hi
            if (pos < .3) {
                setValue(0);
            } else if (p > .3 && p<=.9) {
                setValue(1);
            } else if (p > .9 && p<=1.5) {
                setValue(2);
            } else if (p > 1.5) {
                setValue(3);
            }
            console.log(p)
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    });

    const overviewRef = useRef()
    function handleOverClick() {
        overviewRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
        })
    }

    const dataRef = useRef()
    function handleDataClick() {
        dataRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'})
    }

    const dsRef = useRef()
    function handleDSClick() {
        dsRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'})
    }

    const appRef = useRef()
    function handleAppClick() {
        appRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'})
    }




        return (
        <React.Fragment>
                <div className={classes.root} style={{background:'white'}}>
                </div>
            <CssBaseline />
            <main>
                <div className={classes.headerContent}>
                    <Container>
                        <div className={classes.partical}>
                            <Particless/>
                        </div>
                        <div className={classes.overlay}>
                            <Typography component="h2" variant="h1" align="center" gutterBottom className={classes.whitefont}>
                                Full-stack AI solutions
                                <hr className="progress" />
                            </Typography>
                            <Typography variant="h3" align="center" paragraph className={classes.whitefont} ref={overviewRef}>
                                Strategic selection of tech stack and process
                                methodologies have become imperative to out-performance.
                                We are here to help research your challenges, guide you through the ideal options and build
                                solutions that ensure success.
                            </Typography></div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md" ref={dataRef}>

                    <Typography component="h2" variant="h2" align="center" className={classes.blackfont}>
                        Performant systems built on solid foundations.
                    </Typography>

                    <Typography variant="h3" align="center" color="textSecondary" paragraph>
                        Building a strong data foundation is vital to continual improvement AI systems,
                        and requires a holistic approach. We build flexible data architecture that
                        facilitate and elucidate the evolution of data assets. Thoughtfully increase your data assets
                        by demystify performance drivers and understanding ROI.
                    </Typography>
                    <Divider variant="middle" style={{ padding:"10px", background: "#fafafa" }} />
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4} >
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={safe}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Data Acquisition and Storage
                                    </Typography>
                                    <Typography>
                                        Acquire new data sources through web scraping
                                        and other autonomous extraction techniques.
                                        Secure data warehouse and data lake solutions for storing structured and
                                        unstructured data, optimized for your data types and volume.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={networking}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Integration and Enrichment
                                    </Typography>
                                    <Typography>
                                        Improved data quality through cleansing, validation and appending to
                                        new sources. Scalable optimized data pipelines providing immediate access to
                                        unified data from internal and external sources.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card className={classes.card} >
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={pie}
                                />
                                <CardContent className={classes.cardContent} >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Data Quality Management
                                    </Typography>
                                    <Typography>
                                        Processes to create transparent records of the evolution of various aspects
                                        of input data, aiding in identification of areas for improvement and importance;
                                        Insights from Data Quality reports enhance data acquisition and enrichment strategy.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
                <Container className={classes.cardGrid} maxWidth="md" ref={dsRef}>

                    <Typography component="h2" variant="h2" align="center" className={classes.blackfont}>
                        Applying the bleeding-edge.
                    </Typography>


                    <Typography variant="h3" align="center" color="textSecondary" paragraph>
                        Approaches to gleaning insights from data continue to advance rapidly and so does
                        the breadth of potential solutions and trade-offs to be evaluated. The art of advanced
                        analytical solutions lies in optimizing for each unique business objective and
                        set of constraints along with defining a gauge of performance.
                    </Typography>
                    <Divider variant="middle" style={{ padding:"10px", background: "#fafafa" }} />
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6} >
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia1}
                                    image={target}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Machine Learning
                                    </Typography>
                                    <Typography>
                                        Predict and classify data for any use case. Machine learning models
                                        can adapt and make quality decisions autonomously.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia1}
                                    image={explore}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Data Science
                                    </Typography>
                                    <Typography>
                                        Understand the mechanics of complex systems by quantifying relationships to
                                        enhance strategic capability.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
                <Container className={classes.cardGrid} maxWidth="md" ref={appRef}>

                    <Typography component="h2" variant="h2" align="center" className={classes.blackfont}>
                        Simplified AI.
                    </Typography>


                    <Typography variant="h3" align="center" color="textSecondary" paragraph>
                        Web Applications can be used in myriad ways to simplify and enhance AI systems.
                        We build user interfaces to control and analyze various aspects of the system
                        while maintaining scalability to support hundreds of thousands of concurrent users.
                    </Typography>
                    <Divider variant="middle" style={{ padding:"10px", background: "#fafafa" }} />
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6} >
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia1}
                                    image={develope}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Business Intelligence
                                    </Typography>
                                    <Typography>
                                        Define quality KPIs for monitoring progress towards business goals.
                                        Customized interactive dashboards facilitating data discovery to drive strategy with
                                        real-time actionable insights.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia1}
                                    image={stock}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        AI powered Apps
                                    </Typography>
                                    <Typography>
                                        Autonomous applications that bring together various
                                        machine learning models, insights from data science models and business rules to
                                        intelligently decide and act bringing unprecedented levels of consistency as well as
                                        reliability to business processes.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Container>
                    <Grid container spacing={1} variant="Grid" justify="space-between" alignItems="center" style={{width:"80%", marginLeft:"10%"}}>
                        <Grid item xs={12} md={6}>
                            <InputForm />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={1} variant="Grid" justify="space-between" alignItems="center">
                                <Grid item xs={12} align="center">
                                    <Typography variant="paragraph" className={classes.head1} >contact@vistalore.com</Typography>
                                </Grid>
                                <Grid item xs={12} align="center">
                                    <Typography variant="paragraph" className={classes.head1} >1-214-727-7247</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={12} align="center">
                                <IconButton>
                                    <FacebookIcon variant="h1" style={{color:'black', textAlign: 'right'}}/>
                                </IconButton>
                                <IconButton>
                                    <TwitterIcon variant="h1" style={{  color:'black', textAlign: 'right'}}/>
                                </IconButton>
                                <IconButton>
                                    <LinkedInIcon variant="h1" style={{  color:'black', textAlign: 'right'}}/>
                                </IconButton>
                                <IconButton>
                                    <YouTubeIcon variant="h1" style={{  color:'black', textAlign: 'right'}}/>
                                </IconButton>
                                <IconButton>
                                    <GitHubIcon variant="h1" style={{ color:'black', textAlign: 'right'}}/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={1} md={12} align="center">
                                <img src={LOGO2020} alt="logo" className={classes.logo} style={{width:"60%"}} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

                <Copyright />
            </footer>
            </React.Fragment>
    );
}