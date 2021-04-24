import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

function pxToRem(value) {
    return `${value / 16}rem`;
}
const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
    breakpoints,
    overrides: {
        MuiTypography: {

            h1: {
                fontWeight:400,
                color:'#ffffff',
                fontFamily: 'Roboto',
                fontSize: pxToRem(26),
                letterSpacing:pxToRem(2),
                [breakpoints.up("sm")]: {
                    fontSize: pxToRem(22),
                    letterSpacing:pxToRem(2),
                },
                [breakpoints.up("md")]: {
                    fontSize: pxToRem(38),
                    letterSpacing:pxToRem(3),
                },
                [breakpoints.up("lg")]: {
                    fontSize: pxToRem(48),
                    letterSpacing:pxToRem(4),
                }
            },
            h2: {
                fontWeight:400,
                fontFamily: 'Roboto',
                color:'white',
                padding: '16px',
                fontSize: pxToRem(22),
                letterSpacing:pxToRem(2),
                [breakpoints.up("sm")]: {
                    fontSize: pxToRem(26),
                    letterSpacing:pxToRem(2),
                },
                [breakpoints.up("md")]: {
                    fontSize: pxToRem(28),
                    letterSpacing:pxToRem(3)
                },
                [breakpoints.up("lg")]: {
                    fontSize: pxToRem(30),
                    letterSpacing:pxToRem(4)
                }
            },
            h3: {
                fontWeight:200,
                fontFamily: 'Lato',
                color:'white',
                padding: '10px',
                fontSize: pxToRem(18),
                letterSpacing:pxToRem(1),
                [breakpoints.up("sm")]: {
                    fontSize: pxToRem(18),
                    letterSpacing:pxToRem(2),
                },
                [breakpoints.up("md")]: {
                    fontSize: pxToRem(18),
                    letterSpacing:pxToRem(3)
                },
                [breakpoints.up("lg")]: {
                    fontSize: pxToRem(20),
                    letterSpacing:pxToRem(4)
                }
            },
            paragraph: {
                fontWeight:100,
                fontFamily: 'Lato',
                padding: '10px',
                fontSize: pxToRem(16),
                letterSpacing:pxToRem(1),
                [breakpoints.up("sm")]: {
                    fontSize: pxToRem(16),
                    letterSpacing:pxToRem(2),
                },
                [breakpoints.up("md")]: {
                    fontSize: pxToRem(16),
                    letterSpacing:pxToRem(2)
                },
                [breakpoints.up("lg")]: {
                    fontSize: pxToRem(18),
                    letterSpacing:pxToRem(2)
                }
            }
        }
    }
});



ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root'));