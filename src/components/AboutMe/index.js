import React, { Component } from "react";

import "./styles";

class AboutMe extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="welcome-text"> About Me </div>
        <div className="welcome-msg"> text here </div>
      </div>
    );
  }
}

export default AboutMe;
