import { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: Math.round(Math.random() * 99),
      steps: 0,
      gameOver: false,
      preveiusScores: ""
    };
  }

  increment = () => {
    if (this.state.number + 1 > 100) return;
    this.setState({
      number: Math.floor(this.state.number + 1),
      steps: this.state.steps + 1,
      gameOver: this.state.number + 1 > 99 ? true : false
    });
  };
  decrement = () => {
    if (this.state.number - 1 < 0) return;
    this.setState({
      number: Math.floor(this.state.number - 1),
      steps: this.state.steps + 1
    });
  };
  multiply = () => {
    if (this.state.number * 2 > 100) return;
    this.setState({
      number: Math.floor(this.state.number * 2),
      steps: this.state.steps + 1,
      gameOver: this.state.number * 2 > 99 ? true : false
    });
  };

  divide = () => {
    if (this.state.number / 2 < 0) return;
    this.setState({
      number: Math.floor(this.state.number / 2),
      steps: this.state.steps + 1
    });
  };
  startOver = () => {
    this.setState({
      number: Math.round(Math.random() * 99),
      gameOver: false,
      steps: 0,
      preveiusScores: `${this.state.preveiusScores + " " + this.state.steps}`
    });
  };

  render() {
    const oClick = [this.increment, this.decrement, this.multiply, this.divide];
    return (
      <>
        <h6>
          {this.props.name}
          {this.props.id.i === this.props.playerTurn ? (
            <>==> enabled</>
          ) : (
            <> ==> disabled</>
          )}
        </h6>
        <br />
        <h4>{this.state.number}</h4>
        {oClick.map((e, i) => (
          <button
            key={i}
            disabled={this.props.id.i !== this.props.playerTurn}
            id={this.props.id.i}
            onClick={event => {
              e();
              this.props.turn(event);
            }}
          >
            {i === 0 && "+1"}
            {i === 1 && "-1"}
            {i === 2 && "*2"}
            {i === 3 && "/2"}
          </button>
        ))}

        <h6>steps: {this.state.steps}</h6>
        <h6>preveius scores: {this.state.preveiusScores}</h6>
        {this.state.gameOver && (
          <>
            <button onClick={this.startOver}>start over</button>
            <button id={this.props.id.e} onClick={this.props.removePlayer}>
              remove player
            </button>
          </>
        )}
      </>
    );
  }
}

export default Game;
