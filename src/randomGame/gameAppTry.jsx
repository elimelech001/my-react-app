import { Component } from "react";
import Game from "./game";
import RegisterTry from "./registerTry";

class GameAppTry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      submit: {},
      playersAdded: 1,
      playerAmount: [{ number: 0, active: true }],
      turnPlayer: -1,
      startGame: false
    };
  
    
  }
  updateInput = event => {
    this.setState({
      input: { ...this.state.input, [event.target.name]: event.target.value }
    });
  };
  submit = event => {
    event.preventDefault();
    this.setState({
      submit: {
        ...this.state.submit,
        [event.target.name]: [this.state.input[event.target.name]]
      }
    });
  };
  playerAmount = () => {
    if (this.state.playerAmount.length > 4) return;
    this.setState({ playersAdded: this.state.playersAdded + 1 });
    this.setState({
      playerAmount: [
        ...this.state.playerAmount,
        { number: this.state.playersAdded, active: true }
      ]
    });
  };
  turn = () => {
    this.setState(state => {
      const playerAmount = this.state.playerAmount.filter(
        e => this.state.playerAmount[e.number].active
      );
      return {
        turnPlayer:
          state.turnPlayer < playerAmount.length - 1 ? state.turnPlayer + 1 : 0
      };
    });
    
  };
  startGame = () => { 
    if (!this.state.submit[0]) return 
    this.setState({
      startGame: true,
      turnPlayer: 0
    });
  };
  removePlayer = e => {
    this.setState(state => (state.playerAmount[e.target.id].active = false));
    this.setState({turnPlayer:0})
  };
  render() {
    return  <>
     
        <div>
          {!this.state.startGame&&<> <button onClick={this.playerAmount}>add player</button>
          <button onClick={this.startGame}>start game</button></>}
         
          {this.state.playerAmount.filter(
              (e, i) =>
                !this.state.submit[e.number] 
            ).map((e, i) => (
            <div key={e.number}>
              <RegisterTry
                submit={this.submit}
                updateInput={this.updateInput}
                name={e.number}
              />
            </div>
          ))}
        </div>

        <div>
          {this.state.playerAmount
            .filter(
              (e, i) =>
                this.state.submit[e.number] &&
                this.state.playerAmount[e.number].active
            )
            .map((e, i) => (
              <div className="border border-secondary" key={e.number}>
                <Game 
                  id={{i:i,e:e.number}}
                  
                  playerTurn={this.state.turnPlayer}
                  name={this.state.input[e.number]}
                  turn={this.turn}
                  removePlayer={this.removePlayer}
                />
              </div>
            ))}
          <br />
        </div>
      </>
    
  }
}

export default GameAppTry;
