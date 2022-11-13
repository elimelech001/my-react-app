import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
export default function Main(props) {
  console.log("Main");
  return (
    <div className="container p-5 my-5 bg-dark text-white">
    <h1>My First Bootstrap Page</h1>
    <p>This is some text.</p>
  </div>
  
  );
}
