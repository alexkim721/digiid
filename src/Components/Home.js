import React from "react";
import "../Components/css/home.css";
import "../Components/css/main.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const apibase = "https://clients.alexander-kim.com/digiid/wp-json/wp/v2";
class Home extends React.Component {
  state = {
    posts: {
      loading: true,
      data: []
    },
    authors: { data: [], loading: true }
  };
  componentDidMount() {
    axios.get(`${apibase}/posts`).then(data => {
      this.setState({
        posts: {
          data: data.data,
          loading: false
        }
      });
    });

    axios.get(`${apibase}/users`).then(data => {
      this.setState({
        authors: { data: data.data, loading: false }
      });
    });
  }
  checkAuthor = id => {
    return this.state.authors.data.find(author => {
      return author.id === id;
    }).name;
  };

  renderPosts = data => {
    return data.slice(0, 2).map(post => (
      <div className="postitem" key={post.id}>
        <NavLink to={`blog/${post.slug}`}>
          <img
            className="postimg"
            src={post.acf.hero.sizes.large}
            alt={post.title.rendered}
          />
        </NavLink>
        <div className="postContent">
          <NavLink className="postTitle" to={`blog/${post.slug}`}>
            {post.title.rendered}
          </NavLink>
          <p className="divider">-</p>
          <p className="postAbst">{post.acf.excerpt}</p>
          <div className="postFoot">
            <div className="left">
              <p>
                <span>{this.checkAuthor(post.author)}</span> |{" "}
                <span>
                  {moment(post.date).format("MMMM Do YYYY, h:mm:ss a")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    ));
  };
  render() {
    return (
      <div className="home maincontent" id="home">
        <div className="content">
          <p id="title">
            <span>digital</span> identities
          </p>
          <p className="subheader">visualizing individuality</p>
          <NavLink
            className="button"
            to="generate"
            activeClassName="selectedlink"
          >
            view image generator <span>→</span>
          </NavLink>
          <p className="introheader">Imagine RIT | April 27th</p>
          <p className="intro">
            We’re providing visitors the opportunity to visualize their
            individuality through personal expression and image abstraction.{" "}
            <span className="link">
              <NavLink
                className="introbutton"
                to="about"
                activeClassName="selectedlink"
              >
                learn more <span className="arrow">→</span>
              </NavLink>
            </span>
          </p>
          <div id="recent">
            <p className="subheader">recent activity</p>
            <div className="articles">
              {this.state.posts.loading || this.state.authors.loading ? (
                <div />
              ) : (
                this.renderPosts(this.state.posts.data)
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
