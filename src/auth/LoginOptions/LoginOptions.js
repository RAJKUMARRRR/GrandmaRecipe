import React from "react";
import classes from "./LoginOptions.module.css";

class LoginOptions extends React.Component {

  componentDidMount(){
    console.log("LoginOptions:ComponentDidMount----->",this.props);
  }


  onCloseHandler = ()=>{
    this.props.history.push("/");
  }

  onLoginClickHandler = ()=>{
    let path = this.props.location.pathname+"/login";
    console.log(path);
    this.props.history.push(path);
  }


  render() {
    return (
      <div className={classes.Main}>
        <i
          className={"fas fa-times " + classes.Close}
          onClick={this.onCloseHandler}
        />
        <div className={classes.Logo}>
          <img
            src="https://static.cure.fit/assets/images/curefit_login_logo.svg"
            alt=""
            className={classes.LogoImage}
          />
          <p className={classes.Title}>Welcome to cure.fit</p>
        </div>
        <div className={classes.Google}>
          <i className="fab fa-google" /> <span>SIGN IN WITH GOOGLE</span>
        </div>
        <div className={classes.Facebook}>
          <i className="fab fa-facebook-f" /> <span>SIGN IN WITH FACEBOOK</span>
        </div>
        <div className={classes.Actions}>
          <i className="far fa-envelope" onClick={this.onLoginClickHandler}> Login</i>
          <i className="far fa-user"> CREATE</i>
        </div>
        <div className={classes.Terms}>
          <i className={"fas fa-check-circle " + classes.TermsIcon} />
          <p className={classes.TermsText}>
            By signing up, you agree to our Terms of Service and Privacy policy
          </p>
        </div>
      </div>
    );
  }
}

export default LoginOptions;
