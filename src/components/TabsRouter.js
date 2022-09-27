import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { HashRouter, Route, Switch, Link, useLocation } from 'react-router-dom';
import Landing1 from './Landing1'
import Demos from './Demos'
import Services1 from './Services1'
import LOGO2020 from '../images/LOGO2020.png'
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        zIndex:2,
    },
    logo: {
        width: "20%",
        textAlign: 'center',
        marginLeft: '2%',
        [breakpoints.up("sm")]: {
            width: '17%',
            marginLeft: '5%',
        },
        [breakpoints.up("md")]: {
            width: '15%',
            marginLeft: '7%',
        },
        [breakpoints.up("lg")]: {
            width: '12%',
            marginLeft: '12%',
        },
        [breakpoints.up("xl")]: {
            width: '10%',
            marginLeft: '15%',
        }
    },
    tab:{
        color:'white'
    }

});

function a11yProps(index) {
    return {
        id: `tabs-router-${index}`,
        "aria-controls": `tabs-router-${index}`
    };
}




function Nav() {
    const classes = useStyles();
    const location = useLocation();
    let currentTab = location.pathname;
    const routes = ['/', '/demos', '/services']
    return (
        <nav className={classes.root}>
            <AppBar style={{background: '#000000', position:"fixed"}}>
                <Toolbar>
                    <img src={LOGO2020}
                         alt="logo" className={classes.logo}

                    />
                    <Grid container justify={"center"}>
                        <Grid item xs={12} md={10} lg={8} xl={6}>
                        <Tabs className={classes.tab}
                              variant="scrollable"
                              scrollButtons="auto"
                              TabIndicatorProps={{style: {backgroundColor: "#20f9ff"}}}
                            value={currentTab}
                        >
                            <Tab label={"Home"}
                                 value={routes[0]}
                                 component={Link}
                                 to={routes[0]}
                                 {...a11yProps(0)}

                            />
                            <Tab label={"Demos"}
                                 value={routes[1]}
                                 component={Link}
                                 to={routes[1]}
                                 {...a11yProps(1)}

                            />
                            <Tab label={"Services"}
                                 value={routes[2]}
                                 component={Link}
                                 to={routes[2]}
                                 {...a11yProps(2)}

                            />
                        </Tabs>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        <Toolbar/>
        </nav>
    );
}

function TabsRouter() {
    return (
        <div className="NavBar">
            <HashRouter>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Landing1}></Route>
                    <Route path="/demos" component={Demos}></Route>
                    <Route path="/services" component={Services1}></Route>
                </Switch>
            </HashRouter>

        </div>

    );
}

export default TabsRouter;