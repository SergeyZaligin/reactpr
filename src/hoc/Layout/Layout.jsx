import React, { Component } from "react";
import "./Layout.css";

class Layout extends Component {
  render() {
    return (
      <div>
        <main role="main">{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
