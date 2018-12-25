import React from "react";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import {withRouter} from 'react-router-dom';

class Layout extends React.Component {
  componentDidMount(){
    console.log("Layout:ComponentDidMount----->",this.props);
  }
  render() {
    return (
      <div style={{"position":"relative"}}>
        <Header/>
        {
          /**Main Content**/
          this.props.children
        }
        <Footer/>
      </div>
    );
  }
}

export default withRouter(Layout);
