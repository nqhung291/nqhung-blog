import React from "react";
import { Link } from "gatsby";
import "./AuthorInfo.css";
import AuthorMeta from "../AuthorMeta/AuthorMeta";
import AuthorLocation from "../AuthorLocation/AuthorLocation";
import AuthorWebsite from "../AuthorWebsite/AuthorWebsite";
import AuthorLink from "../AuthorLink/AuthorLink";

const Bio = props => {
  const { bio, morePostsUrl } = props;
  if (bio) {
    return <p>{bio}</p>;
  }
  return (
    <p>
      <Link to={morePostsUrl}>Read more</Link>
      .
    </p>
  );
};

class AuthorInfo extends React.Component {
  render() {
    const {
      prefix,
      author: { uid, name, image, bio, url, location }
    } = this.props;
    const authorInfoUrl = prefix ? `${prefix}/${uid}` : uid;
    if (image) {
      return (
        <section className="author">
          <h4>
            <AuthorLink url={authorInfoUrl} name={name} />
          </h4>
          <Bio bio={bio} morePostsUrl={authorInfoUrl} />
          <AuthorMeta>
            <AuthorLocation location={location} />
            <AuthorWebsite url={url} />
          </AuthorMeta>
        </section>
      );
    }
    return null;
  }
}

export default AuthorInfo;
