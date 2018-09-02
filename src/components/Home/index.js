import React, { Component } from "react";

import "./styles";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="welcome-text"> Welcome </div>
        <div className="welcome-msg"> text here </div>
      </div>
    );
  }
}

export default Home;
