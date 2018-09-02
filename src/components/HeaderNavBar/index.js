import React, { Component } from "react";

import "./styles";

class HeaderNavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { changePage } = this.props; // prop functions
    const { activePage } = this.props; //
    return (
      <div className="container">
        <div className="nav-bar">
          <div
            className={"nav-btn" + (activePage === "home" ? " active" : "")}
            onClick={() => changePage("home")}
          >
            Home
          </div>
          <div
            className={"nav-btn" + (activePage === "sudoku" ? " active" : "")}
            onClick={() => changePage("sudoku")}
          >
            Sudoku
          </div>
          <div
            className={"nav-btn" + (activePage === "test" ? " active" : "")}
            onClick={() => changePage("test")}
          >
            Test
          </div>
          <div
            className={"nav-btn" + (activePage === "about-me" ? " active" : "")}
            onClick={() => changePage("about-me")}
          >
            About Me
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderNavBar;
