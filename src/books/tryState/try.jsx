import React, { Component } from "react";
import Tr from './tr'
import {books} from './info'


class Try extends Component {
  constructor(props) {
    super(props);
    this.state = {stateBooks:books}
  }
  
  
  handleLikes = (event) => {
    this.setState(state =>
      {return state.stateBooks[event.target.id].likes+=(1*0.5)}) 
  };
  handleShelf = (event) => {
    
    this.setState(state => state.stateBooks[event.target.id].onshelf=false
        ); 
   
  };
  render() {
    return (<>
     
     {this.state.stateBooks.map((e,i)=><div key={i}><Tr e={e} handleShelf={this.handleShelf} handleLikes={this.handleLikes}/></div>)}
     </>
    );
  }
}

export default Try;
