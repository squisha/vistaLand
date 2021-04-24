import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Modal from '@material-ui/core/Modal';
import InputForm from "./Form";
import blackscholes from '../images/blackscholes.png'
import baja from '../images/baja.png'
import dataquality from '../images/dataquality.png'

const useStyles = makeStyles({

    img: {
        width: '70%',
        height: '70%',
        maxWidth: '100%',
        maxHeight: '100%'},
    imgContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    head1: {
        color:'white',
        textAlign:'center',
    },
    paper: {
        background: 'linear-gradient(45deg, #000000 30%, #1f1f1f 95%)',
        textAlign: 'center',
        padding:'.5%'
    },
    button: {
        variant:"raised",
        backgroundColor:'#ebebeb',
        color:"#7f80ff",
        elevation: 10,
        margin: "10px"
    },
    modal: {
        background: 'linear-gradient(45deg, #7f80ff 30%, #ffffff 95%)',
        textAlign: 'center',
        width:"50%"
    }

});

function Demos()
{
    var items = [
        {
            name: " ",
            img:blackscholes,
            description: "Warrant Valuation Analyzer",
            link:"https://www.vistalore.com/warrant"
        },
        {
            name: " ",
            img:baja,
            description: "Baja 1000 Prep",
            link:"https://www.vistalore.com/baja1k"

        },
        {
            name: " ",
            img:dataquality,
            description: "Data Quality & Propensity Models",
            link:"https://www.vistalore.com/dataQuality"

        }
    ]

    return (
        <Carousel autoPlay={false}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };




    return (
        <Paper>
            <Paper elevation = {10} className={classes.paper}>
                <Typography variant="h2" className={classes.head1} >{props.item.description}</Typography>
                <Button className={classes.button} target="_blank" href={props.item.link} >
                    Live Demo
                </Button>
                <Button className={classes.button} onClick={handleOpen}>
                    Request More Info
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="contact-modal-title"
                    aria-describedby="cnotact-modal-description"
                >
                    <div className={classes.modal} style={{position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'}}>
                        <InputForm />
                    </div>
                </Modal>
            </Paper>
            <br/>
            <Typography variant="h1" className={classes.head1} >{props.item.name}</Typography>
            <div className={classes.imgContainer}>
                <img src={props.item.img} className={classes.img} />
            </div>

        </Paper>
    )
}
export default Demos;
