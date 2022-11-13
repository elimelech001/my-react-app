import { Component } from "react";
class RegisterTry extends Component {
  render() {
    return (
      <>
       
            <h5>player </h5>
            <form
              name={this.props.name} 
              onSubmit={this.props.submit}
            >
              <input
                name={this.props.name}
                onChange={this.props.updateInput}
                type="text"
                required
              />
              <button  type="submit">
                submit
              </button>
            </form> 
         <br />
        </>
        
      
    );
  }
}

export default RegisterTry;
