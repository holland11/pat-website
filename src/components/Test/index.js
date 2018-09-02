import React, { Component } from "react";

import "./styles";

class Test extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="welcome-text"> Test </div>
        <div className="welcome-msg"> text here </div>
      </div>
    );
  }
}

export default Test;
