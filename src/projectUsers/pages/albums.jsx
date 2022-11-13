import React from "react";
import { Link, Outlet } from "react-router-dom";
import fetchData from "./fetch";
import { user } from "./hooks";
import sorting from "./hooks";

function Album() {
  const { data } = fetchData(`user/${user.id}/albums/`);

  return (
    <>
    <div className="d-flex align-items-center flex-column">
      <h3 className="h3">Albums</h3>
      <div class="card " style={{ width: "50%" }}>
          { sorting(data,'title',false).map((e,i) => (
        <div key={i} class="card-body">
            <div class="card">
              <h4 class="card-title">{e.title}</h4>
              <p className="card-text">
                <Link to={`${e.id}/photos`}>go to photos</Link>
              </p>
            </div>
        </div>
          ))}
      </div>
      </div>
    </>
  );
}

export default Album;
