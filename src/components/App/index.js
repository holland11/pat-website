import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { nopAction } from "../../actions/actions";

import HeaderNavBar from "../HeaderNavBar";
import Home from "../Home";
import Sudoku from "../Sudoku";
import Test from "../Test";
import AboutMe from "../AboutMe";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "home",
      showHeader: true
    };
  }
  changePage = next_page => {
    const { activePage } = this.state;
    if (next_page !== activePage) {
      this.setState({ activePage: next_page });
    }
  };
  render() {
    const { showHeader, activePage } = this.state;
    return (
      <div>
        {showHeader && (
          <HeaderNavBar changePage={this.changePage} activePage={activePage} />
        )}
        {activePage === "home" && <Home />}
        {activePage === "sudoku" && <Sudoku />}
        {activePage === "test" && <Test />}
        {activePage === "about-me" && <AboutMe />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    test: state.test
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      nopAction: nopAction
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
