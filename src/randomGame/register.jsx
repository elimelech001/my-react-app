import { Component } from "react";
class Register extends Component {
  render() {
    return (
      <>
      <h2>register for the game</h2>
       
              <form onSubmit={this.props.visible}>
          <h5>player 1</h5>  <input
              name="input1"
              onChange = {this.props.updateInput}
              type="text"
              required
            />
            <br />
            <h5>player 2</h5>  <input
              name="input2"
              onChange={this.props.updateInput}
              type="text"
              required
            /><br/>
            <button  type="submit">
              submit
            </button>
            <br />
            </form>
          
        
      </>
    );
  }
}

export default Register;
