import { TextField, Checkbox, Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, { useEffect, useState } from 'react';

import { regExpEmail, regExpPassword } from './regularExpression';
import logo from '../img/padlock.png';

import './SignUp.sass';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [correctFirstName, setCorrectFirstName] = useState(true);
  const [correctLastName, setCorrectLastName] = useState(true);
  const [correctUserEmail, setCorrectUserEmail] = useState(true);
  const [correctUserPassword, setCorrectUserPassword] = useState(false);

  const [receiveMail, setReceiveMail] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);

  useEffect(() => {
    firstName.length >= 3
      ? setCorrectFirstName(true)
      : setCorrectFirstName(false);

    lastName.length >= 3 ? setCorrectLastName(true) : setCorrectLastName(false);
  }, [firstName, lastName]);

  useEffect(() => {
    regExpEmail.test(userEmail)
      ? setCorrectUserEmail(true)
      : setCorrectUserEmail(false);

    regExpPassword.test(userPassword)
      ? setCorrectUserPassword(true)
      : setCorrectUserPassword(false);
  }, [userEmail, userPassword]);

  const correctValue =
    correctFirstName &&
    correctLastName &&
    correctUserPassword &&
    correctUserEmail;

  const sendData = () => {
    if (correctValue) {
      const data = {
        firstName,
        lastName,
        userEmail,
        userPassword,
        receiveMail,
      };
      localStorage.setItem('data', JSON.stringify(data));
      setFirstName('');
      setLastName('');
      setUserEmail('');
      setUserPassword('');
      setReceiveMail(false);
      setOpenSnackbar(true);
    } else {
      setOpenErrorSnackbar(true);
    }
  };

  const Alert = (props) => (
    <MuiAlert elevation={6} variant="filled" {...props} />
  );

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
    setOpenErrorSnackbar(false);
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
          error={firstName ? (correctFirstName ? false : true) : false}
          label="First Name*"
          variant="outlined"
          autoComplete="given-name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          error={lastName ? (correctLastName ? false : true) : false}
          label="Last Name*"
          variant="outlined"
          autoComplete="family-name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <TextField
        id="outlined-basic"
        error={userEmail ? (correctUserEmail ? false : true) : false}
        label="Email Adress*"
        variant="outlined"
        autoComplete="email"
        value={userEmail}
        onChange={(event) => setUserEmail(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        error={userPassword ? (correctUserPassword ? false : true) : false}
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
              receiveMail ? setReceiveMail(false) : setReceiveMail(true)
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
        onClick={() => (correctValue ? sendData() : setOpenErrorSnackbar(true))}
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
      <Snackbar
        open={openErrorSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          Information is invalid. Please enter a valid information.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SignUp;
