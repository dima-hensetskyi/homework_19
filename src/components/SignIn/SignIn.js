import React, { useEffect, useState } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import Link from '@material-ui/core/Link';
import { Snackbar } from '@material-ui/core';

import logo from '../img/padlock.png';
import {
  TextField,
  SignInContainer,
  HeaderSignIn,
  HeaderImgContainer,
  HeaderImg,
  HeaderText,
  SignInBtn,
  CheckboxContainer,
  Checkbox,
  SignInFooter,
} from '../StyleComponents/StyledComponents';

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
      if (data.userEmail === login && data.userPassword === password) {
        setOpenSuccessSnackbar(true);
        setLogin('');
        setPassword('');
        setRememberUser(false);
        return rememberUser
          ? localStorage.setItem('remember', JSON.stringify(true))
          : null;
      }
    }
    setOpenErrorSnackbar(true);
  };

  return (
    <SignInContainer>
      <HeaderSignIn>
        <HeaderImgContainer>
          <HeaderImg src={logo} alt="logo"></HeaderImg>
        </HeaderImgContainer>
        <HeaderText>Sign In</HeaderText>
      </HeaderSignIn>
      <TextField
        placeholder="Email Adress*"
        autoComplete="email"
        value={login}
        onChange={(event) => setLogin(event.target.value)}
      />
      <TextField
        type="password"
        placeholder="Password*"
        autoComplete="current-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <CheckboxContainer
        onChange={() =>
          rememberUser ? setRememberUser(false) : setRememberUser(true)
        }
      >
        <Checkbox
          type="checkbox"
          checked={rememberUser}
          value="password"
          id="Password"
        />
        <label htmlFor="Password">Remember me</label>
      </CheckboxContainer>
      <SignInBtn onClick={authorization}>SIGN IN</SignInBtn>
      <SignInFooter>
        <Link href="#">Forgot password?</Link>
        <Link href="#sign-up">Don't have an account? Sign Up</Link>
        <p>Copyright &copy; Your Website 2021.</p>
      </SignInFooter>
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
    </SignInContainer>
  );
};

export default SignIn;
