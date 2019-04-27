import React from "react";
import "../Components/css/main.css";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="navbar" id="navbar">
        {this.props.history.location.pathname.split("/")[1] === "quiz" ||
        this.props.history.location.pathname.split("/")[1] === "generate" ||
        this.props.history.location.pathname.split("/")[1] === "infographic" ? (
          <div />
        ) : (
          <div className="content">
            <div className="navitem">
              {this.props.history.location.pathname.split("/")[1] === "" ||
              this.props.history.location.pathname.split("/")[1] === "home" ? (
                <div className="inactiveLink">home</div>
              ) : (
                <NavLink
                  to="/home"
                  className="home"
                  activeClassName="selectedlink"
                >
                  home
                </NavLink>
              )}
            </div>
            <div className="navitem">
              {this.props.history.location.pathname.split("/")[1] ===
              "about" ? (
                <div className="inactiveLink">about</div>
              ) : (
                <NavLink
                  to="/about"
                  className="about"
                  activeClassName="selectedlink"
                >
                  about
                </NavLink>
              )}
            </div>
            <div className="navitem">
              {this.props.history.location.pathname.split("/")[1] ===
              "generate" ? (
                <div className="inactiveLink">generate</div>
              ) : (
                <NavLink
                  to="/generate"
                  className="generate"
                  activeClassName="selectedlink"
                >
                  generate
                </NavLink>
              )}
            </div>
            <div className="navitem">
              {this.props.history.location.pathname.split("/")[1] === "blog" &&
              !this.props.history.location.pathname.split("/")[2] ? (
                <div className="inactiveLink">blog</div>
              ) : (
                <NavLink
                  to="/blog"
                  className="blog"
                  activeClassName="selectedlink"
                >
                  blog
                </NavLink>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Navbar);
