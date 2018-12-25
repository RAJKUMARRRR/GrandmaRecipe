import React from "react";
import Modal from "../components/Modal/Modal";
import LoginOptions from "./LoginOptions/LoginOptions";
import Login from "./Login/Login";
import Register from "./Register/Register";
import {Switch,Route,Link,Redirect} from 'react-router-dom';

class Auth extends React.Component {
  componentDidMount(){
    console.log("Auth:ComponentDidMount----->",this.props);
  }

  render() {
    return (
      <React.Fragment>
        <Modal>
          <Switch>
            <Route path={this.props.match.url+"/login"} component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/" component={LoginOptions}/>
          </Switch>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Auth;
