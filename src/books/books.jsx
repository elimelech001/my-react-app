import React, { useState } from "react";
import "./books.css";
import "bootstrap/dist/css/bootstrap.css";

function Books(props) {
  const { title, author, likes, onshelf, id } = props.book;
  // console.log(props.ch/ange);

  const [count, setCount] = useState(likes);
  const [shelf, setshelf] = useState(onshelf);
  
  const className = {
    onshelf: onshelf ? "onshelf" : "",
    likes: count > 100 ? "likes" : "",
    displayNone: !shelf ? "displayNone" : ""
  };
  function chanShelf() {
    setshelf(!shelf);
  }
  return (
    <>
    
      {shelf ? (
        <div className={`border`}>
          {id + 1})<h4>title:{title}</h4>
          <p>
            Author :{author} <br />
            <span className={className.likes}> likes: {count}</span> <br />
            <> <button
              onClick={() =>(setCount(count + 5))}
              className="btn btn-warning"
            >
              add likes
            </button>
            <button
              onClick={() => (setCount(count - 5))}
              className="btn btn-primary"
            >
              mines likes
            </button></>
            <br />
            <br />
            <span className={className.onshelf}>
              book is {onshelf ? " in stock" : " out of stock"}
            </span>
          </p>
          <button
            id={id} 
            className="btn btn-outline-info"
            onClick={props.handle}
          >
            click to see a sample
          </button>
          <br />
          <button className="btn btn-outline-success" onClick={chanShelf}>
            remoe from shelf
          </button>
        </div>
      ) : (
        <h2 className="border">
          sorry book number{id + 1} is out of stock{" "}
          <button className="btn btn-outline-success" onClick={chanShelf}>
            rerstock
          </button>
        </h2>
      )}
    </>
  );
}
export default Books;
