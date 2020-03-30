import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    const {
      copyright: { label, url, year }
    } = this.props;
    const date = year || new Date().getFullYear();
    return (
      <footer className="site-footer clearfix">
        <section className="copyright">
          <a href={url || "/"}>{`${label}`}</a>
          {` `}
          &copy;
          {`${date}`}
        </section>
      </footer>
    );
  }
}

export default Footer;
