import React from "react";
import "../Components/css/quiz.css";

class Quiz extends React.Component {
  state = {
    pagenum: 0,
    answers: [],
    pages: 0,
    pagesloaded: false
  };
  componentDidMount() {
    this.setState({
      pages: document.querySelector(".pages").childElementCount
    });
    for (
      let i = 0;
      i < document.querySelector(".pages").childElementCount;
      i++
    ) {
      let div = document.createElement("div");
      div.classList.add(`circle${i}`, "circle");
      document.querySelector(".pgnum").appendChild(div);
    }
  }
  componentDidUpdate() {
    document.querySelector(".pages").style.marginLeft = `calc(-100% * ${
      this.state.pagenum
    })`;
    console.log(this.state);
  }
  nextPage = () => {
    if (this.state.pagenum === this.state.pages - 1) {
      this.setState({
        pagenum: 0
      });
    } else {
      this.setState({
        pagenum: this.state.pagenum + 1
      });
    }
  };
  prevPage = () => {
    if (this.state.pagenum === 0) {
      this.setState({
        pagenum: this.state.pages - 1
      });
    } else {
      this.setState({
        pagenum: this.state.pagenum - 1
      });
    }
  };
  curPg = () => {
    let pgpos = {
      marginLeft: `${30 * this.state.pagenum + 11}px`
    };
    return pgpos;
  };

  render() {
    return (
      <div className="quiz" id="quiz">
        <div className="pages">
          <div className="page page0">
            <p>this is page 0</p>
          </div>
          <div className="page page1">
            <p>this is page 1</p>
          </div>
          <div className="page page2">
            <p>this is page 2</p>
          </div>
          <div className="page page3">
            <p>this is page 3</p>
          </div>
          <div className="page page4">
            <p>this is page 4</p>
          </div>
          <div className="page page5">
            <p>this is page 5</p>
          </div>
          <div className="page page6">
            <p>this is page 6</p>
          </div>
          <div className="page page7">
            <p>this is page 7</p>
          </div>
          <div className="page page8">
            <p>this is page 8</p>
          </div>
          <div className="page page9">
            <p>this is page 9</p>
          </div>
        </div>
        <div className="pagectrl">
          <div
            className="prev"
            onClick={() => {
              this.prevPage();
            }}
          >
            <p>prev</p>
          </div>
          {/* <div className="pgnum">
            <p>
              <span>{this.state.pagenum}</span>/
              <span>{this.state.pages - 1}</span>
            </p>
          </div> */}
          <div className="pgnum">
            <div className="curpg" style={this.curPg()} />
          </div>
          <div
            className="next"
            onClick={() => {
              this.nextPage();
            }}
          >
            <p>next</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
