import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  list = [1, 2, 3, 4, 5];
  render() {
    return (
      <div id="main">
        <ul>
          {this.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
