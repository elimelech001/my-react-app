import { Component } from "react";

import SpecificCourse from "./specificCourse";


class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {},
      isLoaded: false,
      eror: null,
      id:null
      
    };
  }
  componentDidMount() {
    console.log("RENDERD");
    
    fetch("http://jbh-9.us-east-2.elasticbeanstalk.com/api/courses/")
      .then(res => res.json())
      .then(
        result => {
          this.setState({ response: result, isLoaded: true });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  clickfunction(_id) {
   this.setState({id:_id})

  }

  render() {
    const { response, isLoaded, error } = this.state;
    return (
      <>
        {this.booksMaped}
        {error && <div>Error: {error.message}</div>}

        {!isLoaded && <div>loading...</div>}

        {isLoaded && !error && (
          <div className="flex">
            {response.data.map(e => (
              <div
                onClick={() => this.clickfunction(e._id)}
                className="border"
                key={e._id}
              >
                title:{e.title}
              </div>
            ))}
          </div>
        )}
        <SpecificCourse id={this.state.id}/>
      </>
    );
  }
}
export default Courses;

