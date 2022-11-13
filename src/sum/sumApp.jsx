import { Component } from "react";
import Sum from "./sum";
import './sum.css'

class SumApp extends Component {
  constructor(props) {
    super(props);
    this.state = { sum: 0 };
    this.array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.sum = this.sum.bind(this);
    this.reset = this.reset.bind(this);
  }
  sum(event,set) {
      if (set==='plus') {
        this.setState({ sum: this.state.sum + Number(event.target.value)});
      }
      else if (set==='minus') {
            this.setState({ sum: this.state.sum + Number(event.target.value)});
          }
      
     
    
  }
  reset() {
    this.setState({ sum: 0 });
  }
  render() {
    return (
      <div style={{border:'1px solid black',width:300}}>
        <div className='input'>{this.state.sum}</div><br/>
        <button className="btn btn-outline-warning" onClick={this.reset}>reset</button><br/>
      
        <br />

       <div className='flex'> {this.array.map(e => (
        <Sum key={e}  sum={this.sum}  value={e} />
        ))}</div>
      </div>
    );
  }
}

export default SumApp;
