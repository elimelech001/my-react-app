import { Component } from "react";
import Counter from "./counter";
class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
    <>
    <Counter id = {1}/>
    <Counter id = {2}/>
    <Counter id = {3}/>
    <Counter id = {4}/>
    </>
    );
  }
}

export default CounterApp;
