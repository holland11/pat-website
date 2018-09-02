import React, { Component } from "react";

import "./styles";

class Sudoku extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="welcome-text"> Sudoku </div>
        <div className="welcome-msg"> text here </div>
      </div>
    );
  }
}

export default Sudoku;
