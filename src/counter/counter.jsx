import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  incremant = () => {
    this.setState((state, props) => {
      return { counter: state.counter + props.id };
    });
  };
  decrement = () => {
    if (this.state.counter <= 0) {
      return;
    }
    this.setState((state, props) => {
        return { counter: state.counter - props.id };
      });
  };
  reset = () => {
    this.setState(state=>state.counter = 0);
  };
  render() {
    return (
      <div style={{ border: "1px solid red", width: 300,backgroundColor:'rgb(230, 255, 230)'}}>
        <h3>
          Incremant by{" "}
          <span style={{ color: "blue" }}>{this.props.id}</span>
        </h3>
        <button onClick={this.incremant} className="btn btn-primary">
          increment
        </button>
        {` `}
        <button onClick={this.decrement} className="btn btn-danger">
          decrement
        </button>{" "}
        {` `}
        <button onClick={this.reset} className="btn btn-warning">
          reset
        </button>
        <h3>{this.state.counter}</h3>
      </div>
    );
  }
}

export default Counter;
