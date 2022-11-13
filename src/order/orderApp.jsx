import { Component } from "react";
import Order from "./order";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeZones: [
        { city: "JLM", zone: "he-IL", render: 1, reset: false },
        { city: "NYC", zone: "en-US", render: 1, reset: false },
        { city: "LONDON", zone: "en-GB", render: 1, reset: false }
      ]
    };
  }
  handleReset = () => {
    const [he,JLM]=this.state.timeZones
    this.setState({
      timeZones: this.state.timeZones.map(e => {
        e.reset = true;
        return e;
      })
    });
  };

  handleRandomize = () => {
    this.setState({
      timeZones: this.state.timeZones.map(e => {
        e.render = Math.floor(Math.random() * 4000);
        return e;
      })
    });
  };
 

  render() {
    return (
      <>
        <button onClick={this.handleReset}>reset</button>
        <button onClick={this.handleRandomize}>randomize</button>
        <br />
        {this.state.timeZones.map((e, i) => (
          <Order resetToFallse={this.resetToFallse} timeZone={e} key={i} />
        ))}
      </>
    );
  }
}

export default App;
