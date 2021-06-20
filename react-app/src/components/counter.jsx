// using jsx for better code completion
// imrc and cc shortcuts from the snippet installed extention
import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    imgUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  getClasses() {
    let classes = "";
    classes +=
      this.state.counter === 0
        ? "btn-secondary btn-sm btn-warning"
        : "btn-secondary btn-sm";
    return classes;
  }

  formatCount() {
    const { counter } = this.state;
    // const hi = <h1>Hello frmo jsx </h1>; // we can do this in .jsx
    return counter == 0 ? "Zero" : counter; // or inside h1
  }

  renderTags() {
    if (this.state.tags.length == 0) return <p>Ther are no tags!</p>; // or plain text
    return (
      <ul>
        {" "}
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    let classes = this.getClasses();

    // React.Fragment instead of div, no multiple div and root div in index.html
    return (
      //braces {} to render valuesdynamically
      <React.Fragment>
        <img src={this.state.imgUrl} alt="" />
        <br></br>
        {/* first way to apply styles by reference */}
        <span style={this.styles} className={this.getClasses()}>
          {this.formatCount()}
        </span>
        <br></br>
        {/* the second way is to apply inline styles */}
        <button style={{ fontSize: 20, fontWeight: "bold" }}>Increment</button>
        <br></br>
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counter; // we can delete this and add it in the class def

// import this class in index.js
