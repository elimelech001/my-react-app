import React, { Component } from "react";

class Tr extends Component {
  render() {
    // console.log(this.props.e.onshelf);
    return (
      <div style={{ border: "3px solid red" }}>
        <div>{this.props.e.author}</div>
        <div>{this.props.e.title}</div>
        <div>{this.props.e.likes}</div>

        <button id={this.props.e.id} onClick={this.props.handleLikes}>
          add likes
        </button>
        <button id={this.props.e.id} onClick={this.props.handleShelf}>
          {this.props.e.onshelf ? <>book in stock</> : <>book not in stock</>}
        </button>
      </div>
    );
  }
}

export default Tr;
