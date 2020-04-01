import React from "react";
import { ShareButtons } from "react-share";
import "./PostShare.css";

const formatSiteUrl = (siteUrl, pathPrefix, path) =>
  siteUrl + (pathPrefix === "/" ? "" : pathPrefix) + path;

// const getCover = post => {
//   const { cover } = post;
//   if (cover && cover.childImageSharp && cover.childImageSharp.original) {
//     return cover.childImageSharp.original.src;
//   }
//   return "";
// };

class PostShare extends React.Component {
  render() {
    const { postNode, postPath, config } = this.props;
    const post = postNode.frontmatter;
    const url = formatSiteUrl(config.siteUrl, config.pathPrefix, postPath);

    const {
      FacebookShareButton,
      GooglePlusShareButton,
    } = ShareButtons;

    return (
      <section className="share">
        <h4>Share this post</h4>
        <div className="shareButtons" style={{ display: "flex" }}>
          <FacebookShareButton url={url} quote={post.title}>
            <a className="icon-facebook" style={{ fontSize: "1.4em" }} href="https://facebook.com/">
              <span className="hidden">Facebook</span>
            </a>
          </FacebookShareButton>
          <GooglePlusShareButton url={url}>
            <a className="icon-google-plus" style={{ fontSize: "1.4em" }} href="https://google.com/">
              <span className="hidden">Google+</span>
            </a>
          </GooglePlusShareButton>
        </div>
      </section>
    );
  }
}

export default PostShare;
