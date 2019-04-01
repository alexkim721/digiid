import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../Components/css/blog.css";
import "../Components/css/main.css";
import Post from "./Post";

const apibase = "https://clients.alexander-kim.com/digiid/wp-json/wp/v2";
class Blog extends React.Component {
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
    return data.map(post => (
      <div className="postitem" key={post.id}>
        <img
          className="postimg"
          src={post.acf.hero.sizes.large}
          alt={post.title.rendered}
        />
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
                <span>{post.date}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  handlePathChange = path => {
    const slugs = [];
    this.state.posts.data.map(item => slugs.push(item.slug));
    const firstPart = path.split("/")[2];
    if (slugs.includes(firstPart)) {
      return <Post data={this.state.posts.data[slugs.indexOf(firstPart)]} />;
    } else {
      return (
        <div>
          {this.state.posts.loading || this.state.authors.loading ? (
            <div className="preloader" />
          ) : (
            <React.Fragment>
              <p className="header">blog</p>
              <div className="articles">
                {this.state.posts.loading || this.state.authors.loading ? (
                  <div />
                ) : (
                  this.renderPosts(this.state.posts.data)
                )}
              </div>
            </React.Fragment>
          )}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="blog maincontent" id="blog">
        {this.handlePathChange(this.props.history.location.pathname)}
      </div>
    );
  }
}

export default withRouter(Blog);
