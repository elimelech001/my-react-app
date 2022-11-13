import { Component } from "react";
import Game from "./game";
import Registration from "./register";
class GameApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: "",
      visible: true 
    };
  }
  updateInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  visible = event => {
    event.preventDefault();
    this.setState({ visible: false });
  };
  render() {
    return (
      <>
        {this.state.visible ? (
          <div>
            <Registration
              visible={this.visible}
              updateInput={this.updateInput}
            />
          </div>
        ) : (
          <div>
         
            <Game name={this.state.input1} />
            <br />
            <Game name={this.state.input2} />
          </div>
        )}
      </>
    );
  }
}

export default GameApp;
