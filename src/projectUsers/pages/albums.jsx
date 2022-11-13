import { Card } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import fetchData from "./fetch";
import sorting from "./sort";

function Album() {
 
  const user = JSON.parse(localStorage.getItem("user"));
  const { data, loading, error } = fetchData(`user/${user.id}/albums/`);

  return (
    <>
    <div className="d-flex align-items-center flex-column">
      <h3 className="h3">Albums</h3>
      <div class="card " style={{ width: "50%" }}>
          { sorting(data,'title',false).map((e,i) => (
        <div key={i} class="card-body">
            <div class="card">
              <h4 class="card-title">{e.title}</h4>
              <h4 class="card-title"></h4>
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
