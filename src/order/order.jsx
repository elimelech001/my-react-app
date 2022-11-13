import { useEffect } from "react";
import { Component } from "react";
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 1,
      date: new Date(),
     
    };
  }

  reset = () => {
    this.setState({ time: 1 });
  };
  double = () => {
    this.setState({ time: this.state.time * 2 });
  };
  timeNow = () => {
    this.setState({
      date: new Date()
    });
  };

  componentDidMount() {
    this.intrevalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, this.state.time);
    console.log(this.intrevalID);
  }
  
  componentDidUpdate() {
    clearInterval(this.intrevalID);
    this.intrevalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, this.state.time);

    if (this.props.reset) {
      this.setState({ reset: false, time:1 })
      clearInterval(this.intrevalID);

      this.intrevalID = setInterval(() => {
        this.setState({ date: new Date() });
      }, 1000);
    }
  }
  render() {
    return (
      <>
        <h4>
          {this.props.timeZone.city}==>update intreval {this.state.time}
        </h4>
        <h6>
          {" "}
          time:{this.state.date.toLocaleString(this.props.timeZone.zone)}
        </h6>
       

        <button onClick={this.reset}> reset</button>
        <button onClick={this.double}>double</button>
        <button onClick={this.timeNow}>timeNow</button>
        <br />
        <br />
      </>
    );
  }
}

export default Order;

