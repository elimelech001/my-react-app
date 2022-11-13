import React, { Component } from "react";
import Body from "./body";
class MemeGenerator extends Component {
  constructor(props) {
    super(props);
    console.log("constructer");
  }
  state = {
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    allImages: [],
  };

  static getDerivedStateFromProps(p, s) {
    console.log("getDerivedStateFromProps");
  }
 
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  componentDidUpdate(p, s, sn) {
    console.log("componentDidUpdate");
  }
 

 async componentDidMount() {
  try {
    const request = await fetch("https://api.imgflip.com/get_memes");
    const tryl = await request.value
    console.log(tryl);;
    const response = await request.json();
    this.setState({ allImages: response.data.memes });
    
  } catch ({ message }) {
      console.log(message);
  }  }

  input = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  submit = (e) => {
    e.preventDefault();
    const random = Math.floor(Math.random() * 100);
    const randomImg = this.state.allImages[random].url;
    this.setState({ randomImage: randomImg });
  };

  render() {

    return (
      <>
        <Body state={this.state} input={this.input} submit={this.submit} />
      </>
    );
  }
}

export default MemeGenerator;
