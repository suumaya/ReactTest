// using jsx for better code completion
// imrc and cc shortcuts from the snippet installed extention
import React, { Component } from "react";

class Counter extends Component {
  state = { counter: 0 };
  render() {
    // React.Fragment instead of div, no multiple div and root div in index.html
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { counter } = this.state;
    const hi = <h1>Hello frmo jsx </h1>; // we can do this in .jsx
    return counter == 0 ? <h1>Zero</h1> : counter; // or "Zero"
  }
}

export default Counter; // we can delete this and add it in the class def

// import this class in index.js
