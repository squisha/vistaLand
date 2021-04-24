import React from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import HCaptcha from '@hcaptcha/react-hcaptcha';


export const Form = props => {
    const {
        values: { name, email, message },
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched,
        setFieldValue,
        CaptchaRef
    } = props;
    console.table(props);

    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };

    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '80%',
            },
        },
    }));

    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');


        return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <div>
            <TextField
                label="Full Name"
                variant="outlined"
                name="name"
                helperText={touched.name ? errors.name : ""}
                error={Boolean(errors.name)}
                size="large"
                value={name}
                onChange={handleChange}
                multiline
            />
            <div>{Boolean(errors.name) ? errors.name : ""}</div>
            <br/>
            <TextField
                label="Your Email"
                variant="outlined"
                name="email"
                helperText={touched.email ? errors.email : ""}
                error={Boolean(errors.email)}
                size="large"
                value={email}
                onChange={handleChange}
                multiline
            /></div>
            <br />
            <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={5}
                rowsMax={10}
                name="message"
                helperText={touched.message ? errors.message : ""}
                error={Boolean(errors.message)}
                fullWidth
                value={message}
                onChange={handleChange}
            />
            <div>{Boolean(errors.message) ? errors.message : ""}</div>
            <HCaptcha
                sitekey='f5f292dc-4dc2-4c3b-9e9a-f8e758bfa68e'
                onVerify={(response) => { setFieldValue("captcha", response); }}
                ref={CaptchaRef}
            />

            <Button
                type="submit"
                fullWidth
                variant="raised"
                color="secondary"
                disabled={!isValid}
            >
                Submit
            </Button>
            <div>{Boolean(errors.message) ? errors.message : ""}</div>
        </form>
    );
};
