import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchCriteria from "../searchCriteria/SearchCriteria";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>Movie Database</Header>
        <section className="container">
          <SearchCriteria />
        </section>
      </div>
    );
  }
}

export default App;
