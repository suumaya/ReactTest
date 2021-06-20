// using jsx for better code completion
// imrc and cc shortcuts from the snippet installed extention
import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   // because we cant reach (this) inside a handleincremetn method!
  //   // #1st solution for each component and event handler..
  //   this.handleInclrement = this.handleInclrement.bind(this);
  //   // #2nd solution is remove the constructor
  // and convert handler to arrow function;)
  // bc arrow funs dont rebind but inherent (this) kword
  // }

  state = {
    counter: 0,
    imgUrl: "https://picsum.photos/200",
    tags: [],
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  handleInclrement = (product) => {
    // console.log("Increment Clicked!", this.state.counter);
    // update state, React doesn't auto detect changes:
    // we have to use set..
    console.log(product);
    this.setState({ counter: this.state.counter + 1 });
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
    return counter === 0 ? "Zero" : counter; // or inside h1
  }

  renderTags() {
    // #1st techn for if statement:
    if (this.state.tags.length === 0) return <p>Ther are no tags!</p>; // or plain text
    return (
      <ul>
        {" "}
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  // first sol for passing args to handleInc
  // doHandleInclrement = () => {
  //   this.handleInclrement({ id: 1 });
  // };

  render() {
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
        <button
          style={{ fontSize: 20, fontWeight: "bold" }}
          // note there is no () bc its only a reference
          // and onClick is case sensitive
          // onClick={this.handleInclrement}

          // suppose we need to send args?
          // #1st sol: use another method "doHan.." then handleInc
          // onClick={this.doHandleInclrement}

          // a better solution than another method is inline:
          // instead of { id: 1 } we use product bc with map we have it
          onClick={(product) => this.handleInclrement(product)}
        >
          Increment
        </button>
        <br></br>

        {/* #2nd techn for if statement: */}
        {this.state.tags.length === 0 && "Please create new tags"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counter; // we can delete this and add it in the class def

// import this class in index.js
