import React from "react";
import "../Components/css/main.css";

class Socialbar extends React.Component {
  render() {
    return (
      <div className="socialbar" id="socialbar">
        <div className="content">
          <div className="links">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
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
