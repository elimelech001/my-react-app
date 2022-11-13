import React, { Component } from "react";
import Books from "./books";
import "./books.css";
import 'bootstrap/dist/css/bootstrap.css'

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
    this.books = {
      books: [
        {
          title: "a",
          author: "aa",
          likes: 100,
          onshelf: false,
          sampleText: "hello there",
          id: 0
        },
        {
          title: "a",
          author: "aa",
          likes: 112,
          onshelf: false,
          sampleText: "you look good",
          id: 1
        },
        {
          title: "a",
          author: "aa",
          likes: 90,
          onshelf: false,
          sampleText: "smile",
          id: 2
        }
      ]
    };

    this.booksMaped = this.books.books.map((e, i) => (
      <div className='flex' key={i}>
        <Books book={e} handle={this.handle} />
      </div>
    ));

    this.state = {
      response: {},
      isLoaded: false,
      eror: null
    };
  }
  handle(event) {
    alert(this.books.books[event.target.id].sampleText);
  }

  componentDidMount() {
    fetch("http://jbh-9.us-east-2.elasticbeanstalk.com/api/courses/")
      .then(res => res.json())
      .then(
        result => {
          this.setState({ response: result,isLoaded:true});
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  clickfunction(id) {
    fetch("http://jbh-9.us-east-2.elasticbeanstalk.com/api/courses/"+id)
      .then(res => res.json())
      .then(
        result => {
          this.setState({ response: result,isLoaded:true});
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
      console.log(this.state.response);
      
  }

  render() {
const {response, isLoaded ,error}= this.state
    return( <>

      {this.booksMaped}
{error&&<div>Error: {error.message}</div>}
{!isLoaded&&<div>loading...</div>}
{isLoaded&&!error&&<div className="flex">{response.data.map(e=><div onClick={()=>this.clickfunction(e._id)} className="border" key={e._id}>title:{e.title}
{e.reviews&&e.reviews.map(e=><div>rating:{e.rating}<br/> reveiw:{e.review}</div>)}
{e.steps&&e.steps.map(e=><div>description:{e.description}{e.stepNumber}{e.title}</div>)}
name:{e.user&&e.user.fullName}</div>)}</div>}



      </>);
  }
}

export default BooksApp;
