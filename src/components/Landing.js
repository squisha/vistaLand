import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/addons'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/styles'
import InputForm from "./Form/index";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import halfWiz from '../images/halfWiz.png'
import db from '../images/db.png'
import charts from '../images/charts.png'
import dashboard from '../images/dashboard.png'
import software from '../images/software.png'
import LOGO2020 from '../images/LOGO2020.png'
import {ArrowUpward} from "@material-ui/icons";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});


const styles = theme => ({
    breakpoints,
    head: {
        color:'#ffffff',
    },
    head1: {
        color:'black'
    },
    head2: {
        color:'white',
    },
    logo: {
        width: '100%',
        height: '40%',
        textAlign: 'left',
        maxWidth: '45%',
        maxHeight: '40%',
    },
        main: {
            display: 'flex',
            maxWidth: '90%',
            marginLeft: '5%',
            textAlign: "center",
            alignItems: 'center',
            justifyContent:'center',
            padding: "2%",
            maxHeight: "7%",
            background: "rgba(255, 255, 255, 0.85)",
            borderRadius: ".3em",
            [breakpoints.up("sm")]: {
                maxWidth: '80%',
                maxHeight: '7%',
                marginLeft: '10%'
            },
            [breakpoints.up("md")]: {
                maxWidth: '70%',
                maxHeight: '8%',
                marginLeft: '15%'
            },
            [breakpoints.up("lg")]: {
                maxWidth: '60%',
                maxHeight: '7%',
                marginLeft: '20%',
                padding: "1%",

            }
        },
    service: {
        display: 'block',
        maxWidth: '92%',
        marginLeft: '3%',
        borderRadius: ".5em",
        [breakpoints.up("sm")]: {
        },
        [breakpoints.up("md")]: {
            maxWidth: '85%',
            marginLeft: '7.5%'
        },
        [breakpoints.up("lg")]: {
            maxWidth: '80%',
            marginLeft: "10%",
            padding: "5%",

        }
    },
    img:{
        width: '15%',
        padding: "5px",
        [breakpoints.up("sm")]: {
        },
        [breakpoints.up("md")]: {
            width: '35%',
            padding: "15px"
        },
        [breakpoints.up("lg")]: {
            width: '50%',
            padding: "25px"

        }
    }

});

function GridItem({ icon, classes, text, title, paperElevation }) {
    return (
        // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
        // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
        // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
        <Grid item xs={12} sm={12} md={4} lg={4}>
            <Paper elevation={paperElevation} style={{background: 'linear-gradient(45deg, #7f80ff 30%, #ffffff 95%)',
                textAlign: 'center', height:'100%', padding: "8%"}}>
                <img src={icon} className={classes.img} />
                <Typography variant="h2" className={classes.head1}> {title}
                </Typography><br/>
                <Typography variant="paragraph" className={classes.head1}> {text}
                </Typography>
            </Paper>
        </Grid>
    );
}


