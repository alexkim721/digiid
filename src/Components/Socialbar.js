import React from "react";
import "../Components/css/main.css";
import { withRouter } from "react-router-dom";

class Socialbar extends React.Component {
  render() {
    return (
      <div className="socialbar" id="socialbar">
        {this.props.history.location.pathname.split("/")[1] === "quiz" ||
        this.props.history.location.pathname.split("/")[1] === "generate" ||
        this.props.history.location.pathname.split("/")[1] === "infographic" ? (
          <div />
        ) : (
          <div className="content">
            <div className="links">
              <a
                href="https://fb.me/digitalid.rit"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
              >
                {" "}
              </a>
              <a
                href="https://www.instagram.com/digitalid.rit/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                {" "}
              </a>
              <a
                href="https://www.rit.edu/imagine/"
                target="_blank"
                rel="noopener noreferrer"
                className="imagine"
              >
                {" "}
              </a>
            </div>
            <p className="note">follow us on social media</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Socialbar);
