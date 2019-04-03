import React from "react";
import axios from "axios";
import renderHTML from "react-render-html";
import "../Components/css/post.css";
import "../Components/css/main.css";

import moment from "moment";

const apibase = "https://clients.alexander-kim.com/digiid/wp-json/wp/v2";
class Post extends React.Component {
  state = {
    authors: { data: [], loading: true }
  };
  componentDidMount() {
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

  render() {
    return (
      <div className="post" id="post">
        <p className="header">{this.props.data.title.rendered}</p>
        <img
          className="hero"
          src={this.props.data.acf.hero.sizes.large}
          alt={this.props.data.title.rendered}
        />
        <p className="divider">-</p>
        <p className="author">
          {!this.state.authors.loading &&
            `${this.checkAuthor(this.props.data.author)} | ${moment(
              this.props.data.date
            ).format("MMMM Do YYYY, h:mm:ss a")}`}
        </p>
        <div className="text">
          {renderHTML(this.props.data.content.rendered)}
        </div>
        {console.log(this.props)}
      </div>
    );
  }
}

export default Post;
