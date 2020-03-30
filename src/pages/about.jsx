import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <About>
          <h3>Hello trang này chưa kịp làm :v</h3>
        </About>
      </div>
    );
  }
}

export default AboutPage;
