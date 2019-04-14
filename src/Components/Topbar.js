import React from "react";
import "../Components/css/main.css";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="navbar" id="navbar">
        {this.props.history.location.pathname.split("/")[1] === "quiz" ? (
          <div />
        ) : (
          <div className="content">
            <div className="navitem">
              <NavLink to="" activeClassName="selectedlink">
                home
              </NavLink>
            </div>
            <div className="navitem">
              <NavLink to="/about" activeClassName="selectedlink">
                about
              </NavLink>
            </div>
            <div className="navitem">
              <NavLink to="/gallery" activeClassName="selectedlink">
                gallery
              </NavLink>
            </div>
            <div className="navitem">
              <NavLink to="/blog" activeClassName="selectedlink">
                blog
              </NavLink>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Navbar);
