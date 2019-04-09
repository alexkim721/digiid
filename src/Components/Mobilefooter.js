import React from "react";
import "../Components/css/main.css";

class Mobilefooter extends React.Component {
  render() {
    return (
      <div className="footer" id="footer">
        <div className="line" />
        <div className="project">
          <p>2019 New Media Team Project</p>
          <p>Imagine RIT Exhibition</p>
        </div>
        <div className="socialmedia">
          <div className="item">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
            >
              {" "}
            </a>
          </div>
          <div className="item">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
            >
              {" "}
            </a>
          </div>
          <div className="item">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="imagine"
            >
              {" "}
            </a>
          </div>
        </div>
        <p className="copyright">copyright © 2019. digital identities</p>
      </div>
    );
  }
}

export default Mobilefooter;
