import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    const {children} = this.props
    return (
      <div className="about">
        {children}
      </div>
    );
  }
}

export default About;
