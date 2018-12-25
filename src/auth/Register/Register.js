import React from "react";
import classes from './Register.module.css';
import Input from '../../components/Input/Input';
import BackArrow from '../../components/BackArrow/BackArrow';
import Button from '../../components/Button/Button';

class Register extends React.Component {
  render() {
    return (
      <div className={classes.Register}>
        <BackArrow/>
        <p className={classes.Title}>Create an account</p>
        <Input type="text" className={classes.RegisterInput} placeholder="Name" />
        <Input type="text" className={classes.RegisterInput} placeholder="Email Id" />
        <Input
          type="password"
          className={classes.RegisterInput}
          placeholder="Password"
        />
        <div className={classes.Terms}>
          <i className={"fas fa-check-circle "+classes.TermsIcon}/>
          <p className={classes.TermsText}>
            By signing up, you agree to our Terms of Service and Privacy policy
          </p>
        </div>
        <div className={classes.SubmitBox}>
          <Button>CREATE</Button>
        </div>
      </div>
    );
  }
}

export default Register;
