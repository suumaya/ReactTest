// using jsx for better code completion
// imrc and cc shortcuts from the snippet installed extention
import React, { Component } from "react";

class Counter extends Component {
  state = { counter: 0, imgUrl: "https://picsum.photos/200" };
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };
  render() {
    // React.Fragment instead of div, no multiple div and root div in index.html
    return (
      //braces {} to render valuesdynamically
      <React.Fragment>
        {/* <img src={this.state.imgUrl} alt="" /> */}

        {/* first way to apply styles by reference */}
        <span style={this.styles} className="badge-primary">
          {this.formatCount()}
        </span>

        {/* the second way is to apply inline styles */}
        <button
          style={{ fontSize: 20, fontWeight: "bold" }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { counter } = this.state;
    // const hi = <h1>Hello frmo jsx </h1>; // we can do this in .jsx
    return counter == 0 ? "Zero" : counter; // or inside h1
  }
}

export default Counter; // we can delete this and add it in the class def

// import this class in index.js
