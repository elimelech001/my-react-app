import { Component } from "react";
class Sum extends Component {
 
  render() {
    return (
    <><button className="btn btn-outline-info" value={this.props.value} onClick={(e)=>this.props.sum(e,'minus')}>{this.props.value}</button> </>
    )
  }
}

export default Sum;
