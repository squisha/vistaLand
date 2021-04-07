import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/addons'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/styles'
import InputForm from "./Form/index";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';


const styles = theme => ({
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
    container: {
        minHeight: "100vh",
        minWidth:"100vh"
    },

});

function GridItem({ icon, classes, text, title, paperElevation }) {
    return (
        // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
        // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
        // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
        <Grid item xs={12} sm={12} md={4} lg={4}>
            <Paper elevation={paperElevation} style={{background: 'linear-gradient(45deg, #7f80ff 30%, #ffffff 95%)',
                textAlign: 'center', height:'100%'}}>
                <img src={icon} style={{ width: '50%', padding: "25px"}} />
                <Typography variant="h4" className={classes.head1}> {title}
                </Typography>
                <Typography variant="h2" className={classes.head1}> {text}
                </Typography>
            </Paper>
        </Grid>
    );
}

class Landing extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Parallax ref={ref => (this.parallax = ref)} pages={3} style={{background:"#000000"}}>
                <ParallaxLayer offset={1} speed={0} style={{ backgroundColor: 'rgba(0, 1, 88,0.9)' }} />
                <ParallaxLayer offset={2} speed={1.5} style={{ backgroundColor: 'rgba(0, 1, 88,0.9)' }} />

                <ParallaxLayer offset={0} speed={-.35} style={{ pointerEvents: 'none', marginLeft:"70%"}}>
                    <img src={"half-1.png"} style={{ width: '30%', height:'100%', opacity:0.1}} />
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
                    style={{ display: 'block', width: '42%', marginLeft: '30%', textAlign: "center", padding: "20px", height: "220px", background: "rgba(255, 255, 255, 0.85)", borderRadius: ".3em"}}>
                    <Typography variant="h1" className={classes.head1}> Tailored analytical solutions leveraging cutting edge
                        AI and machine learning tech.
                    </Typography>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={.8}
                    speed={0}
                    onClick={() => this.parallax.scrollTo(1)}
                    style={{ display: 'block', width: '100%', marginLeft: "50%", height:"30%"}}>
                    <IconButton>
                        <ArrowDownwardIcon style={{ fontSize: 55, color: "7f80ff" }}/>
                    </IconButton>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.8}
                    speed={0}
                    onClick={() => this.parallax.scrollTo(2)}
                    style={{ display: 'block', width: '100%', marginLeft: "50%", height:"30%"}}>
                    <IconButton>
                        <ArrowDownwardIcon style={{ fontSize: 55, color: "7f80ff" }}/>
                    </IconButton>
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
                    offset={1}
                    speed={-.2}
                    onClick={() => this.parallax.scrollTo(2)}
                    style={{ display: 'block', marginTop:'15.25%'}}>
                    <Box  px={10} width="80%" marginLeft="10%">
                        <Grid container spacing={10} variant="Grid" >
                            <GridItem icon="db.png"
                                      classes={classes} paperElevation={6}
                                      title="Data Strategy"
                                      text="Data acquisition, assessment, enhancement and warehousing solutions
                                      for all data types and size.">
                            </GridItem>
                            <GridItem icon="charts.png"
                                      classes={classes} paperElevation={12}
                                      title="Data Science & Machine Learning R&D"
                                      text="Discovering state of the art approaches to
                                      maximize model scalability, interpretability and precision.">
                            </GridItem>
                            <GridItem icon="dashboard.png"
                                      classes={classes} paperElevation={6}
                                      title = "App Development"
                                      text="AI integrated application development yielding tremendous control
                                       and insight into data assets.">
                            </GridItem>
                        </Grid>
                    </Box>
                </ParallaxLayer>



                <ParallaxLayer
                    offset={2}
                    speed={1}
                    style={{ display: 'block'}}>
                    <Grid container
                          direction="column"
                          justify="space-between"
                          alignItems="stretch"
                          spacing={1}
                          style={{display:'block', height:"100%"}}>
                        <Grid item xs={12} style={{display:'flex', height:"27"}}>
                                <img src={"software.png"} style={{display:'flex', margin: "auto"}}/>
                        </Grid>
                        <Grid item xs={12} direction="column"
                              align="center"
                              style={{ display: "flex", justifyContent: "flex-end" }}>
                            <Paper elevation={10} style={{height:'100%', width:'100%', textAlign: 'center',
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
                                            <Grid item xs={4} md={12}>
                                                <Typography variant="h3" className={classes.head1} >contact@vistalore.com</Typography>
                                                <Typography variant="h3" className={classes.head1} >1-214-727-7247</Typography>
                                            </Grid>
                                            <Grid item xs={4} md={12}>
                                                <Link to='/' >
                                                    <Typography variant="h3" className={classes.head1} >Home</Typography>
                                                </Link>
                                                <Link to='/demos' >
                                                    <Typography variant="h3" className={classes.head1} >Demo</Typography>
                                                </Link>
                                                <Link to='/services' >
                                                    <Typography variant="h3" className={classes.head1} >Services</Typography>
                                                </Link>
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
                                            <img src='../LOGO2020.png' alt="logo" className={classes.logo} />
                                        </Grid>
                                    </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
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