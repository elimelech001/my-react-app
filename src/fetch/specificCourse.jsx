import { Component } from "react";

class SpecificCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {},
      isLoaded: false,
      eror: null,
      
    };
    // console.log(this.props);
    
  }
  shouldComponentUpdate(nextProps) {
        return nextProps.id
  }
  
  componentDidUpdate() {
    console.log('Component re-rendered.');
   
    fetch("http://jbh-9.us-east-2.elasticbeanstalk.com/api/courses/"+this.props.id)
      .then(res => res.json())
      .then(
        result => {
          this.setState({ response: result, isLoaded: true });
          console.log(result);
          
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );

  }
  

  render() {
   
    return (
      <>
     <h1>{this.props.id}</h1>
      </>
    );
  }
}
export default SpecificCourse;

