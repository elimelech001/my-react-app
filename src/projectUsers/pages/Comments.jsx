import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "./fetch";
function Comments() {
  const [showCommants, setShowCommants] = useState(false);
  let { postsId } = useParams();
  const { data } = fetchData(`posts/${postsId}`);
  const comments = fetchData(`posts/${postsId}/comments`).data;
  return (
    <>
      <div className="container d-flex align-items-center">
        <div class="card" style={{ width: "70%" }}>
          <div class="card-body">
            <h4 class="card-title">{data.title}</h4>
            <p class="card-text">{data.body}</p>
            <button onClick={() => setShowCommants(!showCommants)}>
              show commants
            </button>
          </div>
        </div><br /><br /><br />

        {showCommants &&
          comments.map((e,i) => (
            <div key={i}>
            <br />
              <div class="card align-items-center" style={{ width: "50%" }}>
                <div class="card-body  bg-info text-white">
                  <h4 class="card-title">{e.name}</h4>
                  <h4 class="card-title">{e.email}</h4>
                  <p class="card-text">{e.body}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Comments;
