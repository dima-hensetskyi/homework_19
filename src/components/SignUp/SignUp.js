import { TextField, Checkbox, Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, { useState } from 'react';

import logo from '../img/padlock.png';

import './SignUp.sass';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [receiveMail, setReceiveMail] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const sendData = () => {
        const data = {
            firstName: firstName,
            lastName: lastName,
            userEmail: userEmail,
            userPassword: userPassword,
            receiveMail: receiveMail,
        };
        localStorage.setItem('data', JSON.stringify(data));
        setFirstName('');
        setLastName('');
        setUserEmail('');
        setUserPassword('');
        setReceiveMail(false);
        setOpenSnackbar(true);
    };

    const Alert = (props) => (
        <MuiAlert elevation={6} variant="filled" {...props} />
    );

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };

    return (
        <div className="sign-up">
            <header>
                <div className="header-img">
                    <img className="logo" src={logo} alt="logo"></img>
                </div>
                <p>Sign Up</p>
            </header>
            <div className="user-name">
                <TextField
                    id="outlined-basic"
                    label="First Name*"
                    variant="outlined"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Last Name*"
                    variant="outlined"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
            </div>
            <TextField
                id="outlined-basic"
                label="Email Adress*"
                variant="outlined"
                autoComplete="email"
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
            />
            <TextField
                id="outlined-basic"
                label="Password*"
                variant="outlined"
                type="password"
                autoComplete="new-password"
                value={userPassword}
                onChange={(event) => setUserPassword(event.target.value)}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={receiveMail}
                        color="primary"
                        onChange={() =>
                            receiveMail
                                ? setReceiveMail(false)
                                : setReceiveMail(true)
                        }
                    />
                }
                label={`I want to receive inspiration, marketing
                promotions and updates via email`}
            ></FormControlLabel>
            <Button
                className="registration-button"
                variant="contained"
                color="primary"
                onClick={sendData}
            >
                SIGN UP
            </Button>
            <footer>
                <Link href="#sign-in">Already have an account? Sign in</Link>
            </footer>
            <p>Copyright &copy; Your Website 2021.</p>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success">
                    Registration successful!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default SignUp;

/* import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function CustomizedSnackbars() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Button variant="outlined" onClick={handleClick}>
                Open success snackbar
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
            <Alert severity="error">This is an error message!</Alert>
            <Alert severity="warning">This is a warning message!</Alert>
            <Alert severity="info">This is an information message!</Alert>
            <Alert severity="success">This is a success message!</Alert>
        </div>
    ); */
