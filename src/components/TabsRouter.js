import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { HashRouter, Route, Switch, Link, useLocation } from 'react-router-dom';
import Landing from './Landing'
import Demos from './Demos'


const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    logo: {
        width: 300,
        height: 90,
        textAlign: 'center',
        maxWidth: '50%',
        maxHeight: '70%',
        marginLeft: '10%'
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
    const routes = ['/', '/demos']
    return (
        <nav className={classes.root}>
            <AppBar position='static' style={{background: '#000000'}}>
                <Toolbar>
                    <img src='../../LOGO2020.png' alt="logo" className={classes.logo}/>
                    <Grid container justify={"center"}>
                        <Tabs
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
                        </Tabs>
                    </Grid>
                </Toolbar>
            </AppBar>
        </nav>
    );
}

function TabsRouter() {
    return (
        <div className="NavBar">
            <HashRouter>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Landing}></Route>
                    <Route path="/demos" component={Demos}></Route>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default TabsRouter;