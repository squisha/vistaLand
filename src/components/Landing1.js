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


import InputForm from "./Form/index";
import db from '../images/db.png'
import charts from '../images/charts.png'
import dashboard from '../images/dashboard.png'
import software from '../images/software.png'
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import Demos from "./Demos";
import Particless from "./Particles"
import Divider from "@material-ui/core/Divider";

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
        height: "15%",
        color: "white",
        paddingBottom:theme.spacing(2),
        [breakpoints.up("sm")]: {
            height: '17%',
            paddingBottom: theme.spacing(4)
        },
        [breakpoints.up("md")]: {
            height: '20%',
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
            height: '25%',
        },
        [breakpoints.up("md")]: {
            height: '27%',
        },
        [breakpoints.up("lg")]: {
            height: '36%',
        },
        [breakpoints.up("xl")]: {
            height: '32%',
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
    cardContent: {
        flexGrow: 1,
    },
    whitefont: {
        color:"white",
        position:"relative",
        zIndex:1,
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
    toolbar: theme.mixins.toolbar,
}));

export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Header unit */}
                <div className={classes.headerContent}>
                    <Container>
                        <div className={classes.partical}>
                            <Particless/>
                        </div>
                        <div className={classes.overlay}>
                        <Typography component="h2" variant="h1" align="center" gutterBottom className={classes.whitefont}>
                            STRENGTH IN NUMBERS
                            <hr className="progress" />
                        </Typography>
                        <Typography variant="h3" align="center" paragraph className={classes.whitefont}>
                            Tailored analytical solutions leveraging cutting edge
                            AI and machine learning tech.
                        </Typography></div>
                    </Container>
                </div>


                <Container className={classes.cardGrid} maxWidth="md">
                    <Typography component="h2" variant="h2" align="center" className={classes.blackfont}>
                        From conceptualization to implementation.
                    </Typography>
                    <Divider variant="middle" style={{ padding:"10px", background: "#fafafa" }} />
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4} >
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={db}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Data Strategy
                                    </Typography>
                                    <Typography>
                                        Data acquisition, assessment, enhancement and warehousing solutions
                                        for all data types and size.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={charts}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Data Science & Machine Learning R&D
                                    </Typography>
                                    <Typography>
                                        Discovering state of the art approaches to
                                        maximize model scalability, interpretability and precision.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card className={classes.card} >
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={dashboard}
                                />
                                <CardContent className={classes.cardContent} >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        App Development
                                    </Typography>
                                    <Typography>
                                        AI integrated application development yielding tremendous control
                                        and insight into data assets.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>

            <Container className={classes.banner} xs={12}>
                <Typography variant="h4" align="center" gutterBottom className={classes.whitefont} style={{paddingTop:"5px"}}>
                    Tech We Use
                </Typography>
                <Typography variant="h4" align="center" gutterBottom>
                    <img src={software} className={classes.software}/>
                </Typography>
            </Container>
            </main>
            {/* Footer */}
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
            {/* End footer */}
        </React.Fragment>
    );
}