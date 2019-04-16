import React from "react";
import "../Components/css/quiz.css";

class Quiz extends React.Component {
  state = {
    pagenum: 0,
    answers: {
      quest1: "",
      quest2: "",
      quest3: "",
      quest4: "",
      quest5: ""
    },
    pages: 0,
    pagesloaded: false,
    ctrlhidden: true
  };
  //   finalans = {
  //     quest1: "",
  //     quest2: "",
  //     quest3: "",
  //     quest4: "",
  //     quest5: ""
  //   };
  componentDidMount() {
    this.setState({
      pages: document.querySelector(".pages").childElementCount
    });
    for (
      let i = 1;
      i < document.querySelector(".pages").childElementCount;
      i++
    ) {
      let div = document.createElement("div");
      div.classList.add(`circ${i}`, "circle");
      div.onclick = () => {
        this.setState({ pagenum: i });
      };
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
        pagenum: 1
      });
    } else {
      this.setState({
        pagenum: this.state.pagenum + 1
      });
    }
    if (this.state.ctrlhidden && this.state.pagenum === 0) {
      this.setState({ ctrlhidden: false });
    }
  };
  prevPage = () => {
    if (this.state.pagenum === 1) {
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
      marginLeft: `${30 * (this.state.pagenum - 1) + 11}px`
    };
    return pgpos;
  };
  handleTextChange = e => {
    this.setState({
      ...this.state,
      answers: {
        ...this.state.answers,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="quiz" id="quiz">
        <div className="pages">
          <div className="page page0">
            <p className="header">digital identities</p>
            <p className="subheader">visualizing individuality</p>
            <div
              className="start"
              onClick={() => {
                this.nextPage();
              }}
            >
              start
            </div>
          </div>
          <div className="page page1">
            <div className="content">
              <p className="subheader">What is your name?</p>
              <div className="inputs">
                <input
                  type="text"
                  name="quest1"
                  placeholder="first name"
                  onChange={this.handleTextChange}
                />
                <input
                  type="text"
                  name="quest2"
                  placeholder="last name"
                  onChange={this.handleTextChange}
                />
              </div>
            </div>
          </div>
          <div className="page page2">
            <div className="content">
              <p className="subheader">When is your birthday?</p>
              <div className="inputs">
                <input type="text" name="bmonth" placeholder="month" />
                <input type="text" name="bday" placeholder="day" />
                <input type="text" name="byear" placeholder="year" />
              </div>
            </div>
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
        <div className={this.state.ctrlhidden ? "pagectrl hidden" : "pagectrl"}>
          <div
            className="prev ctrl"
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
            className="next ctrl"
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
