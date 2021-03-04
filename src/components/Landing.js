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


const styles = theme => ({
    head: {
        color:'#20f9ff',
    },
    head1: {
        color:'white'
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
    }


});

function GridItem({ icon, classes, text, title, paperElevation }) {
    return (
        // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
        // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
        // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
        <Grid item xs={12} sm={12} md={4} lg={4}>
            <Paper elevation={paperElevation} style={{background: 'linear-gradient(45deg, #000158 30%, #7f80ff 95%)',
                textAlign: 'center', height:'100%'}}>
                <img src={icon} style={{ width: '30%', padding: "25px"}} />
                <Typography variant="h1" className={classes.head1}> {title}
                </Typography>
                <Typography variant="h2" className={classes.head1}> {text}
                </Typography>
            </Paper>
        </Grid>
    );
}

function GridLogo({ image }) {
    return (
        <Grid item xs={3} sm={2} md={1} lg={1}>
            <img src={image} style={{ width: '100%'}} />
        </Grid>
    );
}



class Landing extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Parallax ref={ref => (this.parallax = ref)} pages={3}>
                <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#000031' }} />
                <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#000158' }} />

                <ParallaxLayer offset={0} speed={-1} style={{ pointerEvents: 'none' }}>
                    <img src={"dataism.png"} style={{ width: '100%', height:'100%' }} />
                </ParallaxLayer>


                <ParallaxLayer offset={1} speed={0} style={{ pointerEvents: 'none' }}>
                    <img src={"lighteningbolt.png"} style={{ width: '25%' }} />
                </ParallaxLayer>


                <ParallaxLayer
                    offset={0.2}
                    speed={0.7}
                    onClick={() => this.parallax.scrollTo(1)}
                    style={{ display: 'block', width: '40%', marginLeft: '25%' }}>
                    <Typography variant="h1" className={classes.head}> STRENGTH IN NUMBERS
                    </Typography>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.35}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(1)}
                    style={{ display: 'block', width: '50%', marginLeft: '25%' }}>
                    <Typography variant="h1" className={classes.head1}> Tailored analytical solutions leveraging cutting edge
                        AI and machine learning tech.</Typography>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={.8}
                    speed={1.1}
                    onClick={() => this.parallax.scrollTo(1)}
                    style={{ display: 'block', width: '100%', marginLeft: "50%", height:"30%"}}>
                    <IconButton>
                        <ArrowDownwardIcon style={{ fontSize: 65, color: "white" }}/>
                    </IconButton>
                </ParallaxLayer>


                <ParallaxLayer
                    offset={1.1}
                    speed={0.7}
                    onClick={() => this.parallax.scrollTo(2)}
                    style={{ display: 'block', width: '70%', marginLeft: '20%' }}>
                    <Typography variant="h1" className={classes.head1}> Guiding all aspects from
                        conceptualization to implementation.</Typography>
                </ParallaxLayer>


                <ParallaxLayer
                    offset={1}
                    speed={0.35}
                    onClick={() => this.parallax.scrollTo(2)}
                    style={{ display: 'block', marginTop:'20.25%'}}>
                    <Box  px={10}>
                        <Grid container spacing={10} variant="Grid" >
                            <GridItem icon="db.png"
                                      classes={classes} paperElevation={6}
                                      title="Big Data Management"
                                      text="Data acquisition and warehousing solutions for any data type
                                      and size.">
                            </GridItem>
                            <GridItem icon="charts.png"
                                      classes={classes} paperElevation={12}
                                      title="Machine Learning R&D"
                                      text="Discovering state of the art approaches to
                                      maximize model scalability, interpretability and precision.">
                            </GridItem>
                            <GridItem icon="dashboard.png"
                                      classes={classes} paperElevation={6}
                                      title = "App Development"
                                      text="AI integrated application development yielding tremendous control and insight.">
                            </GridItem>
                        </Grid>
                    </Box>
                </ParallaxLayer>


                <ParallaxLayer
                    offset={1.8}
                    speed={1.1}
                    onClick={() => this.parallax.scrollTo(2)}
                    style={{ display: 'block', width: '100%', marginLeft: "50%", height:"30%"}}>
                    <IconButton>
                        <ArrowDownwardIcon style={{ fontSize: 65, color: "white" }}/>
                    </IconButton>
                </ParallaxLayer>







                <ParallaxLayer
                    offset={2}
                    speed={1}
                    style={{ display: 'block', width: '100%', height:'100%'}}>
                    <Grid container spacing={2}
                          direction="column"
                          justify="space-between"
                          alignItems="stretch"
                          className={classes.container}>
                        <Grid item xs={12} >
                            <Paper elevation={10} style={{ margin: 'auto', display: 'block', width: '100%', height:'100%', background: 'black'}}>
                                <img src={"software.png"} style={{ width: '70%', padding: '0 0 0 480px'}} />
                            </Paper>
                        </Grid>


                        <Grid item xs={12} md={6} style={{ margin: '0 auto',  width:'500px',}}>
                            <InputForm />
                        </Grid>


                        <Grid item xs={12}>
                            <Paper elevation={10} style={{background: 'black', height:'100%',
                                textAlign: 'center'}}>
                                <Grid container spacing={10} variant="Grid">
                                    <Grid item xs={4}>
                                        <Link to='/demos'>
                                            <Typography variant="h3" className={classes.head1}>Demo</Typography>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <IconButton>
                                            <FacebookIcon style={{ fontSize: 35, color:'blue', textAlign: 'left'}}/>
                                         </IconButton>
                                        <IconButton>
                                            <TwitterIcon style={{ fontSize: 35, color:'blue', textAlign: 'left'}}/>
                                        </IconButton>
                                        <IconButton>
                                            <LinkedInIcon style={{ fontSize: 35, color:'blue', textAlign: 'left'}}/>
                                        </IconButton>
                                        <IconButton>
                                            <YouTubeIcon style={{ fontSize: 35, color:'blue', textAlign: 'left'}}/>
                                        </IconButton>
                                        <IconButton>
                                            <GitHubIcon style={{ fontSize: 35, color:'blue', textAlign: 'left'}}/>
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <img src='../../LOGO2020.png' alt="logo" className={classes.logo} />
                                        <Typography variant="h3" className={classes.head1}> contact@vistalore.com</Typography>
                                        <Typography variant="h3" className={classes.head1}> 1-214-727-7247</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </ParallaxLayer>
            </Parallax>
        )
    }
}


export default withStyles(styles)(Landing);