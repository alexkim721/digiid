import React from "react";
import "../Components/css/main.css";

class Socialbar extends React.Component {
  render() {
    return (
      <div className="socialbar" id="socialbar">
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
      </div>
    );
  }
}

export default Socialbar;
