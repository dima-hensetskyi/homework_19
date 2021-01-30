import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, { useEffect, useState } from 'react';
import { TextField, Checkbox, Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import logo from '../img/padlock.png';

import './SignIn.sass';

const SignIn = () => {
  const [data, setData] = useState(null);
  const [rememberUser, setRememberUser] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('data');
    if (userData) {
      setData(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    const member = localStorage.getItem('remember');
    const member2 = JSON.parse(member);
    if (member2 && data) {
      setLogin(data.userEmail);
      setPassword(data.userPassword);
    }
  }, [data]);

  const Alert = (props) => (
    <MuiAlert elevation={6} variant="filled" {...props} />
  );

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenErrorSnackbar(false);
    setOpenSuccessSnackbar(false);
  };

  const authorization = () => {
    if (data) {
      if (data.userEmail === login || data.userPassword === password) {
        setOpenSuccessSnackbar(true);
        setLogin('');
        setPassword('');
        setRememberUser(false);
        return rememberUser
          ? localStorage.setItem('remember', JSON.stringify(true))
          : null;
      }
    }
    console.log('yes');
    setOpenErrorSnackbar(true);
  };

  return (
    <div className="sign-in">
      <header>
        <div className="header-img">
          <img className="logo" src={logo} alt="logo"></img>
        </div>
        <p>Sign In</p>
      </header>
      <TextField
        id="outlined-basic"
        label="Email Adress*"
        variant="outlined"
        autoComplete="email"
        value={login}
        onChange={(event) => setLogin(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Password*"
        variant="outlined"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <FormControlLabel
        control={
          <Checkbox checked={rememberUser} value="password" color="primary" />
        }
        label="Remember me"
        onChange={() =>
          rememberUser ? setRememberUser(false) : setRememberUser(true)
        }
      ></FormControlLabel>
      <Button
        className="authorization-buttons"
        variant="contained"
        color="primary"
        onClick={authorization}
      >
        SIGN IN
      </Button>
      <footer>
        <Link href="#">Forgot password?</Link>
        <Link href="#sign-up">Don't have an account? Sign Up</Link>
        <p>Copyright &copy; Your Website 2021.</p>
      </footer>
      <Snackbar
        open={openErrorSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          The password that you entered is incorrect. Try again with diferent
          login info.
        </Alert>
      </Snackbar>
      <Snackbar
        open={openSuccessSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Authorization successful!
        </Alert>
      </Snackbar>
    </div>
  );
};
export default SignIn;
