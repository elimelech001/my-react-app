import React from "react";
import { Link } from "react-router-dom";
import fetchData from "./fetch";

function Posts() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { data, loading } = fetchData(`user/${user.id}/posts/`);

  return (
    <div className="container">
      <h3 className="h3">Posts</h3>
        <div class="list-group list-group-flush">
          
        {data.map((e,i) => (
          <Link key={i} to={`${e.id}/comments`}>
          <li className="list-group-item">  {e.id}) {e.title}</li>
          </Link>
        ))}
        </div>
    </div>
  );
}

export default Posts;
