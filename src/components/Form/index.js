import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./Form";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";
import Typography from "@material-ui/core/Typography";
import Alert from '@material-ui/lab/Alert';


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
        .required("Email is required")
});


class InputForm extends Component {


    constructor(props) {
        super(props);
        this.state = {};
    }

    submit = data => {
        console.log(data);
        var templateParams = {
            from_name: data.name,
            email: data.email,
            message: data.message
        };

        this.setState({messageSuccessAlert: true});

        setTimeout(() => {this.setState({messageSuccessAlert: false})}, 1750)

    };


    render() {
        const classes = this.props;
        const values = { name: "", email: "", message:""};
        const messageSuccessAlert = this.state.messageSuccessAlert;
        let alert;
        if (messageSuccessAlert) {
            alert = <Alert severity="success"> Message Sent! </Alert>
        }
        return (
            <React.Fragment>
                <div className={classes.container}>
                    <Paper elevation={10} className={classes.paper}
                           style={{background: 'linear-gradient(45deg, #7f80ff 30%, #000158 95%)',
                               textAlign: 'center', padding: '10px 50px'}}>
                        <Typography variant="h2">Contact</Typography>
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
