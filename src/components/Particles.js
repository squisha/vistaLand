import { Particles } from '@blackbox-vision/react-particles';
import React from "react";
import logo from '../images/wiz.png'


function Particless ()
{

    return(
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            }}>
        <Particles
            id="simple"
            width="auto"
            height="100vh"
            style={{
                backgroundColor: 'black',
            }}
            params={{
                particles: {
                    number: {
                        value: 40,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "image",
                        stroke: {
                            width: 50,
                            color: "#ffffff"
                        },
                        polygon: {
                            nb_sides: 3
                        },
                        image: {
                            src: logo,
                            width: 8,
                            height: 12,
                        }
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.3,
                            sync: false
                        }
                    },
                    size: {
                        value: 20,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 3,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 300,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 2
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: false,
                            mode: "repulse"
                        },
                        onclick: {
                            enable: true,
                            mode: "push"
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 800,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 800,
                            size: 80,
                            duration: 2,
                            opacity: 0.8,
                            speed: 3
                        },
                        repulse: {
                            distance: 400,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                }
            }}
        />
        </div>
    )
};

export default Particless;