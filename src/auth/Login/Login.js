import React from "react";
import classes from './Login.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import BackArrow from '../../components/BackArrow/BackArrow';

class Login extends React.Component {
  render() {
    return (
      <div className={classes.Login}>
        <BackArrow/>
        <p className={classes.Title}>Login to account</p>
        <Input type="text" className={classes.LoginInput} placeholder="Email Id" />
        <Input
          type="password"
          className={classes.LoginInput}
          placeholder="Password"
        />
        <div className={classes.SubmitBox}>
          <a href="#" className={classes.ForgotPassword}>
            Forgot Password ?
          </a>
          <Button>Sign In</Button>
        </div>
      </div>
    );
  }
}

export default Login;
