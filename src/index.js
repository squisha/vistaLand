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
                color:'#20f9ff',
                fontFamily: 'Quattrocento Sans',
                fontSize: pxToRem(16),
                letterSpacing:pxToRem(2),
                [breakpoints.up("sm")]: {
                    fontSize: pxToRem(22),
                    letterSpacing:pxToRem(3),
                },
                [breakpoints.up("md")]: {
                    fontSize: pxToRem(28),
                    letterSpacing:pxToRem(4),
                },
                [breakpoints.up("lg")]: {
                    fontSize: pxToRem(34),
                    letterSpacing:pxToRem(5),
                }
            },
            h2: {
                fontWeight:400,
                fontFamily: 'Quattrocento Sans',
                color:'white',
                padding: '16px',
                fontSize: pxToRem(20),
                letterSpacing:pxToRem(1),
                [breakpoints.up("sm")]: {
                    fontSize: pxToRem(22),
                    letterSpacing:pxToRem(2),
                },
                [breakpoints.up("md")]: {
                    fontSize: pxToRem(24),
                    letterSpacing:pxToRem(3)
                },
                [breakpoints.up("lg")]: {
                    fontSize: pxToRem(26),
                    letterSpacing:pxToRem(4)
                }
            },
            h3: {
                fontWeight:200,
                fontFamily: 'Quattrocento Sans',
                color:'white',
                padding: '10px',
                fontSize: pxToRem(12),
                letterSpacing:pxToRem(1),
                [breakpoints.up("sm")]: {
                    fontSize: pxToRem(22),
                    letterSpacing:pxToRem(2),
                },
                [breakpoints.up("md")]: {
                    fontSize: pxToRem(14),
                    letterSpacing:pxToRem(3)
                },
                [breakpoints.up("lg")]: {
                    fontSize: pxToRem(16),
                    letterSpacing:pxToRem(4)
                }
            }
        }
    }
});



ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root'));