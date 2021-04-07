import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./Form";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";
import Typography from "@material-ui/core/Typography";
import Alert from '@material-ui/lab/Alert';
import * as emailjs from 'emailjs-com';


const styles = theme => ({
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    container: {
        maxWidth: "100%"
    }
});


const validationSchema = Yup.object({
    name: Yup.string("Enter a name"),
    email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    captcha: Yup.string().required()
});


class InputForm extends Component {


    constructor(props) {
        super(props);
        this.state = {};
        this.CaptchaRef = React.createRef();

    }

    submit = data => {
        console.log(data);
        var templateParams = {
            from_name: data.name,
            email: data.email,
            message: data.message
        };

        emailjs.send(process.env.REACT_APP_EMAILJS_RECEIVER, process.env.REACT_APP_EMAILJS_TEMPLATEID,
            templateParams,process.env.REACT_APP_EMAILJS_USERID)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });

        this.setState({messageSuccessAlert: true});

        setTimeout(() => {this.setState({messageSuccessAlert: false})}, 1750)

    };



    render() {
        const classes = this.props;
        const values = { name: "", email: "", message:"", captcha:""};
        const messageSuccessAlert = this.state.messageSuccessAlert;

        let alert;
        if (messageSuccessAlert) {
            alert = <Alert severity="success"> Message Sent! </Alert>
        }
        return (
            <React.Fragment>
                <div className={classes.container}>
                    <Paper elevation={0} className={classes.paper}
                           style={{background: "white",
                               textAlign: 'center'}}>
                        <Typography variant="h2" style={{color:"black"}}>Contact</Typography>
                        <Formik
                            render={props => <Form {...props} />}
                            initialValues={values}
                            validationSchema={validationSchema}
                            onSubmit={this.submit}
                        />
                        {alert}
                    </Paper>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(InputForm);