class Landing extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <Parallax ref={ref => (this.parallax = ref)} pages={3} style={{background:"#000000", height:'91.35%'}}>
                <ParallaxLayer offset={1} speed={0} style={{ backgroundColor: 'rgba(0, 1, 88,0.9)' }} />

                <ParallaxLayer offset={0} speed={-.35} style={{ pointerEvents: 'none', marginLeft:"70%"}}>
                    <img src={halfWiz} style={{ width: '30%', height:'100%', opacity:0.1}} />
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={-.35} style={{ pointerEvents: 'none'}}>
                    <Particles
                        params={{
                            "particles": {
                                "number": {
                                    "value": 120,
                                    "density": {
                                        "enable": true,
                                        "value_area": 800
                                    }
                                },
                                "color": {
                                    "value": "#ffffff"
                                },
                                "shape": {
                                    "type": "circle",
                                    "stroke": {
                                        "width": 0,
                                        "color": "#000000"
                                    },
                                },
                                "opacity": {
                                    "value": 0.4,
                                    "random": false,
                                    "anim": {
                                        "enable": false,
                                        "speed": 1,
                                        "opacity_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "size": {
                                    "value": 4,
                                    "random": true,
                                    "anim": {
                                        "enable": false,
                                        "speed": 20,
                                        "size_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "line_linked": {
                                    "enable": true,
                                    "distance": 150,
                                    "color": "#ffffff",
                                    "opacity": 0.2,
                                    "width": 1
                                },
                                "move": {
                                    "enable": true,
                                    "speed": 1,
                                    "direction": "none",
                                    "random": false,
                                    "straight": false,
                                    "out_mode": "out",
                                    "bounce": false,
                                    "attract": {
                                        "enable": false,
                                        "rotateX": 600,
                                        "rotateY": 1200
                                    }
                                }
                            },
                            "interactivity": {
                                "detect_on": "canvas",
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    },
                                    "resize": true
                                },
                                "modes": {
                                    "grab": {
                                        "distance": 800,
                                        "line_linked": {
                                            "opacity": 1
                                        }
                                    },
                                    "repulse": {
                                        "distance": 70,
                                        "duration": 0.4
                                    },
                                }
                            },
                            "retina_detect": true
                        }}/>
                </ParallaxLayer>


                <ParallaxLayer
                    offset={0.2}
                    speed={0.7}
                    onClick={() => this.parallax.scrollTo(1)}
                    style={{ display: 'block', width: '50%', marginLeft: '22%'}}>
                    <Typography variant="h1" className={classes.head}> STRENGTH IN NUMBERS
                        <hr className="progress" />
                    </Typography>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.35}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(1)}
                    className={classes.main}>
                    <Typography variant="h2" className={classes.head1}> Tailored analytical solutions leveraging cutting edge
                        AI and machine learning tech.
                    </Typography>
                </ParallaxLayer>


                <ParallaxLayer
                    offset={1.1}
                    speed={0.7}
                    onClick={() => this.parallax.scrollTo(2)}
                    style={{ display: 'block', width: '70%', marginLeft: '20%' }}>
                    <Typography variant="h1" className={classes.head2}> From
                        conceptualization to implementation. </Typography>
                </ParallaxLayer>


                <ParallaxLayer
                    offset={1.25}
                    speed={-.1}
                    onClick={() => this.parallax.scrollTo(2)}
                    className={classes.service}>
                        <Grid container
                              spacing = {8} >
                            <GridItem icon={db}
                                      classes={classes} paperElevation={6}
                                      title="Data Strategy"
                                      text="Data acquisition, assessment, enhancement and warehousing solutions
                                      for all data types and size.">
                            </GridItem>
                            <GridItem icon={charts}
                                      classes={classes} paperElevation={12}
                                      title="Data Science & Machine Learning R&D"
                                      text="Discovering state of the art approaches to
                                      maximize model scalability, interpretability and precision.">
                            </GridItem>
                            <GridItem icon={dashboard}
                                      classes={classes} paperElevation={6}
                                      title = "App Development"
                                      text="AI integrated application development yielding tremendous control
                                       and insight into data assets.">
                            </GridItem>
                        </Grid>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: 'rgba(0, 1, 88,0.9)' }} />

                <ParallaxLayer
                    offset={2}
                    speed={1.25}
                    style={{ display: 'block'}}>
                    <Grid container
                          direction="column"
                          justify="space-between"
                          alignItems="stretch"
                          spacing={1}
                          style={{display:'block', height:"100%"}}>
                        <Grid item xs={12} direction="column"
                              align="center"
                              style={{ display: "flex", justifyContent: "flex-end" }}>
                            <Paper elevation={4} style={{height:'100%', width:'100%', textAlign: 'center',
                                direction: "row",
                                alignItems: "flex-end"}}>
                                <Grid container spacing={1} variant="Grid"
                                      justify="space-between"
                                      alignItems="stretch"
                                      style={{width:"80%", marginLeft:"10%"}}
                                >
                                    <Grid item xs={12} md={6}>
                                        <InputForm />
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <Grid container spacing={1} variant="Grid" justify="space-evenly" alignItems="center">
                                            <Grid item xs={6} md={12}>
                                                <Typography variant="paragraph" className={classes.head1} >contact@vistalore.com</Typography>
                                            </Grid>
                                            <Grid item xs={6} md={12}>
                                                <Typography variant="paragraph" className={classes.head1} >1-214-727-7247</Typography>
                                            </Grid>
                                            <Grid item xs={4} md={12}>
                                                <Link to='/' >
                                                    <Typography variant="paragraph" className={classes.head1} >Home</Typography>
                                                </Link>
                                            </Grid>
                                            <Grid item xs={4} md={12}>
                                                <Link to='/demos' >
                                                    <Typography variant="paragraph" className={classes.head1} >Demo</Typography>
                                                </Link>
                                            </Grid>
                                            <Grid item xs={4} md={12}>
                                                <Link to='/services' >
                                                    <Typography variant="paragraph" className={classes.head1} >Services</Typography>
                                                </Link>
                                            </Grid>
                                            </Grid>
                                            <Grid item xs={4} md={12}>
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
                                            <Grid item xs={1} md={12}>
                                            <img src={LOGO2020} alt="logo" className={classes.logo} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                    </Grid>
                        <Grid item xs={12} style={{display:'flex', height:"27"}}>
                            <img src={software} style={{display:'flex', margin: "auto"}}/>
                        </Grid>
                        <Grid item>
                            <Particles
                                params={{
                                    "particles": {
                                        "number": {
                                            "value": 120,
                                            "density": {
                                                "enable": true,
                                                "value_area": 800
                                            }
                                        },
                                        "color": {
                                            "value": "#ffffff"
                                        },
                                        "shape": {
                                            "type": "circle",
                                            "stroke": {
                                                "width": 0,
                                                "color": "#000000"
                                            },
                                        },
                                        "opacity": {
                                            "value": 0.4,
                                            "random": false,
                                            "anim": {
                                                "enable": false,
                                                "speed": 1,
                                                "opacity_min": 0.1,
                                                "sync": false
                                            }
                                        },
                                        "size": {
                                            "value": 4,
                                            "random": true,
                                            "anim": {
                                                "enable": false,
                                                "speed": 20,
                                                "size_min": 0.1,
                                                "sync": false
                                            }
                                        },
                                        "line_linked": {
                                            "enable": true,
                                            "distance": 150,
                                            "color": "#ffffff",
                                            "opacity": 0.2,
                                            "width": 1
                                        },
                                        "move": {
                                            "enable": true,
                                            "speed": 1,
                                            "direction": "none",
                                            "random": false,
                                            "straight": false,
                                            "out_mode": "out",
                                            "bounce": false,
                                            "attract": {
                                                "enable": false,
                                                "rotateX": 600,
                                                "rotateY": 1200
                                            }
                                        }
                                    },
                                    "interactivity": {
                                        "detect_on": "canvas",
                                        "events": {
                                            "onhover": {
                                                "enable": true,
                                                "mode": "repulse"
                                            },
                                            "resize": true
                                        },
                                        "modes": {
                                            "grab": {
                                                "distance": 800,
                                                "line_linked": {
                                                    "opacity": 1
                                                }
                                            },
                                            "repulse": {
                                                "distance": 50,
                                                "duration": 0.4
                                            },
                                        }
                                    },
                                    "retina_detect": true
                                }}/>
                        </Grid>
                    </Grid>
                </ParallaxLayer>
            </Parallax>
        )
    }
}


export default withStyles(styles)(Landing);