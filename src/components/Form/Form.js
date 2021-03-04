import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import NameIcon from "@material-ui/icons/SupervisorAccount";
import EmailIcon from "@material-ui/icons/Email";
import CommentIcon from '@material-ui/icons/Comment';


export const Form = props => {
    const {
        values: { name, email, message },
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched
    } = props;
    console.table(props);

    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };
    return (
        <form onSubmit={handleSubmit}>

            <TextField
                variant="outlined"
                name="name"
                helperText={touched.name ? errors.name : ""}
                error={Boolean(errors.name)}
                label="Name"
                value={name}
                onChange={handleChange}
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <NameIcon />
                        </InputAdornment>
                    )
                }}
            />
            <div>{Boolean(errors.name) ? errors.name : ""}</div>
            <br/>
            <TextField
                variant="outlined"
                name="email"
                helperText={touched.email ? errors.email : ""}
                error={Boolean(errors.email)}
                label="Email"
                fullWidth
                value={email}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EmailIcon />
                        </InputAdornment>
                    )
                }}
            />
            <div>{Boolean(errors.email) ? errors.email : ""}</div>
            <br/>
            <TextField
                variant="outlined"
                multiline
                rows={5}
                rowsMax={10}
                name="message"
                helperText={touched.message ? errors.mesage : ""}
                error={Boolean(errors.message)}
                label="Message"
                fullWidth
                value={message}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <CommentIcon />
                        </InputAdornment>
                    )
                }}
            />
            <div>{Boolean(errors.message) ? errors.message : ""}</div>
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
